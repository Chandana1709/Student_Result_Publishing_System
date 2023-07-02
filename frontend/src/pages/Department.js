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
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  department: {
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
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  dialogActions: {
    justifyContent: 'space-between',
  },
  cancelButton: {
    color: 'red',
  },
  saveButton: {
    color: 'green',
  },
}));

const Department = () => {
  const classes = useStyles();

  const [departments, setDepartments] = useState([]);
  const [open, setOpen] = useState(false);
  const [editedDepartment, setEditedDepartment] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/departments');
      setDepartments(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching department data:', error);
    }
  };

  const handleOpenDialog = (department) => {
    setOpen(true);
    setSelectedDepartment(department);
    setEditedDepartment(department.dname);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedDepartment(null);
    setEditedDepartment('');
  };

  const handleSaveChanges = async () => {
    if (selectedDepartment) {
      try {
        await axios.put(`http://localhost:3001/departments/${selectedDepartment.dname}`, {
          newDname: editedDepartment,
        });
        fetchDepartments();
      } catch (error) {
        console.error('Error updating department:', error);
      }
    }
    handleCloseDialog();
  };

  const handleDeleteDepartment = async (department) => {
    try {
      await axios.delete(`http://localhost:3001/departments/${department.dname}`);
      fetchDepartments();
    } catch (error) {
      console.error('Error deleting department:', error);
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

  return (
    <div className={classes.department}>
      <h1>Department View</h1>
      <div className={classes.centerTable}>
        <TableContainer component={Paper} style={{ width: '850px' }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <StyledTableCell>Department Name</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {departments.map((department) => (
                <TableRow key={department.dname}>
                  <TableCell>{department.dname}</TableCell>
                  <TableCell>
                    <BrightIconButton
                      className={`${classes.editIcon} edit`}
                      onClick={() => handleOpenDialog(department)}
                      color="primary"
                    >
                      <Edit />
                    </BrightIconButton>
                    <BrightIconButton
                      className={`${classes.deleteIcon} delete`}
                      onClick={() => handleDeleteDepartment(department)}
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
        <DialogTitle className={classes.dialogTitle}>Edit Department</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <TextField
            label="Department Name"
            fullWidth
            value={editedDepartment}
            onChange={(e) => setEditedDepartment(e.target.value)}
          />
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button onClick={handleCloseDialog} className={classes.cancelButton}>
            Cancel
          </Button>
          <Button onClick={handleSaveChanges} className={classes.saveButton}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Department;
