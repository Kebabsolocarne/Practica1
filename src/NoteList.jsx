import React, { useEffect, useState } from 'react';
import Note from './Note';
import './css/NoteList.css';

function NoteList({ notes, searchTerm, deleteNote, setNotes }) {
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    setFilteredNotes(
      notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [notes, searchTerm]);

  return (
    <div className="note-list">
      {filteredNotes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
}

export default NoteList;
