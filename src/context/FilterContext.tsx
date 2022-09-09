/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactNode } from 'react';
import { useLocalStorage, useSessionStorage } from 'usehooks-ts';

interface Props {
  children: ReactNode;
}

export const FilterContext = createContext({});

export function FilterProvider({ children }: Props) {
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
