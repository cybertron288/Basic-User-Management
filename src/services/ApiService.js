import axios from "axios"
import { USERS_URL } from "../utils/constants"

const ApiService = {
  getUsers: async () => {
    return axios.get(`${USERS_URL}`)
  },
}

export default ApiService
