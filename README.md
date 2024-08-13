# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Author

I made this for myself by folliwing https://github.com/ErickKS/vite-react-router. Shout out to Erick!
You can fork the repo, but I don`t guarantee that it will work fine. If you encounter any issues, head to the original repo made by Erick and follow his tutorial.

# Features

This is a React app made with the latest version of Vite. It is written in TypeScript. The React Router is added as well, to navigate between pages. The workflow is set to deploy to GitHub Pages on push to the main branch. You can change this behavior by editing the .github/workflows/deploy.yml file. 

# Steps

You'll have to do some changes in order for this repo to work:

# 1. Clone the repo to your machine

To do that, pull up your terminal in VS Code, (while you have chosen the folder where you want to get this repo copied) and enter 

`git clone <name-of-the-cloned-repo>`

this will clone the repo to your local machine and initialize git.

# 2. Install node packages

If you have Node and npm installed, type in terminal:

`npm i`

This will install all the required node packages
If you're not sure whether or not you have them installed, type in the terminal:
`node -v`
`npm -v`

As a result, you should get the versions. If you haven't installed them yet, visit https://docs.npmjs.com/downloading-and-installing-node-js-and-npm for instructions on doing so.

# 3. Grant workflow the necessary permisions

Go to the settings of the copied repo, on the left sidebar under 'Code and automation' choose 'Actions', then 'General', scrolldown to the end and to the 'Workflow permissions' choose 'Read and Write permissions'

# 4. Change the URL 

You'll have to change the url in several places. 
  - Go to vite.config.ts and change the value of 'base'. Instead of 'vite-react-router-template' type the name of your repo.
  - Go to package.json adn change the value of 'homepage' in the same manner
  - Go to main.tsx and change the paths for react router in the same manner.
  - 'vite-react-router-template' used to serve as the base url. Now you've replaced it with the name of your repo. When you use <Link> to redirect, make sure to redirect to /<YourRepoName>/ as the base

# 5. Push to remote

You`ve successfully configured all the files. Now push these changes to GitHub:

`git commit -m "Initial configutation"`
`git push origin main`

The workflow is automated to deploy on `push` to the `main` branch. To check the builds, go to Actions tab, and read the info.

# You're set~!
