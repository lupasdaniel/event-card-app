📇 Event Card App – Documentation

A web application developed with Angular (v19) that displays an event card and allows users to register their participation, generate a QR code, and download it. Designed to be visually appealing and lightweight for academic/demo use.

🚀 Features

✅ Event Card Component
- Displays event information (title, date, location).
- User-friendly modal popup for RSVP/registration.
- Input validation for name and email fields.
- On successful submission:
  - Saves data to localStorage.
  - Dynamically generates a QR code based on user input.
  - Displays the QR code within the modal.
  - Allows user to download the QR code as .png.

🧩 Technologies Used

- Angular 19 with standalone components
- SCSS/CSS for styling
- No external QR libraries (QR code generated via public API: https://api.qrserver.com)

💡 How It Works

1. The user opens the app and sees an event card.
2. Upon clicking "Join the Event", a modal appears with name/email fields.
3. After filling in the form and hitting "Submit":
   - The app stores their info in localStorage.
   - A QR code is created based on the string:
     Invitat: {name} | Eveniment: {title} | {date}
   - This QR code is shown immediately in the modal, without refreshing the page.
4. The user can also click "Download QR" to save the code locally.

🛠️ Commands to Run

Install dependencies:

    npm install

If you get a dependency conflict, use:

    npm install --legacy-peer-deps

Start development server:

    ng serve

Open http://localhost:4200 to see the app.

🔍 File Overview

File                        | Description
---------------------------|------------
event-card.component.ts    | Core logic: handles form, QR generation, localStorage
event-card.component.html  | Template with event details, modal, QR code and download button
event-card.component.css   | Custom styling for the component
app.component.ts/html      | Hosts <event-card /> component

📦 Deploy Instructions (optional)

You can deploy this Angular app to platforms like:
- Vercel (https://vercel.com)
- Netlify (https://netlify.com)
- GitHub Pages using angular-cli-ghpages

📁 Example Git Setup

    git init
    git add .
    git commit -m "Initial version - Event Card App"
    git remote add origin https://github.com/yourusername/event-card-app.git
    git push -u origin main
