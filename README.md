# Beautiful Portfolio

A personal portfolio website built with **React** and **Vite** to showcase projects, technical skills, and interactive project details in a clean, modern interface.

## Overview

Beautiful Portfolio is a frontend portfolio application designed to present technical work in a polished and easy-to-navigate format. It includes reusable components, animated section reveals, responsive layouts, and project-specific detail views for highlighting real work and supporting assets.

The site is intended to serve as a professional portfolio that is visually clean, responsive across devices, and simple to maintain.

## Features

- Responsive single-page portfolio layout
- Reusable React component structure
- Animated reveal effects for sections
- Loading screen and responsive navigation
- Project showcase with interactive detail views
- Downloadable project resources
- Contact form integration
- Mobile-friendly layout improvements

## Featured Work

One featured project currently included in the portfolio is:

### CCNA Enterprise Network Mega Lab

A multi-site, three-tier enterprise networking lab built in **Cisco Packet Tracer**.

Key topics demonstrated include:

- VLAN segmentation
- 802.1Q trunking
- Inter-VLAN routing
- OSPF
- HSRPv2 redundancy
- Rapid PVST+
- EtherChannel
- NAT
- DHCP
- DNS
- NTP
- SSH hardening
- IPv6 addressing
- Wireless LAN support

Included portfolio resources for this project:

- Cisco Packet Tracer lab file (`.pka`)
- Reference PDF
- Port mapping image
- IP addressing plan image

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS / utility-based styling
- EmailJS
- Cisco Packet Tracer assets for featured networking projects

## Project Structure

```text
beautiful-portfolio/
  public/
  src/
    assets/
      projects/          # Project images and downloadable resources
    components/
      sections/          # Main page sections
        About.jsx
        Contact.jsx
        Home.jsx
        Projects.jsx
      Navbar.jsx
      LoadingScreen.jsx
      RevealOnScroll.jsx
      MobileMenu.jsx
    App.jsx              # Root app component
    main.jsx             # Vite entry point
    index.css            # Global styles
  eslint.config.js
  index.html
  package-lock.json
  package.json
  README.md
  vite.config.js
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

## Build and Preview

### Create a production build

```bash
npm run build
```

Builds the project for production and outputs the optimized files.

### Preview the production build locally

```bash
npm run preview
```

Runs a local preview of the production build so you can test the final version before deployment.

## Post-Bug-Fix Workflow

Use the following steps after making a bug fix so you can test, save, push, and redeploy your updated code.

### 1) Build the project

```bash
npm run build
```

Checks that the project still builds successfully for production after your fix.

### 2) Preview the production build locally

```bash
npm run preview
```

Lets you test the production version locally to confirm the fix works as expected.

### 3) Stage all changed files

```bash
git add .
```

Adds all modified files to Git so they are ready to be committed.

### 4) Commit the fix

```bash
git commit -m "Describe your bug fix here"
```

Creates a saved commit in Git with a message explaining what was fixed.

Example:

```bash
git commit -m "Fix mobile About section visibility"
```

### 5) Push the changes to GitHub

```bash
git push origin main
```

Uploads your latest commit to the `main` branch on GitHub.

### 6) Build again before deployment

```bash
npm run build
```

Runs one final production build check before deployment.

### 7) Deploy the updated site

```bash
npm run deploy
```

Deploys the latest version of the portfolio website using your configured deployment script.

## Deployment

If your project includes a configured deploy script, you can deploy with:

```bash
npm run deploy
```

## Customization

To adapt this portfolio for your own use, update:

- Section content in `src/components/sections/`
- Featured project assets in `src/assets/projects/`
- Global styles in `src/index.css`
- Contact form settings and environment variables
- Navigation labels and portfolio text content

## Purpose

This project was built to present technical work in a professional format and to provide a central place for showcasing projects, skills, and supporting resources.

## License

This project is for personal portfolio use.
