/* eslint-disable dot-notation */
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewComponent from '../../components/newComponent';
import SelectComponent from '../../components/selectComponent';
import './styles.css';

function AllNews() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchnews = async () => {
      const res = await axios.get(`${apiUrl}`);
      setData(res.data);
    };
    fetchnews();
  }, []);
  console.log(data);
  return (
    <div>
      <SelectComponent />
      <div className="news-container">
        {data.hits.map((hit) => (
          <NewComponent
            key={hit['objectID']}
            id={hit['objectID']}
            created={hit['created_at_i']}
            title={hit['story_title']}
            url={hit['story_url']}
          />
        ))}
      </div>
    </div>
  );
}

export default AllNews;
