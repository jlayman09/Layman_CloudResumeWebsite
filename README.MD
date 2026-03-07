# Cloud Resume Challenge – Jonathan Layman

This repository contains the source code and development history for my implementation of the **AWS Cloud Resume Challenge**.

The goal of this project is to demonstrate real-world cloud engineering skills by designing, securing, and deploying a **serverless personal website on AWS**, while documenting each stage of the process.

🔗 **Live Site:** https://jonathanlayman.com

---

# Project Overview

The **Cloud Resume Challenge** is a hands-on project designed to demonstrate practical cloud knowledge beyond certifications. This implementation focuses on building a production-style architecture using AWS services and modern DevOps practices.

This project includes:

* A static website hosted on AWS
* Global content delivery with HTTPS
* A serverless backend API
* Version-controlled infrastructure
* CI/CD deployment automation
* Ongoing improvements using Infrastructure as Code

---

# Current Architecture

```
User Browser
      ↓
CloudFront CDN
      ↓
S3 Static Website
      ↓
JavaScript API Call
      ↓
API Gateway
      ↓
AWS Lambda (Python)
      ↓
DynamoDB
```

Core AWS Services Used:

* **Amazon S3** – Secure static website hosting
* **Amazon CloudFront** – Global CDN with HTTPS
* **AWS Certificate Manager (ACM)** – TLS certificate management
* **Amazon Route 53** – DNS management for custom domain
* **AWS Lambda** – Serverless backend for visitor tracking
* **Amazon DynamoDB** – Persistent visitor counter storage
* **Amazon API Gateway** – HTTP API endpoint
* **GitHub** – Source control and project documentation

---

# Project Build Phases

The project is documented through a series of build logs published on my website.

### Phase 1 – Development Environment

* Configured development workflow using **Visual Studio Code**
* Organized local project structure
* Implemented Git version control

### Phase 2 – Static Website Hosting

* Built a personal resume website
* Deployed site to **Amazon S3**
* Configured secure bucket policies

### Phase 3 – Domain and DNS Configuration

* Registered and configured custom domain
* Configured **Amazon Route 53**
* Connected DNS records to CloudFront distribution

### Phase 4 – Secure HTTPS Delivery

* Implemented **Amazon CloudFront**
* Enabled HTTPS using **AWS Certificate Manager**
* Configured **Origin Access Control (OAC)** for secure S3 access

### Phase 5 – CI/CD Automation

* Integrated **GitHub repository**
* Configured automated deployments
* Website updates now deploy through a CI/CD workflow

### Phase 6 – Cost Monitoring

* Implemented **AWS Budgets**
* Configured cost alerts to monitor free-tier usage
* Introduced basic **FinOps practices**

### Phase 7 – Serverless Visitor Counter

* Implemented visitor tracking using:

  * AWS Lambda (Python)
  * Amazon DynamoDB
  * Amazon API Gateway
* Frontend JavaScript retrieves visitor counts via API

### Phase 8 – Infrastructure as Code (In Progress)

* Migrating infrastructure to **Terraform**
* Goal: manage AWS resources using declarative infrastructure

---

# Branching Strategy

```
master        → Production-ready website code
Project/blog  → Blog posts and documentation
feature/*     → Development branches for new features
```

This structure reflects a simplified workflow used in many real-world development environments.

---

# Project Repositories

### Frontend (Website)

Contains the static website code and deployment configuration.

https://github.com/jlayman09/Layman_CloudResumeWebsite

### Serverless Backend

Contains the Lambda function, documentation, and infrastructure work for the visitor counter.

https://github.com/jlayman09/cloud-resume-backend

---

# Why This Project Matters

This project demonstrates practical experience with:

* Cloud architecture design
* Secure web delivery using AWS
* Serverless application development
* API integration
* DevOps practices
* Infrastructure as Code concepts

It complements my background in **cybersecurity education** and supports my transition into **cloud and cloud security roles**.

---

# About Me

**Jonathan Layman**

Cybersecurity Educator | Cloud Security | AWS

📍 San Antonio, TX

Certifications:

* AWS Certified Solutions Architect – Associate
* AWS Certified AI Practitioner
* AWS Certified Security – Specialty
* CompTIA Security+
* CompTIA Network+

Currently Studying:

* HashiCorp Terraform Associate

🔗 LinkedIn
https://www.linkedin.com/in/jonathanlayman

🌐 Website
https://jonathanlayman.com
