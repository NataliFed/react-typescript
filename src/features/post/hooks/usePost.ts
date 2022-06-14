import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { PostsInterface } from '../interfaces'

export const usePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({} as PostsInterface);


    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data);
            });
    }, [])
    
    return post

}

