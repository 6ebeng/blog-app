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

### Backend

- **Express.js**: Web application framework.
- **Sequelize**: Object-Relational Mapping (ORM).
- **PostgreSQL**: Relational database.
- **JSON Web Tokens (JWT)**: For authentication.
- **bcrypt**: For password hashing.
- **Database Support**: Easily configurable for PostgreSQL, MySQL, MariaDB, SQLite, and Microsoft SQL Server.

---

## Installation and Setup

### Prerequisites

- A text editor or IDE (e.g., VS Code, Sublime Text, Atom).
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) (v18.11.0 or higher recommended)
- [NPM](https://www.npmjs.com/) (usually included with Node.js)
- [Docker](https://www.docker.com/products/docker-desktop/) and [Docker Compose](https://docs.docker.com/compose/install/)

### Docker and WSL Installation (for Windows users)

1.  **Enable WSL & Virtual Machine Platform**:
    Open PowerShell as Administrator and run:

    ```bash
    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
    ```

    Restart your computer.

2.  **Set WSL 2 as Default**:
    Open PowerShell as Administrator and run:

    ```bash
    wsl --set-default-version 2
    ```

3.  **Install Docker Desktop**:
    [Download](https://www.docker.com/products/docker-desktop) and install Docker Desktop for Windows. Ensure that "Use the WSL 2 based engine" is checked in **Settings \> General**.

---

### Application Setup

1.  **Clone the Repository**:

    ```bash
    git clone https://github.com/6ebeng/blog-app.git
    cd ukh-blog-website
    ```

2.  **Install Dependencies**:

    ```bash
    npm install
    ```

3.  **Set Up Environment Variables**:
    Create a `.env` file in the root directory by copying the example file:

    ```bash
    cp .env.example .env
    ```

    Update the `.env` file with your PostgreSQL database credentials for the development environment:

    ```env
    # Development Database
    DEV_DB_USERNAME=your_postgres_username
    DEV_DB_PASSWORD=your_postgres_password
    DEV_DB_DATABASE=ukh_blog_dev
    DEV_DB_HOSTNAME=localhost
    DEV_DB_DIALECT=postgres
    DEV_DB_LOGGING=false
    ```

---

## Usage

### Development Environment with Docker Compose

The provided `docker-compose.yml` is for a development environment.

1.  **Start the Application**:

    ```bash
    npm run dev:watch:up
    ```

    This command will build and start the frontend and backend services in detached mode.

2.  **Access the Application**:

    - **Frontend**: [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)
    - **Backend API**: [http://localhost:3001/api](https://www.google.com/search?q=http://localhost:3001/api)

3.  **Stopping the Application**:

    ```bash
    npm run dev:watch:down
    ```

### Production Environment

For a production environment, you should run the application without Docker, using the following command:

```bash
npm run start
```

This will build the frontend and start the backend server.

---

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
