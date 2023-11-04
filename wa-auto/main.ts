import qrcode from 'qrcode-terminal';
import { Client, LocalAuth } from 'whatsapp-web.js';

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { 
        headless: true
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	message.reply("Ok");
});

client.initialize();
