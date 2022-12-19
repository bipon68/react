## Step by Step frontend app creation
- `yarn init -y` for custom create
- `yarn add parcel-bundler -D`
- `yarn add react react-dom`
- `yarn add prettier`
- command on terminal `yarn format`
- ` "scripts": {
    "start": "parcel index.html",
    "format": "prettier --write app.js" 
    "format": "prettier --write \"src/**/*.{js, jsx}\"
  }`
- move script file into src folder - `"format": "prettier --write \"src/app.js\""`
- `"format": "prettier --write \"src/**/*.{js, jsx}\""`
- `yarn start`
- `yarn add json-server` for running from main project
- `"start": " concurrently \"yarn dev:server\" \"yarn dev:client\"",` for client and server running
- `yarn add concurrently` help for two command running
- if want to port fixed `"dev:server": "yarn --prefix server json-server --watch ./server/db.json -p 8001",`
- `yarn add babel-polyfill`
- `yarn add axios`

## json server creation
- json server ref : https://github.com/typicode/json-server
- create a server folder
- `yarn init -y` then generate a `package.json` file
- `yarn add json-server`
- `json-server --watch db.json`
- add script into `package.json` file `"scripts": {
    "dev:server": "json-server --watch db.json"
  },`
  - then for run command: `yarn dev:server`
  - add client `package.json` file `"dev:server": "yarn --prefix server json-server --watch ./server/db.json",`
  - also update `package.json` file `"dev:client": "parcel index.html --open",`

### Eslint configure 

