import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User, UserId, UserWithId } from '../types'

const DEFAULT_STATE = [
  {
    id: crypto.randomUUID(),
    name: 'Jhonan Muñoz',
    email: 'jhonan@gmail.com',
    github: 'jhonancaleb'
  },
  {
    id: crypto.randomUUID(),
    name: 'Luisa Rodriguez',
    email: 'luisarodriguez@gmail.com',
    github: 'luisa'
  },
  {
    id: crypto.randomUUID(),
    name: 'Carlos Sanchez',
    email: 'carlossanchez@yahoo.com',
    github: 'carlos'
  },
  {
    id: crypto.randomUUID(),
    name: 'Ana Martinez',
    email: 'anamartinez@hotmail.com',
    github: 'ana'
  },
  {
    id: crypto.randomUUID(),
    name: 'Eduardo Lopez',
    email: 'eduardolopez@gmail.com',
    github: 'eduardo'
  },
  {
    id: crypto.randomUUID(),
    name: 'Maria Gonzalez',
    email: 'mariagonzalez@yahoo.com',
    github: 'maria'
  },
  {
    id: crypto.randomUUID(),
    name: 'Pedro Ramirez',
    email: 'pedroramirez@hotmail.com',
    github: 'pedro'
  },
  {
    id: crypto.randomUUID(),
    name: 'Laura Castro',
    email: 'lauracastro@gmail.com',
    github: 'laura'
  },
  {
    id: crypto.randomUUID(),
    name: 'Roberto Diaz',
    email: 'robertodiaz@yahoo.com',
    github: 'roberto'
  },
  {
    id: crypto.randomUUID(),
    name: 'Isabel Torres',
    email: 'isabeltorres@hotmail.com',
    github: 'isabel'
  },
  {
    id: crypto.randomUUID(),
    name: 'Miguel Lopez',
    email: 'miguellopez@gmail.com',
    github: 'miguel'
  },
  {
    id: crypto.randomUUID(),
    name: 'Carmen Rodriguez',
    email: 'carmenrodriguez@yahoo.com',
    github: 'carmen'
  },
  {
    id: crypto.randomUUID(),
    name: 'Juan Perez',
    email: 'juanperez@hotmail.com',
    github: 'juan'
  },
  {
    id: crypto.randomUUID(),
    name: 'Patricia Martinez',
    email: 'patriciamartinez@gmail.com',
    github: 'patricia'
  },
  {
    id: crypto.randomUUID(),
    name: 'Diego Sanchez',
    email: 'diegosanchez@yahoo.com',
    github: 'diego'
  }
]
const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__')
  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE
})()

const sliceUsers = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action:PayloadAction<User>) => {
      const newUser = {
        id: crypto.randomUUID(),
        ...action.payload
      }
      state.push(newUser) // manera recomendable en react tollkit, mutar el estado
      // Otra manera
      // const newState = [...state, newUser]
      // return newState
    },
    editUser: (state, action:PayloadAction<UserWithId>) => {
      const userNewData = action.payload
      const idUserToEdit = state.findIndex(user => user.id === userNewData.id)
      state[idUserToEdit] = userNewData
    },
    deleteUserbyId: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter(user => user.id !== id)
    }
  }
})

export default sliceUsers.reducer
export const { deleteUserbyId, addUser, editUser } = sliceUsers.actions
