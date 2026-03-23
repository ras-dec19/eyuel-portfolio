# Beautiful Portfolio

A personal portfolio website built with **React** and **Vite** to showcase technical projects, skills, and interactive project details in a clean, modern interface.

## Overview

This portfolio highlights my work through a polished frontend experience with reusable components, animated section reveals, and detailed project presentations. It is designed to present technical projects in a way that is both visually appealing and easy to explore.

One of the featured projects currently included is a **CCNA Enterprise Network Mega Lab** built in **Cisco Packet Tracer**, with supporting downloadable materials and visual references.

## Features

- Modern portfolio interface built with React and Vite
- Responsive project showcase layout
- Animated content reveal effects
- Loading screen and navigation components
- Interactive project detail modal
- Downloadable project resources
- Technical project documentation with reference assets

## Featured Project

### CCNA Enterprise Network Mega Lab

A multi-site, three-tier enterprise networking lab created in Cisco Packet Tracer.

#### Highlights

- VLAN segmentation
- 802.1Q trunking
- OSPF routing
- HSRPv2 redundancy
- Rapid PVST+
- EtherChannel
- NAT
- DHCP
- DNS
- NTP
- SSH security
- IPv6 configuration
- Wireless LAN support

#### Included Resources

- Cisco Packet Tracer lab file (`.pka`)
- Reference PDF
- Port mapping image
- IP addressing plan image

This project is presented through an interactive modal that allows visitors to view details and access the downloadable files directly from the portfolio.

## Tech Stack

- **React**
- **Vite**
- **JavaScript**
- **CSS / utility-based styling**
- **Cisco Packet Tracer** (for networking project assets)

## Project Structure

````text
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
  package.json
  vite.config.js
````
