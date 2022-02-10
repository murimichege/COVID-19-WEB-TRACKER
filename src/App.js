import React, { useEffect, useState } from 'react'
import './App.css'
import {fetchData} from '../src/api/index'
import {Cards, CountryPicker, Chart} from './components'
import covid19 from './img/covid19.jpg'
function App() {

  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchData();
console.log(initialDailyData)
      setData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const handleCountryChange = async(country) => {
    const data = await fetchData(country);
    setData({data})
    setCountry({country: country})
  }

  return (
    <div className = 'container'>
      <img className = 'image' src={covid19}/>
      <Cards data={data}/>
      <CountryPicker handleCountryChange = {handleCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
  )
}

export default App
