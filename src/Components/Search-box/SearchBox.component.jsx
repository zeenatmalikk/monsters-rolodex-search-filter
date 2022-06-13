import React from 'react'
import "./SearchBox.styles.css"
const SearchBox = ({placeholder,handleChange}) => {
  return (
    <div>
          <input
          className='search'
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
          //I]trigger the setstate when anything is type in searchfield which sets the state value this causes re render in render()
        />
    </div>
  )
}

export default SearchBox