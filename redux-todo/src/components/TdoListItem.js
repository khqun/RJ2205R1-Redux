// delete 
import { useDispatch } from 'react-redux';
import { deleteAction } from '../redux/actions';

export default function TodoListItem(props) {
    const dispatch = useDispatch();
    const handleRemove = (id) => {
        dispatch(deleteAction(id))
    }
    return (
        <div>
            <h4>{props.todo.text}</h4>
            <button className="btn btn-danger" type="button" onClick={() => handleRemove(props.todo.id)}>
                Remove
            </button>
            <hr />
        </div>
    )
}