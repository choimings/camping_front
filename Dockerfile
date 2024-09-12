# Build React App
FROM node:alpine3.18 as build
WORKDIR /app
COPY package.json . 
RUN npm install
COPY . . 
RUN npm run build 

# Server Setting nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
# nginx 포트 설정
# Copy the built React app from the build stage to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html


# Copy the Nginx configuration file
COPY ./nginx.conf /etc/nginx/conf.d/default.conf


# Copy the built React app from the build stage to the Nginx HTML directory
# COPY --from=build /app/build .


# Expose port 80 to allow external access to the Nginx server
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
