import React, { createContext, useContext, useState } from "react";

export interface SearchItem {
  id: string | number;
  type: string; // es: "articolo", "slang", "scam", "pa"
  title: string;
  description?: string;
  content?: string;
}

interface SearchContextType {
  query: string;
  setQuery: (q: string) => void;
  results: SearchItem[];
  setData: (data: SearchItem[]) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch deve essere usato dentro SearchProvider");
  return ctx;
};

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<SearchItem[]>([]);

  const results = query.trim()
    ? data.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(query.toLowerCase())) ||
        (item.content && item.content.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <SearchContext.Provider value={{ query, setQuery, results, setData }}>
      {children}
    </SearchContext.Provider>
  );
};
