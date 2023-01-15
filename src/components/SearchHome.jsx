import React, { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce';
import Api from '../api';
import Scroll from './Scroll';
import SearchList from './SearchList';

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
      console.log("searchList ", searchShow, searchPincodes)
      return (<>
        {searchPincodes !== undefined && searchPincodes.length !== 0 ?
          <Scroll>
            <SearchList filteredPincodes={searchPincodes} />
          </Scroll>
          : <div>Not found</div>
        }</>
      );
    }
  }
  return (
    <div>
        <main>
          <div>
            <span>Search Pincode via village name </span>
            <input
              type="search"
              placeholder="village name..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div >
            <span>Search via pincode</span>
            <form>
              <input
                type="search"
                placeholder="search pincode..."
                onClick={(e) => setSearchPincode(e.target.value)}
              />
              <button>search</button>
            </form>
          </div>
            {loading && <p>Loading...</p>}
            {searchList()}
        </main>
    </div>
  );
};
