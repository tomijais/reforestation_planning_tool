#!/bin/bash

# Build the Docker image
docker build -t reforestation-planning-tool .

# Stop and remove any existing container with the same name
docker rm -f reforestation-app || true

# Run the Docker container
docker run -d -p 3000:3000 --name reforestation-app reforestation-planning-tool

# Display logs (optional)
docker logs -f reforestation-app