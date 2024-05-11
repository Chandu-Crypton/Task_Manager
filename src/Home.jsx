import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteUser } from './UserReducer'
const Home = () => {
const users = useSelector((state) => state.users)
const dispatch = useDispatch();
const handleDelete = (id) => {
         dispatch(deleteUser({id:id}))
}
  return (
    <div className='container'>
        <h2>Task App</h2>
        <Link to='/create' className='btn btn-success my-3'>Create +</Link>
        
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Due</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
             {users.map((user,index)=>(
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.title}</td>
                    <td>{user.desc}</td>
                    <td>{user.priority}</td>
                    <td>{user.due}</td>
                   
                    <td>
                        
                    <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                    <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                    <button type='checkbox' className='btn btn-sm btn-success ms-2'>Completed</button>
                   
                    </td>

                </tr>
             ))

             }
            </tbody>

        </table>
      
    </div>
  )
}
 
export default Home
