import { createSlice } from '@reduxjs/toolkit'


//const [note,setNote] = useState([])
//const [age,setNote] = useState([])
//const [name,setNote] = useState([])
//const [note,setNote] = useState([])

const initialState = {
    
    age : 10,
    name : 'Elvis',
    notes : [
        {
            id: 1,
            title: 'My first Book',
            date: '2023-06-21',
            description : 'plenty text for the note sknsjkhsk j jsdfk lnndfkjs kdfnldf sdfnlskfs lkfnlskfsdf '
        },
        {
            id: 2,
            title: 'My first Book',
            date: '2023-06-22',
            description : 'plenty text for the note sknsjkhsk j jsdfk lnndfkjs kdfnldf sdfnlskfs lkfnlskfsdf '
        },

    ],


}

export const NoteSlice = createSlice({
    name: "notes",
    initialState,

    reducers : {
        //add note function
        setNote:(state,action)=>{
            state.notes.push(action.payload)
        },

        setDelete:(state,action)=>{
            state.notes = state.notes.filter((note)=>note.id != action.payload)
        },

        setEdit:(state, action)=>{
           let EditedNotes  = state.notes.map(note => note.id === action.payload.id ? action.payload : note) 
           state.notes = EditedNotes
        }


    }

})

export const {setNote,setDelete, setEdit} = NoteSlice.actions

export default NoteSlice.reducer