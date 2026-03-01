# Corvalt Landing Page

Live Demo: https://corvalt-landing-page.vercel.app/

## 📖 Introduction

Corvalt Landing Page is a modern, responsive marketing website built to showcase an AI-powered workspace product. The project is developed using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, offering high performance, scalability, and clean UI design.

This landing page includes:

- Hero section
- Feature highlights
- Pricing section
- Contact section
- Responsive navigation
- Footer

It is optimized for performance and ready for deployment on platforms like Vercel.

---

## 📚 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)

---

## ⚙️ Installation

### Prerequisites

Make sure you have installed:

- Node.js (v18+ recommended)
- npm or yarn

### Steps

```bash
# Clone the repository
git clone https://github.com/FIlham/corvalt-landing-page

# Navigate into the project directory
cd corvalt-landing-page

# Install dependencies
npm install
```
## 🚀 Usage
### Start Development Server
```bash
npm run dev
```
The app will run locally at:
```
http://localhost:5173
```
### Build for Production
```bash
npm run build
```
### Preview Production Build
```bash
npm run preview
```

## ✨ Features
- ⚡ Built with Vite for fast development
- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for modern UI styling
- 📱 Fully responsive design
- 🧩 Component-based architecture
- 🌈 Gradient UI effects and smooth transitions
- 🔍 ESLint configuration for code quality
- 🧱 Scalable folder structure

## 🛠 Tech Stack
- Frontend Framework: React 18
- Language: TypeScript
- Build Tool: Vite
- Styling: Tailwind CSS
- Icons: Lucide React
- Linting: ESLint

## 📁 Project Structure
```
corvalt-landing-page/
│
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── eslint.config.js
└── package.json
```
## 📦 Dependencies
### Main Dependencies
- `react`
- `react-dom`
- `lucide-react`
- `@supabase/supabase-js` (installed but not currently integrated into the contact form)

### Dev Dependencies
- `vite`
- `typescript`
- `tailwindcss`
- `postcss`
- `autoprefixer`
- `eslint`
- `@vitejs/plugin-react`

## 🔧 Configuration
### Tailwind CSS
Tailwind configuration is located in:
```
tailwind.config.js
```
You can customize:
- Theme colors
- Fonts
- Spacing
- Breakpoints

### TypeScript Configuration
TypeScript settings are defined in:
- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`

### ESLint Configuration
Linting rules are configured in:
```
eslint.config.js
```
Run lint checks with:
```bash
npm run lint
```

## 📤 Deployment
This project is ready to deploy on:
- Vercel (recommended)
- Netlify
- Any static hosting provider

### Deploy to Vercel
```bash
npm run build
```
Then upload the dist/ folder or connect your GitHub repository directly to Vercel.

## 🎨 Customization
You can easily customize:
- Branding colors in Tailwind config
- Text content in component files
- Pricing tiers in Pricing.tsx
- Contact details in Contact.tsx
- Hero content in Hero.tsx

To connect the contact form to a backend (e.g., Supabase), you can:
- Configure environment variables
- Create a submission handler
- Store form data in a database

## 🐛 Troubleshooting
###Port Already in Use
If port 5173 is in use:
```bash
npm run dev -- --port 3000
```
### Dependencies Not Installing
Try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Ensure:
- Node.js version is compatible
- TypeScript types are installed
- No ESLint errors blocking compilation

**Corvalt – Empowering AI-Driven Workspaces**
