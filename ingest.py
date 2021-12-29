import json, csv, sys

import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import gspread


def connect_sheets():
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.json', 'w') as token:
            token.write(creds.to_json())
    service = build('sheets', 'v4', credentials=creds)
    return service.spreadsheets()

def read_sheet(service, sheet_id, sheet, range):
    d = service.values().get(spreadsheetId=sheet_id, range=f"{sheet}!{range}").execute()['values']
    header = d[0]
    for row in d[1:]:
        row = row + [None] * (len(header) - len(row))
        yield dict(zip(header, row))

def get_sheet_names(service, sheet_id):
    sheet_metadata = service.get(spreadsheetId=sheet_id).execute()
    sheets = sheet_metadata.get('sheets', '')
    return [sheet["properties"]["title"] for sheet in sheet_metadata["sheets"]]

SHEET_ID = sys.argv[1]
questions = {}
service = connect_sheets()
sheets = get_sheet_names(service, SHEET_ID)
for sheet in sheets:
    print(f"*** {sheet}")
    questions[sheet] = {}
    for row in read_sheet(service, SHEET_ID, sheet, "A:D"):
        q = row['Vraag']
        antwoord = row['Antwoord']
        correct = row.get('Correct') and row['Correct'].lower().strip() == "x"
        if q not in questions[sheet]:
            questions[sheet][q] = {"question": q, "answers": []}
        if correct:
            questions[sheet][q]["correct"] = len(questions[sheet][q]["answers"])
        questions[sheet][q]["answers"].append(antwoord)

for streek, qs in questions.items():
    for i, question in enumerate(qs.values()):
        if 'correct' not in question:
            print(f"Missing answer key in {streek} question {i}: {question['question']}")

sets = {streek: {"name": streek, "type": "MC", "questions": list(qs.values())}
        for (streek, qs) in questions.items()}

with open("src/data.js", "w") as f:
    print("export const questions = ", file=f, end="")
    json.dump(sets, f, indent=2)
    print(";", file=f)
