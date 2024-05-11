import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';

const Update = () => {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const {title,desc,priority,due,completed}= existingUser[0]
    const [utitle,setTitle] = useState(title)
    const [udesc , setDesc] = useState(desc)
    const [upriority , setPriority] = useState(priority)
    const [udue,setDue] = useState(due)
    const [ucompleted, setCompleted] = useState(completed);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) =>{
        event.preventDefault();
        dispatch(updateUser({
            id:id,
            title:utitle,
            desc:udesc,
            priority:upriority,
            due:udue,
            completed:ucompleted
        }))
        navigate('/')
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Update User</h3>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' name='title' className='form-control' placeholder='enter the title'
                   value={utitle} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='desc'>Description:</label>
                    <input type='text' name='desc' className='form-control' placeholder='enter the description'
                   value={udesc} onChange={e => setDesc(e.target.value)}/>
                </div><br/>
                <div>
                    <label htmlFor='priority'>Priority:</label>
                    <input type='text' name='priority' className='form-control' placeholder='enter the priority'
                   value={upriority} onChange={e => setPriority(e.target.value)}/>
                </div><br/>
                <div>
                    <label htmlFor='due'>Due Date:</label>
                    <input type='date' name='due' className='form-control' placeholder='enter the due date'
                   value={udue} onChange={e => setDue(e.target.value)}/>
                </div><br/>
                <div>
                    <label htmlFor='completed'>Completed/Pending:</label>
                    <input type='checkbox' name='completed' className='form-control' placeholder='enter the due date'
                   value={ucompleted} onChange={e => setCompleted(e.target.value)}/>
                </div><br/>
                <button className='btn btn-info'>Update</button>
            </form>

        </div>
      
    </div>

  )
}

export default Update
