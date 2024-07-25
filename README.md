# Parts Public Search

![parts-public-search](https://github.com/myplancash/partsbase-public-search-parts/assets/64751892/0220d6f7-7ec9-462d-8592-f4f277eff389)

## Search our worldwide database of over 15 billion aviation parts, Inventory includes listings in commercial, general, military and aerospace parts like DK120. Book Your Demo Today

### [🚀 Book Your Demo Today!](https://partsbase.com/demo)

## Introduction

TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project.

## Getting Started

TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.Installation process
2.Software dependencies
3.Latest releases
4.API references

## Project Overview

The goal of this project is to create a new public search landing page for aviation parts. The
primary functionality involves allowing users to search for different aviation parts and view
detailed information about each part, which is retrieved using AWS Lambdas. This page serves
as a teaser for what users can access with a paid membership.

## Tech Stack and Justification

- Frontend: Next.js
- Backend: AWS Lambdas (Python)

## Why Next.js and AWS Lambdas?

## Next.js

- ● SEO Friendly: Server-side rendering ensures that the page content is indexable by
- search engines.
- ● Performance: Improved page load times due to static site generation and server-side
rendering.
- ● Developer Experience: Rich feature set, including built-in routing, API routes, and easy
deployment with Vercel.

## AWS Lambdas

- ● Scalability: Easily scale functions as the number of requests grows.
- ● Cost-effective: Pay only for the compute time consumed.
- ● Integration: Seamlessly integrate with other AWS services for a robust backend
solution.

## Installation and Setup

Clone the repository:
git clone [repository-url]
cd [repository-name]

1. Install dependencies:
npm install
2. Run the development server:
npm run dev
3. Environment Variables: Create a .env.local file and add the necessary environment
variables.
NEXT_PUBLIC_API_URL=[API endpoint]

## Packages Installed

- ● Next.js (The React Framework for the Web Used by some of the world's largest
companies, Next.js enables you to create high-quality web applications with the power of
React components.)
- react
- ● react-dom
- ● Axios (a simple promise based HTTP client for the browser and node.js)
- ● Tailwindcss (Rapidly build modern websites without ever leaving your HTML .A
utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90
that can be composed to build any design, directly in your markup.)
- ● eslint-config-standard
- ● eslint-plugin-tailwindcss
- ● eslint-config-prettier
- ● tailwindcss-animate
- ● @tailwindcss/typography
- ● Shadcn-ui (Beautifully designed components that you can copy and paste into your
apps. Accessible. Customizable. Open Source.)
- ● Uuid (To create a random UUID.)

## VS Code Extensions

- eslint
- prettier

## VS Code Settings

Add the following settings to your VS Code settings.json file:

´´´
 {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.addMissingImports": true
  },
  "[typescriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
´´´
