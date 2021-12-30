# In Vinact Veritas

## Installing and ingesting data

To install, clone into a folder and install the python `requirements.txt`, e.g.:

```
git clone https://github.com/vanatteveldt/vinact
cd vinact
python3 -m venv env
env/bin/pip install -r requirements.txt
```

To ingest data from the sheet, call `ingest.py` with the sheet ID (i.e. `1ax...Zr8`)

```
env/bin/python ingest.py SHEET-ID
```

## Running locally

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

For debugging, the browser extensions are incredibly useful, see e.g. https://redux.js.org/tutorials/essentials/part-1-overview-concepts

## Deploying

```
npm run build
```

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
