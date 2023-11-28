import { AuthContext } from "../contexts/authContext"
import { IAuthContextData } from "../interfaces/user.interfaces.ts"
import { useContext } from "react"

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser utilizado com o AuthProvider')
  }
  return context
}

export { useAuth }