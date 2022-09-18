FROM node:16-slim

RUN npm install -g npm@7.17.0
RUN npm install react-dev-utils --legacy-peer-deps
RUN npm install -g nodemon
