import React, {useState} from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const[items,setItems]=useState([])

  function addItem(inputText) {

    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((item,index)=>
        <Note
          key={index}
          id = {index}
          title={item.title}
          content={item.content}
          deleteItem={deleteItem}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
