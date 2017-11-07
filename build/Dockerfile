FROM node:8

ENV APP_NAME webservice
ENV APP_PATH /opt/${APP_NAME}
ENV NPM_CONFIG_LOGLEVEL silent
ENV HOSTNAME webservice

RUN mkdir ${APP_PATH}

VOLUME ${APP_PATH}

WORKDIR ${APP_PATH}

RUN npm install

EXPOSE 8000

CMD [ "npm", "start" ]
