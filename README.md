# Bhagyashree Jagadev - Portfolio Website

A clean, modern portfolio website for Bhagyashree Jagadev, BCA Graduate, built with Next.js 16, React 19, and Tailwind CSS.

## About

Portfolio website showcasing:
- BCA Graduate from SSMS BCA College, Athani (89%)
- Full Stack Developer Intern at Nighan2 Labs Pvt. Ltd.
- Skills: Python, Java, C, HTML, CSS, JavaScript, MySQL, MongoDB
- Projects: Job Portal, Data Analysis - EDA
- Certifications in Front End Development, Back End Development, and GitHub Co-pilot

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── sections/          # Page sections (Hero, About, etc.)
│   ├── ui/                # Reusable UI components
│   └── providers/         # Context providers
├── lib/
│   ├── data.ts            # Portfolio data
│   ├── types.ts           # TypeScript types
│   ├── constants.ts       # App constants
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Customization

Edit `lib/data.ts` to update your portfolio information including:
- Personal info
- Work experience
- Education
- Skills/Tools
- Contact details
