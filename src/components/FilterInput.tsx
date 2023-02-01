import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setFilter } from "../features/filter/filterSlice";


function FilterInput() {
  const dispatch = useDispatch();
  const filterValue = useSelector((state:any) => state.filter.value);
  const [inputValue, setInputValue] = useState(filterValue);


  // const HandleKeyDown = (e) => {
  //   if (e.code === "Enter") {
          //
  //   }
  // };

  const HandleInputChange = (e:any) => {
    if(! isNaN(parseInt(e.nativeEvent.data)) || e.nativeEvent.data === null){
      setInputValue(e.target.value);
    }
  };

  const filterById = (e:any) => {
    e.preventDefault();
    dispatch(setFilter(inputValue))
  };
  
    return (
      <form
            className="filter"
            onSubmit={filterById}
        >
      
        <label>Filter by product ID</label>

        <input 
          name="idFilter"
          type="text"
          placeholder="Enter an ID number"
          // onKeyDown={HandleKeyDown}
          value={inputValue}
          onChange={HandleInputChange}
          
        ></input>

        <button>Filter</button>
      
      </form>
    );
  }
  
  export default FilterInput;