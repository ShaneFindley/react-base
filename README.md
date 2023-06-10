# React App Basic

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ShaneFindley_react-base&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ShaneFindley_react-base)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=ShaneFindley_react-base&metric=bugs)](https://sonarcloud.io/summary/new_code?id=ShaneFindley_react-base)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=ShaneFindley_react-base&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=ShaneFindley_react-base)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=ShaneFindley_react-base&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=ShaneFindley_react-base)

## Installation

```
npm i --save-dev webpack 
                 webpack-cli 
                 webpack-dev-server
npm i --save-dev typescript 
                 tslint 
                 ts-loader
npm i --save-dev babel-loader 
                 @babel/preset-env 
                 @babel/core 
                 @babel/plugin-transform-runtime 
                 @babel/preset-react 
                 @babel/preset-typescript
                 @babel/runtime
                 @babel/cli

npm i react react-dom
npm i --save-dev @types/react @types/react-dom

```
Process: 

* Create public folder, inside create index.html
* [Create tslint.json](tslint.json)
* [Create tsconfig.json](tsconfig.json)
* Create index.tsx
* Create app.tsx
* [Create webpack.config.js](webpack.config.js)
* [Create .babelrc](.babelrc)
* [Add sourcemaps](webpack.config.js#L12)
* [Setup lazy loading](src/axios/index.tsx)
* [Setup Service calls](src/axios/demo.tsx)
* [Create Jest tests](src/jest/testing-function.test.ts)

To be added:
* Setup service mocking
* Setup test mocking
* Setup forms
* Setup styling or material ui
* Setup redux
* Setup context

## Additional packages

Click on the links below to view additional information about these packages
* [axios](src/axios/README.md)
* [formik & yup](src/formik/README.md)
* [Matieral UI](src/material-ui/README.md)
* [Jest](src/jest/README.md)
* [Prismjs](src/prismjs/README.md)

To be added:
* ~~moment~~
* ~~date-fns~~
* ~~firebase~~
* ~~graphql~~
* ~~lodash~~
* ~~pusher-js~~
* ~~notistack~~
* ~~recharts~~
* ~~keycloak~~
* ~~ck-editor~~
