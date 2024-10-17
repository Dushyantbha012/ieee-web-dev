# AIQueryHub

AIQueryHub is an AI-powered law assistant designed to help users with legal queries by analyzing PDF documents and providing relevant information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/ieee-web-dev.git
    cd ieee-web-dev
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    ```sh
    cp .env.example .env
    # Update .env with your configuration
    ```

4. Generate Prisma client:
    ```sh
    npx prisma generate
    ```

5. Run the development server:
    ```sh
    npm run dev
    ```

## Usage

1. Start the application:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Use the interface to upload PDFs and interact with the AI assistant.

## Features

- **PDF Analysis**: Upload and analyze PDF documents.
- **AI Responses**: Get AI-generated responses to your legal queries.
- **User Authentication**: Secure user authentication with Clerk.
- **Interactive Dashboard**: User-friendly dashboard to manage your documents and queries.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Prisma**: ORM for database management.
- **Tailwind CSS**: Utility-first CSS framework.
- **Radix UI**: Accessible UI components.
- **Axios**: Promise-based HTTP client.
- **MongoDB**: NoSQL database.
- **TypeScript**: Typed JavaScript for better developer experience.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.