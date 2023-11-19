FROM node:18-alpine

WORKDIR /app

COPY package.json .
RUN npm install
RUN chmod -R o+rwx node_modules/puppeteer/.local-chromium

COPY . .

CMD [ "npm", "start" ]