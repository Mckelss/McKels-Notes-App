import React from 'react'
import NotesItem from './NotesItem'

const NoteList = ({notes, editNote, deleteNote}) => {
   
  return (
    <div>
        <h2 className='notes'>Notes ({notes.length})</h2>

        {notes.length === 0 ? (
          <div>
            
          </div>
        ) : (
          <div>
           {notes.map((note) => (
           <NotesItem key={note.id} note={note} onEdit={editNote} onDelete={deleteNote} />
))}


          </div>
        )}
    </div>
  )
}

export default NoteList