FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE $WEB_PORT

CMD npm run prod
