# Portfolio Setup Guide

## Quick Start

Your portfolio has been created with all the pages and components based on the UI designs in `public/ref/`. Follow these steps to customize and launch it.

## 1. Start Development Server

```bash
cd portfolio
npm start
```

The portfolio will open at `http://localhost:3000`

## 2. Immediate Customization Tasks

### Priority 1: Personal Information

**GitHub Username for Contribution Calendar**
- Open: `src/pages/About.js`
- Find line 129: `<GitHubCalendar username="jkena" ...`
- Replace `"jkena"` with your actual GitHub username

**Email and Contact Info**
- Open: `src/pages/Contact.js`
- Update all instances of `hello@devfolio.com` with your email
- Update social media links (GitHub, LinkedIn, Twitter)

**Name and Branding**
- Search for "DEV.FOLIO" and "DEV_PORTFOLIO" across files and replace with your name/brand

### Priority 2: Add Your Images

Add these images to the `public/` folder:

1. **profile.jpg** - Your main photo for the home page (recommended: 600x800px, portrait)
2. **profile-about.jpg** - Photo for about page (recommended: 600x800px, portrait)
3. **project1.jpg** through **project6.jpg** - Screenshots of your projects (recommended: 1600x1000px each)
4. **resume.pdf** - Your resume/CV file

**Image Tips:**
- Use high-quality images (but optimize for web)
- Consider using grayscale or minimalist photos to match the design
- All images should be professional and high-resolution

### Priority 3: Update Content

**Education** - `src/pages/About.js` (lines 7-41)
```javascript
const educationData = [
  {
    year: 'YOUR_YEARS',
    degree: 'YOUR_DEGREE',
    institution: 'YOUR_SCHOOL',
    // ... update all fields
  }
];
```

**Experience** - `src/pages/Experience.js` (lines 6-63)
```javascript
const experiences = [
  {
    role: 'YOUR_ROLE',
    company: 'YOUR_COMPANY',
    // ... update all fields
  }
];
```

**Projects** - `src/pages/Projects.js` (lines 8-71)
```javascript
const projects = [
  {
    title: 'YOUR_PROJECT',
    description: 'PROJECT_DESCRIPTION',
    // ... update all fields
  }
];
```

**Skills** - `src/pages/Skills.js` (lines 7-49)
```javascript
const skillsData = {
  frontend: [
    { name: 'YOUR_SKILL', mastery: 90, ... },
  ],
  // ... update all categories
};
```

## 3. Color Customization (Optional)

Edit `src/index.css` to change the color scheme:

```css
:root {
  --accent-primary: #d4ff00;  /* Change to your accent color */
  --dark-bg: #000000;         /* Main dark color */
  --primary-bg: #ffffff;      /* Background color */
}
```

## 4. Connect Contact Form

The contact form currently just logs to console. To make it functional:

**Option A: Use Formspree (Easiest)**
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form endpoint
3. Update `src/pages/Contact.js`:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  if (response.ok) {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  }
};
```

**Option B: Use EmailJS**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Follow their React integration guide
3. Update the `handleSubmit` function accordingly

## 5. Deploy Your Portfolio

### Option 1: Netlify (Recommended)
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `build` folder
4. Done! Your site is live.

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `npm run build`
3. Run: `vercel --prod`
4. Follow the prompts

### Option 3: GitHub Pages
1. Update `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/portfolio"
```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add to scripts in `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
4. Deploy: `npm run deploy`

## 6. Testing Checklist

Before deploying, check:
- [ ] All images load correctly
- [ ] GitHub contribution calendar shows your activity
- [ ] All navigation links work
- [ ] Contact form submits (if connected to a service)
- [ ] Resume/CV downloads work
- [ ] Social media links are correct
- [ ] Mobile responsiveness looks good
- [ ] All personal information is updated
- [ ] No placeholder text remains

## Common Issues

**Images not showing:**
- Make sure images are in the `public/` folder
- Use exact filenames as referenced in components
- Clear browser cache and refresh

**GitHub calendar not showing:**
- Verify your GitHub username is correct
- Make sure your GitHub profile is public
- Check browser console for errors

**Page not found on refresh (after deployment):**
- Add a `_redirects` file (Netlify) or `vercel.json` (Vercel)
- For Netlify, create `public/_redirects` with: `/*    /index.html   200`

## Need Help?

- Check the main README.md for more detailed information
- Review the UI design references in `public/ref/`
- All components are well-commented for easy customization

## Pages Overview

1. **Home** (`/`) - Hero landing page with profile card
2. **About** (`/about`) - Personal story + education + GitHub calendar
3. **Skills** (`/skills`) - Technical skills categorized by type
4. **Work** (`/work`) - Portfolio projects with filtering
5. **Experience** (`/experience`) - Professional timeline
6. **Contact** (`/contact`) - Contact form and social links

Good luck with your portfolio! 🚀
