import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicTable from './Components/BasicTable';
import SortingTable from './Components/SortingTable';
import FilteringTable from './Components/FilteringTable';

function App() {
  return (
    <div className="App">
      <FilteringTable/>
    </div>
  );
}

export default App;
