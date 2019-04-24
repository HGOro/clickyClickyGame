import React from "react";
//import simpsonsCharacters from "./simpsonsData.json"
//import './App.css';
import styles from './ImgBtn.module.css'

//import { CardColumns, Card, Container, Navbar } from "react-bootstrap"

const ImgBtn = (props) => (
    <div
        className={`${styles.whatever}`}
        onClick={props.clickHandler}
        style={{backgroundImage: `url(${props.imgUrl})`}}>

    </div>
)

export default ImgBtn;