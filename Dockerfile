FROM nodesource/trusty:6.2.0

WORKDIR /usr/src/app

COPY ./dist/ /usr/src/app
RUN npm -g install http-server


EXPOSE 8080

CMD [ "http-server", "--cors" ]