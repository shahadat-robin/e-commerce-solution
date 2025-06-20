## [🛍️ Shop Sizzle](https://shop-sizzle.vercel.app)

A full-featured eCommerce web application built with Next.js 13 (Pages Router), TypeScript, Redux, Tailwind CSS, and Ant Design. This project showcases a complete frontend shopping experience, including product browsing, cart functionality, and Stripe integration for payments.

## 📸 Demo

-
- Clean UI built using Ant Design + Tailwind CSS
- Type-safe code with TypeScript
- State management with Redux Toolkit

## 🚀 Features

- Fully responsive design (mobile-first)
- Clean UI built using Ant Design + Tailwind CSS
- Type-safe code with TypeScript
- State management with Redux Toolkit
- Bento grid layout in hero section
- Cart persistence via localStorage
- Stripe checkout integration (test mode)

## 🛠️ Tech Stack

| Category       | Tools/Frameworks                   |
| -------------- | ---------------------------------- |
| **Framework**  | Next.js 13 (Pages Router)          |
| **Language**   | TypeScript                         |
| **Styling**    | Tailwind CSS, Ant Design (Antd)    |
| **State**      | Redux Toolkit                      |
| **Payments**   | Stripe (test mode)                 |
| **Routing**    | File-based routing (Next.js pages) |
| **Deployment** | Vercel                             |

## 📦 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/shahadat-robin/shop-sizzle.git

# Navigate to the project directory
cd shop-sizzle

# Install dependencies
npm install

# Run the development server
npm run dev

# Visit the app at http://localhost:3000
```

## 📁 Folder Structure

```bash

public/              # Static assets (images, logos)
src/
├── components/      # Reusable UI components (e.g. cart, skeleton etc.)
├── layout/          # Global layout wrappers (e.g. header, footer, layout components)
├── pages/           # Next.js pages (routes)
├── sections/        # Page-level UI sections (e.g. homepage sections)
├── store/           # Redux slices and store configuration
├── utils/           # Utility functions (e.g. helpers)
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
