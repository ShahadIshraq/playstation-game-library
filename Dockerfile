FROM node:13-slim

WORKDIR /tmp
COPY package.json /tmp/

RUN yarn install

WORKDIR /opt/app
COPY . /opt/app/
RUN cp -a /tmp/node_modules /opt/app/

CMD ./docker-run
