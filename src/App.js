import { useState } from "react";
import { Filters } from "./components/Filters";
import { Navbar } from "./components/Navbar";
import { PropertyCard } from "./components/PropertyCard";
import { Searchbar } from "./components/Searchbar";
import properties from "./data.json";

function App() {
  const [filters, setFilters] = useState({
    location:"",
    moveInDate:"9999-99-99",
    priceUpperBound:Infinity,
    priceLowerBound:0,
    type:""
  });
  const [ searchKey, setSearchKey ] = useState("");
  const filteredProperties = properties.filter(property=>{
    return (
      property.address.toLowerCase().includes(filters.location.toLowerCase()) &&
      (property.availableFrom <= filters.moveInDate) &&
      (property.rent>=filters.priceLowerBound && property.rent<=filters.priceUpperBound) &&
      property.type.toLowerCase().includes(filters.type.toLowerCase())
    );
  });
  const filteredAndSearchedProperties = filteredProperties.filter(property=>(
    property.name.toLowerCase().includes(searchKey.toLowerCase()) ||
    property.address.toLowerCase().includes(searchKey.toLowerCase())
  ))
  return (
    <div className="App min-h-screen bg-purple-light pt-24">
      <Navbar />
      <div className="px-32 pt-16">
        <div className="flex justify-between align-bottom">
          <div className="text-4xl font-semibold">Search properties to rent</div>
          <Searchbar searchKey={searchKey} setSearchKey={setSearchKey}/>
        </div>
        <Filters filters={filters} setFilters={setFilters}/>
        <div className="grid grid-cols-3 gap-8 mt-16">
          {
            filteredAndSearchedProperties.map(property=><PropertyCard {...property}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
