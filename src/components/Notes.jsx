import React from 'react'
import Cards from './Cards'
import AddModal from './NoteModal'
import { Button,ButtonToolbar } from 'rsuite'
//useSelector - select state to use
//useDispatch - run fucntion
import { useSelector,useDispatch } from 'react-redux'

AddModal

function Notes() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //use the useSelector to get the state
  const allNotes = useSelector((state)=>state.noteReducer.notes)

  console.log(allNotes)


  return (
    <>
      <AddModal open={open} handleClose={handleClose} modaltitle='Add New Note'/>

      <div className='md:flex'>

        {/* SIDEBAR  */}
      <div className='bg-[#e8fbff] md:h-screen md:p-10 p-3' >
        <ButtonToolbar>
          <Button onClick={handleOpen}>Add Note</Button>
        </ButtonToolbar>
      </div>


      {/* MAIN CONTENT */}
      <div className='bg-white flex-1 rounded-s-2xl shadow-inner p-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 overflow-auto'>
      
        {
          allNotes.map((note)=>(
            <Cards key={note.id} note={note}/>
          ))
        }

      </div>
      </div>
    </>
    
  )
}

export default Notes