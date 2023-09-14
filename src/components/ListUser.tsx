import {
  Card,
  Title,
  Text,
  Flex,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  Button
} from '@tremor/react'
import { TrashIcon, PencilAltIcon } from '@heroicons/react/outline'
import { useAppSelector } from '../hooks/store'
import { UserId } from '../types'
import useUsersActions from '../hooks/useUsersActions'
import { Link } from 'react-router-dom'

export default function ListUsers ({ className }: {className: string}) {
  const users = useAppSelector(state => state.users)
  const { removeUser } = useUsersActions()

  function handleRemoveUser (id: UserId) {
    removeUser(id)
  }

  return (
    <Card className={className}>
      <Flex justifyContent='start' className='space-x-2'>
        <Title>Usuarios</Title>
        <Badge color='green'>{users.length}</Badge>
      </Flex>
      <Text className='mt-2'>Usuarios en la lista</Text>

      <Table className='mt-6'>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Correo</TableHeaderCell>
            <TableHeaderCell>Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((item, id) => (
            <TableRow key={item.id}>
              <TableCell>{id + 1}</TableCell>
              <TableCell className='flex gap-2 items-center'>
                <img className='w-10 h-10 rounded-full' src={`https://unavatar.io/github/${item.github}`} alt='avatar' />
                {item.name}
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell className='flex gap-2 items-center'>
                <Link to={`/edit/${item.id}`}>
                  <Button tooltip='Editar' size='xs' variant='primary' color='blue'>
                    <PencilAltIcon className='w-6 h-6' />
                  </Button>
                </Link>
                <Button onClick={() => handleRemoveUser(item.id)} tooltip='Eliminar' size='xs' variant='secondary' color='red'>
                  <TrashIcon className='w-6 h-6' />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
