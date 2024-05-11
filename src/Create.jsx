import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const [title,setTitle] = useState('')
    const [desc , setDesc] = useState('')
    const [priority , setPriority] = useState('')
    const [due,setDue] = useState('')
    const [completed, setCompleted] = useState('');
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const toggleCompleted = () => {
        setCompleted(!completed);
        // You can perform additional tasks here when the checkbox is toggled
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id:users[users.length -1].id+1,title,desc,priority,due}))
        navigate('/')
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Add new task</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' name='title' className='form-control' placeholder='enter the title'
                    onChange={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='desc'>Description:</label>
                    <input type='text' name='desc' className='form-control' placeholder='enter the description'
                    onChange={e => setDesc(e.target.value)}/>
                </div><br/>
                <div>
                    <label htmlFor='priority'>Priority:</label>
                    <input type='text' name='priority' className='form-control' placeholder='enter the priority'
                    onChange={e => setPriority(e.target.value)}/>
                </div><br/>
                <div>
                    <label htmlFor='due'>Due Date:</label>
                    <input type='date' name='due' className='form-control' placeholder='enter the due date'
                    onChange={e => setDue(e.target.value)}/>
                </div><br/>
                <div>
                    <label htmlFor='completed'>Completed/Pending:</label>
                    <input type='checkbox' checked={completed} name='completed' className='form-control' placeholder='enter the due date'
                   onChange={toggleCompleted}/>
                </div><br/>
                

                <button className='btn btn-info'>Submit</button>
            </form>

        </div>
      
    </div>
  )
}

export default Create
