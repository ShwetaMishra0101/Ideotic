import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "./BreedImage.module.css";

const BreedsImage = () => {
  const [dogImageList, setDogImageList] = useState([]);
  const { state } = useLocation();
  const { value } = state;

  useEffect(() => {
    const images = async () => {
      const res = await fetch(`https://dog.ceo/api/breed/${value}/images`);
      const data = await res.json();
      setDogImageList(data.message);
    };
    images();
  }, [value]);
  return (
    <div>
      <div className={styled.heading}>
        <h1>You Selected <span className={styled.breed_name}>{value.toUpperCase()}</span> Breed Dog!!!</h1>
      </div>

      <div className={styled.image_main_div}>
        {dogImageList?.map((el) => (
          <div key={el}>
            <img className={styled.image} src={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreedsImage;
