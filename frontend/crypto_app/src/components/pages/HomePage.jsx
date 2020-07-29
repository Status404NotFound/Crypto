import React, {useEffect, useState} from 'react';
import ParticlesBg from 'particles-bg'
import Header from './../layout/Header';
import ExchangeMenu from "../element/ExchangeMenu";
import axios from "axios";
import {Lines} from "react-preloaders";

export default function HomePage(props) {

    const [data, setData] = useState({
        source_currency:[],
        target_currency:[]
    });
    const [load, setLoad] = useState(false);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/test`)
            .then(res => {
                setData(res.data);
                setLoad(true);
            })
    }, []);

    let style={
        width: "100vw",
        height: "100hv",
    }

    return (
        <>
            <Header />
            <div className="intro2" id="intro" data-scroll-index="0">
                <ParticlesBg style={style} num={150} type="cobweb" color="#1652f0" />
                <div className="menuInPos">
                    <ExchangeMenu type={'current'} currencies={data.source_currency} />
                </div>
                <div className="menuOutPos">
                    <ExchangeMenu type={'target'} currencies={data.target_currency} />
                </div>
            </div>
            <Lines customLoading={load} color={'#3b5998'} />
        </>
    )
}