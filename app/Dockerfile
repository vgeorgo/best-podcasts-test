FROM node:16.16-alpine3.15

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

CMD npm run start:dev