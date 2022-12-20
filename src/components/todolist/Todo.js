import './style.css';
const Todo=()=>{
    return(
        <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src='./images/todo.svg' alt='todoimg'/>
                    <figcaption>Add your list Here</figcaption>
                    <div className='addItems'>
                        <input type="text" placeholder="Add Item" className='form-contol'/>
                        <i className='fa fa-plus add-btn'></i>
                    </div>

                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="Remove All">
                            <span>Check List</span>
                        </button>
                    </div>
                </figure>
            </div>
        </div>
        </>
    )
}
export default Todo;