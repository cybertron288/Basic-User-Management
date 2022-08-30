import GlobalContext from "./GlobalContext"
import React, { useEffect, useState } from "react"
import ApiService from "../services/ApiService"
import showToast from "../services/ToasterService"

const GlobalState = ({ children }) => {
  const { getUsers } = ApiService

  const [allUsers, setAllUsers] = useState([])
  const [user, setUser] = useState()
  const [isUserLoading, setIsUserLoading] = useState(true)

  useEffect(() => {
    getUsers()
      .then(({ data }) => {
        let updatedList = data.map((item) => ({ ...item, liked: false }))
        setAllUsers(updatedList)
        setIsUserLoading(false)
      })
      .catch(() => {
        showToast("error", "There is some error fetching data.")
      })
  }, [getUsers])

  return (
    <GlobalContext.Provider
      value={{ allUsers, isUserLoading, setUser, setAllUsers, user }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
