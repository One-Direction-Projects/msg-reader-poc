const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const bot = new TelegramBot(process.env.TELEGRAM_BOT_API_KEY, { polling: true });


bot.on("polling_error", (msg) => console.log(msg));

bot.on('message', (msg) => {
    console.log(msg)
});