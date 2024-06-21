"use client"
import React from 'react'
import {useState} from 'react';

import {SearchManufacturer} from '@/components';
import { manufacturers } from '@/constants';
const SearchBar = () => {
 
    const [manufacturer, setManufacturer] = useState('');
    const handleSearch = () => {


  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
        
        <div className="searchbar_Item">
            <SearchManufacturer
                manufacturer = {manufacturer}
                setManufacturer = {setManufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar