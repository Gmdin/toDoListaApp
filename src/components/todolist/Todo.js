
import { useState } from "react";
import "./style.css";

export default function Todo  () {
  const [inputValue, setInputValue] = useState();
  const [item,setItem]=useState([]);

  const ValueChangeHandler = (event) => {
    setInputValue(event.target.value);
    console.log("my input value", inputValue);
  }
  const addItem=()=>{
    if(!inputValue){
      alert("Please Enter Value");
    }
    else{
      const inputDataValue={
        id:new Date().getTime().toString(),
        name:inputValue
      }
    setItem([...item,inputDataValue]);
    setInputValue('');
    }
  }
  const deleteItem=(curr)=>{
        const updatedItem=item.filter((index)=>{
          return index.id!==curr;
        })
        setItem(updatedItem);
  }
  const removeAll=()=>{
    setItem([]);
  }

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todoimg" />
            <figcaption>Add your list Here</figcaption>
            <div className="addItems">
              <input
                type="text"
                placeholder="Add Item"
                className="form-contol"
                value={inputValue}
                onChange={ValueChangeHandler}
              />
              <i className="fa fa-plus add-btn" onClick={addItem}></i>
            </div>

            <div className="showItems">
              {item.map((curr)=>{
                return(  <div className="eachItem" key={curr.id}>
                <h3>{curr.name}</h3>
                <div className="todo-btn">
                  <i className="far fa-edit add-btn"></i>
                  <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curr.id)}></i>
                </div>
              </div>)
              })}
            
            </div>
            <div className="showItems">
              <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                <span>Check List</span>
              </button>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
};
