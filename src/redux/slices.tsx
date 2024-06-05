import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interface CounterState {
//   value: number
// }

// const initialState: CounterState = {
//   value: 0,
// }

export const counterSlice = createSlice({
  name: 'counter',
  initialState:
  [
    {
      heading : "heading 1",
      description : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      status: "todo",
      id: 1
     },
     {
      heading : "heading 1",
      description : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      status: "progress",
      id: 2
     },
     {
      heading : "heading 1",
      description : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      status: "progress",
      id: 3
     },
     {
      heading : "heading 1",
      description : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      status: "done",
      id: 4
     },
     {
      heading : "heading 1",
      description : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      status: "done",
      id: 5
     }
    ],

  reducers: { 
      dropList:(state,action)=>{
         console.log("redux")
        //  console.log(action.payload)
      }
  },
})

export const {dropList} = counterSlice.actions

export default counterSlice.reducer
