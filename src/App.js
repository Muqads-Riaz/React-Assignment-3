import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import{ Grid} from '@mui/material';
import Data from './components/Data';
import MediaCard from './components/Card';
import { useState,useEffect } from 'react';

import facebook from './img/facebook.svg'
import instagram from './img/instagram.svg'
import twitter from './img/twitter.svg'
import youtube from './img/youtube.svg'

function App() {
  let [categories, setCategories] = useState([]);
  let [selectedData,setSelectedData] = useState([]);
  let [searchedData , setSearchedData] = useState([]);


  let allCategories = ()=>{
     categories = Data.map((e)=>{
    return e.text;
    })
    categories = [...new Set([...categories])];
    setCategories([...categories])
    console.log(categories)
  }
  useEffect(() => {
    allCategories();
  }, []);


  let showData = (val) =>{
val.target.className = "selected";
let selected = Data.filter((e,i)=>(e.text==val.target.textContent));
setSelectedData([...new Set([...selected, ...selectedData,...searchedData])]);
console.log(selectedData)
  }

  let searchData = (val) => {
    setSelectedData([]);
    searchedData = Data.filter((e)=> e.text.toLowerCase().includes(val.toLowerCase())
    )
    setSearchedData([...searchedData])
    console.log(searchedData)

  }
 
 

  return (
    <div>
     <div className='navbar'>
    <img className='logo mt-1' src='https://logos-world.net/wp-content/uploads/2022/05/Alibaba-Logo.png'></img>
      <input  onChange={(e) => searchData(e.target.value)}  className='inp m-3 p-2 'placeholder='Search any product'></input>
      <buttton>.</buttton>
      </div>

      <div className='text-center'>
  {categories.map((e,i)=>{
    return <button onClick = {(e)=>showData(e)}  className = "btn btn-light m-3" key ={i}>{e}</button>
  })}
  </div>

  <Grid container spacing={2}>
    {selectedData.map((item)=>{
return <Grid item xs={12} sm={6} md={3}>
<MediaCard img = {item.img} text = {item.text} address = {item.address} Price = {item.Price}/>
</Grid>
    })}
  </Grid> 
  
  <Grid className='mt-2' container spacing={2}>
    {searchedData.map((item)=>{
return <Grid item xs={12} sm={6} md={3}>
<MediaCard img = {item.img} text = {item.text} address = {item.address} Price = {item.Price}/>
</Grid>
    })}
  </Grid> 




 <Grid className='mt-2' container spacing={2}>
    {Data.map((item)=>{
return <Grid item xs={12} sm={6} md={3}>
<MediaCard img = {item.img} text = {item.text} address = {item.address} Price = {item.Price}/>
</Grid>
    })}
  </Grid> 
  <footer>
    <div className='container-fluid bg-dark pt-3'>
        <div className='row'>
            <div className='col-md-2'>
                <h5 className='text-white'>POPULAR CATEGORIES</h5>
                <p className='text-white'>Cars</p>
                <p className='text-white'>Flats for rent</p>
                <p className='text-white'>Mobile Phones</p>
                <p className='text-white'>Jobs</p>
            </div>
            <div className='col-md-2'>
                <h5 className='text-white'>TRENDING SEARCHES</h5>
                <p className='text-white'>Bikes</p>
                <p className='text-white'>Books</p>
                <p className='text-white'>Watches</p>
                <p className='text-white'>Dogs</p>
            </div>
            <div className='col-md-2'>
                <h5 className='text-white'>ABOUT US</h5>
                <p className='text-white'>About EMPG</p>
                <p className='text-white'>OLX Blog</p>
                <p className='text-white'>Contact Us</p>
                <p className='text-white'>OLX for Bussiness</p>
            </div>
            <div className='col-md-2'>
                <h5 className='text-white'>Alibaba</h5>
                <p className='text-white'>Help</p>
                <p className='text-white'>Sitemap</p>
                <p className='text-white'>Terms of use</p>
                <p className='text-white'>Privacy Policy</p>
            </div>
            <div className='col-md-4'>
                <h5 className='text-white'>FOLLOW US</h5>
                <div>
                    <span><img src={facebook} className='facebook' /></span>
                    <span><img src={twitter} className='twitter' /></span>
                    <span><img src={youtube} className='youtube' /></span>
                    <span><img src={instagram} className='instagram' /></span>
                </div>
              

            </div>
        </div>
    </div>
</footer>
    </div>
  );
}

export default App;
