import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addAction } from '../redux/actions';
import { v4 as uuidv1 } from 'uuid'
export default function NewTodo() {
    const [text, setText] = useState();
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = () => {
        if (text) {
            dispatch(addAction({
                id: uuidv1,
                text: text
            }))
        }
        setText("");
    }
    return (
        <div>
            <div className='d-flex'>
                <div className="col-md-6">
                    <input type="text" placeholder="Enter a new task" className="form-control"
                        onChange={handleChange} value={text} />
                </div>
                <div className="mx-sm-3 mb-2">
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button>
                </div>
            </div>
            <hr />
        </div>
    )
}