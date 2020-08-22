// require("dotenv").config();

// const user = process.env.DB_USER;
// const host = process.env.HOST;
// const database = process.env.DB_NAME;
// const password = process.env.DB_PASS;
// const port = process.env.PORT;

// const pgp = require("pg-promise")();
// const db = pgp(`postgres://${user}:${password}@${host}:${port}/${database}`);



// //routes
// // function getUsers(request, response) {
// //   db.Users('select * from users')
// //     .then(function (data) {
// //       response.status(200).json(data.value);
// //     })
// //     .catch(function (error) {
// //       response.send(error.toJSON());
// //     });
// // }


// // const getApps = (request, response) => {
// //   pool.query("SELECT * FROM ownedapps ORDER BY id ASC", (error, results) => {
// //     if (error) {
// //       throw error;
// //     }
// //     response.status(200).json(results.rows);
// //   });
// // };

// // const getCarritoForUser = (request, response) => {
// //   pool.query(
// //     "SELECT users.name, apps.name as app, apps.category FROM ownedapps INNER JOIN users ON (users.user_id = ownedapps.user_id) INNER JOIN apps using (apps_id)",
// //     (error, results) => {
// //       if (error) {
// //         throw error;
// //       }
// //       response.status(200).json(results.rows);
// //     }
// //   );
// // };

// // const getAppsById = (request, response) => {
// //   const id = parseInt(request.params.id);

// //   pool.query("SELECT * FROM apps WHERE id = $1", [id], (error, results) => {
// //     if (error) {
// //       throw error;
// //     }
// //     response.status(200).json(results.rows);
// //   });
// // };

// // const createUser = (request, response) => {
// //   const { name, email } = request.body;

// //   pool.query(
// //     "INSERT INTO users (name, email) VALUES ($1, $2)",
// //     [name, email],
// //     (error, results) => {
// //       if (error) {
// //         throw error;
// //       }
// //       response.status(201).send(`User added with ID: ${result.insertId}`);
// //     }
// //   );
// // };

// // const updateUser = (request, response) => {
// //   const id = parseInt(request.params.id);
// //   const { name, email } = request.body;

// //   pool.query(
// //     "UPDATE users SET name = $1, email = $2 WHERE id = $3",
// //     [name, email, id],
// //     (error, results) => {
// //       if (error) {
// //         throw error;
// //       }
// //       response.status(200).send(`User modified with ID: ${id}`);
// //     }
// //   );
// // };

// // const deleteUser = (request, response) => {
// //   const id = parseInt(request.params.id);

// //   pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
// //     if (error) {
// //       throw error;
// //     }
// //     response.status(200).send(`User deleted with ID: ${id}`);
// //   });
// // };

// module.exports = {
//   getUsers,
//   // getApps,
//   // getCarritoForUser,
//   // getAppsById,
//   // createUser,
//   // updateUser,
//   // deleteUser,
// };
