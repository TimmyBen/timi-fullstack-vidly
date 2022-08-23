FROM node:14.16.0-alpine3.13

RUN addgroup app && adduser -S -G app app
USER app
ENV PORT=80
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 
ENV DB_URL="mongodb://mongo/vidly"
EXPOSE ${PORT} 

CMD npm run db:up; npm start