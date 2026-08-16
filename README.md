#  Waliur Rahman — macOS Portfolio

> A personal portfolio designed to feel less like a website and more like a desktop.

**Live:** [waliurrahman.dev](https://waliurrahman.dev)  
**GitHub:** [github.com/WaliurR029](https://github.com/WaliurR029)

---

## About

This is my personal portfolio, rebuilt as a macOS-inspired desktop environment.

Instead of presenting my work through the usual sections, cards, and scrolling pages, I wanted to create something that feels more like an actual operating system — where projects, photos, resume, contact information, and other parts of my profile live inside interactive windows.

You can open Finder, browse through my projects, view images in Photos, read about my work, open links through Safari, and even interact with a terminal-like interface.

The goal wasn't just to make a portfolio that looks good.

It was to make one that feels memorable.

---

## What You Can Explore

### Finder
Browse my projects through a familiar macOS-style file system.

Each project has its own folder containing:

- Project overview
- Project images
- GitHub links
- Additional project information

### Photos
A dedicated gallery for exploring selected images and project visuals.

### Resume
A quick way to view my professional and academic background.

### Safari
External projects and links can be opened directly through the portfolio.

### Terminal
A terminal-inspired interface for a little extra personality.

### Contact
Find my social profiles and ways to get in touch.

---

## Featured Projects

### ChronoLogic

**Hybrid Neuro-Symbolic Framework for Constraint-Aware Personal Task Scheduling**

ChronoLogic is an AI-powered productivity and task scheduling system that combines Generative AI, mathematical optimization, and neuro-symbolic computing.

It analyzes tasks based on factors such as cognitive workload, procrastination risk, complexity, and urgency before generating a more intelligent execution order.

**Built with:**

`Python` `PyQt6` `Django REST Framework` `MongoDB` `MongoEngine` `Google Gemini API` `JWT` `Matplotlib`

 [View on GitHub](https://github.com/ChronoLogic-Team/ChronoLogic)

---

### AgroVision

**AI-Powered Plant Disease Detection & Crop Advisory System**

AgroVision uses computer vision and deep learning to identify plant diseases from crop leaf images and provide useful agricultural guidance.

The project uses transfer learning with MobileNetV2 and the PlantVillage dataset, alongside image preprocessing and augmentation techniques.

**Built with:**

`Python` `TensorFlow` `Keras` `MobileNetV2` `OpenCV` `NumPy` `Scikit-learn` `Matplotlib` `Streamlit`

[View on GitHub](https://github.com/WaliurR029/AgroVision)

---

### TODO App with Swing

A simple desktop task-management application built with Java Swing.

The application focuses on the fundamentals of desktop GUI development, allowing users to add, complete, and remove everyday tasks through a straightforward interface.

**Built with:**

`Java` `Swing`

[View on GitHub](https://github.com/WaliurR029/TODO-app-with-Swing)

---

## Tech Stack

The portfolio itself is built with:

| Technology | Purpose |
|---|---|
| React | UI and component architecture |
| Vite | Development and production build tooling |
| Tailwind CSS | Styling and responsive layouts |
| JavaScript | Application logic |
| Zustand | State management |
| Lucide React | Interface icons |
| GSAP | Animations and interactions |
| Git & GitHub | Version control and deployment |
| GitHub Pages | Hosting |

---

## Architecture

The project follows a component-based React structure with reusable windows and shared state.

```text
src/
├── components/
│   ├── ...
│
├── constants/
│   ├── ...
│
├── hoc/
│   ├── WindowWrapper.jsx
│
├── store/
│   ├── location.js
│   ├── window.js
│
├── windows/
│   ├── Contact.jsx
│   ├── Finder.jsx
│   ├── ImgFile.jsx
│   ├── Photos.jsx
│   ├── Resume.jsx
│   ├── Safari.jsx
│   ├── Terminal.jsx
│   ├── Txtfile.jsx
│   └── index.js
│
└── ...
