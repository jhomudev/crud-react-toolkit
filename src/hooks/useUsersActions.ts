import { addUser, deleteUserbyId, editUser } from '../store/users'
import { User, UserId, UserWithId } from '../types'
import { useAppDispatch } from './store'

function useUsersActions () {
  const dispatch = useAppDispatch()

  function removeUser (id: UserId) {
    dispatch(deleteUserbyId(id))
  }

  function addNewUser (newUser:User) {
    dispatch(addUser(newUser))
  }

  function modifyUser (userUpdated:UserWithId) {
    dispatch(editUser(userUpdated))
  }

  return { removeUser, addNewUser, modifyUser }
}
export default useUsersActions
