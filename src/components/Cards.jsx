import React from 'react'
import { Link ,NavLink} from 'react-router-dom';
import TextTruncate from 'react-text-truncate';
import { Button,ButtonToolbar } from 'rsuite'
import AddModal from './NoteModal'
import 'rsuite/dist/rsuite.min.css';

function Cards() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let originalText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    
  return (
    <div className='shadow-md border-blue-500 border-[2px] rounded-lg overflow-hidden h-[25rem]'>
        <AddModal open={open} handleClose={handleClose} modaltitle='Edit Note'/>
       <div className='bg-yellow-400 p-5'>
            <h3 className='font-semibold text-xl'>Title</h3>
       </div>

       <div className='p-5'>
            <p className='text-md text-slate-500'>Date of note</p>
            <TextTruncate
                line={8} // Number of lines to display (in this case, just 1 line)
                element="p" // HTML element to use (in this case, a paragraph)
                truncateText="…" // Ellipsis character to indicate truncation
                text={originalText} // Your original text
                textTruncateChild={<Link to={'/details/1'} className='text-blue-400'>Read more</Link>} // Optional: Custom "Read more" link
            />
       </div>

       <div className='p-5 flex justify-between'>
      
            <Button onClick={handleOpen} className='bg-blue-600 text-white'>Edit</Button>
    
            <Button onClick={handleOpen} className='bg-red-600 text-white'>Delete</Button>
  
       </div>
    </div>
  )
}

export default Cards