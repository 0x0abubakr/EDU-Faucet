import './bot.js'; // Import the bot

import express from 'express'; // Add this line

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bot is running!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});