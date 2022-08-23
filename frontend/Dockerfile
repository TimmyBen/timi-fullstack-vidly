FROM node:14.16.0-alpine3.13

RUN addgroup app && adduser -S -G app app
USER app
ENV PORT=80
ENV REACT_APP_API_URL="http://localhost:8080/api"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE ${PORT}

CMD ["npm", "start"]