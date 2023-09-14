import { Middleware } from '@reduxjs/toolkit'
import { addUser, deleteUserbyId, editUser } from '../users'
import { toast } from 'sonner'

export const messageForActionMiddleWare: Middleware = (_) => (next) => (action) => {
  next(action)
  if (action.type === deleteUserbyId.type) toast.success('Usuario eliminado')
  if (action.type === addUser.type) toast.success('Usuario creado')
  if (action.type === editUser.type) toast.success('Usuario modificado')
}
