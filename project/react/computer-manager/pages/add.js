import Image from "next/image";
import styles from "../src/app/page.module.css";
import { useState }  from "react";
import $ from 'jquery'
import { ajax } from "jquery";
import Computers from "../src/api/computers.json";
import handler from "./test"
//const fs = require('fs');

export default function Home() {
  return (
      <div>
      <header>
        <h1>
            Device Manager
        </h1>
        <MenuItem
            height={32}
            width={32}
            color="#00FFFF"
            className={styles.menu}
      />
    </header>
    <div>
      <NewForm />
    </div>
    <footer>
    </footer>
      </div>
      );
}

function NewForm({computers}){
    return (
        <form action={handler}>
            <input name="name" />
            <input name="IPAddress" />
            <input type="submit" value="Submit" />
        </form>
    )
}

export async function WriteComputerData({formData}){
    fs.writeFileSync("../api/computers.json", JSON.stringify(formData))
}

function MenuItem({height, width, color, className}){
    return (
        <span className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width} fill={color}><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </span>
    )

}

