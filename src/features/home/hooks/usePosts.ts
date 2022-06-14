import {useState, useEffect } from 'react'
import { PostsInterface } from '../interfaces'

export const usePosts = () => {
    const [posts, setPosts] = useState(
    [] as PostsInterface[]
 );

    useEffect(() => {
        fetch('https://dummyjson.com/posts?limit=10')
            .then((res) => res.json())
            .then((data) => {
            setPosts(data.posts);
            });  
    }, [])
    
    return {
        posts
    }
}
