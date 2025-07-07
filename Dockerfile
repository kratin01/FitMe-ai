# --- Base Image ---
# We'll use an official Node.js image as our starting point.
# 'node:20-slim' is a good choice because it includes Node.js and essential tools
# without being too large.
FROM node:20-slim AS base

# --- Working Directory ---
# This sets the default location for all subsequent commands.
# It's like 'cd /app' in your terminal.
WORKDIR /app

# --- Install Dependencies ---
# By copying 'package.json' and 'package-lock.json' first and then running 'npm install',
# we take advantage of Docker's caching. If you don't change your dependencies,
# Docker will reuse the installed 'node_modules' from the cache, speeding up future builds.
COPY package*.json ./
RUN npm install

# --- Copy Application Code ---
# Now, we copy the rest of your project's files into the container.
COPY . .

# --- Expose Port ---
# Your Next.js app runs on port 3000. This command tells Docker to "open" this port
# so you can connect to it from your computer.
EXPOSE 3000

# --- Start Command ---
# This is the command that will run when the container starts.
# We use 'npx next dev' to run the standard Next.js development server
# instead of the 'npm run dev' script which uses Turbopack (which caused the error).
CMD ["npx", "next", "dev"] 