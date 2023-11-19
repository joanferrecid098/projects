import qrcode from 'qrcode-terminal';
import { Client, LocalAuth, NoAuth } from 'whatsapp-web.js';

require('dotenv').config()

const client = new Client({
    authStrategy: process.env.LOCAL_AUTH ? new LocalAuth() : new NoAuth(),
    puppeteer: { 
        headless: true,
        args: [
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--disable-setuid-sandbox",
        "--no-sandbox",
        ]
    }
});

const limits = [
    "server nou"
]

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (message) => {
    const chat = await message.getChat();

    if (chat.name = "server nou")
	message.reply("Ok");
});

client.initialize();
