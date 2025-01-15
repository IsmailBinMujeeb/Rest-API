# Rest-API
This repository contains a simple and scalable REST API built using Node.js and Express.js. The API is designed to handle CRUD operations, making it ideal for learning backend development or creating real-world applications.

## Features
- CRUD Operations: Create, Read, Update, and Delete resources.

- Express.js Framework: Lightweight and fast web framework for Node.js.

- Modular Code Structure: Easy to extend and maintain.

- Error Handling: Centralized error handling for cleaner code.

- RESTful Routing: Organized routes following REST principles.

## Technologies Used
- Node.js: JavaScript runtime environment.
- Express.js: Web framework for building APIs.
- MongoDB: NoSQL database.
- Mongoose: ODM library for MongoDB.
- Postman: For API testing and documentation.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/IsmailBinMujeeb/Rest-API.git
cd Rest-API
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Create a <code>.env</code> file in the root directory.
- Add the following variables:
```env
PORT=3000
MDB_CONN_STR=<your-mongodb-connection-string>
```

4. Start the server
```bash
npm start
```

The API will be accessible at http://localhost:3000.

## API endpoints

## API Endpoints

| **Method** | **Endpoint**         | **Description**              |
|------------|----------------------|------------------------------|
| GET        | `/users`         | Retrieve all users           |
| GET        | `/users/:id`     | Retrieve an user by ID       |
| POST       | `/create`         | Create a new user            |
| PUT        | `/update/:id`     | Update an user by ID         |
| DELETE     | `/delete/:id`     | Delete an user by ID         |

## Testing

- You can use Postman to test API.