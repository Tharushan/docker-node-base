FROM node:8

ENV APP_NAME webservice
ENV APP_PATH /opt/${APP_NAME}
ENV NPM_CONFIG_LOGLEVEL silent
ENV HOSTNAME webservice

RUN apt-get update && \
    apt-get install -y software-properties-common

RUN npm install -g pm2

RUN mkdir ${APP_PATH}

COPY start.sh /start.sh
RUN chmod +x start.sh

VOLUME ${APP_PATH}

WORKDIR ${APP_PATH}

RUN npm install

EXPOSE 8000

CMD [ "bash", "/start.sh" ]
