# Stage 1: Build React app
FROM node:22.14.0 AS builder

WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm run build

# Stage 2: Serve with 'serve'
FROM node:24.18.0

RUN npm install -g serve

WORKDIR /app
COPY --from=builder /app/dist ./dist

CMD ["serve", "-s", "dist", "-l", "4200"]
