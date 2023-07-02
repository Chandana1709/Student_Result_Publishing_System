const express = require('express');
const mysql = require('mysql2');
const xlsx = require('xlsx');
const bcrypt = require('bcrypt');
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3001;
require('dotenv').config();

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password123',
  database: 'ResultSystem',
});

// Configure multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware for parsing JSON
app.use(express.json());
app.use(cors());

// Middleware for handling preflight requests
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).send();
});

// Route for file upload and data insertion
app.post('/excel', upload.single('fileData'), async (req, res) => {
  try {
    // Check if file is provided
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    // Read the Excel file
    const file = xlsx.read(req.file.buffer);

    // Extract the data from the Excel file
    const sheets = file.SheetNames;
    const data = [];
    for (let i = 0; i < sheets.length; i++) {
      const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
      temp.forEach((res) => {
        data.push(res);
      });
    }

    // Insert the data into the MySQL database
    const query = 'INSERT INTO excel SET ?';
    for (let i = 0; i < data.length; i++) {
      connection.query(query, data[i], (error, results, fields) => {
        if (error) {
          console.error('Error inserting data into the database', error);
          return;
        }

        console.log('Data inserted successfully');
      });
    }

    return res.json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error('An error occurred:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Retrieve user from the database
  connection.query(
    'SELECT * FROM user WHERE email = ?',
    [email],
    async (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      if (results.length > 0) {
        const user = results[0];

        try {
          // Compare the hashed password with the input password
          const match = await bcrypt.compare(password, user.password);

          if (match) {
            // Generate JWT
            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET_KEY);
            console.log(token); // Display the token in the console

            return res.json({ token });
          } else {
            return res.status(401).json({ error: 'Invalid credentials' });
          }
        } catch (bcryptErr) {
          console.error(bcryptErr);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      } else {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
    }
  );
});

// Route for retrieving all departments
app.get('/departments', (req, res) => {
  // Retrieve all departments from the department table
  const query = 'SELECT * FROM department';
  console.log(query);
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving departments:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    return res.json(results);
  });
});

// Route for inserting department name
app.post('/departments', (req, res) => {
  const { dname } = req.body;

  // Check if the department already exists
  const checkQuery = 'SELECT * FROM department WHERE dname = ?';
  connection.query(checkQuery, [dname], (error, results) => {
    if (error) {
      console.error('Error checking department:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length > 0) {
      console.log('Department already exists');
      return res.status(409).json({ error: 'Department already exists' });
    }

    // Insert the department name into the department table
    const insertQuery = 'INSERT INTO department (dname) VALUES (?)';
    connection.query(insertQuery, [dname], (error, results, fields) => {
      if (error) {
        console.error('Department already exists:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      console.log('Department inserted successfully');
      return res.json({ message: 'Department inserted successfully' });
    });
  });
});

// Route for updating a department
app.put('/departments/:dname', (req, res) => {
  const { dname } = req.params;
  const { newDname } = req.body;

  // Update the department with the provided dname
  const query = 'UPDATE department SET dname = ? WHERE dname = ?';
  connection.query(query, [newDname, dname], (error, results) => {
    if (error) {
      console.error('Error updating department:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    console.log('Department updated successfully');
    // Use the results parameter if needed
    console.log(results);

    return res.json({ message: 'Department updated successfully' });
  });
});

// Route for deleting a department
app.delete('/departments/:dname', (req, res) => {
  const { dname} = req.params;

  // Delete the department with the provided ID
  const query = 'DELETE FROM department WHERE dname = ?';
  connection.query(query, [dname], (error, results) => {
    if (error) {
      console.error('Error deleting department:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    console.log('Department deleted successfully');
    return res.json({ message: 'Department deleted successfully' });
  });
});





// Route for adding a subject
app.post('/subjects', (req, res) => {
  const { subjectName, subjectCode, year, semesterNo, selectedDepartment } = req.body;

  // Check if the subject already exists
  const checkQuery = 'SELECT * FROM subject WHERE subject_code = ?';
  connection.query(checkQuery, [subjectCode], (error, results) => {
    if (error) {
      console.error('Error checking subject:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length > 0) {
      console.log('Subject already exists');
      return res.status(409).json({ error: 'Subject already exists' });
    }

    // Insert the subject details into the subject table
    const insertQuery = 'INSERT INTO subject (subject_name, subject_code, year, semester_no, dname) VALUES (?, ?, ?, ?, ?)';
    connection.query(insertQuery, [subjectName, subjectCode, year, semesterNo, selectedDepartment], (error, results, fields) => {
      if (error) {
        console.error('Error inserting subject:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      console.log('Subject inserted successfully');
      return res.json({ message: 'Subject inserted successfully' });
    });
  });
});

app.get('/getsubjects', (req, res) => {
  // Retrieve all subjects from the subject table
  const query = 'SELECT subject_name,subject_code,year,semester_no,dname FROM subject';
  console.log(query);
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving subjects:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    return res.json(results);
  });
});


// Route for updating a subject
app.put('/subjectsEdit/:subjectCode', (req, res) => {
  const { subjectCode } = req.params;
  const { subjectName, newSubjectCode, year, semesterNo, selectedDepartment } = req.body;

  const updateSubjectQuery = 'UPDATE subjects SET ? WHERE subjectCode = ?';
  connection.query(
    updateSubjectQuery,
    [{ subjectName, subjectCode: newSubjectCode, year, semesterNo, selectedDepartment }, subjectCode],
    (error, results) => {
      if (error) {
        console.error('Error updating the subject', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      return res.json({ message: 'Subject updated successfully' });
    }
  );
});


// Route for deleting a subject
app.delete('/subjectsDelete/:subjectCode', (req, res) => {
  const { subjectCode } = req.params;

  // Delete the subject with the provided subjectCode
  const query = 'DELETE FROM subject WHERE subject_code = ?';
  connection.query(query, [subjectCode], (error, results) => {
    if (error) {
      console.error('Error deleting subject:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    console.log('Subject deleted successfully');
    return res.json({ message: 'Subject deleted successfully' });
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
