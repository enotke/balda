FROM node:17-slim

RUN npm install npm@7.17.0 --location=global
RUN npm install -g @vue/cli
