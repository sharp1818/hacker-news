/* eslint-disable no-shadow */
/* eslint-disable dot-notation */
import { useEffect, useState, useContext, SetStateAction } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FilterContext } from '../../context/FilterContext';
import NewComponent from '../../components/newComponent';
import { chunckArrayInGroups } from '../../utils/helper';
import './styles.css';

function FavNews() {
  interface Hits {
    listFav: Array<object>;
    setListFav: SetStateAction<null>;
  }
  const { favs } = useContext(FilterContext);
  const apiUrl = process.env.REACT_APP_API_URL;
  const hitsPerPage = 1;
  const [listFav, setListFav] = useState<Hits | null | any>([]);
  const [hasMore, setHasMore] = useState(true);
  const [digit, setDigit] = useState(0);

  const fetchData = () => {
    const createAt: Array<number> = favs.map((favs: { createAt: any }) => favs.createAt);
    const newCreateAt = chunckArrayInGroups(createAt, 8);
    if (newCreateAt.length === digit + 1) {
      setHasMore(false);
    } else {
      setDigit(digit + 1);
    }
  };
  useEffect(() => {
    const fetchnews = async () => {
      const createAt: Array<number> = favs.map((favs: { createAt: any }) => favs.createAt);
      const newCreateAt = chunckArrayInGroups(createAt, 8);
      const promises = newCreateAt[digit].map((createAt: any) =>
        axios.get(`${apiUrl}hitsPerPage=${hitsPerPage}&numericFilters=created_at_i=${createAt}`)
      );
      Promise.all(promises).then((values) => {
        const hits = values.map((res) => res.data.hits[0]);
        const totalHits = listFav.concat(hits);
        setListFav(totalHits);
      });
    };
    if (favs === null) {
      setListFav([]);
      setHasMore(false);
    } else if (favs.length === 0) {
      setListFav([]);
      setHasMore(false);
    } else {
      fetchnews();
    }
  }, [digit]);

  return (
    <InfiniteScroll
      className="fav-container"
      dataLength={listFav.length}
      next={() => fetchData()}
      scrollableTarget="scrollableDiv"
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<b>You have seen it all</b>}>
      {listFav.map((hit: any) => (
        <NewComponent
          key={hit['objectID']}
          id={hit['objectID']}
          created={hit['created_at_i']}
          title={hit['story_title']}
          url={hit['story_url']}
        />
      ))}
    </InfiniteScroll>
  );
}

export default FavNews;
