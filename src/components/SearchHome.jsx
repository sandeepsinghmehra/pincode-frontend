import React, { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce';
import Api from '../api';

export const SearchHome = () => {
    
  const [searchPincodes, setSearchPincodes] = useState([]);
  const [search, setSearch] = useState(null);
  const [searchPincode, setSearchPincode] = useState(null);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      setSearchPincodes([]);

      const data = await Api( 
        `/api/v1/pincodes/search?q=${debouncedSearch}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
      console.log("search response: ", data);
      setSearchPincodes(data.response);

      setLoading(false);
    }

    if (debouncedSearch) fetchData();
  }, [debouncedSearch]);

  return (
    <div>
        <main>
          <div>
            <span>Search village name or area name</span>
            <input
              type="search"
              placeholder="search village name or area name..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
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

            {searchPincodes?.map((pincode) => {
                return (
                    <div key={pincode._id}>
                    <div>
                        <p>
                        {pincode.village_name} {pincode.pincode}
                        </p>
                    </div>
                    </div>
                );
            })}
        </main>
    </div>
  );
};
