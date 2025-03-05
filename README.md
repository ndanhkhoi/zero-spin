# Zero Spin

Zero Spin is a web application that lets you spin a wheel to randomly select a winner from a list of players. This project supports player list input through a modal, auto-generates input fields and the wheel when URL parameters are provided, allows you to share a link with an encoded list of players, and displays the spinning results along with win statistics.

## Features

- **Input Player List**: Users can enter player names through a modal interface.
- **URL Parameters**: If the URL includes a parameter (e.g., `?players=Player1,Player2,Player3`), the input fields will be pre-filled with those values, and the wheel will be generated immediately.
- **Random Wheel Spin**: Uses the Web Crypto API to generate a random number and spin the wheel with a smooth animation.
- **Display Results & Statistics**: Highlights the winning player on the wheel and displays the result along with statistics on each player's win count.
- **Share Link**: Generates a shareable link that uses the current host (e.g., `https://[current-domain]/?players=...`) where player names are URL encoded and concatenated with commas. The link is automatically copied to the clipboard, and a success message is displayed.
- **PWA Support**: Includes a Service Worker (`sw.js`) for Progressive Web App functionality if needed.

## Usage

1. **Launch the Application**  
   Open the `index.html` file in a modern web browser that supports HTML5, CSS3, and JavaScript.

2. **Input the Player List**  
   - Click the **"Enter Player List"** button to open the modal.
   - If the URL contains the `players` parameter (e.g., `https://[current-domain]/?players=Player1,Player2,Player3`), the player list will be pre-filled and the wheel will be generated automatically.
   - Otherwise, the modal will display two empty input fields by default.

3. **Confirm the List**  
   - Click the **"Confirm"** button to validate and save the player list. An error message will display if any input is empty.
   - Upon successful confirmation, the wheel is generated based on the provided player names.

4. **Share the Link**  
   - Click the **"Share Link"** button (located next to the Confirm button) to generate a link with the URL encoded player names.
   - The generated link will follow the format:  
     `https://[current-domain]/?players=...`  
     where `[current-domain]` represents the current host where the app is running.
   - This link is copied to your clipboard using the Clipboard API, and a success message ("Link copied to clipboard!") is displayed in green.
   - The validation message is cleared each time the modal is reopened.

5. **Spin the Wheel & View Results**  
   - Click the **"Spin"** button to spin the wheel randomly.
   - After the spin, the wheel highlights the winning player's name and updates the statistics accordingly.

6. **View Statistics**  
   - Click the **"View Statistics"** button to display a modal with each player's win count presented in a modern card layout.

7. **Reset**  
   - Click the **"Reset"** button to clear all input fields and reset the wheel and statistics to their initial state.

## Project Structure

- **index.html**: The main HTML file that contains the user interface and JavaScript logic.
- **manifest.json**: Configuration file for PWA functionality (if applicable).
- **sw.js**: Service Worker file that enables PWA support (if applicable).
- **CDN Resources**:  
  - [Bootstrap 5](https://getbootstrap.com/) for responsive design.
  - [FontAwesome](https://fontawesome.com/) for icons.

## Technologies Used

- **HTML5 & CSS3**: For building the user interface.
- **JavaScript**: For event handling, spinning the wheel, displaying results, and generating the shareable link.
- **Web Crypto API**: To generate a random number for the wheel spin.
- **Clipboard API**: To copy the generated link to the clipboard.
- **Bootstrap 5**: For creating a responsive and modern UI.
- **Service Worker**: For enabling PWA functionality (if deployed as a PWA).

## Installation & Deployment

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/yourusername/zero-spin.git
   ```
2. **Open `index.html`**  
   You can open the file directly in a web browser or deploy it on a web server.
3. **URL Parameters**  
   To test the auto-fill feature, visit a URL like:  
   `https://[current-domain]/?players=Player1,Player2,Player3`
4. **PWA Setup (Optional)**  
   If you want to deploy the application as a Progressive Web App, ensure that `manifest.json` and `sw.js` are correctly configured.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy spinning and good luck!
