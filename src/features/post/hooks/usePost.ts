import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { PostsInterface } from '../interfaces'

export const usePost = () => {
    const { id, type } = useParams();
    let navigate = useNavigate();

    const [post, setPost] = useState({} as PostsInterface);


    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data);
            });
    }, [])

    const onEditPostSubmit = (e: any) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;


        fetch(`https://dummyjson.com/posts/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, body })
        })
            .then(res => res.json())
            .then((data) => { 
                navigate(`/post/${id}`)
            });
    }

    return { post, isEdit: type === "edit", onEditPostSubmit }

}

