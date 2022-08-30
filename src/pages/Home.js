import { Container } from "@mui/material"
import React, { useContext } from "react"
import GlobalContext from "../context/GlobalContext"
import Cards from "../components/Cards"
import { Grid } from "@mui/material"
import Loader from "../components/Loader"

const Home = () => {
  const { isUserLoading } = useContext(GlobalContext)

  return (
    <>
      <Container maxWidth="xl" sx={{ my: 2 }}>
        <Grid container alignItems="center" justifyContent="center" spacing={4}>
          {isUserLoading ? <Loader /> : <Cards />}
        </Grid>
      </Container>
    </>
  )
}

export default Home
