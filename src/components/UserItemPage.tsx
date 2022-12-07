import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

interface UserItemPageParams {
    id: string;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    // @ts-ignore
    const params = useParams<UserItemPageParams>();
    const navigate = useNavigate();

    useEffect(()=>{
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e);
        }
    }
    return (
        <div>
            <h1>{user?.name}'s page</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street}
            </div>
            <button onClick={() => navigate('/users')}>Back</button>
        </div>
    );
};

export default UserItemPage;