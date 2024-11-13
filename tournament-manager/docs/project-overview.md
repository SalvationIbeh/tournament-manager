# Tournament Manager

A web-based tournament management system designed for organizing competitions among friends, following UEFA-style team assignments and tournament progression.

## Features

- Tournament creation and management
- Dynamic team allocation based on participant count
- UEFA-style pot system for team assignments
- Match scheduling and result tracking
- Standings and statistics
- Tournament progression through multiple phases

## Tech Stack

- React + Vite
- TypeScript
- Shadcn/UI
- React Router DOM
- Zustand

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/tournament-manager.git
```

2. Install dependencies
```bash
cd tournament-manager
npm install
```

3. Start development server
```bash
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── core/         # shadcn/ui components
│   ├── features/     # feature-specific components
│   └── layouts/      # layout components
├── hooks/
├── lib/
│   ├── types/       # TypeScript interfaces
│   ├── utils/       # Helper functions
│   └── constants/   # Configuration
├── pages/
└── stores/          # State management
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 