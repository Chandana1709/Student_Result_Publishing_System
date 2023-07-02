import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { animated, useSpring } from "react-spring";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  dropZone: {
    width: "600px",
    height: "350px",
    border: `4px dashed #0CA686`,
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "border-color 0.3s ease-in-out",
    "&:hover": {
      borderColor: theme.palette.secondary.main,
    },
  },
  uploadIcon: {
    fontSize: "110px",
    marginBottom: theme.spacing(4),
    color: theme.palette.secondary.main,
  },
  clearButton: {
    marginTop: theme.spacing(2),
  },
  card: {
    maxWidth: "638px",
    margin: "0 auto",
    textAlign: "center",
    marginTop: "20px",
    padding: theme.spacing(3),
  },
  submitButton: {
    marginTop: theme.spacing(2),
    backgroundColor: "#0CA686",
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: "#0CA686",
    },
  },
  title: {
    marginBottom: theme.spacing(3),
  },
}));

const ResultUpload = () => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState(null);
  const [showFile, setShowFile] = useState(false);
  const [animatedProps, setAnimatedProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(-20px)",
  }));
  const [showMessage, setShowMessage] = useState(false);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setShowFile(true);
      setAnimatedProps({ opacity: 1, transform: "translateY(0px)" });
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    setShowFile(true);
    setAnimatedProps({ opacity: 1, transform: "translateY(0px)" });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    setShowFile(false);
    setAnimatedProps({ opacity: 0, transform: "translateY(-20px)" });
  };

  const handleFileSubmit = async () => {
    if (selectedFile) {
      setShowMessage(false);
      try {
        const formData = new FormData();
        formData.append("fileData", selectedFile);
       

        const response = await axios.post("http://localhost:3001/excel", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("Upload successful:", response.data);
        // Handle successful upload response
      } catch (error) {
        console.error("Error occurred during upload:", error);
        // Handle error during upload
      }
    } else {
      setShowMessage(true);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" className={classes.title}>
            File Upload
          </Typography>
          <Box>
            <input
              type="file"
              id="file-upload"
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
            <label htmlFor="file-upload">
              <Box
                className={classes.dropZone}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                {showFile ? (
                  <animated.div style={animatedProps}>
                    <Typography variant="h6">{selectedFile.name}</Typography>
                    <IconButton
                      color="secondary"
                      onClick={handleClearFile}
                      className={classes.clearButton}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </animated.div>
                ) : (
                  <Box>
                    <CloudUploadOutlinedIcon className={classes.uploadIcon} />
                    <Typography variant="body1">
                      Drag and drop your file here, or click to select a file.
                    </Typography>
                  </Box>
                )}
              </Box>
            </label>
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={handleFileSubmit}
            className={classes.submitButton}
          >
            Submit
          </Button>

          <Dialog open={showMessage} onClose={() => setShowMessage(false)}>
            <DialogTitle>Error</DialogTitle>
            <DialogContent>
              <Typography variant="body1">Please select a file to upload.</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setShowMessage(false)} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ResultUpload;
