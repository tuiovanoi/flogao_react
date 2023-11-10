import {
    IAuthContextData, IAuthProvider,
    IResponseUser, IUser
} from '../services/api'
import React, { createContext, useState, useCallback } from 'react'
import api from '../services/api'
import { apiUser } from 'services/data'
import { isAfter } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

const AuthProvider: React.FC<IAuthProvider> = ({children}) => {
    const [auth, setAuth] = useState<IResponseUser>({} as IResponseUser)
    const navigate = useNavigate():

    const signIn = useCallback(async ({ email, password }: IUser) => {
        const response = await apiUser.login({ email, password })
        const { token, user } = response.data
        api.defaults.headers.common.Authorization = 'Bearer' ${token}
        setAuth({ token, user })
    
        localStorage.setItem('@web1:token', JSON.stringify(token))
        localStorage.setItem('@web1:user', JSON.stringify(user))
    }, [])
    
    const removeLocalStorage = useCallback(async () => {
        localStorage.removeItem('@web1:token')
        localStorage.removeItem('@web:user')
   }   [])
}