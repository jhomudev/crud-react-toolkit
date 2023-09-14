import { Button, Card, Text, TextInput, Title } from '@tremor/react'
import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useUsersActions from '../hooks/useUsersActions'
import { useAppSelector } from '../hooks/store'
import { UserWithId } from '../types'

function FormUser ({ className }: { className: string }) {
  const users = useAppSelector(state => state.users)
  const { addNewUser, modifyUser } = useUsersActions()
  const { id } = useParams()
  const navigate = useNavigate()

  const [error, setError] = useState<string | null>(null)
  const [formName, setFormName] = useState<string>('')
  const [formEmail, setFormEmail] = useState<string>('')
  const [formGithub, setFormGithub] = useState<string>('')

  function resetFormEntries () {
    setFormName('')
    setFormEmail('')
    setFormGithub('')
  }

  const handleChangeFormEmail = (e:ChangeEvent<HTMLInputElement>) => setFormEmail(e.target.value)
  const handleChangeFormName = (e:ChangeEvent<HTMLInputElement>) => setFormName(e.target.value)
  const handleChangeFormGithub = (e:ChangeEvent<HTMLInputElement>) => setFormGithub(e.target.value)

  function handleSubmit (e:ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    const name = formName
    const email = formEmail
    const github = formGithub

    if (!name || !email || !github) {
      setError('Complete todos los campos')
      return
    }

    id
      ? modifyUser({ id, name, email, github })
      : addNewUser({ name, email, github })
    setError(null)
    navigate('/')
    resetFormEntries()
  }

  useEffect(() => {
    if (id) {
      const usersToEdit = users.find(user => user.id === id) as UserWithId
      setFormName(usersToEdit.name)
      setFormEmail(usersToEdit.email)
      setFormGithub(usersToEdit.github)
    }
  }, [id])

  return (
    <Card className={className}>
      <Title>{id ? 'Editar' : 'Crear nuevo'}  usuario</Title>
      <form onSubmit={handleSubmit} className='flex flex-wrap gap-2 items-center mt-3'>
        <TextInput value={formName} onChange={handleChangeFormName} className='flex-[1_0_220px]' placeholder='Escribe el nombre' />
        <TextInput value={formEmail} onChange={handleChangeFormEmail} className='flex-[1_0_220px]' placeholder='Escribe el correo' type='email' />
        <TextInput value={formGithub} onChange={handleChangeFormGithub} className='flex-[1_0_220px]' placeholder='Escribe el github' />
        <Button className='flex-[1_0_150px]'>{id ? 'Modificar' : 'Agregar'}</Button>
      </form>
      {error && <Text className='text-red-500 mt-2'>{error}</Text>}
    </Card>
  )
}
export default FormUser
