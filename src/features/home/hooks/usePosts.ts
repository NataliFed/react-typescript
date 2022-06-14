import {useState, useEffect } from 'react'
import { PostsInterface } from '../interfaces'

export const usePosts = () => {
    const [posts, setPosts] = useState([] as PostsInterface[]);

    const [page, setPage] = useState(1);
    
    const LIMIT_POSTS = 9;
    

    const onChangePagination = (e: any, value: number) => {
        setPage(value)
    } 

    useEffect(() => {
        const skip = page === 1 ? 0 : ( page -1 ) * LIMIT_POSTS

        fetch(`https://dummyjson.com/posts?limit=${LIMIT_POSTS}&skip=${skip}`)
            .then((res) => res.json())
            .then((data) => {
            setPosts(data.posts);

            });  
    }, [page])


    
    return {
        posts,
        page,
        onChangePagination
    }
}
