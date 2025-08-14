FROM node:24.5-alpine3.21

WORKDIR /usr/app

USER node

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . .

# RUN npm run build TODO activate for prod

EXPOSE 3000

# TODO change to prod

CMD [ "npm", "run", "dev"] 

