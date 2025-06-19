import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/AuthService"
import { login, logout } from './store/authSlice'
import { Header, Footer } from "./components"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))

  }, [])


  return (
    <>
      <Header />
      <div className='h-100 mt-12'>
        <h1 className='text-4xl text-center font-bold text-red-500'>
          ReBlog
        </h1>
        {loading ?
          <p className='text-red-700 font-extrabold text-3xl'>loading</p>
          : <p className='font-extrabold text-3xl text-center'>Rethink, ReWrite & ReBlog</p>}

      </div>

      <Footer />
    </>
  )

}

export default App
