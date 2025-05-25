
# 📝 Chat-Notes

A powerful, modern notes-taking web application built with **Next.js**, **Supabase**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** — with a twist: users can **chat with their notes** using Google's **Gemini AI** API!

## 🚀 Features

- ✍️ Create, edit, and delete rich text notes
- 🧠 Chat with your notes using natural language
- 🔐 User authentication with Supabase
- ☁️ Realtime data syncing with Supabase database
- 🎨 Beautiful, accessible UI powered by Tailwind CSS & shadcn/ui
- 💡 AI integration using the Gemini API (server-side)
- 🧑‍💻 Built with TypeScript for better DX and maintainability

## 🛠️ Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) 15, [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.dev/)
- **Backend & Auth:** [Supabase](https://supabase.com/)
- **AI:** [Gemini API](https://ai.google.dev/) from Google
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Build Tool:** Turbopack (experimental, from Next.js 15)

## 📸 Screenshots

_Coming soon!_

## 🌐 Live Demo

The app is deployed and live [🔗 Link coming soon — will be updated here].

## 📦 Getting Started Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Chayan-03/Chat-Notes.git
   cd Chat-Notes
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file and add the following:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   GEMINI_API_KEY=your-gemini-api-key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🤖 AI-Powered Chat with Notes

Chat functionality is powered by the **Gemini API**, allowing users to interact with their notes using conversational AI. The app sends context-rich prompts to the backend, which processes them and returns meaningful insights or summaries.

## 📁 Folder Structure (Simplified)

```
├── src/
│   ├── components/     # UI components (shadcn-based)
│   ├── pages/          # Next.js pages
│   ├── lib/            # Supabase & Gemini API utils
│   ├── db/             # Prisma schema
│   └── styles/         # Tailwind config
├── public/             # Static assets
├── .env.local          # Environment variables
├── next.config.js
└── README.md
```

## 📜 License

MIT — Feel free to use, modify, and build upon this project.

---

_Developed with ❤️ by [Chayan](https://github.com/Chayan-03)_
