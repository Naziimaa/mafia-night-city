# MAFIA: NIGHT CITY — Classroom Edition

A browser-based multiplayer social deduction game made with HTML, CSS, JavaScript and Firebase Realtime Database.

## Features
- Create and join rooms by 6-digit code
- Anonymous authentication and live lobby
- 4–12 players (client-side limit)
- Mafia and Civilian roles
- Discussion, voting, elimination and automatic winner calculation
- Play again

## Setup
1. Configure a Firebase Spark project with Anonymous Authentication and Realtime Database.
2. Set your own Firebase configuration in `firebase.js`.
3. Paste `database.rules.json` into Firebase Realtime Database > Rules and publish.
4. Serve this folder with VS Code Live Server (do not open as `file://`).
5. Open in separate browser profiles to test distinct users.

## Important limitations
This is a classroom prototype, **not a secure competitive Mafia game**. Room data (including roles) can be read by any signed-in user who knows a room code; a modified browser client could inspect roles or manipulate state. Game rounds are voting-only, with no automated night actions, doctor or detective. The host advances rounds manually. The rules are permissive for the host and are not suitable for a public production deployment. Do not use with sensitive data. The player limit is client-side only. Joining and voting should be tested with multiple browser profiles.

## Free deployment
Static files can be hosted on GitHub Pages; Firebase Spark usage is subject to free tier quotas. The local `127.0.0.1` invitation URL only works on the same computer. Use the deployed GitHub Pages URL to invite remote players.
