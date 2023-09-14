import { User, UserId, UserWithId, addUser, deleteUserbyId, editUser } from '../store/users/slice'
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
