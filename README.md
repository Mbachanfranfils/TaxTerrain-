# TaxTerrain — Cameroon Property Tax & Investment Intelligence

TaxTerrain is a comprehensive web application designed to provide structured, region-by-region intelligence on property taxation, land regulations, and investment landscapes across all ten regions of Cameroon. 

Built for decision-makers, investors, and developers, TaxTerrain offers a clear, indexed view into the legal and financial frameworks that shape property development in Cameroon.

## 🚀 Features

- **Regional Indexing:** Detailed profiles for all 10 regions of Cameroon (Centre, Littoral, West, South West, North West, South, East, North, Far North, Adamawa).
- **Tax Profiles:** Up-to-date residential and commercial tax rates, land transfer fees, permit costs, and land registration costs.
- **Investment Metrics:** Real-time metrics including urban growth rates, permit approval rates, average land prices (XAF), and active development tracking.
- **Regulatory Reader:** A continuous, easily readable format for complex legal texts covering:
  - Property Tax Laws (CGI references)
  - Land Ownership Rules
  - Construction Permit Policies
  - Zoning Regulations
  - Foreign Investment Rules
  - Environmental Compliance
- **Dynamic UI/UX:** Built with modern web standards featuring smooth scroll reveals, animated counters, and a clean, minimalist design tailored for readability.

## 🛠️ Technology Stack

TaxTerrain is a modern Single Page Application (SPA) built with a robust, type-safe ecosystem:

- **Framework:** [TanStack Start](https://tanstack.com/start/latest) (React)
- **Routing:** [TanStack Router](https://tanstack.com/router/latest)
- **Data Fetching/State:** [TanStack Query](https://tanstack.com/query/latest) (v5)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) (Accessible primitives)
- **Animations:** Framer Motion
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** TypeScript

## 🏗️ Architecture & How It Works

### Data Flow
Currently, the application operates using a sophisticated **Mock Data Strategy** (`src/services/mock/regions.ts`). This allows the frontend to function perfectly and be deployed without relying on an active backend server. 

- Data fetching is handled via `fetchRegions` and `fetchRegionBySlug` in `src/services/api/regions.ts`.
- These API calls are wrapped in TanStack Query (`useQuery`), ensuring smooth caching, loading states, and instant transitions between pages.
- When the production backend API is ready, the application can instantly switch to fetching live data by modifying the `USE_MOCK` boolean.

### Routing
The application uses TanStack Router with a file-based routing tree (`src/routes/`):
- `__root.tsx`: The root shell providing the QueryClient and global layout (Header/Footer).
- `index.tsx`: The home page featuring national signals and the regional grid.
- `regions.index.tsx`: A dedicated page listing all available regions.
- `regions.$slug.tsx`: Dynamic route for individual region profiles, passing the `slug` to fetch specific region data and laws.

### Deployment (Vercel)
The project is configured for static deployment on **Vercel**:
- **SPA Mode:** TanStack Start is configured in `vite.config.ts` to output a Single Page Application (`spa: { enabled: true }`), generating a `_shell.html` file.
- **Vercel Config:** A `vercel.json` file explicitly maps all incoming traffic (`/(.*)`) to `/_shell.html`, allowing TanStack Router to handle client-side routing and preventing `404 NOT_FOUND` errors on direct URL visits.

## 💻 Local Development

### Prerequisites
- Node.js (v18+)
- npm

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Mbachanfranfils/TaxTerrain-.git
   cd cameroon-property-compass-main
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open your browser and navigate to `http://localhost:5173`.

### Building for Production
To build the application for production:
\`\`\`bash
npm run build
\`\`\`
The compiled assets will be located in the `dist/client` directory.
