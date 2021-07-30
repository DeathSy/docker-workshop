FROM node:15.11.0-alpine

WORKDIR /app

COPY ./package.json ./package.json

RUN yarn

COPY . .

CMD [ "yarn", "start" ]
