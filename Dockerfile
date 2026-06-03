# ─────────────────────────────────────────────
# Stage 1 — Build
# ─────────────────────────────────────────────
FROM node:20-alpine AS builder

# Enable pnpm via corepack (built into Node 20)
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy dependency manifests first (for better Docker layer caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm (respects the lockfile)
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build the production SPA (outputs to dist/client)
RUN pnpm run build

# ─────────────────────────────────────────────
# Stage 2 — Serve with Nginx
# ─────────────────────────────────────────────
FROM nginx:1.27-alpine AS runner

# Remove the default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built SPA from Stage 1 into nginx's public directory
COPY --from=builder /app/dist/client /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
