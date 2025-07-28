import React, { useState } from 'react';


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
            alert('Please fill your text on it')
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