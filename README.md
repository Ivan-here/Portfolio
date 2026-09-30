# Ivan Barnash — Software Development Portfolio

A React and Tailwind CSS portfolio featuring backend, full-stack, and mobile projects.

## Featured project: Locally

[Visit the live website](https://www.locallyl.com/)

Locally connects farmers, customers, restaurants, and NGOs through a local food marketplace, surplus-food reservations, and community features.

- [Frontend source — Ivan branch](https://github.com/Ivan-here/Capstone-frontend/tree/Ivan)
- [Backend source — Ivan branch](https://github.com/Ivan-here/Capstone-Project/tree/Ivan)
- [Security implementation and rollout notes](https://github.com/Ivan-here/Capstone-Project/blob/Ivan/SECURITY.md)

The case study covers payments, identity, profiles, administration, deployment, and security hardening. It distinguishes the live website from the latest branch changes awaiting rollout. Academic PDF documents are historical project artifacts.

## Development

Use Node.js 22.12+ and npm.

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

Deploy the generated `dist` directory to a static host. Current asset paths assume the portfolio is hosted at the domain root.

## Content and images

- `src/App.jsx`: biography, skills, projects, experience, and Locally case study.
- `src/ProjectGallery.jsx`: screenshot captions and keyboard-accessible image dialog.
- `public/images/locally/`: the three original screenshots copied from the sibling `locallyl` folder.
- `public/files/`: resume and academic documents.

Image viewing supports keyboard activation, Escape to close, focus restoration, and reduced motion preferences. Update screenshots and case-study details as the application evolves.
