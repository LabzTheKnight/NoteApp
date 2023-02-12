import React from 'react';
import ReactDOM from 'react-dom/client';

const date = new Date();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <header>
      <h1 className="header">Keeper</h1>
    </header>
    <div className='note'>
      <h1>this is the note title</h1>
      <p>this is the note content</p>
    </div>
    <footer>
      <p>Copyright @ {date.getFullYear()}</p>
    </footer>

  </div>
);
