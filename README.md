# EDU Faucet Discord Bot
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Solidity](https://img.shields.io/badge/solidity-%5E0.8.0-lightgrey)

A Discord bot designed to provide EDU tokens to developers for testing and development purposes. The bot ensures that each developer can request tokens only once every 24 hours to prevent spam and abuse.

![image](https://github.com/user-attachments/assets/3df66dd8-8d66-4741-9e4f-883dca2b83c8)

## Features

- **Token Distribution**: Provides 0.01 EDU tokens to a specified address upon receiving the `!send` command.
- **Spam Protection**: Implements a 24-hour rate limit to prevent abuse and ensure fair usage.

## Getting Started

### Prerequisites

- A Replit account
- EDU private key
- Discord bot token

### Installation

1. **Import the Repository to Replit:**
   - Go to [Replit](https://replit.com/).
   - Click on "Create" and select "Import from GitHub."
   - Enter the repository URL (`https://github.com/0x0abubakr/EDU-Faucet.git`) and click "Import."

2. **Set Up Environment Variables:**
   - In your Replit project, go to the "Secrets" tab (the lock icon on the left sidebar).
   - Add the following secrets:
     - `PRIVATE_KEY`: Your EDU private key.
     - `DISCORD_BOT_TOKEN`: Your Discord bot token.

3. **Install Dependencies:**
   - Open the Shell or Console in Replit.
   - Run the following command to install dependencies:
     ```bash
     npm install
     ```

4. **Run the Project:**
   - Click the "Run" button at the top of the Replit interface to start the Express server and initialize the Discord bot.

### Configuration

- **`config.js`**: Contains configuration details for the EDU blockchain.
- **`database.js`**: Manages request times using Replit’s database to enforce the 24-hour limit.
- **`sendEDU.js`**: Handles token transactions on the EDU blockchain.

### How It Works

1. **Request Tokens**: Use the command `!send [address]` in a Discord server to request 0.01 EDU tokens at the specified address.
   Example:
   ```
   !send 0x1234567890abcdef1234567890abcdef12345678
   ```

2. **Rate Limiting**: Each address can only request tokens once every 24 hours. This helps prevent abuse and ensures fair access to the faucet.


### License

This project is licensed under the MIT License
