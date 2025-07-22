# Website V2

A pixel-perfect implementation of the Figma design using React, TypeScript, and Tailwind CSS.

## 🎨 Design Source

This website is a complete replication of the Figma design found at:
https://www.figma.com/design/1jkE767nMwe10l0ECdm9Li/MCP-Test?node-id=63-1679&m=dev

## 🚀 Features

- **Pixel-perfect design replication** - Exact colors, typography, and spacing from Figma
- **Responsive design** - Works seamlessly across desktop, tablet, and mobile
- **Modern tech stack** - React 18, TypeScript, Tailwind CSS, Vite
- **Performance optimized** - Fast loading with optimized assets
- **Accessibility focused** - Semantic HTML and proper ARIA labels

## 🎯 Design System

### Colors
- Primary: Electric Lime (#D3FF00)
- Dark: Cod Gray (#1E1E1E), Black (#000000)
- Grays: Custom gray scale from #121212 to #FAFAFA
- Accents: Bahia (#A8D80D), Verdun Green (#436700)

### Typography
- Font Family: Inter (Google Fonts)
- Weights: 400 (Regular), 500 (Medium)
- Custom font sizes matching Figma specifications

### Layout
- Max widths: 1200px, 1600px containers
- Custom spacing system from Figma variables
- Grid-based layouts with responsive breakpoints

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx           # Hero section with device mockups
│   ├── Features.tsx       # Feature cards and stats
│   ├── TextSection.tsx    # Content sections
│   ├── CodeSection.tsx    # Dark code/terminal section
│   ├── TeamSection.tsx    # Team member cards
│   └── Footer.tsx         # Footer with links
├── App.tsx                # Main app component
├── main.tsx              # React entry point
└── index.css             # Global styles
```

## 🛠 Installation & Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 📱 Sections

1. **Header** - Clean navigation with logo and menu
2. **Hero** - Large heading with floating device mockups
3. **Features** - Service cards with icons and descriptions
4. **Text Sections** - Content blocks with design/development focus
5. **Code Section** - Dark terminal and code examples
6. **Team** - Team member cards with CTA
7. **Footer** - Company info and links

## 🎨 Figma Integration

This project uses variables and design tokens extracted directly from Figma:
- Color palette matches Figma color variables
- Typography scales use exact Figma font specifications
- Spacing system mirrors Figma's spacing tokens
- Component structure follows Figma layer organization

## 📄 License

This project is created as a Figma design replication exercise. 