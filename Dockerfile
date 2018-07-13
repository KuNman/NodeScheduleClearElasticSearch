FROM node:latest

WORKDIR /app

RUN npm install -g nodemon

COPY package.json /app/package.json
RUN npm install
RUN mv /app/node_modules /node_modules

COPY . /app

CMD ["nodemon", "start"]