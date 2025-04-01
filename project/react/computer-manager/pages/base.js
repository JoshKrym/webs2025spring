'use client'

import Image from "next/image";
import styles from "../src/app/base.module.css";
import { useState, createContext }  from "react";
import $ from 'jquery'
import { ajax } from "jquery";
import Computers from "../src/api/computers.json";

const ThisContext = createContext();


export function Base({ children }) {
  const [sidebarHidden, setSidebarHidden] = useState('none');
  console.log(Computers["Computers"]);
  return (
      <div style={{height: "100vh", width: "100%"}}>
      <div style={{display: 'inline'}}>
        <span className={styles.h1}>
            Device Manager
        </span>
        <MenuItem
            height={32}
            width={32}
            color="#79740e"
            className={styles.menu}
            onClick={() => sidebarHidden=='block' ? setSidebarHidden('none') : setSidebarHidden('block')}
      />
    </div>
    <div style={{height: "100%", width: "100%"}}>
        <div className={styles.content}>
            <div className={styles.pageContent}>
                {children}
            </div>
            <ThisContext.Provider value={sidebarHidden}>
                <div className={styles.sidebar} style={{display: sidebarHidden}}>
                    <a href="/">Computers</a>
                    <a href="/addComputer">Add Computer</a>
                    <a href="/settings">Settings</a>
                </div>
            </ThisContext.Provider>
        </div>
    </div>
    <footer>
    </footer>
      </div>
      );
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

export function logThis(){
    console.log("This is shit");
}
