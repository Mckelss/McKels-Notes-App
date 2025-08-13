import React, { useState, useEffect } from 'react'
import AddNoteForm from './components/AddNoteForm'
import NoteList from './components/NoteList';
import './App.scss';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

const App = () => {

   const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Save notes to localStorage whenever notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote =  (title, content) => {
    const newNote = {
      id: Date.now(),
      title: title,
      content: content,
      createdAt: new Date().toLocaleDateString()
    }

    setNotes([newNote, ...notes])
  }

  const deleteNote = (id) => {
    const updateNotes = notes.filter(note => note.id !== id);
    setNotes(updateNotes)
  }

  const editNote = (id, newTitle, newContent) => {
    const updateNotes = notes.map(note => {
      if(note.id === id) {
        return {
          ...note, title: newTitle, content: newContent
        };
      } else {
        return note;
      }
     
    })
    setNotes(updateNotes)
  }
  return (
    <div>
      <div className='snip'>
        <h1>SNIP</h1>
      </div>
      <AddNoteForm onaddNote={addNote}/>
      <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote} />

      <ToastContainer />
    </div>
  )
}

export default App