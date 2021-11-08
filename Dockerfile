FROM node:carbon-alpine
RUN mkdir /my_app
COPY server.js /my_app
COPY index.html /my_app
COPY app.css /my_app
COPY package.json /my_app
COPY pabellon.jpg /my_app
WORKDIR /my_app
RUN npm install
EXPOSE 3000
CMD node server.js
