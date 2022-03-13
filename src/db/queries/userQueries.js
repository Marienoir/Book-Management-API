const userQueries = {
    addUser: `
      INSERT INTO users (
        full_name,
        role,
        created_at,
        updated_at
      ) VALUES($1, DEFAULT, NOW(), NOW())
      RETURNING 
        id,
        full_name,
        role
     `,
      getUserById: `
      SELECT
        id,
        name,
        role,
      FROM users
      WHERE id = $1
      `,
      deleteBookCommentById: `
      DELETE FROM books
        comments
      WHERE id=$1
    `,
    };
  
  export default userQueries;
  