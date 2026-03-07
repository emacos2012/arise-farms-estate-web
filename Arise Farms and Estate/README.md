# Arise Farms and Estate

A modern real estate website built with React and Vite, deployed on Vercel.

## 🏠 About

Arise Farms and Estate is a premium real estate platform showcasing properties, services, and company information. The website features a modern design with responsive layouts for an optimal user experience across all devices.

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Routing**: React Router DOM 7
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/emacos2012/arise-farms-estate-web.git
```

2. Navigate to the project directory:
```bash
cd arise-farms-estate-web/Arise\ Farms\ and\ Estate
```

3. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
Arise Farms and Estate/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Products.jsx
│   │   └── Services.jsx
│   ├── App.jsx        # Main app component
│   ├── App.css        # App styles
│   ├── index.css      # Global styles
│   └── main.jsx       # Entry point
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
├── vercel.json        # Vercel deployment config
└── package.json       # Dependencies
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

This project is configured for deployment on Vercel.

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Vite and configure the build settings
4. Your site will be live at your-vercel-url.vercel.app

### Manual Vercel Deployment

```bash
npm install -g vercel
vercel
```

## 📝 License

This project is for demonstration purposes.

## 👏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - The library for web and native user interfaces
- [Vercel](https://vercel.com/) - Develop. Preview. Ship.

