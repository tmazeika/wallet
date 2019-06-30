# Wallet

### Getting Started

#### The Docker Way &mdash; _recommended_

Installing [Docker](https://www.docker.com/) is the minimum requirement to get everything up and running. Copy the project root file `.env.example` to `.env` and then run `docker-compose up` to spin up the application and all required services. The site will be accessible at [localhost:8080](http://localhost:8080/). Any changes made to the source code will be automatically reflected within the container.

If you have Gulp installed, you can run `gulp env` instead of copying the `.env.example` file. If you have NPM installed, you can run `npm run dev:docker` instead of `docker-compose up`.

We recommend this way because it ensures reproducible environments across developer machines without dirtying up the host. It will also properly and consistently configure the application and other services, such as MongoDB, automatically.

Although Docker is the only requirement here, also consider installing [Node](https://nodejs.org/en/) with [NPM](https://www.npmjs.com/) and running `npm i` from the project root for a better IDE experience.

#### The Manual Way

##### Software Requirements
- [Node](https://nodejs.org/en/) with [NPM](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

Run `npm i` from the project root to install all dependencies. This will also install [Gulp](https://gulpjs.com/), so now run `gulp env` and correct the newly created `.env` file with the credentials to connect to each service. Run `npm run dev` to watch for source code changes and to start up the server. The site will be accessible at [localhost:8080](http://localhost:8080/).

### Production

#### The Docker Way

With NPM, run: `npm run prod:docker`. Without NPM, run: `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up` to do the same thing. Changes made to the source code will not be automatically reflected within the container. With NPM, changes will only be propagated when you run `npm run prod:docker -- --build` to rebuild the container, or `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build` without NPM.

#### The Manual Way

Run `npm run prod`. As in the Docker way, changes made to the source code will not be automatically reflected. Changes will be propagated when you rerun the `npm run prod` command.
