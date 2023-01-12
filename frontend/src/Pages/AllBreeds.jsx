import React,{useEffect,useState} from 'react';
import {useNavigate} from "react-router-dom";
import styled from './Allbreed.module.css'

const AllBreeds = () => {
  const [dogsListData, setDogsListData] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchData = async()=>{
     const res = await fetch("https://dog.ceo/api/breeds/list/all");
     const data = await res.json();
     setDogsListData(data.message);
    }
   fetchData();
 }, [])
  console.log(dogsListData);
    return <div>
     <div className={styled.heading}>
        <h1> You Select A Dog Breed from below!!!</h1>
      </div>
         <div className={styled.btn_main_div}>
         {Object.keys(dogsListData)?.map((value) => (
         <button className={styled.btn} key={value} onClick={()=> navigate("/breedImage", { state: { value: value } }) }>{value}</button>
         ))}
         </div>

    </div>;
}



export default AllBreeds;