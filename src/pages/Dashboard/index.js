import React, { useEffect } from 'react' ;
import api from '../../services/api';
export default function Dashboard() {
    useEffect(() => {
        
        async function loadSpots() {
            const _id = localStorage.getItem('user')
            const response = await api.get('/dashboard',{
                headers: {
                    user_id : _id
                }
            })
            console.log(response);
        }

        loadSpots();
    }, [])

    return (
        <h1>Dashboard</h1>
    )
}