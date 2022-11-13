# Online Movie Ticket Booking System

This is the api of the [Tickitz Booking Cinema](https://github.com/minhducnt/cinema-booking) project

## Swagger

- Api docs: <https://localhost:8080/api-docs>

## Features

1. Auth: Authentication, authorization
2. Upload image:
   - Disk storage when `NODE_ENV="development"`
   - Cloudinary when `NODE_ENV="production"`
3. Validate requests
4. Describe API with Swagger UI
5. CRUD with modules: Auth, User, Cinema complex, Cinema, Screen, Seat, Movie, Showtime, Ticket, Booking,...
6. etc...

## Installation

1. Add `.env` file in the root folder
2. Copy `Environment Variables` to your `.env` file
3. To install packages: `yarn`
4. To add file storage folder: `yarn setup`
5. To init database and generate seeds: `yarn db:init`
6. To destroy the tables and rerun migration and seed scripts: `yarn db:reset`
7. To start the project: `npm run`

## Environment Variables

```text
# Environment
NODE_ENV="development"

# URL
BASE_URL="http://localhost:8080"
PORT=8080

# Database
DEV_DB_USERNAME="root"
DEV_DB_PASSWORD=null
DEV_DB_DATABASE="dev_database"
DEV_DB_HOST="127.0.0.1"
DEV_DB_DIALECT="mysql"

PROD_DB_USERNAME="root"
PROD_DB_PASSWORD=null
PROD_DB_DATABASE="prod_database"
PROD_DB_HOST="127.0.0.1"
PROD_DB_DIALECT="mysql"

# JWT
JWT_SECRET="secret-key"
JWT_TOKEN_EXPIRATION=86400

# Cloudinary
CLOUDINARY_CLOUD_NAME="cloud_name"
CLOUDINARY_API_KEY="api_key"
CLOUDINARY_API_SECRET="api_secret"
CLOUDINARY_FOLDER_NAME="omtbs"
```

## Screenshots

![Screenshot 2022-11-13 205814](https://user-images.githubusercontent.com/25291460/201526109-1b50848c-121c-4e15-b602-117e11b4b773.png)
