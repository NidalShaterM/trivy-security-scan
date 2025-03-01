# Simple Dockerfile for testing Trivy scanning
FROM alpine:latest
RUN apk add --no-cache curl

# EXAMPLE OF OLD NODE VERSION WHICH WILL BE REJECTED BY Trivy
 # 🚨 Node.js 14 is deprecated & insecure# Simple Dockerfile for testing Trivy scanning
# FROM node:14 
# RUN apt-get install -y wget curl  # 🚨 Could install vulnerable OS packages
