import React, { useEffect, useState } from 'react'
import postsService from '../appwrite/PostsService'
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postsService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    
    return (
        <div className='w-full py-8'>
            <Container>
                <section className='m-12'>
                    <h1 className='mb-5 text-center text-5xl text-rose-600 font-bold'>Carrnto Blogs</h1>
                    <div className='flex flex-col gap-5'>
                        <h2 className='bg-rose-400 inline text-center m-auto p-4 rounded-full font-bold text-2xl'>
                            Your Destination for Mobility, Travel & Automotive Insights
                        </h2>
                        <h3 className=' text-white'>At Carento Blog, we bring you the latest updates, tips, and stories from the world of smart mobility and car rental. Whether you're a frequent traveler, a road trip enthusiast, or just curious about how transportation is evolving — you're in the right place.</h3>
                    </div>


                </section>

                {
                    (posts.length === 0) ? <ProtectComponent /> :


                        <section>
                            <h1 className='mb-5 text-center text-5xl text-rose-600 font-bold'>Recent Blogs</h1>
                            <div className='flex flex-wrap'>
                                {posts.map((post) => (
                                    <div key={post.$id} className='p-2 w-1/4'>
                                        <PostCard {...post} />
                                    </div>
                                ))}
                            </div>
                        </section>}
            </Container>
        </div>
    )
}

export default Home


function ProtectComponent() {

    return (

        <div className="w-full py-8 mt-4 text-center">
            <Container>

                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold text-white hover:text-gray-500">
                            Login to read posts
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    )
}