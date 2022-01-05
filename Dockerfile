FROM alpine:3.15

RUN apk update 
RUN apk add npm

RUN mkdir /app -p
COPY . /app
WORKDIR /app
RUN npm install
CMD ["npm", "start"]
