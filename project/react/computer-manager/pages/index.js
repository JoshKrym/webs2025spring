'use client'

import Image from "next/image";
import styles from "../src/app/page.module.css";
import { useState }  from "react";
import $ from 'jquery'
import { ajax } from "jquery";
import Computers from "../src/api/computers.json";

export default function Home() {
    console.log(Computers["Computers"]);
  return (
      <div>
      <div style={{display: 'inline'}}>
        <span className={styles.h1}>
            Device Manager
        </span>
        <MenuItem
            height={32}
            width={32}
            color="#00FFFF"
            className={styles.menu}
      />
    </div>
    <div>
        <div className={styles.computers}>
            <GetComputers computers={Computers["Computers"]}/>
        </div>
    </div>
    <footer>
    </footer>
      </div>
      );
}

function GetComputers({computers}){
    const myComputers = []
    for(let i=0; i<computers.length; i++){
        myComputers.push(<ComputerTile computerName={computers[i]["name"]} ipAddress={computers[i]["IPAddress"]} image="/laptop_windows.svg" />);
    }
    return myComputers
}

function MenuItem({height, width, color, className}){
    return (
        <span className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width} fill={color}><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </span>
    )

}

function ComputerTile({computerName, ipAddress, image}){
    const [color, setColor] = useState('red');
    return (
            <div className={styles.tile}>
                <div className={styles.title}>
                        <h2>
                            {computerName}
                        </h2>
                        <span className={styles.online} style={{'color':color}}>
                            .
                        </span>
                </div>
                <Image
                 className={styles.computerImage}
                 src="/laptop_windows.svg"
                 alt="Next.js logo"
                 width={256}
                 height={256}
                 priority
                 />
            </div>
        );
}
