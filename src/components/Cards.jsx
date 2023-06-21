import React from 'react'
import { Link ,NavLink} from 'react-router-dom';
import TextTruncate from 'react-text-truncate';
import { Button,ButtonToolbar } from 'rsuite'
import EditNoteModal from './EditNoteModal'
import 'rsuite/dist/rsuite.min.css';
import { useDispatch } from 'react-redux';
import { setDelete } from '../noteStore/NoteSlice';

function Cards(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch()

    


    
  return (
    <div className='shadow-md border-blue-500 border-[2px] rounded-lg overflow-hidden h-[25rem]'>
     <EditNoteModal open={open} handleClose={handleClose} modaltitle='Edit Note' noteData={props.note}/> 

       <div className='bg-yellow-400 p-5'>
            <h3 className='font-semibold text-xl'>{props.note.title}</h3>
       </div>

       <div className='p-5'>
            <p className='text-md text-slate-500'>{props.note.date}</p>
            <TextTruncate
                line={8} // Number of lines to display (in this case, just 1 line)
                element="p" // HTML element to use (in this case, a paragraph)
                truncateText="…" // Ellipsis character to indicate truncation
                text={props.note.description} // Your original text
                textTruncateChild={<Link to={'/details/1'} className='text-blue-400'>Read more</Link>} // Optional: Custom "Read more" link
            />
       </div>

       <div className='p-5 flex justify-between'>
       <ButtonToolbar>
          <Button onClick={handleOpen} className='bg-blue-600 text-white'>Edit</Button>
        </ButtonToolbar>
      
          
    
            <Button onClick={()=>dispatch(setDelete(props.note.id))} className='bg-red-600 text-white'>Delete</Button>
  
       </div>
    </div>
  )
}

export default Cards