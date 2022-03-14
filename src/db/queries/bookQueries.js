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
      INSERT INTO reviews (
        bookId,
        comment,
        created_at
      ) VALUES($1, $2, NOW())
      RETURNING 
      bookId,
      comment
    `,
    getAllCommentsOfABook: `
    SELECT
      comment
    FROM reviews
    WHERE bookId = $1;
    `,
    countCommentsOfABook: `
    UPDATE books
    SET no_of_comments = no_of_comments + 1
    WHERE id =$2
    RETURNING 
    name,
    no_of_comments
    `,
    getCountCommentsOfABook: `
    SELECT
    name,
    no_of_comments
    FROM books
    WHERE id = $1;
    `,
    deleteBookCommentById: `
    UPDATE books 
    SET comments= comments - 1
    WHERE id=$1
  `,
    };
  
  export default bookQueries;
  