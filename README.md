<p align="center">
  <a href="https://impensa.sgf.lt/">
  <img src="./public/assets/images/logo-readme.svg" />
    </a>
</p>

<div align="center">

### Simple, effective expense management app

<br/>

[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/impensa/impensa)
![Stars](https://img.shields.io/github/stars/richard96292/impensa.svg)
![License](https://img.shields.io/github/license/richard96292/impensa.svg)
![Forks](https://img.shields.io/github/forks/richard96292/impensa.svg)

</div>

## Project updates
> [!IMPORTANT]
> Currently, Impensa supports two operational backends: one developed in [.NET](https://github.com/neiios/impensa-server-dotnet) and the other in [NodeJS](https://github.com/neiios/impensa-server-node).

## Impensa is an open-source expense management app

- See where all your money goes by easily adding and categorizing new expenses
- Analyze your expenditure using data visualization tools
- Export .xlsx report with all your expenses

## What's cool about this?

Impensa is an open-source project, meaning you can easily access needed app functional and modify lines of code.

We are an open-source alternative to products such as Mint, Simplifi or PocketGuard. Although the functionality of the app is not as advanced, we're designed to be more developer-friendly.

## Features

![ui-demo](./public/assets/images/UI-demo.gif)

## Technologies

> [!IMPORTANT]
> This repository hosts the client-side component of the project. For the server-side code, please refer to a separate repository [here](https://github.com/neiios/impensa-server-dotnet).

Let's talk about the architecture of this mono repo:

- We use NodeJS and .NET to power our servers, and React to power our frontend.
- Here is a list of all the big technologies we use:
  - **.NET 8**: Our backend frameworks of choice
  - **React 18**: Frontend framework
  - **PostgreSQL 16**: Object-relational database
  - **Docker**: To deploy our app in a neat container

## Deployment

We support deploying the application using docker.
You will need to clone both the client and the server repositories.
Docker image will need to be built locally with `sudo docker build -t impensa-server-dotnet:latest .`.
After that you can use the provided docker-compose file to run the application.
It is recommended to use a reverse proxy in front of the application.

This is the recommended project structure:

```plaintext
impensa
├── client
├── docker-compose.yaml
├── Dockerfile
└── server-dotnet
```

## Code Style

We run Prettier on-commit, which means you can write code in whatever style you want and it will be automatically formatted according to the common style when you run `git commit`. We also have ESLint set up, although we've disabled all stylistic rules since Prettier takes care of those.

## Contributors 👑

<a href="https://github.com/maksimbar">
  <img src="https://avatars.githubusercontent.com/u/80415416?v=4" width="50px" alt="maksimbar"/>
</a>
<a href="https://github.com/neiios">
  <img src="https://avatars.githubusercontent.com/u/68248740?v=4" width="50px" alt="neiios"/>
</a>
