import { Box, Button, FormGroup, TextField } from "@mui/material";
import { useState, type FormEvent, type JSX } from "react";
import { useDispatch } from "react-redux";

export default function TaskCreation(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const dispatch = useDispatch();

  const isFormValid = title.trim() !== "" && description.trim() !== "";

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch({
      type: "tasks/add",
      payload: { title, description, isDone: false },
    });
    setTitle("");
    setDescription("");
  }

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        mt: 4,
        bgcolor: "background.paper",
      }}
    >
      <h2>Форма создания задачи</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup sx={{ gap: 2 }}>
          <TextField
            type="text"
            label="title*"
            size="small"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            type="text"
            label="description*"
            size="small"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button
            variant="contained"
            color="success"
            type="submit"
            disabled={!isFormValid}
          >
            Создать
          </Button>
        </FormGroup>
      </form>
    </Box>
  );
}
