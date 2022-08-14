FROM node:16.16-alpine3.15

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i -g @nestjs/cli
RUN npm install
COPY . .

CMD npm run start