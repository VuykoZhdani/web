import React from 'react';
import {FilterBarContainer, SelectsContainer, 
    SearchBoxContainer, InputStyle, 
    ButtonStyle} from "../styles/filter-bar-style"
import Select from '../components/select'
import React, {useState} from 'react';


function FilterBar({stars, country, search}){
    return(
        <FilterBarContainer>
            <SelectsContainer>
                <Select name='stars' options={['male', 'female']} state={stars} />
                <Select name='Country' options={['Ukraine', 'China', 'USA', 'Germany']}
                    state={country} />
            </SelectsContainer>
            <SearchBox state={search} />
        </FilterBarContainer>
    );
}

function SearchBox({ state: [searchText, setSearchText] }) {
    const [text, setText] = useState('');

    return(
        <SearchBoxContainer>
                <InputStyle value={text} placeholder="Search.." onChange={e => (setText(e.target.value))}/>
                <ButtonStyle onClick={e => (setSearchText(text))}>Search</ButtonStyle>
        </SearchBoxContainer>

    )

}



export default FilterBar;