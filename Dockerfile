FROM node:24.5-alpine3.21

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install

RUN chown -R node:node /usr/app

COPY ./ ./

# RUN npm run build TODO activate for prod

EXPOSE 3000

USER node

CMD [ "npm", "run", "dev"] # TODO change to prod

