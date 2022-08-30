import React, { useContext } from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Divider, Grid } from "@mui/material"
import { Box } from "@mui/system"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined"
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline"
import DeleteIcon from "@mui/icons-material/Delete"
import EditDialog from "./EditDialog"
import GlobalContext from "../context/GlobalContext"
import showToast from "../services/ToasterService"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined"
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"

const Cards = () => {
  const { setUser, allUsers, setAllUsers } = useContext(GlobalContext)

  const handleLike = (usr) => {
    let list = [...allUsers]

    for (const obj of list) {
      if (obj.email === usr.email) {
        obj.liked = !obj.liked
        break
      }
    }
    setAllUsers(list)
  }

  const handleEdit = (usr) => {
    setUser(usr)
  }

  const handleDelete = (usr) => {
    const updatedArray = allUsers.filter((item) => item.email !== usr.email)
    setAllUsers(updatedArray)
    showToast("success", "Contact deleted successfully")
  }
  
  return (
    <>
      {allUsers.map((user) => {
        return (
          <Grid item md={4} sm={6} lg={3} key={user.email}>
            <Card>
              <Box sx={{ px: 4, bgcolor: "#f4f4f4" }}>
                <CardMedia
                  component="img"
                  image={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?mood[]=happy`}
                  alt="green iguana"
                />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Grid container alignItems="center" marginTop={1}>
                    <EmailOutlinedIcon /> &nbsp; {user.email}
                  </Grid>
                  <Grid container alignItems="center" marginTop={1}>
                    <PhoneEnabledOutlinedIcon /> &nbsp; {user.phone}
                  </Grid>
                  <Grid container alignItems="center" marginTop={1}>
                    <LanguageOutlinedIcon /> &nbsp; {user.website}
                  </Grid>
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 0 }}>
                <Grid
                  container
                  textAlign={"center"}
                  sx={{ border: "1px solid #efefef", bgcolor: "#fafafa" }}
                >
                  <Grid item xs={4} onClick={() => handleLike(user)}>
                    <Button fullWidth>
                      {user.liked ? (
                        <Icons.LikeFilled />
                      ) : (
                        <Icons.LikeOutline />
                      )}
                    </Button>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{ mr: "-1px" }}
                  />
                  <Grid item xs={4} onClick={() => handleEdit(user)}>
                    <EditDialog Icon={Icons.Edit} />
                  </Grid>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{ mr: "-1px" }}
                  />
                  <Grid item xs={4} onClick={() => handleDelete(user)}>
                    <Button fullWidth>
                      <Icons.Delete />
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </>
  )
}

export default Cards

const LikeOutline = () => <FavoriteBorderOutlinedIcon color="error" />

const LikeFilled = () => <FavoriteOutlinedIcon color="error" />

const Edit = () => <DriveFileRenameOutlineIcon />

const Delete = () => <DeleteIcon />

const Icons = {
  LikeOutline,
  LikeFilled,
  Edit,
  Delete,
}
