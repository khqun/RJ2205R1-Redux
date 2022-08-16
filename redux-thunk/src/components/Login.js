import { checkAdmin } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function UserLogin() {
    const dispatch = useDispatch();
    const account = useSelector(state => state.user);
    const navigate = useNavigate();
    async function handleSubmit() {
        await dispatch(checkAdmin(user));
    }
    const [user, setUser] = useState({});
    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (account.username === "hzat" && account.password === "hzat1234") {
            navigate("/user-data");
        }
        setUser({})
    }, [account, navigate]);
    return (
        <div>
            <div>
                <h2>Username: </h2>
                <input name="username" type='text' value={user.username || ''} onChange={handleChange} />
            </div>
            <div>
                <h2>Password: </h2>
                <input name="password" type='text' value={user.password || ''} onChange={handleChange} />
            </div>
            <div>
                <button onClick={() => handleSubmit()}>Submit</button>
            </div>
        </div>
    )
}