// import Message from './Message' //import message function

// function App(){

//   //note that <Message /> is the same thing as <Message> <Message> (just closes the tags)\
//   return <div> <Message /> </div>; - will show whatever was in Message

// }

// export default App;

import ListGroup from './components/ListGroup';

/*
In react, you cant return more than one element. Here are some ways to solve this:
  - Wrap entire block of code with a div

  - If you don't want to return div, wrap with Fragment,
    - Note: use import { Fragment } from 'react';
    - Then replace the div with <Fragment>
  
    - EASIEST WAY: wrap entire block of code with <> and </> (open and closed brackets)

*/
// NOTE: typescript uses 'className' instead of 'class'

function App() {
  // in JSX, forloops dont exist. So we use the map() function
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {/* our loop takes each element in item, renders it as a list item. */}
        {/* wrap expression in curly brackets {} */}
        {/* each item will have their own unique id */}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        ;
      </ul>
    </>
  );
}

export default App;
