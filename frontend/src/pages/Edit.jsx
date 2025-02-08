import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Container, IconButton, ListItemButton, ListItemText, Snackbar, SnackbarContent, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Column, Row } from "@components";

const textFieldStyleProps = {
  "& .MuiInputBase-root": {
    background: "#A7DBC5",
    borderRadius: 0
  },
  "& .MuiInputBase-root.Mui-focused": {background: "#A7DBC5"},
  "& .MuiInputBase-root:hover": {background: "#A7DBC5"},
  "& label": {color: "#092E20"},
  "& label.Mui-focused": {color: "#092E20"},
  "& .MuiInputBase-root.MuiFilledInput-root:before": {borderBottomColor: "#092E20"},
  "& .MuiInputBase-root.MuiFilledInput-root:after": {borderBottomColor: "#092E20"}
};

export function EditForm() {
  const { id: taskId } = useParams();

  const [task, setTask] = useState({
    title: "",
    titleError: false,
    titleErrorMessage: " ",
    notes: ""
  });

  const [snackbar, setSnackbar] = useState({
    isShown: false,
    message: ""
  });

  const updateTask = useCallback((newValues) => {
    setTask((prevValues) => ({ ...prevValues, ...newValues }));
  }, []);

  const isValidTask = useCallback(() => {
    if (task.title.length === 0) {
      updateTask({ 
        titleError: true,
        titleErrorMessage: "Task title cannot be empty."
      });

      return false;
    } else {
      updateTask({
        titleError: false, titleErrorMessage: " ",
      });
    }

    return true;
  }, [task, updateTask]);

  const editTask = useCallback(() => {
    if (!isValidTask()) {
      return;
    }

    fetch(`http://localhost:8000/tasks/edit/${taskId}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "title": task.title,
        "notes": task.notes
      })
    })
      .then((response) => {
        let snackbarMessage = "Something is wrong with the server"; 
        
        if (response.ok) {
          snackbarMessage = "Task is successfully updated!";
        } 

        setSnackbar({
          isShown: true,
          message: snackbarMessage
        });
      });
  }, [isValidTask, taskId, task, setSnackbar]);

  useEffect(() => {
    fetch(`http://localhost:8000/tasks/${taskId}/`)
      .then((response) => response.json())
      .then((data) => {
        updateTask(data);
      });
  }, [taskId, updateTask]);

  return (
    <Column width="375px" gap={2}>
      <TextField fullWidth required
        variant="filled"
        value={task.title}
        error={task.titleError}
        onChange={(e) => updateTask({ title: e.target.value })}  
        label="Task Title" 
        helperText={task.titleErrorMessage}
        sx={textFieldStyleProps}
      />
      <TextField fullWidth
        variant="filled"
        multiline={true}
        rows={4}
        value={task.notes}
        onChange={(e) => updateTask({ notes: e.target.value })}  
        label="Task Notes" 
        helperText={" "}
        sx={textFieldStyleProps}
      />
      <ListItemButton disableRipple
        onClick={editTask}
        sx={{
          backgroundColor: "#45B78B",
          borderRadius: 0,
          '&:hover': {backgroundColor: "rgba(69, 183, 139, 0.5)"},
        }}
      >
        <ListItemText primary={
          <Typography variant="body1" sx={{textAlign: "center", textTransform: "uppercase"}}>
            Save task
          </Typography>
        } />
      </ListItemButton>
      <Snackbar
        open={snackbar.isShown}
        anchorOrigin={{vertical: "bottom", horizontal: "center"}}
        autoHideDuration={5000}
        onClose={() => setSnackbar({isShown: false, message: ""})}
      >
        <SnackbarContent
          message={snackbar.message}
          sx={{
            backgroundColor: "#45B78B", 
            color: "#F1FFF8", 
            textAlign: "center",
            justifyContent: "center"
          }}
        />
      </Snackbar>
    </Column>
  );
}

export default function Edit() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate("/tasks");
    }
  }, [location, navigate]);

  return (
    <>
      <Container sx={{ padding: 4 }}>
        <Column gap={2}>
          <Row gap={2}>
            <IconButton
              onClick={() => { 
                navigate(
                  "/tasks", 
                  location.state ? {state: {from: location.state?.from}} : null
                );
              }}
              size="large"
              sx={{
                color: "#0C3C26",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h3">Edit Task</Typography>
            <IconButton
              size="large"
              sx={{
                opacity: 0,
                pointerEvents: "none",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Row>
          <EditForm />
        </Column>
      </Container>
    </>
  );
}