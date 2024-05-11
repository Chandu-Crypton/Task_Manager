import { createSlice } from '@reduxjs/toolkit'
import { userList } from './Data'

const userSlice = createSlice({
    name:"users",
    initialState:userList,
    reducers:{
            addUser:(state,action) => {
                state.push(action.payload)
            },
            updateUser:(state,action) => {
                 const {id,title,desc,priority,due,completed} = action.payload;
                 const uu = state.find(user => user.id == id);
                 if(uu){
                    uu.title=title;
                    uu.desc=desc;
                    uu.priority=priority;
                    uu.due=due;
                    uu.completed=completed
                 }
            },
            deleteUser : (state,action) => {
                const {id} = action.payload;
                const uu = state.find(user => user.id == id);
                if(uu){
                    return state.filter(f => f.id  !== id);
                }
            }   
    }
})

export const{addUser,updateUser,deleteUser} = userSlice.actions
export default userSlice.reducer



