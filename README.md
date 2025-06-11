# UKH Blog Website

A full-stack blog application built with React/Vite + SWC, Express.js, Sequelize, and PostgreSQL for UKH University. This project demonstrates modern web development practices, including CRUD operations, user authentication, and article management.

## Features

- **User Authentication**: Secure registration and login system.
- **Article Management**: Create, read, update, and delete blog posts.
- **User Profiles**: Customizable user profiles with a bio and avatar.
- **Article Commenting**: Interactive commenting system.
- **Article Favoriting**: "Like" and bookmark articles.
- **User Following**: Follow other writers.
- **Tag System**: Categorize articles with tags.
- **Responsive Design**: Mobile-friendly interface.

## Technology Stack

### Frontend

- **React 18**: Modern UI library with hooks.
- **Vite**: Fast build tool and development server.
- **React Router**: Client-side routing.
- **Axios**: HTTP client for API requests.
- **Testing**: Vitest for unit and integration testing.

### Backend

- **Express.js**: Web application framework.
- **Sequelize**: Object-Relational Mapping (ORM).
- **PostgreSQL**: Relational database.
- **JSON Web Tokens (JWT)**: For authentication.
- **bcrypt**: For password hashing.
- **Database Support**: Easily configurable for PostgreSQL, MySQL, MariaDB, SQLite, and Microsoft SQL Server.

## Prerequisites

Before you begin, ensure you have the following installed:

- A text editor or IDE (e.g., VS Code, Sublime Text, Atom).
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) (v18.11.0 or higher recommended)
- [NPM](https://www.npmjs.com/) (usually included with Node.js)
- [Docker](https://www.docker.com/products/docker-desktop/) and [Docker Compose](https://docs.docker.com/compose/install/)

## Installation and Configuration

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/6ebeng/blog-app.git
    cd ukh-blog-website
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    Create a `.env` file in the root directory by copying the example file:
    ```bash
    cp .env.example .env
    ```
    Update the `.env` file with your PostgreSQL database credentials:
    ```env
    # Development Database
    DEV_DB_USERNAME=your_postgres_username
    DEV_DB_PASSWORD=your_postgres_password
    DEV_DB_DATABASE=ukh_blog_dev
    DEV_DB_HOSTNAME=localhost
    DEV_DB_DIALECT=postgres
    DEV_DB_LOGGING=false
    ```
4.  **Database Setup:**
    - **Using Docker (Recommended):**
      Start the PostgreSQL database container:
      ```bash
      npm run dev:watch:up
      ```
    - **Manual Setup:**
      If you are not using Docker, ensure your PostgreSQL server is running and accessible with the credentials provided in your `.env` file. Then, create the database:
      ```bash
      npm run sqlz -- db:create
      ```
5.  **Run database migrations and seeders:**
    ```bash
    npm run sqlz -- db:migrate
    npm run sqlz -- db:seed:all
    ```

## Usage

- **Development:**
  To run the application in development mode with hot-reloading for both the frontend and backend:
  ```bash
  npm run dev
  ```
  - The frontend will be available at `http://localhost:3000`.
  - The backend API will be available at `http://localhost:3001/api`.
- **Testing:**
  Run the test suite using Vitest:
  ```bash
  npm run test
  ```
- **Production:**
  To build the production-ready application:
  ```bash
  npm run start
  ```

## API Documentation

For detailed information about the API endpoints, refer to the [API_DOCUMENTATION.md](https://www.google.com/search?q=API_DOCUMENTATION.md) file.

## Architecture

This project is structured following a **3-tier architecture**:

- **Presentation Layer**: The frontend is built with React and Vite, providing a modern and reactive user interface.
- **Business Logic Layer**: The backend is a RESTful API built with Express.js, handling all the application's business logic.
- **Data Access Layer**: Sequelize ORM is used to interact with the PostgreSQL database, managing all data persistence.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contributors

- Tishko Salah Hawez
- Jenna Sarmad Al-Saadi
