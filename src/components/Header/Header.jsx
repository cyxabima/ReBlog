import React from 'react'
import { Logo, Container, LogoutBtn } from "../index"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Header() {

    const authStatus = useSelector((state) => state.status)
    const navigate = useNavigate()


    const navItem = [
        {
            name: "Home",
            slug: "/",
            active: true
        }, {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },

    ]
    return (
        <header className='py-3 shadow bg-rose-100'>
            <Container>
                <nav className='flex items-center'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width='70px' />
                        </Link>
                    </div>

                    <ul className='flex ml-auto'>
                        {navItem.map(
                            (item) => item.active ? (
                                <li key={item.slug} >
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className='inline-block px-6 py-2 duration-200
                                        hover:bg-rose-500 rounded-full hover:cursor-pointer'>
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}

                        {
                            authStatus && (
                                <li>
                                    <LogoutBtn />
                                </li>
                            )
                        }
                    </ul>

                </nav>
            </Container>
        </header>
    )
}

export default Header