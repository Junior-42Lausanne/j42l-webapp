FROM node:24.5-alpine3.21

WORKDIR /usr/app

RUN chown -R node:node /usr/app
USER node

COPY ./package*.json ./

RUN npm install

COPY ./ ./

# RUN npm run build TODO activate for prod

EXPOSE 3000

# TODO change to prod

CMD [ "npm", "run", "dev"] 

