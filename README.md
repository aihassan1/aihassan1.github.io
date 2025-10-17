# Backend Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://aihassan1.github.io)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue)](https://github.com/aihassan1/aihassan1.github.io)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com)

> A modern, responsive portfolio website showcasing backend engineering expertise, projects, and professional experience.

**Live Site:** [https://aihassan1.github.io](https://aihassan1.github.io)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Customization](#customization)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## 🎯 Overview

This portfolio website is designed for **Abdelrahman Ibrahim Hassan**, a Backend Software Engineer specializing in Node.js, NestJS, MongoDB, and PostgreSQL. The site features a modern dark theme with emerald green accents and showcases:

- Professional work experience
- Technical projects with live links
- Comprehensive skill set
- Verified certifications
- Volunteer work
- Contact information

---

## ✨ Features

- 🌙 **Dark Theme** - Modern dark design with emerald green accents
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with Vite for lightning-fast loading
- 🎨 **shadcn/ui Components** - Beautiful, accessible UI components
- 🔗 **Certificate Verification** - Direct links to verified certificates
- 🚀 **Single Page Application** - Smooth scrolling navigation
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- ♿ **Accessible** - WCAG compliant with keyboard navigation

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library with modern hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling
- **Wouter** - Lightweight routing (< 2KB)

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icon library

### Deployment
- **GitHub Pages** - Free static site hosting
- **GitHub Actions** - Automated deployment (optional)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: v22.13.0)
- **pnpm** (package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aihassan1/aihassan1.github.io.git
   cd aihassan1.github.io
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build locally
pnpm lint         # Run ESLint
pnpm type-check   # Check TypeScript types
```

---

## 📁 Project Structure

```
portfolio/
├── client/                      # Frontend application
│   ├── public/                  # Static assets
│   │   └── profile.png         # Profile picture (replace this!)
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   └── ui/             # shadcn/ui components
│   │   ├── pages/
│   │   │   └── Home.tsx        # ⭐ MAIN CONTENT FILE
│   │   ├── App.tsx             # Root component
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Global styles & theme
│   └── index.html              # HTML template
├── shared/
│   └── const.ts                # App constants
├── package.json                # Dependencies
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript config
├── vite.config.ts              # Vite config
└── README.md                   # This file
```

### Key Files

| File | Purpose |
|------|---------|
| `client/src/pages/Home.tsx` | **ALL portfolio content** - sections, text, links |
| `client/src/index.css` | Theme colors and global styles |
| `client/public/profile.png` | Your profile picture |
| `shared/const.ts` | App title and configuration |

---

## 📝 Content Management

### 🎯 Main Content File

**All portfolio content is in ONE file:** `client/src/pages/Home.tsx`

This file contains these sections (in order):
1. **Navigation** - Top menu bar
2. **Hero** - Name, title, summary, profile picture
3. **About Me** - Background, languages, contact info
4. **Work Experience** - Job history with achievements
5. **Featured Projects** - Portfolio projects
6. **Technical Skills** - Technologies and tools
7. **Education & Certifications** - Degrees and certificates
8. **Volunteer Work** - Community involvement
9. **Get In Touch** - Contact section and footer

---

## 🔧 How to Update Content

### 1. Update Work Experience

**Location:** `client/src/pages/Home.tsx` → Work Experience section

**Steps:**
1. Find the Work Experience section (around line 135)
2. Copy an existing `<Card>` component
3. Update the content:

```tsx
<Card>
  <CardHeader>
    <div className="flex justify-between items-start mb-2">
      <div>
        <CardTitle className="text-xl">Your Job Title</CardTitle>
        <CardDescription className="text-base">Company Name (Full-Time)</CardDescription>
      </div>
      <Badge variant="secondary">Start Date – End Date</Badge>
    </div>
    <p className="text-sm text-muted-foreground">City, Country</p>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2 text-sm text-muted-foreground">
      <li>• Your achievement or responsibility 1</li>
      <li>• Your achievement or responsibility 2</li>
      <li>• Your achievement or responsibility 3</li>
    </ul>
  </CardContent>
</Card>
```

**Tips:**
- Use bullet points (•) for list items
- Focus on achievements and technologies used
- Keep descriptions professional and concise

---

### 2. Add a New Project

**Location:** `client/src/pages/Home.tsx` → Featured Projects section

**Steps:**
1. Find the Featured Projects section (around line 189)
2. Add a new project card:

```tsx
<Card className="hover:border-primary transition-colors">
  <CardHeader>
    <div className="flex justify-between items-start">
      <div>
        <CardTitle className="text-xl">Project Name</CardTitle>
        {/* Optional: Add live link */}
        <a href="https://your-project-url.com" target="_blank" rel="noopener noreferrer" 
           className="text-xs text-primary flex items-center gap-1 mt-1">
          View Live <ExternalLink className="w-3 h-3" />
        </a>
      </div>
      <Code2 className="w-5 h-5 text-primary" />
    </div>
    <CardDescription>Brief one-line description</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground mb-4">
      Detailed description of what you built, key features, 
      and technical challenges you solved.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary">Node.js</Badge>
      <Badge variant="secondary">NestJS</Badge>
      <Badge variant="secondary">PostgreSQL</Badge>
      {/* Add more technology badges */}
    </div>
  </CardContent>
</Card>
```

**Available Icons:**
- `<Code2 />` - General projects
- `<Database />` - Database projects
- `<Server />` - Backend/API projects
- `<GitBranch />` - Open source projects

---

### 3. Add a Certificate

**Location:** `client/src/pages/Home.tsx` → Education & Certifications section

**Steps:**
1. Find the certifications section (around line 383)
2. Add a new certificate card:

```tsx
<Card>
  <CardHeader>
    <div className="flex justify-between items-start">
      <div>
        <CardTitle>Certificate Name</CardTitle>
        <CardDescription>Issuing Organization</CardDescription>
      </div>
      <Badge variant="secondary">Month Year</Badge>
    </div>
  </CardHeader>
  <CardContent>
    <a href="https://certificate-verification-url.com" 
       target="_blank" rel="noopener noreferrer" 
       className="text-xs text-primary flex items-center gap-1">
      View Certificate <ExternalLink className="w-3 h-3" />
    </a>
  </CardContent>
</Card>
```

**Important:** Always include verification links for credibility!

---

### 4. Update Skills

**Location:** `client/src/pages/Home.tsx` → Technical Skills section

**Steps:**
1. Find the Technical Skills section (around line 307)
2. Add or remove skill badges:

```tsx
<Badge variant="secondary">New Skill</Badge>
```

**Skill Categories:**
- **Languages** - Programming languages
- **Frameworks & Libraries** - Backend/frontend frameworks
- **Databases** - Database systems
- **Tools & Technologies** - DevOps, version control, etc.

---

### 5. Update Professional Summary

**Location:** `client/src/pages/Home.tsx` → Hero section (around line 44)

**Current summary:**
```tsx
<p className="text-xl text-muted-foreground mb-8 leading-relaxed">
  Your professional summary here. Keep it concise (2-3 sentences).
  Highlight your core technologies and unique value proposition.
</p>
```

**Guidelines:**
- Keep it 2-3 sentences
- Mention core technologies
- Highlight achievements or specializations
- Use action words: "Specialized", "Proven", "Skilled in"

---

### 6. Change Profile Picture

**Steps:**
1. Replace `client/public/profile.png` with your photo
2. Keep the filename as `profile.png` (recommended)
3. Or update the reference in `Home.tsx` (line ~71):
   ```tsx
   <img src="/your-new-image.png" alt="Your Name" />
   ```

**Recommended specs:**
- Format: PNG or JPG
- Size: 500x500px minimum
- Aspect ratio: Square (1:1)
- File size: < 500KB

---

### 7. Update Contact Information

**Locations to update:**

| Info | Location 1 (About) | Location 2 (Footer) |
|------|-------------------|---------------------|
| Email | Line ~105 | Line ~595 |
| Phone | Line ~106 | Line ~603 |
| Location | Line ~107 | Line ~611 |
| GitHub | Line ~59 | Line ~619 |
| LinkedIn | Line ~62 | Line ~627 |

**Example:**
```tsx
{/* About section */}
<Mail className="w-4 h-4 text-primary" />
<span>your-email@example.com</span>

{/* Footer section */}
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>
```

---

## 🎨 Customization

### Change Accent Color

The current accent color is **emerald green**. To change it:

1. **Open** `client/src/index.css`
2. **Find** the `.dark` section (line 81)
3. **Update** these two lines:

```css
.dark {
  --primary: oklch(0.68 0.15 166);  /* Change this */
  --ring: oklch(0.68 0.15 166);     /* Change this too */
  /* ... */
}
```

**Color Examples (OKLCH format):**
- **Emerald Green (current):** `oklch(0.68 0.15 166)`
- **Blue:** `oklch(0.60 0.20 250)`
- **Purple:** `oklch(0.60 0.20 300)`
- **Orange:** `oklch(0.65 0.20 50)`
- **Pink:** `oklch(0.65 0.20 350)`

**Tool:** Use [oklch.com](https://oklch.com) to pick colors

---

### Change App Title

**File:** `shared/const.ts`

```typescript
export const APP_TITLE = "Your Name - Your Title";
export const APP_LOGO = "/logo.png";
```

This updates:
- Browser tab title
- Meta tags for SEO
- Social media sharing

---

## 🚀 Deployment

### Deploy to GitHub Pages

#### Step 1: Build the Project
```bash
pnpm build
```

This creates a `dist/public/` folder with your production files.

#### Step 2: Deploy to gh-pages Branch

**Option A: Manual Deployment (Recommended)**

```bash
# Switch to gh-pages branch
git checkout gh-pages

# Remove old files
rm -rf assets index.html

# Copy new build
cp -r dist/public/* .

# Commit changes
git add -A
git commit -m "Deploy: Updated portfolio content"

# Push to GitHub
git push origin gh-pages

# Switch back to master
git checkout master
```

**Option B: Quick Deploy Script**

Create a file `deploy.sh`:
```bash
#!/bin/bash
pnpm build
git checkout gh-pages
rm -rf assets index.html
cp -r dist/public/* .
git add -A
git commit -m "Deploy: $(date)"
git push origin gh-pages
git checkout master
echo "✅ Deployed successfully!"
```

Make it executable and run:
```bash
chmod +x deploy.sh
./deploy.sh
```

#### Step 3: Enable GitHub Pages

1. Go to your repository settings: `https://github.com/aihassan1/aihassan1.github.io/settings/pages`
2. Under **Source**, select: **gh-pages** branch
3. Folder: **/ (root)**
4. Click **Save**

Wait 2-3 minutes, then visit: **https://aihassan1.github.io**

---

### Deployment Checklist

Before deploying, make sure:

- ✅ All content is updated and proofread
- ✅ Profile picture is in place
- ✅ All links work (test locally)
- ✅ Contact information is correct
- ✅ Certificate verification links are valid
- ✅ Build completes without errors (`pnpm build`)
- ✅ Preview looks good (`pnpm preview`)

---

## 🐛 Troubleshooting

### Issue: Changes not showing after deployment

**Solution:**
1. Hard refresh your browser: `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Try incognito/private mode
4. Wait 2-3 minutes for GitHub Pages to rebuild

---

### Issue: Build fails with errors

**Solution:**
```bash
# Clean install
rm -rf node_modules
pnpm install

# Try building again
pnpm build
```

Check the error message for specific issues.

---

### Issue: GitHub Pages not updating

**Solution:**
1. Check if `gh-pages` branch has your latest commit
2. Verify GitHub Pages settings point to `gh-pages` branch
3. Check GitHub Actions tab for deployment status
4. Wait 2-3 minutes for propagation

---

### Issue: Styling looks broken

**Solution:**
1. Check if `index.css` has all theme variables
2. Verify `tailwind.config.ts` is correct
3. Clear build cache: `rm -rf dist`
4. Rebuild: `pnpm build`

---

### Issue: Profile picture not showing

**Solution:**
1. Check file exists: `client/public/profile.png`
2. Verify filename matches in `Home.tsx`
3. Check file permissions
4. Try a different image format (PNG/JPG)

---

## 📚 Additional Resources

### Documentation
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Vite Guide](https://vitejs.dev/guide/)

### Tools
- [OKLCH Color Picker](https://oklch.com)
- [Lucide Icons](https://lucide.dev)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

## 📞 Contact

**Abdelrahman Ibrahim Hassan**  
Backend Software Engineer

- 📧 Email: [abdelrahmanibrahimm46@gmail.com](mailto:abdelrahmanibrahimm46@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/abdelrahman-ibrahim-hassan](https://www.linkedin.com/in/abdelrahman-ibrahim-hassan/)
- 🐙 GitHub: [github.com/aihassan1](https://github.com/aihassan1)
- 🌐 Portfolio: [aihassan1.github.io](https://aihassan1.github.io)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **shadcn/ui** - For the beautiful component library
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the icon library
- **GitHub Pages** - For free hosting

---

## 🔄 Version History

### v1.0.0 (October 2025)
- ✨ Initial portfolio release
- 🌙 Dark theme with emerald green accents
- 📱 Fully responsive design
- 🎯 All sections: Hero, About, Experience, Projects, Skills, Certifications, Volunteering, Contact
- 🚀 Deployed to GitHub Pages

---

**Made with ❤️ and React**

⭐ If you found this portfolio template helpful, consider giving it a star!

---

## 🚀 Quick Start Commands

```bash
# Clone and setup
git clone https://github.com/aihassan1/aihassan1.github.io.git
cd aihassan1.github.io
pnpm install

# Development
pnpm dev              # Start dev server

# Build and deploy
pnpm build            # Build for production
git checkout gh-pages # Switch to deployment branch
cp -r dist/public/* . # Copy build files
git add -A && git commit -m "Deploy" && git push origin gh-pages
git checkout master   # Back to main branch
```

---

**Happy Coding! 🎉**

