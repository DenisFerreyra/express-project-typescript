FROM node:14

RUN mkdir -p /home/testapp

COPY . /home/testapp

RUN npm install

WORKDIR /home/testapp

EXPOSE 3000

RUN npm run tsc

EXPOSE 3000

CMD ["npm","start"]