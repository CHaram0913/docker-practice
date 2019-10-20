FROM node:10-alpine
RUN npm install -g yarn
RUN yarn global add nodemon

WORKDIR /usr/app
COPY package*.json /usr/app/
COPY yarn*.lock /usr/app/
RUN yarn && mv /usr/app/node_modules /node_modules

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait
RUN chmod +x /wait

CMD /wait && yarn start:dev