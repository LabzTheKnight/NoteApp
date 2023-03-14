import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });
  const {title,content} = inputText

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText(prevValue =>{
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  function submitItem(event){
    props.onAdd(inputText)
    setInputText({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={title}

        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={content}

        />
        <button
          onClick={submitItem}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
