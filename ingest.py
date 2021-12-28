import json, csv, sys

questions = {}

for row in csv.DictReader(sys.stdin):
    streek = row['Streek']
    q = row['Vraag']
    antwoord = row['Antwoord']
    correct = row['Correct'].lower().strip() == "x"
    if streek not in questions:
        questions[streek] = {}
    if q not in questions[streek]:
        questions[streek][q] = {"question": q, "answers": []}
    if correct:
        questions[streek][q]["correct"] = len(questions[streek][q]["answers"])
    questions[streek][q]["answers"].append(antwoord)

sets = {streek: {"name": streek, "type": "MC", "questions": list(questions.values())}
        for (streek, questions) in questions.items()}

with open("src/data.js", "w") as f:
    print("export const questions = ", file=f, end="")
    json.dump(sets, f, indent=2)
    print(";", file=f)
