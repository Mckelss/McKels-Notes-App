import React, { useState } from 'react';
import {ToastContainer, toast} from "react-toastify";


const AddNoteForm = ({onaddNote}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() && content.trim()) {
            onaddNote(title.trim(), content.trim());

            setTitle('');
            setContent('');

            setIsFormVisible(false)
            
        } else {
            toast.error('Please fill your text on it', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                icon: "❌" // <-- removes the default icon
            })
        }
    }

    const handleToggle = () => {
      setIsFormVisible(!isFormVisible);

      if(isFormVisible) {
        setTitle('');
        setContent('');
      }
    }

  return (
  <div>
       <div className='button-container-1'>
        <span className="mas"> {isFormVisible ? '×' : '+'}</span>
         <button className='btn neon-pulse' id='work' type="button" name="Hover" onClick={handleToggle}>
           {isFormVisible ? '×' : '+'}
        </button>
       </div>

    {isFormVisible && (
        <div className='inputs'>
    <div>
        <input 
            className='title' 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder='Add Title'
        />
    </div>
    <div>
        <textarea 
            className='content' 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            placeholder='Add Content'
        />
    </div>

      <button className='save-notes' onClick={handleSubmit}>
          Save Notes
      </button>
  </div>
    )}
</div>
    )
}

export default AddNoteForm