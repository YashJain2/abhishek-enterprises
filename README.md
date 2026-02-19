# Abhishek Enterprises

Production-ready website for **Abhishek Enterprises** — electrical solutions (switches, LED lights, multimeters, plugs, wires, heavy duty industrial electronics) at New Industrial Township, Faridabad 121001.

## Stack

- **React 18** + **TypeScript**
- **Vite** (build & dev server)
- **React Router** (client-side routing)
- CSS Modules (scoped, responsive styles)

## Commands

```bash
# Install dependencies
npm install

# Development (with hot reload)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Deploy on Vercel

1. Push the repo to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com), sign in, and click **Add New** → **Project**.
3. Import the repository. Vercel will detect Vite and use the build settings from `vercel.json`.
4. Deploy. All routes (e.g. `/blog`, `/contact`) are rewritten to `index.html` for client-side routing.

To deploy from the CLI: install the [Vercel CLI](https://vercel.com/cli), run `vercel` in the project root, and follow the prompts.

## Structure

- `src/components/` — Layout, Header, Footer
- `src/pages/` — Home, Products, ProductCategory, Contact
- `src/data/categories.ts` — Product categories data
