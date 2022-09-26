FROM node:18

WORKDIR /app/poster-api

COPY package.json ./

RUN npm install

COPY ./ ./