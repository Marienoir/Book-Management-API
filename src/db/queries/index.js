const userQueries = {
    addBook: `
      INSERT INTO books (
        name,
        author,
        quantity,
        price,
        ISBN,
        category,
        date,
        updated_at
      ) VALUES($1, $2, $3, $4, $5, $6, NOW(), NOW())
      RETURNING 
        id,
        name,
        author,
        quantity,
        price,
        ISBN,
        category
     `,
     getBooksByAuthorOrTitle: `
      SELECT
        id,
        name,
        author,
        quantity,
        price,
        ISBN,
        category
      FROM books
      WHERE name = $1 OR author = $1
      `,
      getBooksByCategory: `
      SELECT
        id,
        name,
        author,
        quantity,
        price,
        ISBN,
        category
      FROM books
      WHERE category = $1
      `,
    };
  
  export default userQueries;
  