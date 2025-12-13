# SSS OJT Practicum Blog 🎓✨

A beautiful, premium dark-themed single-page application showcasing my 600-hour On-the-Job Training experience at the Social Security System (SSS) Pagadian City Branch as a 4th-year BSIT student.

## 🌟 Features

- **Cinematic Hero Section** with typewriter effect and gold particle animation
- **Glassmorphism Design** with subtle gold borders and hover effects
- **Smooth Scroll & Fade-in Animations** for premium user experience
- **Vertical Timeline** showcasing weekly journey
- **Interactive Gallery** with masonry layout
- **Gold Progress Bars** and accent elements
- **Fully Responsive** design for all devices
- **SSS Brand Colors** with luxury gold touches

## 🎨 Design Highlights

- **Background**: `#0a0e1a` (eye-friendly dark)
- **Cards**: `#111827` with glassmorphism
- **SSS Deep Blue**: `#0038A8`
- **SSS Bright Blue**: `#2D87F1`
- **Gold Accent**: `#d4af37`
- **Gold Glow**: `#fbbf24`
- **Text**: `#f1f5f9` / `#94a3b8`

## 📦 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Vanilla JavaScript** - Canvas animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone or download this repository

2. Install pnpm (if not already installed):
```bash
npm install -g pnpm
```

3. Install dependencies:
```bash
pnpm install
```

4. Start the development server:
```bash
pnpm dev
```

5. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist` directory.

## 📝 Customization

### Update Personal Information

Edit the following files to add your personal information:

1. **src/components/PersonalProfile.jsx** - Update name, contact info, skills
2. **src/components/Hero.jsx** - Update profile photo (replace gradient with actual image)
3. **src/components/Gallery.jsx** - Replace gradient placeholders with actual photos
4. **src/components/Contact.jsx** - Update contact details and social links

### Add Your Photos

Replace the gradient placeholders in the Gallery section with your actual OJT photos:

```jsx
// In Gallery.jsx, replace the gradient div with:
<img src="/path/to/your/photo.jpg" alt={image.title} className="w-full h-48 object-cover" />
```

### Customize Content

All content is in the component files under `src/components/`. Edit the text, add more projects, update the timeline, etc.

## 📂 Project Structure

```
sss-ojt-practicum-blog/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Hero section with particles
│   │   ├── PersonalProfile.jsx   # CV-style profile
│   │   ├── Preparation.jsx       # How I prepared
│   │   ├── MyRole.jsx            # Role at SSS
│   │   ├── WeeklyJourney.jsx     # Timeline
│   │   ├── Projects.jsx          # Projects & contributions
│   │   ├── TechStack.jsx         # Skills & tech stack
│   │   ├── Gallery.jsx           # Photo gallery
│   │   ├── Reflections.jsx       # Personal reflections
│   │   └── Contact.jsx           # Contact & footer
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

## 🎯 Sections

1. **Hero** - Cinematic introduction with typewriter effect
2. **Personal Profile** - CV-style information
3. **How I Prepared** - Pre-OJT preparation
4. **My Role at SSS** - Responsibilities and tasks
5. **Weekly Journey** - 24-week timeline
6. **Projects & Contributions** - Major projects
7. **Tech Stack** - Skills with progress bars
8. **Gallery** - Photo collection
9. **Reflections** - Personal insights
10. **Contact & Footer** - Get in touch

## 💡 Tips

- Replace placeholder content with your actual OJT experience
- Add real photos to the gallery for a personal touch
- Update social media links in the Contact section
- Customize colors in `tailwind.config.js` if needed
- Add more projects or timeline entries as needed

## 📄 License

This project is open source and available for personal use.

## 🙏 Acknowledgments

- Social Security System Pagadian City Branch
- My OJT supervisors and colleagues
- Everyone who supported my 600-hour journey

---

Built with ❤️, React, and Tailwind CSS

