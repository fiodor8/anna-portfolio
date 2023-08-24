"use client";

// Algorithms
import lloydsAlgorithm from "../algorithms/lloyds-algorithm";
import calculateAverageDistance from "../algorithms/calculate-average-distance";

// DataContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

const initialProjectList = 
  [
    {name: "About", id: "about", type: "personal", role: ''},
    /* * */
    {name: "A4 Award", id: "a4_award", type: "project", role: "Graphic Design", description: "Branding for short-film award"},
    {name: "Builders on the Block", id: "builders", type: "project", role: "Art Direction", description: "Branding for a crypro online magazine"},
    {name: "Gembox", id: "gembox", type: "project",  role: "Graphic Design", description: "Branding for an online accessories store"},
    {name: "Gravity Mall", id: "gravity_mall", type: "project",  role: "Graphic Design", description: "Branding for a shopping mall"},
    {name: "New Wallet", id: "n_NEW", type: "project", role: "Graphic Design", description: "Branding for local accessories brand"},
    {name: "Sasha Kim", id: "sasha_kim", type: "project", role: "Graphic Design", description: "Branding for a luxury dress brand"},
    {name: "Workaholic", id: "workaholic", type: "project", role: "Graphic Design", description: "Cold brew coffee packaging"},
    {name: "Unlimint", id: "unlimint", type: "project", role: "Graphic Design", description: "Brand platform for global fintech company"},
    /* * */
  ];

  export function DataProvider({ children }) {

    const [projectList, setProjectList] = useState(initialProjectList);
    //const [currentProject, setCurrentProject] = useState(null); //Moved to headbar.jsx

    /* default menuIsChaotic is flase and userPreferMenuChaotic is true */
    /* On first render menuIsChaotic going to be true */
    const [menuIsChaotic, setMenuIsChaotic] = useState(true);
    const [userPreferMenuChaotic, setUserPreferMenuChaotic] = useState(true);

    const [coordsList, setCoordsList] = useState([]);
    const [coverSize, setCoverSize] = useState(0);

    useEffect(() => {
      updateCoords(0, 0);
    }, []);
  
    function updateCoords(width, height) {
      const n = initialProjectList.length;
      //console.log(width, height);
      /* [size x, size y, numDots, amount of passes] */
      const newCoords = lloydsAlgorithm(width / 20, height / 20, n, 2);
      const averageDistance = calculateAverageDistance(newCoords);
      
      setCoordsList(newCoords);
      setCoverSize(averageDistance);
    }
  
    const toggleMenuIsChaotic = () => {
      setMenuIsChaotic(!menuIsChaotic);
    };
  
    const contextValue = {
      projectList, setProjectList,
      menuIsChaotic, toggleMenuIsChaotic, setMenuIsChaotic,
      userPreferMenuChaotic, setUserPreferMenuChaotic,
      //currentProject, setCurrentProject, Moved to headbar.jsx
      coordsList, updateCoords,
      coverSize,
    };
  
    return (
      <DataContext.Provider value={contextValue}>
        {children}
      </DataContext.Provider>
    );
  }
  
  export function useData() {
    return useContext(DataContext);
  }