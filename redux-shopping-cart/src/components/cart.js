import { removeFromCart } from "../redux/actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const money = useSelector(state => state.money)
    const remove = (itemId) => {
        dispatch(removeFromCart(itemId))
    }
    const renderCart = () => {
        return (
            cart.map((item) => {
                return (
                    <tr>
                        <td>{item.productname}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        <td>
                            <button onClick={() => remove(item.id)}>
                                remove
                            </button>
                        </td>
                    </tr>
                )
            })
        )
    }
    return (
        <div>
            <table className="table">
                <thead>
                    {renderCart()}
                </thead>
            </table>
            <div>
                <h1>money: {money} $</h1>
            </div>
            <Link to='/'>Home</Link>
        </div>
    )
}