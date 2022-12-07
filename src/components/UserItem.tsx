import React, {FC, PropsWithChildren} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}


const UserItem: FC<PropsWithChildren<UserItemProps>> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{
            marginTop: 20,
            padding: 15,
            border: "1px solid grey",
            cursor: "pointer"
        }}>
            {user.id}. {user.name} lives in {user.address.city} on the street {user.address.street}<br/>
            Zipcode: {user.address.zipcode}
        </div>
    );
};

export default UserItem;