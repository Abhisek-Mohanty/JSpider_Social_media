import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const Help = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <NavLink
        className="absolute right-10"
        variant="outlined"
        onClick={handleClickOpen}
      >
        Help
      </NavLink>
      <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Help numbers for contact!!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Contact below numbers if you are blocked <br />
              <a
                href="tel:8951939012"
                className="border-solid border-2 border-orange-400  m-1"
              >
                +91-8951939012{" "}
              </a>
              <a
                href="tel:8951965476"
                className="border-solid border-2 border-sky-500 p-1 m-1"
              >
                {" "}
                +91-8951965476
              </a>
            </DialogContentText>
            <br />
            <DialogContentText>
              Contact below numbers for Technical issue Related Information
              <br />
              <a href="tel:9972068008">+91-9972068008 </a>
              <a href="tel:8951966085"> +91-8951966085</a>
            </DialogContentText>
            <DialogContentText>
              <br />
              Contact below numbers for Course Related Information
              <br />
              <a href="tel:8951965086">+91-8951965086 </a>
              <a href="tel:8951965092"> +91-8951965092</a>
              <br />
              <a href="tel:9900018030"> +91-9900018030</a>
            </DialogContentText>
            <br />
            <DialogContentText>
              Contact below numbers for HR related queries
              <br />
              <a href="tel:8951965085">+91-8951965085 </a>
              <a href="tel:9686959546"> +91-9686959546</a>
              <br />
              <a href="tel:8951938858"> +91-8951938858</a>
              <a href="tel:7338667464"> +91-7338667464</a>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              close
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
};

export default Help;
