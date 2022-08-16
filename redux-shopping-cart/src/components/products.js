import { addToCart, getProductAPI } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios'
export default function Product() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const quantity = useSelector(state => state.quantity);
    useEffect(() => {
        axios.get('http://localhost:9001/api/cart')
            .then((res) => {
                console.log(res.data);
                dispatch(getProductAPI(res.data))
            }).catch((err) => {
                throw err
            })
    }, [dispatch])
    const handleAdd = (itemId) => {
        dispatch(addToCart(itemId))
    }
    const renderProducts = () => {
        return (
            products.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.productname}</td>
                        <td>{item.price}$</td>
                        <td>
                            <button className="btn btn-success" onClick={() => handleAdd(item.id)}>Add to cart</button>
                        </td>
                    </tr>
                )
            })
        )
    }
    return (
        <div className="container-fluid">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderProducts()}
                </tbody>
            </table>
            <div className="header">
                <Link to='/cart'>
                    Cart {quantity}
                </Link>
            </div>
        </div>
    )
}