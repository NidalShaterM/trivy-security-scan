 # 🚨 Node.js 14 is deprecated & insecure# Simple Dockerfile for testing Trivy scanning
FROM node:14 
RUN apt-get install -y wget curl  # 🚨 Could install vulnerable OS packages

