import React, { useEffect, useState } from 'react'
import postsService from '../appwrite/PostsService'
import { Container, PostCard } from '../components'

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postsService.getPosts().then((posts) => {
            if (posts) setPosts(posts.documents)
        })


    }, [])


    return (
        <div className='w-full py-8'>
            <Container>
                <h1 className='mb-5 text-center text-5xl text-rose-600 font-bold'>All Blogs</h1>

                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard
                                $id={post.$id}
                                title={post.title}
                                featuredImage={post.featuredImage}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts