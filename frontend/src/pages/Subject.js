import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  TextField,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  withStyles,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  subject: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& h1': {
      margin: theme.spacing(2),
      fontSize: '24px',
    },
  },
  centerTable: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  editIcon: {
    color: 'green',
    fontSize: '1.8rem',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  deleteIcon: {
    color: 'red',
    fontSize: '1.8rem',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  dialogTitle: {
    backgroundColor: 'rgb(12, 166, 134)',
    color: '#ffffff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
  },
  scrollableMenu: {
    maxHeight: '200px',
    overflowY: 'auto',
  },
}));

const Subject = () => {
  const classes = useStyles();

  const [subjects, setSubjects] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [open, setOpen] = useState(false);
  const [editedSubject, setEditedSubject] = useState({
    subject_name: '',
    subject_code: '',
    year: '',
    semester_no: '',
    dname: '',
  });
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    fetchSubjects();
    fetchDepartments();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await axios.get('http://localhost:3001/getsubjects');
      setSubjects(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching subject data:', error);
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/departments');
      setDepartments(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching department data:', error);
    }
  };

  const handleOpenDialog = (subject) => {
    setOpen(true);
    setSelectedSubject(subject);
    setEditedSubject({
      subject_name: subject.subject_name,
      subject_code: subject.subject_code,
      year: subject.year,
      semester_no: subject.semester_no,
      dname: subject.dname,
    });
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedSubject(null);
    setEditedSubject({
      subject_name: '',
      subject_code: '',
      year: '',
      semester_no: '',
      dname: '',
    });
  };

  const handleSaveChanges = async () => {
    if (selectedSubject) {
      try {
        await axios.put(
          `http://localhost:3001/subjectsEdit/${selectedSubject.subject_code}`,
          editedSubject
        );
        fetchSubjects();
      } catch (error) {
        console.error('Error updating subject:', error);
      }
    }
    handleCloseDialog();
  };

  const handleDeleteSubject = async (subject) => {
    try {
      await axios.delete(`http://localhost:3001/subjectsDelete/${subject.subject_code}`);
      fetchSubjects();
    } catch (error) {
      console.error('Error deleting subject:', error);
    }
  };

  const BrightIconButton = withStyles(() => ({
    root: {
      '&.edit': {
        color: 'green',
        fontSize: '1.8rem',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.2)',
        },
      },
      '&.delete': {
        color: 'red',
        fontSize: '1.8rem',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.2)',
        },
      },
    },
  }))(IconButton);

  const StyledTableCell = withStyles(() => ({
    head: {
      backgroundColor: 'rgb(12, 166, 134)',
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: '20px',
    },
    body: {
      fontSize: '16px',
    },
  }))(TableCell);

  const yearList = (() => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 20;
    const endYear = currentYear + 20;
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  })();

  return (
    <div className={classes.subject}>
      <h1>Subject View</h1>
      <div className={classes.centerTable}>
        <TableContainer component={Paper} style={{ width: '1000px' }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <StyledTableCell>Subject Name</StyledTableCell>
                <StyledTableCell>Subject Code</StyledTableCell>
                <StyledTableCell>Year</StyledTableCell>
                <StyledTableCell>Semester</StyledTableCell>
                <StyledTableCell>Department</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subjects.map((subject) => (
                <TableRow key={subject.subject_code}>
                  <TableCell>{subject.subject_name}</TableCell>
                  <TableCell>{subject.subject_code}</TableCell>
                  <TableCell>{subject.year}</TableCell>
                  <TableCell>{subject.semester_no}</TableCell>
                  <TableCell>{subject.dname}</TableCell>
                  <TableCell>
                    <BrightIconButton
                      className={`${classes.editIcon} edit`}
                      onClick={() => handleOpenDialog(subject)}
                      color="primary"
                    >
                      <Edit />
                    </BrightIconButton>
                    <BrightIconButton
                      className={`${classes.deleteIcon} delete`}
                      onClick={() => handleDeleteSubject(subject)}
                      color="secondary"
                    >
                      <Delete />
                    </BrightIconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle className={classes.dialogTitle}>Edit Subject</DialogTitle>
        <DialogContent style={{ minWidth: '500px', width: '50%' }}>
          <form className={classes.form}>
            <TextField
              label="Subject Name"
              variant="outlined"
              value={editedSubject.subject_name}
              onChange={(e) =>
                setEditedSubject({ ...editedSubject, subject_name: e.target.value })
              }
              required
            />
            <TextField
              label="Subject Code"
              variant="outlined"
              value={editedSubject.subject_code}
              onChange={(e) =>
                setEditedSubject({ ...editedSubject, subject_code: e.target.value })
              }
              required
            />
            <FormControl variant="outlined">
              <InputLabel>Year</InputLabel>
              <Select
                value={editedSubject.year}
                onChange={(e) =>
                  setEditedSubject({ ...editedSubject, year: e.target.value })
                }
                label="Year"
                required
              >
                {yearList.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Semester"
              variant="outlined"
              type="number"
              value={editedSubject.semester_no}
              onChange={(e) =>
                setEditedSubject({ ...editedSubject, semester_no: e.target.value })
              }
              required
            />
            <FormControl variant="outlined" className={classes.scrollableMenu}>
              <InputLabel>Department</InputLabel>
              <Select
                value={editedSubject.dname}
                onChange={(e) =>
                  setEditedSubject({ ...editedSubject, dname: e.target.value })
                }
                label="Department"
                required
              >
                {departments.map((department) => (
                  <MenuItem key={department.dname} value={department.dname}>
                    {department.dname}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveChanges} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default Subject;
