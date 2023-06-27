<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)


# 📖 Loader-board using Api <a name="about-project"></a>

**Loader-board** In general, an API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate and interact with each other. APIs define the methods and data formats that developers can use to access and manipulate certain functionalities or data of a system, service, or platform.

If "loader-board API" refers to a specific API related to a loader board or a particular software or platform, 

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Builded by using those specific tech below</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/javascript">JavaScript</a></li>
     <li><a href="https://webpack.js.org/guides/getting-started/#basic-setup">Webpack</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

> Here's the key Coming Features :

- **CRUD SYSTEM**
- **WEATHER APP**

````
APIs offer several advantages, including:

Modularity and Abstraction: APIs allow for the modularization of software systems, separating the implementation details from the interface exposed to developers. This abstraction makes it easier to understand and interact with complex systems by providing a simplified interface.
````

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

> N/A

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

- Clone this project.
- Open it in VS code.
- Deploy it on a browser using a live-server plug-in.

### Prerequisites

In order to add this project to your repo you need:

Git
A GitHub account
VS-Code
<a href="https://github.com/microverseinc/linters-config/tree/master/html-css-js">HTML, CSS, and JavaScript linters</a>

### Setup

Clone this repository to your desired folder:


https://github.com/tchasinga/Loaderboard-api.git


### Installation

To install webpack, follow these steps:

Make sure you have Node.js installed on your system. You can download it from the official Node.js website: https://nodejs.org.

Open your command line interface (CLI) or terminal.

Navigate to your project directory using the cd command:
```
bash
cd /path/to/your/project
Run the following command to initialize a new Node.js project:
```
```
npm init -y
```
Now, install webpack and the necessary plugins by running the following command:

css
```
npm install webpack webpack-cli html-webpack-plugin --save-dev
```

Configuration
After installing webpack, you need to create a webpack configuration file in the root directory of your project. Here's how you can configure webpack with the provided information:

Create a file named webpack.config.js in the root directory of your project.

Open the webpack.config.js file in a text editor and add the following code:

javascript
Copy code
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
```
module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'CodeBoardApi.js',
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/template.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```
Let's break down the configuration:

mode: 'development' sets the mode to development for better debugging and development experience. You can change it to production for optimized and minified code in a production environment.
entry specifies the entry point of your application. In this case, it's set to index.js located in the src directory.
output determines where webpack should emit the bundled files. The path specifies the output directory (dist folder in this case), and filename defines the name of the output file (CodeBoardApi.js).
devServer configures the development server. The static property points to the directory that the server should serve files from (in this case, the dist folder).
>plugins defines the plugins to use. The HtmlWebpackPlugin is included to generate an HTML file with the bundled script injected.
module sets up rules for processing different file types. The rule specified here is for .css files, which are processed using style-loader and css-loader.
Save the webpack.config.js file.

Usage
To build your project using webpack, run the following command in your CLI:
```
npx webpack
```
This command will use the webpack configuration file (webpack.config.js) to bundle your JavaScript and CSS files. The output will be generated in the dist directory.
### Install

This project doesn't need to be installed.

### Usage

Project can be used in any proswer

### Run tests

There are no tests to run.

### Deployment

You can deploy this project by using VS-code and injecting it to a browser through a local live server


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Tchasinga**

- GitHub: [@githubhandle](https://github.com/tchasinga)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **CSS styling to make the project loook better**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [here the page](https://github.com/tchasinga/Loaderboard-api/issues/2).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project, please give it a star ⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I'd like just to say thanks for Idea and effort given by partner
we've done enough in group, and thanks to all for really 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>