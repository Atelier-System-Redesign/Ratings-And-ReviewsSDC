# Ratings-And-Reviews-SDC

<a id='readme-top'> </a>

<br />
<div align="center">
  <a href="https://github.com/Atelier-System-Redesign/Ratings-And-Reviews-SDC">
    <!-- <img src="" alt="finance tracker logo" width="50" height="50" /> -->
  </a>
  <h3 align="center">
    Project Atelier Ratings-And-Reviews-SDC
  </h3>
  <p align="center">
    <br />
    <a href="https://github.com/Atelier-System-Redesign/Ratings-And-Reviews-SDC"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li>
          <a href="#built-with">Built With</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li>
          <a href="#prerequisites">Prerequisites</a>
        </li>
        <li>
          <a href="#installation">Installation</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
    </li>
    <li>
      <a href="#roadmap">Roadmap</a>
    </li>
    <li>
      <a href="#optimizations">Optimizations</a>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>
</details>

## About

<div align="center">
   
<p>
  Project Atelier is a desktop and mobile friendly app utilizing Node.js, React and Express that is a modern e-commerce portal that is not just functional, but also intuitive and user-friendly. The backend created here utilizes PostgreSQL and Node-Cache to create a seamless flow of data to the client, even when under load from over a thousand users a second.

### Built With

![node.js](https://img.shields.io/badge/node-%23000000.svg?style=for-the-badge&logo=node.js)
![node-cache](https://img.shields.io/badge/node--cache-%23000000.svg?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/express-%23000000.svg?style=for-the-badge&express=next.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23000000.svg?style=for-the-badge&logo=postgresql)

<p align="right">
  (<a href="#readme-top">back to top</a>)
</p>

## Getting Started

<p>
    Instructions to setup the Ratings-And-Reviews API on your local machine below.
</p>

### Prerequisites

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/darray-queens/Project-Atelier.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your port, API URL, and Github Token in `.env.local` file
   ```sh
    TOKEN = (your github token)
    PORT = (your local port)
    CLOUD_NAME = (your cloudinary database name)
    API_KEY = (your cloudinary token)
    API_SECRET = (your secret cloudinary token)
   ```
4. Run in dev environment.
   ```sh
   npm run client-dev
   ```
5. Run in server environment.
   ```sh
   npm run server-dev
   ```

## Usage

Project Atelier is run on the designated port. It can also be accessed utilizing localhost:PORT directly in the browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Deploy a product details section with photo gallery and style/sizing/quantity selection 
- [x] Develop a related products carousel and a module for customizing and curating a personal outfit list.
- [x] Implement a rendering Q&A list with individual Q&A functionalities
- [x] Dynamically render a ratings and reviews module with interactive sorting and filtering options
- [x] Integrated media upload through cloud servies using Cloudinary to generate URLs from file uploads
- [ ] Add catalog search bar at top of app

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Optimizations

1.  Decreased cumulative layout shift by a factor of 10 by implementing conditionally styled Suspense elements
2.  Increased 
<!-- CONTRIBUTING -->

## Contributing

Feel free to join in! Whether its fixing bugs, improving documentation, or
simply spreading the word!

<!-- CONTACT -->

## Contact

<h3 align='center'> Malcolm</h3>
<h4 align='center'>
  <a href="https://www.linkedin.com/in/MalcolmKam/">Linkedin</a> |
  <a href="https://github.com/MalcolmKam">GitHub</a>
</h4>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

