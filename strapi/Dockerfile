FROM node:18-alpine

WORKDIR /opt/app

# Install dependencies with reduced layers
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev && \
    mkdir -p /opt/app/public/uploads

# Copy app files
COPY ./app /opt/app

# Expose Strapi port
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "develop"] 