import { Client, GatewayIntentBits } from 'discord.js';
import { sendEDU } from './sendEDU.js';
import { getLastRequestTime, setLastRequestTime } from './database.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (message.content.startsWith('!send')) {
        const args = message.content.split(' ');
        if (args.length !== 2) {
            return message.reply('Please provide a valid address.');
        }

        const toAddress = args[1];
        const amount = 0.01;
        const privateKey = process.env.PRIVATE_KEY;
        const userId = message.author.id;

        // Check if the user has requested tokens within the last 24 hours
        const lastRequestTime = await getLastRequestTime(userId);
        const currentTime = Date.now();

        if (lastRequestTime) {
            const timePassed = currentTime - lastRequestTime.value;
            if (timePassed < 24 * 60 * 60 * 1000) {
                return message.reply(`You can only request tokens once every 24 hours. Please try again later.`);
            }
        }

        // Update the last request time for the user
        await setLastRequestTime(userId, currentTime);

        try {
            const txHash = await sendEDU(privateKey, toAddress, amount);
            message.reply(`Sent 0.01 EDU to ${toAddress}. Transaction hash: ${txHash}`);
        } catch (error) {
            console.error('Transaction failed:', error);
            message.reply('Failed to send tokens. Please check the address and try again.');
        }
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);
