FROM node:16-slim

RUN npm install --location=global npm@7.17.0
RUN npm install --location=global nodemon
