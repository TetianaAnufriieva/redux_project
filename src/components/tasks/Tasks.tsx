import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteIcon from "@mui/icons-material/Delete";
import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Box, IconButton, List, ListItem, Typography } from "@mui/material";

export default function Tasks(): JSX.Element {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  function handleChangeStatus(id: string): void {
    dispatch({ type: "tasks/changeStatus", payload: id });
  }
  function handleRemove(id: string): void {
    dispatch({ type: "tasks/remove", payload: id });
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
      <h1>TASKS</h1>
      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
              mb: 1,
              p: 1,
              borderRadius: 1,
              bgcolor: "background.default",
            }}
          >
            <IconButton
              onClick={() => handleChangeStatus(task.id)}
              color={task.isDone ? "success" : "primary"}
            >
              {task.isDone ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
            </IconButton>
            <Typography
              variant="body1"
              sx={{
                textDecoration: task.isDone ? "line-through" : "none",
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              <b>{task.title}</b> {task.description}
            </Typography>

            <IconButton
              onClick={() => handleRemove(task.id)}
              color="error"
              sx={{
                "&:hover": { color: "white", bgcolor: "error.main" },
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
