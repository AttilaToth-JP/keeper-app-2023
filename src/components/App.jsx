import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../Note"

const App = function () {
  return (
    <div>
      <Header />
      {notes.map((item) => {
        return (
          <Note 
            key={item.id} 
            title={item.title} 
            content={item.content}
          />);
      })}
      <Footer />
    </div>
  );
};

export default App;