- `yarn add eslint -D`
- `yarn eslint`
- `yarn eslint --init` choose `To check syntax and find problems` then `Javascript modules (import/export)` then `React` `browser node` `JSON` `eslint-plugin-react@latest` install yes
- if problem to install manually then run command into terminal `yarn add eslint-plugin-react -D`
- add `package.json` file into script `"lint": "eslint \"src/**/*.{js,jsx}\""`
- check eslint `yarn lint`
- `yarn add eslint-plugin-jsx-a11y -D`  (https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- `yarn add eslint-plugin-import -D` (https://www.npmjs.com/package/eslint-plugin-import)
- `yarn add eslint-config-prettier - D` (https://www.npmjs.com/package/eslint-config-prettier)

- for warning remove for eslint into `.eslintrc.json` file `
"extends": [
        "eslint:recommended",
        "plugin: import/errors",
        "plugin:react/recommended"
    ],
"plugins": [
        "react", "import", "jsx-a11y"
    ],
"settings": {
        "react": {
            "version": "detect"
        }
`

### Project create using only command
- or `npm i -g create-react-app`
- Step 1 : `create-react-app react-practice`
- Step 2 : `create css folder and added style.css file`
- Step 3 : `import style.css & js script` file into `public > index.html` file
- Step 4 : `Create single Component like Skills`

### Reference
- Validator - https://www.npmjs.com/package/validator
- UUID - https://www.npmjs.com/package/uuid
- React router dom - https://www.npmjs.com/package/react-router-dom
- fetch api : https://javascript.info/fetch
- babel polyfill - https://github.com/babel/babel/tree/master/packages/babel-polyfill (regenerator-runtime issue)
- Axios : https://www.npmjs.com/package/axios

## JavaScript
- [Async vs Defer Script Loading](https://www.youtube.com/watch?v=BMuFBYw91UQ), [Article](https://blog.webdevsimplified.com/2019-12/javascript-loading-attributes-explained/)
[ ][Var vs Let vs Const](https://www.youtube.com/watch?v=9WIJQDvt4Us), [Article](https://blog.webdevsimplified.com/2020-01/var-vs-let-vs-const/)
[ ] [Strict Equality](https://www.youtube.com/watch?v=C5ZVC4HHgIg), [Article](https://blog.webdevsimplified.com/2020-08/==-vs-===/)
[ ] [Hoisting](https://blog.webdevsimplified.com/2020-07/javascript-hoisting/)
[ ] Scoping
[ ] [DOM Traversal](https://www.youtube.com/watch?v=v7rSSy8CaYE)
[ ] [Closures](https://www.youtube.com/watch?v=3a0I8ICR1Vg)
[ ] [Reference Vs Value](https://www.youtube.com/watch?v=-hBJz2PPIVE)
[ ] [DOM Manipulation](https://www.youtube.com/watch?v=y17RuWkWdn8)
[ ] [Arrow Functions](https://www.youtube.com/watch?v=h33Srr5J9nY), [Article](https://blog.webdevsimplified.com/2020-09/arrow-functions/)
[ ] [Callbacks](https://www.youtube.com/watch?v=Kpn2ajSa92c)
[ ] [Event Listeners](https://www.youtube.com/watch?v=XF1_MlZ5l6M)
[ ] [Promises](https://www.youtube.com/watch?v=DHvZLI7Db8E)
[ ] [Async Await](https://www.youtube.com/watch?v=V_Kr9OSfDeU)
[ ] [Fetch](https://www.youtube.com/watch?v=cuEtnrL9-H0)
[ ] [Browser Storage](https://www.youtube.com/watch?v=GihQAC1I39Q), [Article](https://blog.webdevsimplified.com/2020-08/cookies-localstorage-sessionstorage/)
[ ] Event Loop
[ ] [Modules](https://www.youtube.com/watch?v=cRHQNNcYf6s), [Article](https://blog.webdevsimplified.com/2020-06/dynamic-module-import/)
[ ] [Template Literals](https://blog.webdevsimplified.com/2020-03/tagged-template-literals/)
[ ] [Array Methods](https://www.youtube.com/watch?v=R8rmfD9Y5-c)
[ ] [Null Vs Undefined](https://blog.webdevsimplified.com/2021-01/null-vs-undefined/)
[ ] [Recursion](https://www.youtube.com/watch?v=6oDQaB2one8)
[ ] [Short Circuiting](https://blog.webdevsimplified.com/2019-10/what-is-short-circuiting/)
[ ] [Ternary Operator](https://www.youtube.com/watch?v=70GmtV-5Ggo), [Article](https://blog.webdevsimplified.com/2020-05/ternary-operator/)
[ ] [Destructoring/Spread Operator](https://www.youtube.com/watch?v=NIq3qLaHCIs), [Article](https://blog.webdevsimplified.com/2020-08/destructuring-and-spread/)
[ ] [Classes](https://www.youtube.com/watch?v=5AWRivBk0Gw)
[ ] [Bundlers](https://www.youtube.com/watch?v=DblzpCoPakw)

## React 
[ ] [Component Model](https://www.youtube.com/watch?v=1wZoGFF_oi4)
[ ] JSX
[ ] Events
[ ] Class vs Function Components
[ ] [Props](https://www.youtube.com/watch?v=IYvD9oBCuJI)
[ ] [State](https://www.youtube.com/watch?v=O6P86uwfdR0), [Article](https://blog.webdevsimplified.com/2020-04/use-state/)
[ ] [useEffect](https://www.youtube.com/watch?v=0ZJgIjIuY7U), [Article](https://blog.webdevsimplified.com/2020-04/use-effect/)
[ ] [useLayoutEffect](https://blog.webdevsimplified.com/2020-07/use-layout-effect/)
[ ] [Context](https://www.youtube.com/watch?v=5LrDIWkK_Bc), [Article](https://blog.webdevsimplified.com/2020-06/use-context/)
[ ] [Refs](https://www.youtube.com/watch?v=t2ypzz6gJm0&feature=youtu.be), [Article](https://blog.webdevsimplified.com/2020-05/use-ref/)
[ ] [useMemo](https://www.youtube.com/watch?v=THL1OPn72vo), [Article](https://blog.webdevsimplified.com/2020-05/memoization-in-react/)
[ ] [useCallback](https://www.youtube.com/watch?v=_AyFP5s69N4), [Article](https://blog.webdevsimplified.com/2020-05/memoization-in-react/)
[ ] [useReducer](https://www.youtube.com/watch?v=kK_Wqx3RnHk), [Article](https://blog.webdevsimplified.com/2020-06/use-reducer/)
[ ] [Custom Hooks](https://www.youtube.com/watch?v=6ThXsUwLWvc), [Article](https://blog.webdevsimplified.com/2019-11/how-to-write-custom-hooks/)
[ ] [PropTypes](https://blog.webdevsimplified.com/2020-12/react-prop-types/)
[ ] [Portal](https://www.youtube.com/watch?v=LyLa7dU5tp8), [Article](https://blog.webdevsimplified.com/2019-12/how-to-use-react-portal/)
[ ] [Best Practices](https://www.youtube.com/watch?v=0yzoAbrjV6k&feature=youtu.be), [Local State Article](https://blog.webdevsimplified.com/2019-12/always-prefer-local-state/), [Derived State Article](https://blog.webdevsimplified.com/2019-11/never-store-derived-state/), [Debounce Article](https://blog.webdevsimplified.com/2020-10/react-debounce/)

### Project create using only command


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
