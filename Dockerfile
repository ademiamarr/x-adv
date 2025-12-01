### Build stage
FROM node:20-alpine AS build
WORKDIR /app

# install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# copy source and build
COPY . .
RUN npm run build

### Production stage
FROM node:20-alpine AS prod
WORKDIR /app

# Use a small user for security
RUN addgroup -S app && adduser -S -G app app

# Copy the built static files and server
COPY --from=build /app/build ./build
COPY --from=build /app/server.js ./server.js
COPY --from=build /app/package.json ./package.json

RUN npm ci --omit=dev

USER app
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "server.js"]
