"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Button, Typography } from "@mui/material";
import { useUnit } from "effector-react";
import { $random, plusRandom, minusRandom, random,clear } from "@/stores/random";

export default function Home() {
  const plasStore = useUnit($random);

  return (
    <main>
      <div className="container">
          <div className="random_name">
            <p>Рандомайзер чисел только здесь и сегодня</p>
          </div>
        <div className="wrapper">
          <Typography variant="h2" className="title">Ваше число: {plasStore}</Typography>
          <div className="btn">
            <Button
              variant="contained"
              color="success"
              onClick={() => minusRandom()}
            >       
              Уменьшить
            </Button>
  

             <Button
              color="secondary"
              onClick={() => random()}
            >
              Рандом
            </Button>     
            <Button color="secondary" onClick={() => clear()}>
              стереть
            </Button>   

            <Button variant="contained" color="success" onClick={() => plusRandom()}>
              Увеличить
            </Button>   



          </div>
        </div>
      </div>
    </main>
  );
}
