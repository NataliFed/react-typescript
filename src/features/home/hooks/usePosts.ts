import {useState, useEffect, useRef } from 'react'
import { PostsInterface } from '../interfaces'

export const usePosts = () => {
    const [posts, setPosts] = useState([] as PostsInterface[]);
    const setIsTotal = useRef(false);

    const [pagination, setPagination] = useState({
        limit: 9,
        total: 10,
        page: 1
    })
        
    const onChangePagination = (e: any, value: number) => {
        setPagination({...pagination, page: value})
    } 

    useEffect(() => {
        const {page, limit} = pagination;
        const nextSkip = page === 1 ? 0 : ( page -1 ) * limit

        fetch(`https://dummyjson.com/posts?limit=${pagination.limit}&skip=${nextSkip}`)
            .then((res) => res.json())
            .then((data) => {
            setPosts(data.posts);

            if(!setIsTotal.current) {
                setPagination({...pagination, total: Math.round(data.total / pagination.limit)});
                setIsTotal.current = true;
            }
            });  
    }, [pagination.page])


    
    return {
        posts,
        pagination,
        onChangePagination
    }
}
