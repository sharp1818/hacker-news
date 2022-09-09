/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, SetStateAction } from 'react';
import { useLocalStorage, useSessionStorage } from 'usehooks-ts';

type setValue = (value: any) => void;
interface Props {
  page: number;
  setPage: SetStateAction<string> | any;
  pages: number | null;
  setPages: SetStateAction<string> | any;
  query: any;
  setQuery: SetStateAction<string> | any;
  favs: any;
  setFavs: SetStateAction<string> | any;
}

export const FilterContext = createContext<{
  page?: Props['page'];
  setPage?: Props['setPage'];
  pages?: Props['pages'];
  setPages?: Props['setPages'];
  query?: Props['query'];
  setQuery?: Props['setQuery'];
  favs?: Props['favs'];
  setFavs?: Props['setFavs'];
}>({});

export function FilterProvider({ children }: any) {
  const [page, setPage] = useSessionStorage('page', 0);
  const [pages, setPages] = useSessionStorage('pages', null);
  const [query, setQuery] = useLocalStorage('query', '');
  const [favs, setFavs] = useLocalStorage('favs', null);

  return (
    <FilterContext.Provider
      value={{ page, setPage, pages, setPages, query, setQuery, favs, setFavs }}>
      {children}
    </FilterContext.Provider>
  );
}
