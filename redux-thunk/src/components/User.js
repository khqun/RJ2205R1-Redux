import { removeUser, getUserAPI } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from 'axios';

export default function UserData() {
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                dispatch(getUserAPI(res.data))
            })
    }, [dispatch])
    const data = useSelector(state => state.table)
    const name = useSelector(state => state.user);
    console.log(data);
    const renderTable = () => {
        return (
            data.map((user) => {
                return (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                )
            })
        )
    }
    if(!name) {
        return (
            <h3>You need to login</h3>
        )
    }
    return (
        <div>
            <h1>Hello {name.username}</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable() }
                    </tbody>
                </table>
            </div>
        </div>
    )
}