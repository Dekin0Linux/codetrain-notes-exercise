
import { Modal, Button,Form,Input, ButtonToolbar } from 'rsuite';
import React,{useState} from 'react';
import 'rsuite/dist/rsuite.min.css';
import { useDispatch } from 'react-redux';
import { setEdit} from '../noteStore/NoteSlice';

//text area display
const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);


const EditNoteModal = ({open,handleClose,modaltitle,noteData}) => {

  const dispatch = useDispatch() //initialize the dispatch function

  const [title,setTitle] = useState('')
  const [description,setDescription]=useState('');
  const [date,setDate ]= useState('')

  const handleSubmit=()=>{

    
      dispatch(setEdit({id:noteData.id,title,description,date}))

      handleClose()
    
  }
  
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>{modaltitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form fluid>

            <Form.Group controlId="title">
              <Form.ControlLabel>Title</Form.ControlLabel>
              <Form.Control name="title" onChange={(value)=>setTitle(value)} defaultValue={noteData.title}/>
            </Form.Group>

            <Form.Group controlId="title">
              <Form.ControlLabel>Title</Form.ControlLabel>
              <Form.Control name="title" type='date'  onChange={(value)=>setDate(value)} defaultValue={noteData.date}/>
            </Form.Group>

            <Form.Group controlId="note">
              <Form.ControlLabel>Note</Form.ControlLabel>
              <Form.Control rows={5} name="note" accepter={Textarea} onChange={(value)=>setDescription(value)} defaultValue={noteData.description}/>
            </Form.Group>


            <ButtonToolbar>
              <Button appearance="primary" className='bg-blue-500' onClick={handleSubmit}>
                {modaltitle == 'Edit Note' ? 'Update' : 'Add'}
              </Button>
            </ButtonToolbar>

  
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditNoteModal