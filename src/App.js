import React, { useState } from 'react'
import ToDoList from './ToDoList';

const App = () => {

  const [ inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems)=>{
      return [...oldItems, inputList];
    });
    setInputList('');
    
  };

  const deleteItem = (id) =>{
    console.log('deleted');

    setItems ((oldItem) =>{
      return oldItem.filter((arrElement, index) =>{
        return index !== id;
      })
    })
};


  return (
    <>

        <div class="main_div">
          <div class="center_div">
            <br/>

              <h1>ToDo List</h1>

              <br/>

              <input type="text" placeholder= "Add a Items" value={inputList} onChange={itemEvent}/>
              <button onClick={listOfItems}>  +  </button>

              <ol>
                {/* <li>{inputList}</li> */}
                {Items.map((itemval, index) => {
                return <ToDoList key={index} id={index} text={itemval} 
                onSelect = {deleteItem}/>
                })}

                  

              </ol>
          </div>
        </div>
    
    
    
    </>
  )
}

export default App