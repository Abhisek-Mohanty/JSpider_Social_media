import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const AskQ = () => {
  const [open, setOpen] = React.useState(false);
  let [post, setPost] = React.useState("");
  let { abc } = useParams("");
  console.log(abc);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const PostChange = (e) => {
    setPost(e.target.value);
  };
  const handlePost = (e) => {
    const date = new Date();
    const showTime =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log(showTime);
    console.log(date);
    setOpen(false);
    console.log(post);
  };

  return (
    <div>
      <React.Fragment>
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          className="absolute left-10 top-10 "
        >
          Ask Question
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Ask Question to Community"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <TextField
                autoFocus
                margin="dense"
                id="text"
                label="Type here...."
                type="text"
                value={post}
                onChange={PostChange}
                fullWidth
                variant="standard"
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handlePost}>Post</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
};

export default AskQ;
