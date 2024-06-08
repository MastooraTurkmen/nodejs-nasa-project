FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install --only=production