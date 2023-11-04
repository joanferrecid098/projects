import qrcode from 'qrcode-terminal';
import { Client, LocalAuth } from 'whatsapp-web.js';

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { 
        headless: true
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
