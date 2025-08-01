import React, { useState } from 'react'

const NotesItem = ({note, onEdit, onDelete}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(note.title);
    const [editContent, setEditContent] = useState(note.content);
    
    const handleSaveEdit = () => {
      if(editTitle.trim() && editContent.trim()) {
        onEdit(note.id, editTitle.trim(), editContent.trim());
        setIsEditing(false);
      }else {
        alert('fill in both title and content')
      }
    };

    const handleCancelEdit = () => {
      setEditTitle(note.title);
      setEditContent(note.content);
      setIsEditing(false);
    }

    const handleDelete = () => {
      if(window.confirm('Are you sure you want to delete this note? ')) {
        onDelete(note.id)
      }
    }

  return (
    <div>
        {isEditing ? (
         <div className='edits'>
             <div>
                   <input className='title' type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
             </div>
             <textarea className='content' type="text" value={editContent} onChange={(e) => setEditContent(e.target.value)}/>
             <div>
                <button className='save-btn' onClick={handleSaveEdit}>Save</button>
                <button className='cancel-btn' onClick={handleCancelEdit}>Cancel</button>
             </div>
         </div>
          
        ): (
         <div className="note-view">
          <h2 className="note-title">{note.title}</h2>
          <p className="note-content">{note.content}</p>
          <div className="note-meta">
            <small className="note-date">Created: {note.createdAt}</small>
          </div>
          <div className="note-buttons">
            <button 
              onClick={() => setIsEditing(true)}
              className="edit-btn"
            >
              ✏️ Edit
            </button>
            <button 
              onClick={handleDelete}
              className="delete-btn"
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotesItem