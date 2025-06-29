import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/AuthService"
import { login, logout } from './store/authSlice'
import { Header, Footer } from "./components"
import { Outlet } from 'react-router-dom'

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


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between  bg-black'>
      <div className='w-full block'>
        <Header />
        <main className='min-h-[80vh]'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
    :
    <p className='text-red-700 font-extrabold text-3xl' > loading</p>

}

export default App
