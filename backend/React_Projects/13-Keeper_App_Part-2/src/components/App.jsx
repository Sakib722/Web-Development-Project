import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import notes from "../notes";

// function createNotes(note) {
//   return <Note
//       key={note.id}
//       title={note.title}
//       content={note.content}
//     />
// }

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => {
        return <Note 
          key={note.id}
          title={note.title}
          content={note.content}
            />
      })}
      <Footer />
    </div>
  );
};

export default App;
