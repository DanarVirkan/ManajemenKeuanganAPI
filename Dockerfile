FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

ENV HOST=0.0.0.0
ENV PORT=8080

EXPOSE 8080

CMD ["npm","run","start"]