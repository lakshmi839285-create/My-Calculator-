# Noted
A video-to-notes workspace with YouTube links, video uploads, English/Hindi/Hinglish/Spanish/French notes, favorites, local search, and Markdown export.

## Run
Requires Node 22 or newer. No dependencies to install.

```sh
npm start
```
Open http://localhost:3000. Add a Google Gemini API key using Settings (the profile button on mobile). The key is held in browser memory for the current session and sent only to the application server and Google. Each request requires the caller’s own key; the server does not use a shared environment key. `PORT` defaults to 3000 and `GEMINI_MODEL` to `gemini-2.5-flash`.

Public YouTube links and MP4, MOV, MPEG or WebM uploads up to 14 MB are supported. Other video platforms, private videos and larger files are not supported. Provider availability, quotas and video access can affect processing. Uploaded content is forwarded to Gemini; the app does not persist video files or API keys. Generated notes and favorites are stored in localStorage in the current browser. Export notes to keep a backup. Three clearly labelled illustrative samples let users explore without credentials.

This is a personal workspace. Before a public multi-user deployment, add authentication, per-user storage and usage limits.

## Checks
`npm test` validates the API input boundary. The UI can be served directly by the included server; no build step is needed.

Provider documentation: https://ai.google.dev/gemini-api/docs/video-understanding
