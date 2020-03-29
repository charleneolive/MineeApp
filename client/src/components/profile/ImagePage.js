import React,{useState,useEffect} from 'react';
import {CloudinaryContext,Image,Transformation} from "cloudinary-react";
import { openUploadWidget,fetchPhotos } from "./utils/CloudinaryService";



function ImagePage({setState}){
  const [images,setImages]=useState([])
  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: "mini-interface",
      tags: [tag],
      uploadPreset: "upload"
    };
  
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if(photos.event === 'success'){
          setImages([...images, photos.info.public_id])
          const url=`https://res.cloudinary.com/mini-interface/image/upload/c_fill,h_150,r_75,w_150/f_auto,q_auto/${photos.info.public_id}`
          setState((prevState,event)=> {
            return({
              ...prevState,
              photoUrl:url
            })
          })
        }
      } else {
        console.log(error);
      }
    })
  }
  useEffect(()=>{
    fetchPhotos("image",setImages)

  },[])

  return (
    <CloudinaryContext cloudName="mini-interface">
      <div>
        <section>
        <button onClick={() => beginUpload()}>Upload Image</button>
        <div>
          {images.map(i=> <Image key={i} publicId={i} fetch-format="auto" quality="auto">
          <Transformation height="150" width="150" crop="fill" radius="75" />
          </Image>)}
          </div>
        </section>
      </div>
    </CloudinaryContext>
  )
}

export default ImagePage;