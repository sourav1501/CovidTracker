import '../Search/Search.css'
import React, {useState, useCallback, useRef} from 'react';
import * as Icon from 'react-feather';

export default function Search(props) {
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState([]);
    const searchInput = useRef(null);
    const [expand, setExpand] = useState(false);

    return (
        <div className="Search">
        <label>Search your city, resources, etc</label>
        <div className="line"></div>
  
        <input
          type="text"
          value={searchValue}
          ref={searchInput}
          onFocus={(event) => {
            setExpand(true);
          }}
          onBlur={() => {
            setExpand(false);
          }}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
  
        <div className={`search-button`}>
          <Icon.Search />
        </div>
  
        {searchValue.length > 0 && (
          <div
            className={`close-button`}
            onClick={() => {
              setSearchValue('');
              setResults([]);
            }}
          >
            <Icon.X />
          </div>
        )}
         </div>
    )
}
