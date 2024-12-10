## Project Overview

Bot Battlr is a React application that lets users:
- View a list of available robots (bots).
- Add bots to their personal army.
- Remove bots from their army.
- Discharge bots permanently, removing them from both the frontend and backend.

The backend is a local server running JSON DB, allowing the app to fetch and manipulate data about the bots.

## Features

- **Bot Collection:** Displays all available bots from the backend with basic details like name, image, and catchphrase.
- **Your Bot Army:** Displays bots that have been enlisted to the user's army. Users can add and remove bots.
- **Discharge Bots:** Bots can be permanently removed from both the frontend and the backend with a red "x" button.

## Technologies Used

- **React** - Frontend framework
- **JSON Server** - For creating a mock backend with local data (for fetching bot data and performing delete operations)
- **CSS** - For styling the app
- **JavaScript** (ES6+)
- **HTML5**
- **Node.js** (for running JSON server)