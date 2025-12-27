# 🚀 Cinematic Portfolio Website

A fully animated, highly interactive personal portfolio website built with React, TypeScript, and modern web technologies. Features stunning 3D elements, smooth animations, and a cinematic user experience.

## ✨ Features

- **Cinematic Loading Screen** - Animated percentage counter with smooth fade-out
- **3D Background Elements** - Floating shapes and particle fields using Three.js
- **Smooth Scrolling** - Lenis integration for buttery-smooth scroll experience
- **Advanced Animations** - Framer Motion & GSAP for scroll-triggered and micro-interactions
- **Custom Cursor** - Magnetic cursor effect with trail animation
- **Responsive Design** - Fully responsive across all devices
- **Dark Mode** - Beautiful dark theme with neon accent colors
- **Project Filtering** - Filter projects by technology stack
- **Animated Forms** - Interactive contact form with success animation
- **Performance Optimized** - Lazy loading, code splitting, and memoization

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion + GSAP
- **3D Graphics:** Three.js + @react-three/fiber
- **Smooth Scroll:** Lenis
- **Icons:** Inline SVG

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, Layout
│   │   ├── sections/       # Hero, About, Skills, Projects, Experience, Contact
│   │   ├── ui/            # Reusable UI components
│   │   └── three/         # Three.js 3D components
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions and constants
│   ├── data/              # Portfolio data (projects, skills, experience)
│   ├── styles/            # Global styles
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── public/                # Static assets
└── index.html            # HTML template
```

## 🎨 Customization

### 1. Personal Information

Edit `src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  tagline: 'Your Tagline',
  bio: 'Your bio...',
  // ... more fields
};
```

### 2. Projects

Add your projects in `src/data/portfolio.ts`:

```typescript
export const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    image: 'image-url',
    tech: ['React', 'Node.js'],
    liveUrl: 'https://...',
    githubUrl: 'https://...',
  },
  // ... more projects
];
```

### 3. Skills

Customize your skills in `src/data/portfolio.ts`:

```typescript
export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 95, icon: '⚛️' },
      // ... more skills
    ],
  },
];
```

### 4. Experience

Update your work experience in `src/data/portfolio.ts`:

```typescript
export const experience = [
  {
    company: 'Company Name',
    position: 'Your Position',
    duration: '2020 - Present',
    description: ['Achievement 1', 'Achievement 2'],
    technologies: ['React', 'Node.js'],
  },
];
```

### 5. Colors

Modify colors in `tailwind.config.js`:

```javascript
colors: {
  neon: {
    blue: '#00f0ff',
    purple: '#a855f7',
    // ... customize colors
  },
}
```

## 🎭 Animation Customization

### Scroll Animations

Edit `src/utils/animations.ts` to customize animation variants:

```typescript
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};
```

### GSAP Animations

Use custom hooks in `src/hooks/useScrollAnimation.ts`:

```typescript
const elementRef = useFadeIn('up');
```

## 🚀 Performance Tips

1. **Image Optimization**
   - Use WebP format for images
   - Implement lazy loading for images below the fold
   - Use appropriate image sizes for different viewports

2. **Code Splitting**
   - Components are already code-split
   - Three.js components use React Suspense

3. **Bundle Size**
   - Production build is optimized with Vite
   - Large libraries (Three.js, GSAP) are chunked separately

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Icons from Heroicons
- Fonts from Google Fonts
- Images from Unsplash

---

**Built with ❤️ using React, TypeScript, and modern web technologies**