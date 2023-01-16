### project creation
    - scss > npm init -y
    - scss > yarn add sass
    - scss > scripts > build.js [create build script]
    - package.json > "build": "node ./src/scripts/build.js" [update package.json file]
    - build command: yarn build

### Setup Mono Repo
    - [Lerna Documentation](https://lerna.js.org/docs/introduction)
    - Create `packages` folder
    - move `scss` library into packages folder
    - update `name` into packages/scss "name": "@ds.e/scss", [@project_name/something]
    - create a package `yarn init -y` into `DS.E` folder
    - DS.E directory update name `"name": "@ds.e/core",` [@org_name/something]
    - yarn add -D lerna
    - yarn lerna init [Initiat for this is lerna project]
    - update `lerna.json` file `  "packages": ["packages/*"],
  - "npmClient": "yarn", "stream": true`
  - update package.json file. Workspaces Create as a object "workspaces": {"packages" : ["packages/*"]}` 
  - update package.json file. "private": true [project create public or private]
  - Remove node_modules DS.E & scss dir
  - command run `yarn`,
  - again update `packages.json` file `  "workspaces": {
    "packages" : [
      "packages/*"
    ],
    "nohoist": [
      "**/sass"
    ]
  },` [conataing scss package]
  - again command run `yarn`,
  - remove again node_modules dir. Going to previous state
  - ds.e > packages > `package.json` file `"scripts": {
    "build": "yarn lerna run build"
  }`
  - For build : `yarn build`

  ### Setup React Library
    - create `react` folder
    - yarn init -y
    - update `package.json` file. `"name": "@ds.e/react",` 
    - install dev dependency `yarn add -D react typescript @types/react`
    - create `tsconfig.json` file and config
    - create a button atoms and install `yarn add -D rollup rollup-plugin-typescript2`
    - need rollup config `react > rollup.config.js`
    - after file creation need build command into `react/src/package.json` `"name": "@ds.e/react",` `"scripts": {"build": "rollup -c"}`
    - now build `yarn build` then build a `lib` directory
    - before create vite project install `npm i create-vite`
    - create new dir `DS.E/playgrounds` and crete a project `yarn create vite` or `npm init vite`
    - again run command `yarn`
    - update `DS.E/package.json` file `"workspaces": {"packages": ["packages/*", "playgrounds/*"]`
    - run `yarn dev`

### Reference 
- [Creating a React.js App using Vite](https://www.section.io/engineering-education/creating-a-react-app-using-vite/)

