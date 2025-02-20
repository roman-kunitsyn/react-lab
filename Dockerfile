# Use the latest LTS version of Node.js
FROM node:22-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 8110
CMD npm run build \
  && npm run start:prod
