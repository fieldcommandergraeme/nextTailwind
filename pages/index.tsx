import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {

  const [dataTheme, setThemeToggle] = React.useState('neon');

  const layout = ({
    title: 'A Fancy Plot', width: 320, height: 240 
  });

  const data = [
    {
      x: [1, 2, 3],
      y: [2, 6, 3],
      type: 'scatter',
      mode: 'lines+markers',
      marker: {color: 'red'},
    },
    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
  ];

  const handleChange = (() => {
    if(dataTheme == 'neon')
    {
      setThemeToggle('default');
    } else {
      setThemeToggle('neon');
    }
    
  })

  useEffect(() => {
    let newPlotly = require('plotly.js');

    const initTerminal = async () => {
      let plotDiv = document.getElementById('plotDiv');
      let Plot = new newPlotly.newPlot(plotDiv, data, layout);  
      return Plot;
    }
    initTerminal()
  }, []);

  const dotObj = {
    transform: "translateX(100%)", 
    background: "#48bb78"
  }

  return (
    <main data-theme={dataTheme}>

    <div className="bg-esther text-optimus cursor-default">
        <h1 className="flex justify-center">Plotly Tailwind with NextJS!</h1>

      <div id="plotDiv" style={{display: "flex", justifyContent: "center"}}></div>
    </div>

    
<div className="flex items-center justify-center w-full mb-12">
  
  <label 
    htmlFor="toogleA"
    className="flex items-center cursor-pointer"
  >
    
    <div className="relative">
    
      <input id="toogleA" type="checkbox" onClick={handleChange} className="sr-only" />
    
      <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
    
      <div style={dataTheme === 'default' ?  dotObj : undefined} className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
    </div>
    
    <div className="ml-3 text-gray-700 font-medium">
      Toggle the theme!
    </div>
  </label>
  
</div>
</main>
  )
}
