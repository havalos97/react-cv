FROM node:16.19-alpine AS development

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY . .

CMD ["yarn", "dev"]
