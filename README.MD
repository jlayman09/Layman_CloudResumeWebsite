# Cloud Resume Challenge – Jonathan Layman

This repository contains the source code and infrastructure work for my implementation of the **Cloud Resume Challenge (AWS Edition)**.

The goal of this project is to demonstrate real-world cloud skills by building, securing, and deploying a serverless resume website using AWS services and modern DevOps practices.

🔗 **Live Site:** https://jonathanlayman.com

---

## Project Overview

The Cloud Resume Challenge is a hands-on project designed to showcase practical cloud knowledge beyond certifications. This implementation includes:

- A static resume website hosted on AWS
- Secure HTTPS delivery using CloudFront
- Infrastructure and deployment practices aligned with industry best practices
- Ongoing enhancements as the project progresses

---

## Architecture (Current)

- **Amazon S3** – Private bucket hosting static website files  
- **Amazon CloudFront** – Global CDN with HTTPS and Origin Access Control (OAC)  
- **AWS Certificate Manager (ACM)** – TLS certificate for custom domain  
- **Amazon Route 53** – DNS management for apex and www domains  
- **Git & GitHub** – Version control and project history  

---

## Project Stages

### ✅ Stage 1 – Static Website & HTTPS (Completed)
- Designed and built a personal resume website
- Uploaded site assets to a private S3 bucket
- Configured CloudFront with OAC for secure access
- Enabled HTTPS with ACM
- Connected custom domain via Route 53

### 🚧 Stage 2 – Visitor Counter (Planned)
- JavaScript-based visitor counter
- AWS Lambda (Python)
- Amazon DynamoDB
- Amazon API Gateway

### 🚧 Stage 3 – CI/CD & Infrastructure as Code (Planned)
- GitHub Actions for automated deployments
- Infrastructure as Code (Terraform or AWS SAM)

### 🚧 Stage 4 – Testing & Monitoring (Planned)
- Automated tests
- CloudWatch monitoring
- Logging and metrics

---

## Branching Strategy

- **`master`** – Stable, production-ready code
- **`Project/blog`** – Blog content and related development

Feature work is done in branches and merged into `master` once complete.

---

## Why This Project Matters

This project demonstrates:
- Real AWS experience, not just theoretical knowledge
- Secure cloud architecture design
- Understanding of DNS, CDN, IAM, and serverless services
- Version control and professional Git workflows

It complements my background in **cybersecurity education** and my transition into **cloud-focused roles**.

---

## Project Repositories

Frontend (Website)  
https://github.com/jlayman09/Layman_CloudResumeWebsite

Serverless Backend  
https://github.com/jlayman09/cloud-resume-backend

## About Me

**Jonathan Layman**  
Cybersecurity Educator | AWS | Cloud Security  
📍 San Antonio, TX  

- HashiCorp Terraform Associate (Currently Studying)
- CompTIA Network+  
- CompTIA Security+   
- AWS Certified AI Practitioner  
- AWS Certified Solutions Architect Associate
- AWS Certified Security Specialist

🔗 LinkedIn: https://www.linkedin.com/in/jonathanlayman  
🌐 Website: https://jonathanlayman.com
