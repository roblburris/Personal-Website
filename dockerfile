FROM alpine:latest
WORKDIR /Users/RL/Documents/csprojects/react-website

RUN apk add --update yarn

COPY next-env.d.ts .
COPY next.config.js .
COPY package.json .
COPY tsconfig.json .
COPY yarn.lock .
COPY public/ ./public/
COPY pages ./pages/
COPY components ./components/

RUN yarn
RUN yarn run build

EXPOSE 3000
CMD [ "yarn", "run", "start"]
