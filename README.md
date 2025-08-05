

# 🚀 Jetfire – Frontend Starter Template

A modern, scalable starter template for all your frontend projects.

## 🛠️ Tech Stack

* **React**
* **TypeScript**
* **Vite**
* **TanStack Query**
* **React Router**
* **TailwindCSS**
* **Shadcn UI**

## 📁 Project Structure

```
app/
├── api/              # All API calls
├── components/       
│   ├── shared/       # Shared components
│   └── ui/           # Shadcn UI components
├── hooks/            # Custom hooks
├── layout/           # App layout components
├── pages/            # Route-based pages
├── routes/           # Route definitions
├── types/            # Global types
│   └── api/          # API-specific types
├── utils/            # Utility functions
├── main/             # Entry point
└── App.tsx           # Root component
```

## 🧱 Feature Structure Convention

To add a feature named `auth`:

```
app/
├── routes/auth/
├── pages/auth/
├── components/shared/auth/
├── hooks/auth/
├── types/auth/
└── types/api/auth/
```

Each feature is modular and self-contained across relevant directories.

## 🚀 Getting Started

1. Clone the repository

   ```bash
   git clone <repo-url>
   ```
2. Install dependencies

   ```bash
   npm install
   ```
3. Start development server

   ```bash
   npm run dev
   ```

> **Node.js Version**: `>= 20`

