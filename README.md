# Portfolio Website

Personal portfolio built with Vite, React, TypeScript, and Tailwind CSS. It highlights projects, certificates, and skills in a fast, responsive UI.

## Tech Stack
- Vite + React 18
- TypeScript
- Tailwind CSS + PostCSS
- ESLint

## Project Structure
- src/ - app source
- src/components/ - UI components (e.g., `ProjectCard`)
- src/data/ - data sources (e.g., certificates)
- public/ - static assets

## Getting Started

### Prerequisites
- Node.js 18.19.0
- npm >= 9

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```

App runs at http://localhost:5173

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## Docker (Optional)
If you prefer a containerized dev environment:

```bash
docker-compose up --build
```

Stop:
```bash
docker-compose down
```

## Environment Variables
Create a `.env` file in the project root if needed:

```
VITE_API_URL=your_api_url_here
```

## Customization
- Update content in src/App.tsx
- Add or edit cards in src/components/ProjectCard.tsx
- Manage certificate data in src/data/certificates.ts
- Style tweaks in src/index.css and tailwind.config.js

## License
MIT
