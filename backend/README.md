# Online Movie Ticket Booking System

This is the api of the [Easy Booking Cinema](https://github.com/lamhoang1256/easy-cinema-booking) project

## Swagger

Api docs: https://easy-cinema-booking-api.herokuapp.com/api-docs


## Author
- Đỗ Tiến Thành ( [@dothanhtien](https://github.com/dothanhtien) ) (Creator)
- Nguyễn Hoàng Lâm ( [@lamhoang1256](https://github.com/lamhoang1256) ) (Update and improve)

## I. Installation

1. Clone or download from github: `https://github.com/lamhoang1256/easy-cinema-booking-api`
2. Add `.env` file in the root folder
3. Copy `.env file content` in the section II to your `.env` file
4. To install packages => Run command: `yarn`
5. To add file storage folder => Run command: `yarn setup`
6. To init database and generate seeds => Run command: `yarn db:init`

### Default login credentials:
1. Admin role
- email: admin@example.com
- password: 11111111

2. User role
- email: user@example.com
- password: 11111111

### Other commands:

1.  To destroy the tables and rerun migration and seed scripts `yarn db:reset`

## II. Features
1. Auth: Authentication, authorization
2. Upload image: Disk storage when `NODE_ENV="development"`, Cloudinary when `NODE_ENV="production"`
3. Validate requests
4. Describe API with Swagger UI
5. CRUD with modules: Auth, User, Cinema complex, Cinema, Screen, Seat, Movie, Showtime, Ticket, Booking,...
6. etc...

## III. .env file content

```
NODE_ENV="development"

BASE_URL="http://localhost:8080"
PORT=8080

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

JWT_SECRET="secret-key"
JWT_TOKEN_EXPIRATION=86400

CLOUDINARY_CLOUD_NAME="cloud_name"
CLOUDINARY_API_KEY="api_key"
CLOUDINARY_API_SECRET="api_secret"
CLOUDINARY_FOLDER_NAME="omtbs"
```

## Screenshots
![swagger](https://user-images.githubusercontent.com/61537853/178254017-1b4f5b48-dcc7-4c13-901f-b32eb457a4c6.png)
