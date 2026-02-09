# Stage 1: Build "Factory"
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# This runs rollup and creates src/main.js (as per your config)
RUN npm run build

# Stage 2: Build "Delivery"
FROM nginx:alpine

# 1. Config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 2. Index (Root)
COPY --from=builder /app/index.html /usr/share/nginx/html/index.html

# 3. Assets (Root)
COPY --from=builder /app/public/ /usr/share/nginx/html/

# 4. JavaScript (Src Folder)
RUN mkdir -p /usr/share/nginx/html/src
COPY --from=builder /app/src/main.js /usr/share/nginx/html/src/main.js

# 5. Service Worker (MUST be at Root)
# We copy src/sw.js to the root /sw.js so it has the correct scope
COPY --from=builder /app/src/sw.js /usr/share/nginx/html/sw.js

EXPOSE 80
