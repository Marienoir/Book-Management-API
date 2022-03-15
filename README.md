# Book Management System - API
Book Management System is based on the concept of recording and managing all information about a book. With this system, you can carry out basic operations like adding a book to the system and viewing a list of all the books available on the system.

The application uses Node.js, Express.js and Postgresql for database management.

### Required Features

- User can add a book along with its details like author, year, ISBN etc.
- User can fetch a book using the name of the author or title of the book.
- User can fetch all books belonging to a particular category
- User can update a book’s details.
- User can delete a book along with its details.
- User can add a comment / review a book.
- User can see all comments for a specific book.
- User can see the book with the highest/lowest number of comments
- User can create an Admin
- Admin user can regulate comments (delete irrelevant comments)

### Technologies Used
- Node.js
- Express.js

### Requirements
- Node
- npm

### Install Dependencies
```bash
npm install
```

### Environment sample variable
```bash
.env.sample
```

### Run Application
```bash
npm run start
```
OR

```bash
npm run dev
```

### Run Migration
```bash
npm run migrate-up
npm run migrate-down
```
### Documentation
https://documenter.getpostman.com/view/14754677/UVsJw6rj
