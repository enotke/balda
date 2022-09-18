FROM node:16-slim

RUN apt-get  -o Acquire::Check-Valid-Until=false -o Acquire::Check-Date=false update \
    && apt-get install -y curl zlib1g-dev gnupg2 python3 \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt -o Acquire::Check-Valid-Until=false -o Acquire::Check-Date=false update && apt install -y yarn
