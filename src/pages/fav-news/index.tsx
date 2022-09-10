/* eslint-disable no-shadow */
/* eslint-disable dot-notation */
import { useEffect, useState, useContext, SetStateAction } from 'react';
import axios from 'axios';
import { FilterContext } from '../../context/FilterContext';
import NewComponent from '../../components/newComponent';

function FavNews() {
  interface Hits {
    listFav: Array<object>;
    setListFav: SetStateAction<null>;
  }
  const apiUrl = process.env.REACT_APP_API_URL;
  const hitsPerPage = 1;
  const { favs } = useContext(FilterContext);
  const [listFav, setListFav] = useState<Hits | null | any>([]);
  useEffect(() => {
    const fetchnews = async () => {
      const createAt: Array<string> = favs.map((favs: { createAt: any }) => favs.createAt);
      const promises = createAt.map((createAt: any) =>
        axios.get(`${apiUrl}hitsPerPage=${hitsPerPage}&numericFilters=created_at_i=${createAt}`)
      );
      Promise.all(promises).then((values) => {
        const hits = values.map((res) => res.data.hits[0]);
        setListFav(hits);
      });
    };
    fetchnews();
  }, []);
  return (
    <div>
      {listFav.map((hit: any) => (
        <NewComponent
          key={hit['objectID']}
          id={hit['objectID']}
          created={hit['created_at_i']}
          title={hit['story_title']}
          url={hit['story_url']}
        />
      ))}
    </div>
  );
}

export default FavNews;
