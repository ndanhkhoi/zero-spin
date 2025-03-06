# Zero Spin

Zero Spin is a modern web application that lets you spin a wheel to randomly select a winner from a list of players. The project has evolved to include multi-language support, persistent settings via URL parameters and localStorage, and enhanced UI/UX features for a more engaging experience.

## Features

- **Dynamic Player List Input**
   - Enter player names using a modal interface that dynamically adds or removes input fields.
   - The modal starts with two empty fields by default.
   - If the URL contains a `players` parameter (e.g., `?players=Alice,Bob,Charlie`), the fields will be pre-filled and the wheel will be generated immediately.
   - The player list is saved in both localStorage and URL parameters, ensuring persistence between sessions and easy sharing.

- **Multi-Language Support**
   - Supports at least two languages (Vietnamese and English).
   - The language selection dropdown is synced with localStorage and the URL parameter (`lang`), so the preferred language persists across sessions.
   - All status messages are displayed in the selected language with context-appropriate emojis.

- **Random Wheel Spin**
   - Uses the Web Crypto API to generate a random angle for each spin.

- **Shareable Link Generation**
   - A share button automatically generates a link with the current player list encoded in the URL (e.g., `https://your-domain/?players=Alice,Bob,Charlie`).
   - The link is automatically copied to the clipboard using the Clipboard API.

- **Win Statistics**
   - After each spin, the win count for each player is updated.
   - A statistics modal presents each player’s win count.
   - The modal is accessible via a “View Statistics” button.

- **Progressive Web App (PWA) Ready**
   - The application includes a Service Worker (`sw.js`) and a manifest file (`manifest.json`) to enable PWA functionality if deployed on a compatible web 

## Usage

1. **Launch the Application**  
   Open `index.html` in a modern web browser that supports HTML5, CSS3, and JavaScript (e.g., Chrome, Firefox, or Edge).

2. **Input the Player List**
   - Click the **"Enter Player List"** button to open the modal.
   - If the URL contains the `players` parameter (e.g., `https://your-domain/?players=Alice,Bob,Charlie`), the player list is pre-filled and the wheel is generated automatically.
   - Otherwise, enter player names into the two (or more) input fields.

3. **Confirm the List**
   - Click the **"Confirm"** button in the modal. If any input is empty, an error notification appears.
   - On confirmation, the player list is saved to localStorage and the URL is updated accordingly. The wheel is generated based on the provided names.

4. **Share the Link**
   - Click the **"Share"** button (located next to the “View Statistics” button) to generate a shareable link.
   - The generated link encodes the current player list (e.g., `https://your-domain/?players=Alice,Bob,Charlie`) and is automatically copied to your clipboard. A success message confirms the copy.

5. **Spin the Wheel & View Results**
   - Click the **"Spin"** button to spin the wheel.
   - After the spin, the winning player's name is highlighted on the wheel and the result is displayed below with an animated highlight.

6. **View Statistics**
   - Click the **"View Statistics"** button to open a modal showing each player’s win count in a card-based layout.

7. **Reset the Application**
   - Click the **"Reset"** button to clear all player data, reset the wheel, and clear the statistics.

## Installation & Deployment

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ndanhkhoi/zero-spin.git
   ```

2. **Open `index.html`**  
   You can open the file directly in a web browser or deploy it on a web server.

3. **URL Parameters**  
   To test the auto-fill feature, visit a URL like:  
   `https://your-domain/?players=Alice,Bob,Charlie&lang=en`

4. **PWA Setup (Optional)**  
   Ensure that `manifest.json` and `sw.js` are correctly configured if you plan to deploy the application as a Progressive Web App.

## Technologies Used

- **HTML5 & CSS3** – For building the responsive and modern user interface.
- **JavaScript (ES6+)** – For event handling, data persistence, and animations.
- **Web Crypto API** – To generate cryptographically secure random numbers for spinning.
- **Clipboard API** – To copy shareable links to the clipboard.
- **Bootstrap 5** – For responsive design and prebuilt UI components.
- **Service Worker** – For enabling PWA functionality (if needed).

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy spinning and good luck!

