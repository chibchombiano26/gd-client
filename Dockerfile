FROM nodesource/trusty:6.2.0

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY . /usr/src/app
RUN npm install --g global webpack webpack-dev-server karma-cli protractor typings  typescript http-server rimraf
RUN npm run clean:dist
RUN npm run build:prod


EXPOSE 8080

CMD [ "http-server", "dist", "--cors" ]