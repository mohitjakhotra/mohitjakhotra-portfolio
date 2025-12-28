# Mohit Jakhotra - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with dark mode support
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Fast Performance**: Static generation and optimized images
- **Professional Sections**:
  - Homepage with hero section
  - About page with career journey
  - Experience timeline
  - Skills showcase with certifications
  - Projects portfolio
  - Blog integration
  - Contact form

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **UI Components**: Headless UI
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Analytics**: Vercel Analytics
- **Content**: MDX for blog posts

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/mohitjakhotra/mohitjakhotra-portfolio.git
cd mohitjakhotra-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

This project is optimized for deployment on **Vercel** or **Netlify**:

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. Add your custom domain in Vercel settings

### Netlify Deployment
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variables in Netlify dashboard (see EmailJS setup above)
5. Deploy and add your custom domain

**Note**: Environment variables must be set in the deployment platform's dashboard, not committed to the repository.

## 📁 Project Structure

```
├── components/          # Reusable UI components
│   ├── Footer.tsx      # Site footer
│   ├── Navbar.tsx      # Navigation bar
│   └── ProjectCard.tsx # Project showcase card
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   ├── index.tsx       # Homepage
│   ├── about.tsx       # About page
│   ├── experience.tsx  # Experience timeline
│   ├── skills.tsx      # Skills & certifications
│   ├── projects.tsx    # Projects showcase
│   ├── blog.tsx        # Blog posts
│   └── contact.tsx     # Contact page
├── public/             # Static assets
├── styles/             # Global styles
│   └── globals.css     # Tailwind imports
└── package.json        # Dependencies and scripts
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `pages/index.tsx` - Hero section and personal details
- `pages/about.tsx` - About content and career story
- `pages/experience.tsx` - Work experience details
- `pages/skills.tsx` - Skills and certifications
- `pages/projects.tsx` - Project portfolio
- `pages/contact.tsx` - Contact information

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Global styles are in `styles/globals.css`
- Component-specific styles are inline with Tailwind classes

## 📋 Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] **Set up EmailJS for contact form**:
  1. Create a free account at [emailjs.com](https://www.emailjs.com/)
  2. Create an email service (Gmail, Outlook, etc.)
  3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, `{{to_name}}`
  4. Copy your Service ID, Template ID, and Public Key
  
  **For Local Development:**
  - Copy `.env.local.example` to `.env.local`
  - Update the values in `.env.local` with your EmailJS credentials
  
  **For Netlify Deployment:**
  - Go to your Netlify dashboard → Site Settings → Environment Variables
  - Add these environment variables:
    - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = your_service_id
    - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = your_template_id
    - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = your_public_key
  
  **For Vercel Deployment:**
  - Go to your Vercel dashboard → Project Settings → Environment Variables
  - Add the same environment variables as above

- [ ] Add your CV/resume as `public/Mohit-Jakhotra-CV.pdf`
- [ ] Replace the avatar placeholder in `pages/index.tsx` with your actual photo
- [ ] Verify all GitHub repository links are accessible
- [ ] Update contact email if needed
- [ ] Test the build locally: `npm run build`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Mohit Jakhotra**
- Website: [mohitjakhotra.tech](https://mohitjakhotra.tech)
- LinkedIn: [linkedin.com/in/mohitjakhotra](https://linkedin.com/in/mohitjakhotra)
- GitHub: [github.com/mohitjakhotra](https://github.com/mohitjakhotra)
- Email: hello@mohitjakhotra.tech

---

Built with ❤️ using Next.js and deployed on Vercel.
