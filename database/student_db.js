import mysql from 'mysql';
import questionBank from './question_bank.js';
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123prajwal'
  
});



// Create the table
connection.connect( (error) => {
  if (error) throw error;
  console.log('Table created successfully');
  
});

connection.query('SELECT * FROM sihdatabase.question',(error, results, fields) => {
  if (error) throw error;
  console.log('Query result:', results);
});

// for(let i=28;i<=28;i++){
  
//   let q = `INSERT INTO sihdatabase.question values (${i}, '${questionBank[i-1].question}', '${questionBank[i-1].options[0]}', '${questionBank[i-1].options[1]}', '${questionBank[i-1].options[2]}', '${questionBank[i-1].options[3]}', '${questionBank[i-1].correctAnswer}')`;


//   connection.query(q,(error, results, fields) => {
//     if (error) throw error;
//     console.log('Query result:', results);
//   });
// }

connection.query('SELECT * FROM students', (error, results, fields) => {
  if (error) throw error;
  console.log('Query result:', results);

  // Close the connection after performing the operation(s)


});
// connection.end((err) => {
//   if (err) {
//     console.error('Error closing MySQL connection: ' + err.stack);
//     return;
//   }
//   console.log('MySQL connection closed.');
// });
