# Backend Template: MEN Stack (MongoDB, Express, Node.js)

Welcome to the **Backend Template: MEN Stack** repository! This is a basic template that we use for our freelance projects, and we're sharing it with everyone to help you kickstart your backend development process.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [MongoDB](https://www.mongodb.com/) installed locally or accessible remotely

### Installation

1. **Clone the Repository**

   Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/backend_template_MEN_stack.git
   ```

2. **Navigate to Project Directory**

   ```bash
   cd backend_template_MEN_stack
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Setup .env file**

   Rename .env-sample file to .env

   ```bash
   mv .env-sample .env
   ```

   Setup the required credentials

   ```bash
    # Set the port for the server
    PORT=

    # Secret key for JWT token (can use any string)
    JWT_SECRET=

    # MongoDB Connection
    MONGODB_USERNAME=
    MONGODB_PASSWORD=
    MONGODB_CLUSTER=
    MONGODB_DATABASE_NAME=

    # CORS Origin (Optional: Defaults to *)
    CORS_ORIGIN=*

    # AWS S3 Bucket Configuration (not required to run the project)
    ACCESS_KEY=
    ACCESS_SECRET=
    REGION=
    BUCKET=
   ```

### Starting the Server

Once the dependencies are installed, you can start the server:

```bash
npm run dev
```

The server will start running on http://localhost:8000/. (Unless you have specified PORT in .env file)

## Customize the Project

### Project Structure

- **Configurations**:
  - MongoDB configuration is in `config/database.js`.
  - Server connection is in `config/database.js`.
  - All constants are configured in `config/constants.config.js`.
- **Base Routes**: Define your API base routes in the `router.js` file.
- **API endpoints**: Define your API endpoints in the `routes/` directory.
- **Models**: Create your data models in the `models/` directory.
- **Controllers**: Implement your business logic in the `controllers/` directory.
- **Middleware**: Add any custom middleware in the `middleware/` directory.
  - Currently you have here: user authentication middleware and error handling middleware.
- **Utils**: Place utility functions or helper methods in the `utils/` directory.
- **Environment Variables**: Store sensitive information or configuration in a `.env` file.

### Keep or Remove Unwanted Code

- **Keep**: Feel free to keep the existing code as a reference or use it in your project.
- **Remove**: Delete any code or files that are not relevant to your project to keep it clean.

### Questions and Support

If you have any questions or need support, feel free to open an issue in this repository. I'll be happy to assist you!

Happy coding! 🚀
