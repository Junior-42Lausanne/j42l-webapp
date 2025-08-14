FROM node:24.5-alpine3.21

# Optional: for some Next.js dependencies
# RUN apk add --no-cache libc6-compat

WORKDIR /usr/app

# Copy package files as root
COPY ./package*.json ./

# Give ownership of the workdir (and package files) to the node user
RUN chown -R node:node /usr/app

# Switch to the node user before installing
USER node

# Install all dependencies (including devDependencies for testing)
RUN npm install

# Copy the rest of the application with correct ownership
COPY --chown=node:node ./ ./

EXPOSE 3000

# Dev mode for testing
CMD ["npm", "run", "dev"]

# --- For production later ---
# RUN npm run build
# CMD ["npm", "start"]
