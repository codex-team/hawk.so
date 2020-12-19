# build node-gyp modules in different stage
FROM node:14.15.3-alpine3.10 as build-stage

COPY . .

RUN yarn
RUN yarn generate

# production environment
FROM nginx:1.17.3-alpine
COPY --from=build-stage /dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
