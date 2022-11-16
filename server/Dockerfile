FROM node:16

ENV PORT=3001

EXPOSE 3001

WORKDIR /app

COPY "package.json" /app

RUN yarn

COPY . /app

CMD ["yarn", "dev"]