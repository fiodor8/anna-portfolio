"use client";

// DataContext.js
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

const ProjectList = 
  { 
    "about": {name: "about", id: "about", x: 0, y: 0, size: 0, type: "personal"},
    //"cv": {name: "cv", id: "cv", x: 0, y: 0, size: 0, type: "personal"},
    /* * */
    "a4_award": {name: "A4 Award", id: "a4_award", x: 0, y: 0, size: 0, type: "project"},
    "say_cheese": {name: "Say Cheese", id: "say_cheese", x: 0, y: 0, size: 0, type: "project"},
    "gembox": {name: "Gembox", id: "gembox", x: 0, y: 0, size: 0, type: "project"},
    "gravity_mall": {name: "Gravity Mall", id: "gravity_mall", x: 0, y: 0, size: 0, type: "project"},
    "unlimint": {name: "Ishonch", id: "ishonch", x: 0, y: 0, size: 0, type: "project"},
    "unlimint": {name: "Unlimint", id: "unlimint", x: 0, y: 0, size: 0, type: "project"},
    "workaholic-packaging": {name: "Workaholic", id: "workaholic-packaging", x: 0, y: 0, size: 0, type: "project"},
    /* * */
  }

export function DataProvider({ children }) {
  const [data, setData] = useState(ProjectList); // Initial value
  const [menuIsCollapsed, setMenuIsCollapsed] = useState(false);

  return (
    <DataContext.Provider value={{ data, setData, menuIsCollapsed, setMenuIsCollapsed }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}

export function useMenuIsCollapsed() {
  return useContext(DataContext);
}