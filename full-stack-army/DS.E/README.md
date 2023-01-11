### project creation
    - scss > npm init -y
    - scss > yarn add sass
    - scss > scripts > build.js [create build script]
    - package.json > "build": "node ./src/scripts/build.js" [update package.json file]
    - build command: yarn build

### Mono Repo
    - Create `packages` folder
    - move `scss` library into packages folder
    - update `name` into packages/scss "name": "@ds.e/scss",
    - create a package `yarn init -y` into `DS.E` folder
    - DS.E directory update name `"name": "@ds.e/core",`

