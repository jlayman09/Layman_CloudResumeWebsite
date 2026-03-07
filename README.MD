# Cloud Resume Challenge – Jonathan Layman

Implementation of the **AWS Cloud Resume Challenge**  
https://cloudresumechallenge.dev/docs/the-challenge/aws/

This repository contains the source code and documentation for my implementation of the challenge.

The goal of this project is to demonstrate real-world cloud engineering skills by designing, securing, and deploying a **serverless personal website on AWS**, while documenting each phase of the build.

Live Site  
https://jonathanlayman.com

## Project Overview

The **Cloud Resume Challenge** is a hands-on project designed to demonstrate practical cloud knowledge beyond certifications.

This implementation focuses on building a production-style architecture using AWS services and modern DevOps practices.

The project includes:

* A static website hosted on AWS
* Secure HTTPS delivery using CloudFront
* A serverless visitor counter
* Version-controlled infrastructure
* CI/CD deployment automation
* Ongoing improvements using Infrastructure as Code

## Current Architecture

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

* Amazon S3 – Secure static website hosting
* Amazon CloudFront – Global CDN with HTTPS
* AWS Certificate Manager – TLS certificate management
* Amazon Route 53 – DNS management
* AWS Lambda – Serverless backend logic
* Amazon DynamoDB – Persistent visitor counter storage
* Amazon API Gateway – HTTP API endpoint
* GitHub – Source control and CI/CD workflow

## Project Build Phases

This project is documented through a series of build logs on my website.

### Phase 1 – Development Environment

* Configured development workflow using Visual Studio Code
* Organized project structure
* Implemented Git version control

### Phase 2 – Static Website Hosting

* Built personal resume website
* Deployed site to Amazon S3
* Configured secure bucket policies

### Phase 3 – Domain and DNS Configuration

* Configured custom domain
* Implemented Amazon Route 53
* Connected DNS records to CloudFront

### Phase 4 – Secure HTTPS Delivery

* Implemented Amazon CloudFront
* Enabled HTTPS using AWS Certificate Manager
* Configured Origin Access Control (OAC)

### Phase 5 – CI/CD Automation

* Connected GitHub repository
* Configured automated deployments
* Website updates now deploy through a CI/CD pipeline

### Phase 6 – Cost Monitoring

* Implemented AWS Budgets
* Configured cost alerts
* Introduced basic FinOps practices

### Phase 7 – Serverless Visitor Counter

* Implemented visitor tracking using:

  * AWS Lambda (Python)
  * Amazon DynamoDB
  * Amazon API Gateway
* Frontend JavaScript retrieves visitor count through an API

### Phase 8 – Infrastructure as Code (In Progress)

* Migrating infrastructure to Terraform
* Goal: manage AWS resources using Infrastructure as Code

## Deployment Workflow

```
Developer updates website code
      ↓
Push to GitHub repository
      ↓
CI/CD pipeline runs
      ↓
Website files deploy to Amazon S3
      ↓
CloudFront cache refreshes
      ↓
Updated website served globally
```

## Branching Strategy

```
master        → Production-ready website code
Project/blog  → Blog posts and development notes
feature/*     → Feature development branches
```

This simplified workflow mirrors practices used in many development teams.

## Project Repositories

Frontend (Website Code)

https://github.com/jlayman09/Layman_CloudResumeWebsite

Serverless Backend

https://github.com/jlayman09/cloud-resume-backend

## Why This Project Matters

This project demonstrates practical experience with:

* Cloud architecture design
* Secure web delivery using AWS
* Serverless application development
* API integration
* DevOps workflows
* Infrastructure as Code concepts

It complements my background in cybersecurity education and supports my transition into cloud and cloud security roles.

## About Me

Jonathan Layman

Cybersecurity Educator | Cloud Security | AWS

Location: San Antonio, Texas

Certifications

AWS Certified Solutions Architect – Associate
AWS Certified AI Practitioner
AWS Certified Security – Specialty
CompTIA Security+
CompTIA Network+

Currently Studying

HashiCorp Terraform Associate

LinkedIn

https://www.linkedin.com/in/jonathanlayman

Website

https://jonathanlayman.com
