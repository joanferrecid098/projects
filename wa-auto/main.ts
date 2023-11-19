import qrcode from 'qrcode-terminal';
import { Client, LocalAuth, NoAuth } from 'whatsapp-web.js';

require('dotenv').config()

const client = new Client({
    authStrategy: process.env.LOCAL_AUTH ? new LocalAuth() : new NoAuth(),
    puppeteer: { 
        args: [
        '--ignore-certificate-errors',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--window-size=1920,1080',
        "--disable-accelerated-2d-canvas",
        "--disable-gpu"],
        ignoreHTTPSErrors: true,
        headless: false,         
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
