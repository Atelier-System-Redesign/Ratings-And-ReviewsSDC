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
   git clone https://github.com/Atelier-System-Redesign/Ratings-And-Reviews-SDC.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your port and database info in `.env.local` file
   ```sh
    DB_HOST = (your database host)
    DB_USER = (your database user)
    DB_PASS = (your database password)
    DB_NAME = (your database name)
    PORT = (your local port)
   ```
   If looking to import data using csv files, you should also add the following
   ```sh
    TABLE1 = (your first table)
    TABLE2 = (your second table)
    TABLE3 = (your third table)
    TABLE4 = (your fourth table)
    TABLE1_CSV = (the path to your csv file for table 1 data)
    TABLE2_CSV = (the path to your csv file for table 2 data)
    TABLE3_CSV = (the path to your csv file for table 3 data)
    TABLE4_CSV = (the path to your csv file for table 4 data)
   ```
4. Run in server environment.
   ```sh
   npm run server-dev
   ```

## Usage

Project Atelier is run on the designated port. Local testing can be done via Postman.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Deploy an API to handle Ratings & Reviews data
- [x] Add indexes, a cache, and multiple servers to improve performance (note: If you want to deploy this repo use at least 2 servers to obtain the same optimized results)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Optimizations

1.  Decreased latency when getting reviews by approximately 99.86%
2.  Decreased latency when getting metadata by approximately 99.82%
3.  Increased maximum load per second by a factor of 25 when getting reviews
4.  Increase maximum load per second by a factor of 20 when getting metadata
5.  Increase maximum load per second by a factor of 2.5 when posting new reviews
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

