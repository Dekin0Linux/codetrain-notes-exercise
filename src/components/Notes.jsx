import React from 'react'
import Cards from './Cards'
import AddModal from './NoteModal'
import { Button,ButtonToolbar } from 'rsuite'

AddModal

function Notes() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>

      </div>
      </div>
    </>
    
  )
}

export default Notes