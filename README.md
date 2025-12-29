# Developer Portfolio

A modern, high-performance portfolio website built with React, featuring a bold design aesthetic inspired by street culture and brutalist UI principles.

## Features

- **Home/Hero Page**: Eye-catching landing page with animated elements and profile card
- **About Page**: Personal narrative with education timeline and GitHub contribution calendar
- **Skills Page**: Technical arsenal showcasing frontend, backend, and DevOps proficiencies
- **Projects Page**: Project gallery with filtering capabilities
- **Experience Page**: Professional timeline with detailed role descriptions
- **Contact Page**: Contact form with social links and direct communication options

## Tech Stack

- React 19
- React Router DOM
- React GitHub Calendar
- Custom CSS with CSS Grid and Flexbox
- Google Fonts (Inter & Space Mono)

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## Customization Guide

### 1. Personal Information

Update the following files with your information:

**GitHub Username** (for contribution calendar):
- File: `src/pages/About.js`
- Line: ~129
- Change `username="jkena"` to your GitHub username

**Profile Images**:
Add your images to the `public` folder:
- `profile.jpg` - Home page profile image (aspect ratio 3:4)
- `profile-about.jpg` - About page image (aspect ratio 3:4)
- `project1.jpg` through `project6.jpg` - Project screenshots (aspect ratio 16:10)

**Contact Information**:
- File: `src/pages/Contact.js`
- Update email addresses, social media links, and GitHub profile URLs

### 2. Content Updates

**Education** (`src/pages/About.js`):
- Update the `educationData` array (lines 7-41) with your degrees and certifications

**Experience** (`src/pages/Experience.js`):
- Update the `experiences` array (lines 6-63) with your work history

**Projects** (`src/pages/Projects.js`):
- Update the `projects` array (lines 8-71) with your portfolio projects

**Skills** (`src/pages/Skills.js`):
- Update the `skillsData` object (lines 7-49) with your technical skills

### 3. Color Scheme

The portfolio uses CSS custom properties for easy theming. Edit `src/index.css` (lines 3-13):

```css
:root {
  --primary-bg: #ffffff;
  --dark-bg: #000000;
  --accent-primary: #d4ff00;  /* Neon yellow/lime green */
  --accent-yellow: #ffed00;
  /* ... more colors */
}
```

### 4. Resume/CV

Add your resume PDF to the `public/ref` folder as `Kenan_Dev_Resume.pdf`, or update the links in:
- `src/components/Navigation.js`
- `src/pages/Experience.js`
- `src/pages/Contact.js`

### 5. Form Handling

The contact form in `src/pages/Contact.js` currently logs to console. To make it functional:

1. Set up a backend API or use a service like:
   - [Formspree](https://formspree.io/)
   - [EmailJS](https://www.emailjs.com/)
   - [Netlify Forms](https://www.netlify.com/products/forms/)

2. Update the `handleSubmit` function (line 16) in `src/pages/Contact.js`

### 6. Social Media Links

Update social links throughout the site:
- Navigation: `src/components/Navigation.js`
- Contact Page: `src/pages/Contact.js`

## Project Structure

```
portfolio/
├── public/
│   ├── ref/              # UI design references and resume
│   │   └── Kenan_Dev_Resume.pdf  # Your resume
│   └── profile.jpg       # Your profile images (add these)
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   └── Navigation.css
│   ├── pages/
│   │   ├── Home.js/css
│   │   ├── About.js/css
│   │   ├── Skills.js/css
│   │   ├── Projects.js/css
│   │   ├── Experience.js/css
│   │   └── Contact.js/css
│   ├── App.js
│   ├── App.css
│   └── index.css         # Global styles and design system
└── package.json
```

## Design Philosophy

This portfolio embraces:
- **Bold Typography**: Large, impactful headings
- **Grid Backgrounds**: Technical, developer-focused aesthetic
- **Neon Accents**: High-contrast yellow/lime green highlights
- **Monospace Details**: Code-inspired UI elements
- **Brutalist Cards**: Sharp borders and minimal shadows

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Optimize images before adding them (use WebP format when possible)
- Keep the bundle size small by lazy-loading routes if needed
- Use production build for deployment

## Deployment

Deploy to popular hosting platforms:

**Netlify**:
```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

**Vercel**:
```bash
npm run build
vercel --prod
```

**GitHub Pages**:
1. Add to `package.json`: `"homepage": "https://yourusername.github.io/portfolio"`
2. Install: `npm install --save-dev gh-pages`
3. Add scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## License

MIT License - feel free to use this portfolio template for your own projects!

## Credits

Design inspired by urban aesthetics and modern development culture.
Built with React and a passion for clean, functional code.
