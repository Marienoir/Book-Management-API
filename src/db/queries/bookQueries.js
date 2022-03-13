const bookQueries = {
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
      getBookById: `
      SELECT
        id,
        name,
        author,
        quantity,
        price,
        ISBN,
        category
      FROM books
      WHERE id = $1
      `,
      updateBookById: `
        UPDATE books
        SET 
            name=$1,
            author=$2,
            quantity=$3,
            price=$4,
            ISBN=$5,
            category=$6,
            updated_at=NOW()
        WHERE id=$7 
        RETURNING 
          id,
          name,
          author,
          quantity,
          price,
          ISBN,
          category
      `,
      deleteBookById: `
        DELETE FROM books
        WHERE id=$1
      `,
      reviewBookById: `
      UPDATE books
      SET 
          comment=$1,
          updated_at=NOW()
      WHERE id=$7 
      RETURNING 
        id,
        name,
        author,
        quantity,
        price,
        ISBN,
        category,
        comment
    `,
    getAllCommentsOfABook: `
    SELECT
      comment
    FROM books
    WHERE id = $1
    `,
    countCommentsOfABook: `
    COUNT(*)
      comment
    FROM books
    WHERE id = $1
    `,
    };
  
  export default bookQueries;
  