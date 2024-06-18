import React from 'react'
import styles from './styles.module.css';

interface Author {
  name: string;
  email: string;
}

export interface Note {
  id: number;
  title: string;
  author: Author;
  content: string;
}

export interface NotesListProps {
  notes: Note[];
}

const NoteList: React.FC<NotesListProps> = ({ notes }) => {
  return (
    <div>
      {notes.map(note => (
       
       <div className="post" key={note.id} id={`note-${note.id}`}>
          <h2>{note.title}</h2>
          <small>By {note.author.name}</small>
          <br />
          {note.content}
        </div>


      ))}
    </div>
  );
};

export default NoteList;

