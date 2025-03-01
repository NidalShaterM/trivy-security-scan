# Simple Dockerfile for testing Trivy scanning
FROM alpine:latest
RUN apk add --no-cache curl
