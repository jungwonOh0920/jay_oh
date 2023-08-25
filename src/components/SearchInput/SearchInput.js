import React from 'react'
import {HiOutlineSearch} from 'react-icons/hi'
import './searchInput.css'

const SearchInput = () => {
    return (
        <div className='search-input-container'>
            <HiOutlineSearch className='search-icon' />
            <input type='search' placeholder='Search' />
            <select className='select'>
                <option>All</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
    )
}

export default SearchInput