FROM strapi/base:14-alpine

# Create app directory
WORKDIR /opt/app

# Copy package.json and yarn.lock
COPY ./package.json ./
COPY ./yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy app
COPY . .

# Expose Strapi port
EXPOSE 1337

# Start Strapi
CMD ["yarn", "develop"] 