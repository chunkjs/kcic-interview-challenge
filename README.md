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

### 🍰 API Layer

For local development we are decoupling the UI dev experience from the actual server run. In order to do this we are using [miragejs](https://miragejs.com/) which allow us to intercept the http requests in lower environments. Some of the advantages of this approach are as follows:

- Separartion of concerns: the UI should not need a specific server side implementation of the services that it consumes, it is enogh for it to be aware of the data structures that will be receiving from the API.

- Better developer experience: getting your UI up and running for developing is much faster and doesn't involve the need to spin up an actual server (either by having your backend project running or a docker container exposing these). 

- Faster UI development: by decoupling these the UI development can progress w/o been blocked by the need to having a backend available to hit

- Integration testing: this could be re-usabele for running integration testing with libs like cypress

### 🏃🏻‍♀️ Run

This project requires you have [node](https://nodejs.org/en/download/) installed. 

Once you have cloned the repository please run the following commands:

-- `npm i` this will install the project dependencies, a folder called `node_modules` will be created at the root of the project, and the `package-lock.json` file will be updated.

-- `npm run dev` this will spin up a local server and serve the app on port 3000: 

`http://localhost:3000/`

## 👷🏻‍♀️ Build

In order to generate a build you can run the following command:

`npm run build`

This will output the build file on the following location: `./dist `

## 🧹 Code analisys

For static code analisys we are using [eslint](https://eslint.org/) specifically the package rules set by [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb). 

The following command will can be used for running the linter:

`npm run lint`

In order to automatically handle fixes we can run the following command:

`npm run lint:fix`