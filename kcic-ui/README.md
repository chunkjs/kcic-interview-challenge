# 💥 KCIC-UI challenge

This project is intended as a re-make of the the original challenge for KCIC. It will incorporate more modern approaches to [react](https://beta.reactjs.org/) and its ecosystem.

## 🌏 Creation process (**interview purposes only**)

The following steps were taken to create this project:

In lieu of create-react-app we are using [vite](https://vitejs.dev/) which a batteries included for running/building frontend apps. It uses golang behind the scenes making the transpilation process super fast, hence improving DX: this reduces the feedback loop that it takes to see local changes during development. The specifig flavor used for it is `react-ts` which introduces typescript to the project. More recently react evangelizers have been leaning on the usage of typescript in lieu of legacy `prop-types`, introducing the ability to catch bugs prior to releasing as prop-types is only a check done in dev environments.

For scafolding the code the following command was ran:

```npm create vite@latest kcic-ui -- --template react-ts```

Once this has successfully executed, it will prompt for the instructions for running the project:

```
cd kcic-ui
npm i
npm run dev
```

After this the app is reachable locally on the port 3000.


## 🧰 Local setup

This project requires you have [node](https://nodejs.org/en/download/) installed. 

Once you have cloned the repository please run the following commands:

-- `npm i` this will install the project dependencies, a folder called `node_modules` will be created at the root of the project, and the `package-lock.json` file will be updated.

-- `npm run dev` this will spin up a local server and serve the app on port 3000: 

`http://localhost:3000/`

## 👷🏻‍♀️ Build

In order to generate a build you can run the following command:

`npm run build`