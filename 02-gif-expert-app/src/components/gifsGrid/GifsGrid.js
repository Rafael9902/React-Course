import React, { useState, useEffect } from "react";
import { getGifs } from "../../helpers/getGifs";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifGridItem } from "../gifGridItem/GifGridItem";

//useEffect permite ejecutar codigo de manera condicional
export const GifsGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> {category} </h3>

            { loading && <p className='animate__animated animate__flash'>loading</p>}

            <div className="card-grid">
                {images.map(img => <GifGridItem key={img.id} {...img} />)}
            </div>
        </>
    )
}