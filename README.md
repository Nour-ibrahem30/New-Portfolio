# New Portfolio 🚀

A modern, responsive personal portfolio built with React, TypeScript, and SCSS. Features a macOS-inspired design with interactive modals and smooth animations.

## ✨ Features

- **Modern Design**: Clean, professional interface with macOS-inspired elements
- **Interactive Modals**: Draggable, resizable modal windows for different sections
- **Project Gallery**: Showcase of personal projects with detailed information
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: CSS animations and transitions for better UX
- **Contact Integration**: Direct email and WhatsApp contact options
- **PDF Resume**: Integrated PDF viewer for resume display
- **Spotify Integration**: Personal Spotify profile integration

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: SCSS, Bootstrap 5
- **Build Tool**: Vite
- **Icons**: Font Awesome 6
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Main hero section with carousel
│   ├── Modal.tsx       # Reusable modal component
│   ├── Navbar.tsx      # Navigation bar
│   ├── Projects.tsx    # Projects gallery
│   └── Resume.tsx      # Resume section
├── data/               # Data files
│   ├── projects/       # Project data
│   ├── skills/         # Skills data
│   ├── experience/     # Experience data
│   └── contact/        # Contact information
├── styles/             # SCSS styles
│   └── main.scss       # Main stylesheet
├── App.tsx             # Main App component
└── main.tsx            # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nour-ibrahem30/New-Portfolio.git
cd New-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Customization

### Adding New Projects
Edit `src/data/projects/projects.ts` to add new projects:

```typescript
export const projectsData: Record<string, ProjectData> = {
  'your-project': {
    name: 'Your Project Name',
    description: 'Project description',
    technologies: ['React', 'TypeScript'],
    image: '/assets/images/your-image.webp',
    highlights: ['Feature 1', 'Feature 2'],
    learning: 'What you learned from this project'
  }
}
```

### Updating Contact Information
Modify `src/data/contact/contact.ts` with your details:

```typescript
export const contactData: ContactData = {
  email: 'your-email@example.com',
  phone: '+1234567890',
  location: 'Your Location',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername'
  }
}
```

## 🌐 Deployment

The project is configured for GitHub Pages deployment:

1. Update the `base` path in `vite.config.ts` if needed
2. Run the deploy script:
```bash
npm run deploy
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## 🎯 Performance Features

- **Lazy Loading**: Images and components load on demand
- **Optimized Assets**: Compressed images and minified code
- **Fast Loading**: Vite's fast build system for quick development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨💻 Author

**Nour Ibrahem**
- GitHub: [@Nour-ibrahem30](https://github.com/Nour-ibrahem30)
- LinkedIn: [Nour Ibrahem](https://www.linkedin.com/in/nour-ibrahem-499172346/)
- Email: nouribrahem207@gmail.com

## 🙏 Acknowledgments

- Bootstrap for the responsive grid system
- Font Awesome for the beautiful icons
- Vite for the amazing build tool
- React community for the excellent documentation