FROM node:10-alpine
RUN npm install -g yarn
RUN yarn global add nodemon

WORKDIR /usr/app
COPY package*.json /usr/app/
RUN yarn

COPY . /usr/app

RUN /bin/sh -c "apk add --no-cache bash"

COPY ./scripts/wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

COPY ./scripts/start-development-environment.sh /start-development-environment.sh
RUN chmod +x /start-development-environment.sh

CMD /start-development-environment.sh ${DB_HOST_DEVELOPMENT} ${DB_PORT_DEVELOPMENT} ${REDIS_HOST_DEVELOPMENT} ${REDIS_PORT_DEVELOPMENT}
