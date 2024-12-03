import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { LoadingButton } from "@mui/lab";
import { Container, Divider } from "@mui/material";

export const ConfirmationModal = (props) => {
  const {
    open,
    onClose,
    fullScreen,
    title,
    description,
    disabled,
    confirm,
    cancel,
    loader,
    footer = true,
    header,
    yes,
    no,
    customComp,
    alert,
    size,
  } = props;

  return (
    <Dialog
      fullWidth
      fullScreen={fullScreen}
      maxWidth={size}
      open={open}
      onClose={!alert && onClose}
    >
      <Container
        sx={{ p: "0px !important" }}
        maxWidth={fullScreen ? "lg" : "xxl"}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={3}
          sx={{
            pl: 3,
            py: 1,
            pr: 1.8,
            pt: 3,
            pb: 2,
          }}
        >
          <Typography variant="h5">{header}</Typography>
        </Stack>
        <Divider />
        <DialogContent sx={{ px: { xs: 2, sm: 3 }, pt: 1 }}>
          {title ? (
            <Typography color="text.secondary" sx={{ py: 1 }} variant="h6">
              {title}
            </Typography>
          ) : null}
          {description ? (
            <Typography color="text.secondary" variant="p">
              {description}
            </Typography>
          ) : null}
          {customComp ? <div>{customComp}</div> : null}
        </DialogContent>
        {footer ? (
          <DialogActions sx={{ px: { xs: 2, sm: 3 }, pb: 2 }}>
            {cancel !== "" && (
              <>
                {!loader && (
                  <Button
                    color="inherit"
                    // variant='outlined'
                    onClick={cancel}
                  >
                    {no || "Close"}
                  </Button>
                )}
              </>
            )}
            <LoadingButton
              disabled={disabled}
              variant="contained"
              loading={loader}
              onClick={confirm}
              color={
                yes === "Delete" || yes === "Leave"
                  ? "error"
                  : yes === "Deactivate" || yes === "Pause"
                  ? "warning"
                  : yes === "Activate" || yes === "Resume"
                  ? "success"
                  : yes === "Terminate"
                  ? "warning"
                  : yes === "Logout"
                  ? "error"
                  : "primary"
              }
              autoFocus
            >
              {yes || "Confirm"}
            </LoadingButton>
          </DialogActions>
        ) : null}
      </Container>
    </Dialog>
  );
};