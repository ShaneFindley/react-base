# Jest & Testing



## Installation

Jest has a number of related dependencies which are required to create a working test environment, below are a selection of those currently being used for use with typescript and jest using v8.


> npm i --save-dev jest babel-jest

> npm i --save-dev ts-node @babel/preset-typescript ts-jest @types/jest

> npm i --save-dev @testing-library/jest-dom @testing-library/react @testing-library/user-event jest-resolve jest-watch-typeahead

To then setup jest run:
> jest --init

For running tests against react we need to use jsdom as the test environment, this is no longer included as part of jest. 

> npm i --save-dev jest-environment-jsdom

jest.config.ts will also need to be updated to use jsdom as the testing environment.

> testEnvironment: "jsdom"