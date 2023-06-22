
import { Modal, Button,Form,Input, ButtonToolbar } from 'rsuite';
import React,{useState} from 'react';
import 'rsuite/dist/rsuite.min.css';
import {v4} from 'uuid'

//text area display
const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);


const NoteModal = ({open,handleClose,modaltitle}) => {

  const [title,setTitle] = useState('')
  const [note,setNote]=useState('');
  const [date,setDate ]= useState('')

  const handleSubmit=()=>{

    if((title === '') || (note === '') || (date === '')){
      alert('Complete all Fields')
      return
    }else{
      console.log({id:v4(),title,date,note})
      setTitle('')
      setDate('')
      setNote('')
      handleClose()
    }


   
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
              <Form.Control name="title" onChange={(value)=>setTitle(value)}/>
            </Form.Group>

            <Form.Group controlId="title">
              <Form.ControlLabel>Title</Form.ControlLabel>
              <Form.Control name="title" type='date' onChange={(value)=>setDate(value)}/>
            </Form.Group>

            <Form.Group controlId="note">
              <Form.ControlLabel>Note</Form.ControlLabel>
              <Form.Control rows={5} name="note" accepter={Textarea} onChange={(value)=>setNote(value)}/>
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

export default NoteModal