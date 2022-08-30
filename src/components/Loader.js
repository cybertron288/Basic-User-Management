import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material"
import { Box } from "@mui/system"
import React from "react"

const arr = [...Array(10)].map((i) => i * 10)

const Loader = () => {
  return (
    <>
      {arr.map((item) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
            <Card>
              <Box sx={{ bgcolor: "#f4f4f4" }}>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  height={280}
                ></Skeleton>
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <Skeleton
                    variant="text"
                    animation="wave"
                    height={30}
                    style={{ marginBottom: 6 }}
                  />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Skeleton variant="text" animation="wave" height={10} />
                  <Skeleton variant="text" animation="wave" height={10} />
                  <Skeleton variant="text" animation="wave" height={10} />
                  <Skeleton
                    variant="text"
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                </Typography>
              </CardContent>
              <CardActions>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Skeleton variant="text" animation="wave" height={20} />
                  </Grid>
                  <Grid item xs={4}>
                    <Skeleton variant="text" animation="wave" height={20} />
                  </Grid>
                  <Grid item xs={4}>
                    <Skeleton variant="text" animation="wave" height={20} />
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

export default Loader
