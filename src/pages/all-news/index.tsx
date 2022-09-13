/* eslint-disable dot-notation */
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import NewComponent from '../../components/newComponent';
import SelectComponent from '../../components/selectComponent';
import './styles.css';
import { FilterContext } from '../../context/FilterContext';
import PaginationComponent from '../../components/paginationComponent/index';

function AllNews() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const hitsPerPage = 8;
  const [data, setData] = useState({ hits: [] });
  const { page, setPages, query, setPage } = useContext(FilterContext);
  useEffect(() => {
    const fetchnews = async () => {
      const res = await axios.get(`${apiUrl}hitsPerPage=${hitsPerPage}&query=${query}&page=0`);
      setData(res.data);
      setPages(res.data.nbPages);
      console.log(res.data);
      setPage(0);
    };
    fetchnews();
  }, [query]);
  useEffect(() => {
    const fetchnews = async () => {
      const res = await axios.get(
        `${apiUrl}hitsPerPage=${hitsPerPage}&query=${query}&page=${page}`
      );
      setData(res.data);
      setPages(res.data.nbPages);
    };
    fetchnews();
  }, [page]);
  return (
    <div>
      <SelectComponent />
      <div className="news-container">
        {data.hits.map((hit) => (
          <NewComponent
            key={hit['objectID']}
            id={hit['objectID']}
            created={hit['created_at_i']}
            title={hit['story_title'] === null ? hit['title'] : hit['story_title']}
            url={hit['story_url']}
          />
        ))}
      </div>
      <PaginationComponent />
    </div>
  );
}

export default AllNews;
