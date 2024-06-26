# Another To Do List App.

**Goal:**

- Our goal is to learn the Create Reade Updaet Delete (C.R.U.D) features of React.js

**Features:**

- Allow users to add items in to-do list.
- Allow users to check/cross-out a completed item/list.

**Techs:**

- React.js
- CSS
- HTML

**Assets:**

- Font -

**Live links:**

- Codepen - not yet
- Hosted with Netlify -[https://another-to-do-list-app.netlify.com/](https://another-to-do-list-app.netlify.com/)

# Notes

Prerequisites:

- Nodejs must be installed in your unit.
- NPM must be installed in your unit
- Install create-react-app in your node modules ( check out [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app) for how to install the framework)
- Have basic understanding of Javascript (ES6)
- Have basic knowledge about React.js framework
# To-Do List

A simple to-do list application built with Node.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Nzko-cyber/to-do-list.git
    ```
2. Navigate to the project directory:
    ```sh
    cd to-do-list
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the application:
    ```sh
    npm start
    ```
    Open your browser and navigate to `http://localhost:3000` to see the to-do list application.

2. Start the storybook:
    ```sh
    npm run storybook
    ```
    Open your browser and navigate to `http://localhost:6000` to see the storybook-ui.

3. Run tests:
    ```sh
    npm tests
    ```

4. Create a component with Hygen in the application:
    ```sh
    hygen new component
    ```
   
5. Run all Playwright tests:
    ```sh
    playwright test
    ```
6. SHow Playwright test report
    ```sh
    npx playwright test
    ```





## Features

- Add new tasks
- Mark tasks as complete
- Delete tasks
- Filter tasks by status (all, active, completed)

## Dependencies

react: "^16.4.2"
react-dom: "^16.4.2"
react-scripts: "^5.0.1"
@storybook/addon-jest: "^8.1.10"
@storybook/addon-essentials: "^8.1.10"
@storybook/addon-interactions: "^8.1.10"
@storybook/addon-links: "^8.1.10"
@storybook/addon-onboarding: "^8.1.10"
@storybook/blocks: "^8.1.10"
@storybook/preset-create-react-app: "^8.1.10"
@storybook/react: "^8.1.10"
@storybook/react-webpack5: "^8.1.10"
@storybook/testing-library: "^0.2.2"
@testing-library/jest-dom: "^6.4.6"
@testing-library/react: "^16.0.0"
prop-types: "^15.8.1"
webpack: "^5.92.1"
@chromatic-com/storybook: "^1.5.0"
@fortawesome/fontawesome-free: "^5.2.0"
@playwright/test: "^1.44.1"