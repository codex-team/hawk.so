FROM node:14.15.3 as build-stage

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn

COPY . .

RUN npm run generate

FROM nginx:1.17.3-alpine

WORKDIR /usr/src/app

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
