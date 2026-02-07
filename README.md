# SkillVerse Community – React

This project is the React version of the SkillVerse Community website.

## Tech stack

- **React 18** with **Vite**
- **React Router v6** for routing
- **Bootstrap 5** + **Bootstrap Icons**
- Custom CSS (same design as the original site)

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   Then open the URL shown in the terminal (e.g. http://localhost:5173).

3. Build for production:
   ```bash
   npm run build
   ```
   Output is in the `dist` folder.

4. Preview production build:
   ```bash
   npm run preview
   ```

## Project structure

- `src/App.jsx` – Routes and app shell
- `src/components/` – Layout, Navbar, Footer
- `src/context/ThemeContext.jsx` – Dark/light theme (persisted in localStorage)
- `src/data/courses.js` – Course data
- `src/pages/` – Home, About, Contact, Courses, CourseDetail
- `src/index.css` – Global styles (Bootstrap + SkillVerse theme)

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/courses` | Courses list |
| `/courses/:courseId` | Course detail (e.g. `/courses/manual-qa`) |

The original static HTML files (`index.html`, `about.html`, etc.) are still in the project root. You can remove them once you are fully using the React app.
