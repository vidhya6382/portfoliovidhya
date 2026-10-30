# Vidhya G Portfolio (React + Vite)

## Run on your computer
1. Install Node.js (version 18 or newer) from https://nodejs.org
2. Open this folder in a terminal and run:

```
npm install
npm run dev
```

3. Open the address shown in the terminal (usually http://localhost:5173).

## Edit your details
Everything you may want to change is in `src/data.js`: photo, GitHub and LinkedIn links, websites, projects, skills and education.

To add your photo, copy it into the `public` folder (for example `public/photo.png`) and set `photo: "photo.png"` in `src/data.js`.

## Publish on GitHub Pages
```
npm run build
```
This creates a `dist` folder. Upload the contents of `dist` to a GitHub repository and turn on GitHub Pages for it.

## Folder guide
- `src/data.js` – all your content
- `src/App.jsx` – page layout
- `src/components/` – Hero, Websites, Sections (Skills, About, Contact), CopyButton
- `src/styles.css` – all styling, light and dark theme
