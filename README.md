# Bryan Balidiong — Personal CV Website

A responsive personal CV for **Bryan Sinsano Balidiong**, a fourth-year Bachelor of Science in Information Technology student at Davao del Norte State College and an aspiring front-end developer. It presents his profile, education, skills, academic and personal projects, achievements, certificates, and contact links.

**Live Vercel site:** [personal-cv-ebon-theta.vercel.app](https://personal-cv-ebon-theta.vercel.app/)

## Technologies used

- HTML5 for page structure
- CSS3 for the responsive design and print layout
- A small JavaScript `window.print()` action for the Print CV button
- Google Fonts: DM Sans, Space Grotesk, and JetBrains Mono

## Project structure

```text
Personal-CV/
├── index.html              # Main CV page served at the site root
├── cv.html                 # Redirect for older links to the CV page
├── assets/
│   ├── css/
│   │   └── styles.css      # Site and print styles
│   ├── images/             # Portrait, project previews, and certificates
│   └── favicon.svg
└── README.md
```

## Run locally

Open `index.html` in a browser. No installation or build step is required. For a local HTTP preview, run `python -m http.server 8000` from the repository folder and open `http://localhost:8000/`.

## Deployment

Import this repository into Vercel as a static site. Use the repository root as the project root and leave the build command empty. The homepage is `index.html`.

## Student

**Bryan Sinsano Balidiong** — fourth-year Bachelor of Science in Information Technology student at Davao del Norte State College.
