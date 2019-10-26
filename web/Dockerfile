FROM node:10-alpine
RUN npm install -g yarn

WORKDIR /usr/app
COPY package*.json /usr/app/
RUN yarn

COPY . /usr/app

EXPOSE 4000

CMD yarn start
