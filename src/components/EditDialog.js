import React, { useState, useContext } from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { FormControl, Grid, OutlinedInput } from "@mui/material"
import { styled } from "@mui/material/styles"
import GlobalContext from "../context/GlobalContext"
import showToast from "../services/ToasterService"

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    textAlign: "left",
    padding: 0,
  },
  [theme.breakpoints.up("md")]: {
    textAlign: "right",
  },
}))

const EditDialog = ({ Icon }) => {
  const [open, setOpen] = useState(false)
  const { setUser, user, allUsers, setAllUsers } = useContext(GlobalContext)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSave = () => {
    let updatedUsers = allUsers.map((item) => {
      if (item.id === user.id) {
        return user
      } else {
        return item
      }
    })
    setAllUsers(updatedUsers)
    handleClose()
    showToast("success", "Contact saved successfully")
    console.log("updated users", updatedUsers)
  }
  
  return (
    <>
      <Button fullWidth onClick={handleClickOpen}>
        <Icon />
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ border: "2px solid #efefef", py: 1 }}>
          Basic Modal
        </DialogTitle>
        {user && (
          <DialogContent sx={{ my: 2 }}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Grid item xs={12} md={4}>
                <Root textAlign="right">
                  <sup>*</sup> Name:
                </Root>
              </Grid>
              <Grid item xs={12} md={8}>
                <FormControl variant="outlined" fullWidth={true}>
                  <OutlinedInput
                    id="forFirstName"
                    type="text"
                    // fullWidth={true}
                    size="small"
                    value={user.name}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        name: e.target.value,
                      })
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4}>
                <Root textAlign="right">
                  <sup>*</sup> Email:
                </Root>
              </Grid>
              <Grid item xs={12} md={8}>
                <FormControl variant="outlined" fullWidth={true}>
                  <OutlinedInput
                    id="forFirstName"
                    type="text"
                    // fullWidth={true}
                    size="small"
                    value={user.email}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        email: e.target.value,
                      })
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4}>
                <Root textAlign="right">
                  <sup>*</sup> Phone:
                </Root>
              </Grid>
              <Grid item xs={12} md={8}>
                <FormControl variant="outlined" fullWidth={true}>
                  <OutlinedInput
                    id="forFirstName"
                    type="text"
                    // fullWidth={true}
                    size="small"
                    value={user.phone}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        phone: e.target.value,
                      })
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4}>
                <Root textAlign="right">
                  <sup>*</sup> Website:
                </Root>
              </Grid>
              <Grid item xs={12} md={8}>
                <FormControl variant="outlined" fullWidth={true}>
                  <OutlinedInput
                    id="forFirstName"
                    type="text"
                    // fullWidth={true}
                    size="small"
                    value={user.website}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        website: e.target.value,
                      })
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </DialogContent>
        )}

        <DialogActions sx={{ border: "2px solid #efefef", py: 1 }}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="secondory" onClick={handleSave}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default EditDialog
