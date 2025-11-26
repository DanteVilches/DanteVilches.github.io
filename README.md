# Score Tracker - Dice Game

A mobile-first score tracking app with dice rolling functionality. Perfect for tabletop games, competitions, or any activity where you need to track scores for up to 2 players.

## Features

- **1 or 2 Player Mode**: Select the number of players at the start
- **Tap to Score**: Simply tap your area of the screen to increment your score (max 12 points)
- **Dice Roller**: Roll a 12-sided die for random number generation
- **Custom Player Names**: Edit player names directly from the header
- **Reset Scores**: Clear all scores and start a new game
- **Mobile Optimized**: Designed for mobile devices with large tap targets

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/yourusername/score-tracker.git
cd score-tracker
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New..." → "Project"
4. Select your GitHub repository
5. Click "Deploy"

### Deploy Manually

You can also build and start the app locally:

\`\`\`bash
npm run build
npm run start
\`\`\`

## How to Play

1. **Select Players**: Choose 1 or 2 players at the start
2. **Add Points**: Tap your area (top for Player 1, bottom for Player 2) to increment your score by 1
3. **Roll Dice**: Click the dice button in the header to generate a random number (1-12)
4. **Change Names**: Click on player names in the header to edit them
5. **Reset Game**: Click the reset button (circular arrow) to clear all scores
6. **Switch Players**: Click "Change" to return to player selection

## Tech Stack

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: High-quality React components
- **Lucide React**: Beautiful icon library

## License

MIT

## Contributing

Feel free to fork and submit pull requests!
