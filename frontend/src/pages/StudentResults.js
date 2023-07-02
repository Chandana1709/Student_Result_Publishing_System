import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import axios from 'axios';
import { withStyles } from '@mui/styles';

const StudentResults = () => {
  const [usn, setUsn] = useState('');
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');
  const [year, setYear] = useState('');
  const [fresherOrBacklog, setFresherOrBacklog] = useState('');
  const [resultYear, setResultYear] = useState('');
  const [subjects, setSubjects] = useState('');
  const [departments, setDepartments] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/departments');
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        // Construct SQL query using form data
        const query = `SELECT * FROM students WHERE usn = '${usn}' AND department = '${department}' AND semester = ${semester}`;

        // Send HTTP request to backend
        const response = await axios.post('http://localhost:3001/query', { query });

        // Update component state with the result data
        setResultData(response.data);
      } catch (error) {
        console.error('Error executing SQL query:', error);
      }
    } else {
      // Form is invalid, update validation errors
      setValidationErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!usn) {
      errors.usn = 'USN is required';
    } else if (!isNaN(usn)) {
      errors.usn = 'USN should be a string';
    }

    if (!department) {
      errors.department = 'Department is required';
    }

    if (!semester) {
      errors.semester = 'Semester is required';
    } else if (isNaN(semester)) {
      errors.semester = 'Semester should be a number';
    }

    if (fresherOrBacklog === 'backlog') {
      if (!resultYear) {
        errors.resultYear = 'Result Year is required';
      } else if (!/^\d{4}$/.test(resultYear)) {
        errors.resultYear = 'Invalid Result Year';
      }

      if (!subjects) {
        errors.subjects = 'Subjects are required';
      }
    }

    return errors;
  };

  const resetForm = () => {
    setUsn('');
    setDepartment('');
    setSemester('');
    setYear('');
    setFresherOrBacklog('');
    setResultYear('');
    setSubjects('');
    setValidationErrors({});
    setResultData(null);
  };

  const DepartmentSelect = (
    <FormControl fullWidth variant="outlined" sx={{ marginBottom: '16px' }}>
      <InputLabel style={{ color: '#004646' }}>Department</InputLabel>
      <Select
        value={department}
        onChange={(event) => setDepartment(event.target.value)}
        style={{ backgroundColor: '#F0F0F0', maxHeight: '150px', overflowY: 'auto' }}
        label="Department"
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: '150px',
            },
          },
        }}
        error={!!validationErrors.department}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {departments.map((department) => (
          <MenuItem key={department.did} value={department.dname}>
            {department.dname}
          </MenuItem>
        ))}
      </Select>
      {validationErrors.department && (
        <Typography variant="caption" color="error">
          {validationErrors.department}
        </Typography>
      )}
    </FormControl>
  );

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f3f3f3" // Set the background color of the form
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: '#ffffff',
          padding: '16px',
          borderRadius: '8px',
          marginTop: '5px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center align the form elements
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: '30px', marginBottom: '16px', color: '#0CA686', textAlign: 'center' }}
        >
          Student Results
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={{ marginBottom: '16px', width: '100%' }}>
            <Typography variant="subtitle1" style={{ color: '#004646' }}>
              USN
            </Typography>
            <TextField
              value={usn}
              onChange={(event) => setUsn(event.target.value)}
              variant="outlined"
              fullWidth
              style={{ backgroundColor: '#F0F0F0' }}
              error={!!validationErrors.usn}
              helperText={validationErrors.usn}
            />
          </div>
          {DepartmentSelect}
          <div style={{ marginBottom: '16px', width: '100%' }}>
            <Typography variant="subtitle1" style={{ color: '#004646' }}>
              Semester
            </Typography>
            <TextField
              value={semester}
              onChange={(event) => setSemester(event.target.value)}
              variant="outlined"
              fullWidth
              style={{ backgroundColor: '#F0F0F0' }}
              error={!!validationErrors.semester}
              helperText={validationErrors.semester}
            />
          </div>
          <div style={{ marginBottom: '16px', width: '100%' }}>
            <Typography variant="subtitle1" style={{ color: '#004646' }}>
              Year
            </Typography>
            <TextField
              value={year}
              onChange={(event) => setYear(event.target.value)}
              variant="outlined"
              fullWidth
              style={{ backgroundColor: '#F0F0F0' }}
              error={!!validationErrors.year}
              helperText={validationErrors.year}
            />
          </div>
          <div style={{ marginBottom: '16px', width: '100%' }}>
            <FormControl fullWidth variant="outlined" sx={{ marginBottom: '16px' }}>
              <InputLabel style={{ color: '#004646' }}>Fresher or Backlog</InputLabel>
              <Select
                value={fresherOrBacklog}
                onChange={(event) => setFresherOrBacklog(event.target.value)}
                style={{ backgroundColor: '#F0F0F0' }}
                label="Fresher or Backlog"
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                }}
                error={!!validationErrors.fresherOrBacklog}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="fresher">Fresher</MenuItem>
                <MenuItem value="backlog">Backlog</MenuItem>
              </Select>
              {validationErrors.fresherOrBacklog && (
                <Typography variant="caption" color="error">
                  {validationErrors.fresherOrBacklog}
                </Typography>
              )}
            </FormControl>
          </div>
          {fresherOrBacklog === 'backlog' && (
            <>
              <div style={{ marginBottom: '16px', width: '100%' }}>
                <Typography variant="subtitle1" style={{ color: '#004646' }}>
                  Result Year
                </Typography>
                <TextField
                  value={resultYear}
                  onChange={(event) => setResultYear(event.target.value)}
                  variant="outlined"
                  fullWidth
                  style={{ backgroundColor: '#F0F0F0' }}
                  error={!!validationErrors.resultYear}
                  helperText={validationErrors.resultYear}
                />
              </div>
              <div style={{ marginBottom: '16px', width: '100%' }}>
                <Typography variant="subtitle1" style={{ color: '#004646' }}>
                  Subjects
                </Typography>
                <TextField
                  value={subjects}
                  onChange={(event) => setSubjects(event.target.value)}
                  variant="outlined"
                  fullWidth
                  style={{ backgroundColor: '#F0F0F0' }}
                  error={!!validationErrors.subjects}
                  helperText={validationErrors.subjects}
                />
              </div>
            </>
          )}
          <Box display="flex" justifyContent="center" alignItems="center" marginTop="16px">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disableElevation
              style={{ marginRight: '8px', backgroundColor: '#4CAF50' }}
            >
              Submit
            </Button>
            <Button
              type="button"
              variant="contained"
              color="secondary"
              disableElevation
              style={{ backgroundColor: '#FFEB3B' }}
              onClick={resetForm}
            >
              Reset
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default StudentResults;
