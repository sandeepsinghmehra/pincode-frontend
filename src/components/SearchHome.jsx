import React, { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce';
import Api from '../api';
import Scroll from './Scroll';
import SearchList from './SearchList';
import styled from 'styled-components';

const StyledSearch = styled.div`
    width: 40%;
    margin: 10px auto;
    padding: 10px;
    span{
      color: #0D2538 !important;
      font-size: 20px;
    }
    input{
      width: 50%;
      height: 32px;
      outline: none;
      padding: 3px 6px;
      font-size: 17px;
      border: 1px solid #ccc;
    }
    button{
      width: 20%;
      height: 32px;
      outline: none;
      padding: 3px 6px;
      font-size: 15px;
      background: #0D2538;
      color: #fff;
      cursor: pointer;
    }
    @media (max-width: 768px) {
      width: 90%;
      input{
        width: 90%;
        height: 32px;
        padding: 3px 6px;
        font-size: 17px;
      }
  }
`;
export const SearchHome = () => {
    
  const [searchPincodes, setSearchPincodes] = useState([]);
  const [search, setSearch] = useState(null);
  const [searchPincode, setSearchPincode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchShow, setSearchShow] = useState(false); 

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      setSearchPincodes([]);

      const searchResults = await Api( 
        `/api/v1/pincodes/search?q=${debouncedSearch}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
      
      setSearchPincodes(searchResults.data.response);
      setSearchShow(true);
      setLoading(false);
    }

    if (debouncedSearch) fetchData();
  }, [debouncedSearch]);
  
  function searchList() {
    if (searchShow) {
      return (<>
        {searchPincodes !== undefined && searchPincodes.length !== 0 ?
        <>
          <h1 style={{textAlign: 'center'}}>Your Search Results:</h1>
          <Scroll>
            <SearchList filteredPincodes={searchPincodes} />
          </Scroll>
        </>
          : <div>Not found</div>
        }</>
      );
    }
  }
  return (
    <div>
        <main>
          <StyledSearch>
            <span>Search Pincode via village name </span>
            <input
              type="search"
              placeholder="village name..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </StyledSearch>
          {/* <StyledSearch >
            <span>Search via pincode</span>
            <form>
              <input
                type="search"
                placeholder="search pincode..."
                onClick={(e) => setSearchPincode(e.target.value)}
              />
              <button>search</button>
            </form>
          </StyledSearch> */}
            {loading && <p>Loading...</p>}
            {searchList()}
        </main>
    </div>
  );
};
