import { Title } from '@tremor/react'
import FormUser from './components/FormUser'
import ListUsers from './components/ListUser'
import { Toaster } from 'sonner'
function App () {
  return (

    <div className='container mx-auto mt-10'>
      <Title color='blue' className='text-center'>App redux</Title>
      <br />
      <div className='flex flex-col lg:flex-row gap-2 items-start'>
        <FormUser className='w-full lg:max-w-[400px] min-w-300px' />
        <ListUsers className='w-full min-w-[300px]]' />
      </div>
      <Toaster richColors />
    </div>
  )
}

export default App
