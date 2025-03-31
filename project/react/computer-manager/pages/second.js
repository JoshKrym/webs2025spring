'use client'

import Image from "next/image";
import styles from "../src/app/page.module.css";
import { useState, createContext }  from "react";
import $ from 'jquery'
import { ajax } from "jquery";
import Computers from "../src/api/computers.json";

const ThisContext = createContext();


export default function Home() {
  const [sidebarHidden, setSidebarHidden] = useState('block');
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
            onClick={{ThisTest}}
      />
    </div>
    <div>
        <div className={styles.content}>
            <div className={styles.computers}>
                <GetComputers computers={Computers["Computers"]}/>
            </div>
            <ThisContext.Provider value={sidebarHidden}>
                <div className={styles.sidebar} style={{display: sidebarHidden}}>
                    <ul>
                        <li>one</li>
                        <li>one</li>
                        <li>one</li>
                        <li>one</li>
                    </ul>
                </div>
            </ThisContext.Provider>
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

function ThisTest(){
    console.log("here");
}

function MenuItem({height, width, color, className, onClick}){
    return (
        <span className={className} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width} fill={color}><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" style={{display: 'inline'}}/></svg>
        </span>
    )

}

function onButton({height, width, color, className}){
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width} fill={color}><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 280q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
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
