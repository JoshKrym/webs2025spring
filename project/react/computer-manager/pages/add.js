import Image from "next/image";
import styles from "../src/app/page.module.css";
import { useState }  from "react";
import $ from 'jquery'
import { ajax } from "jquery";
import Computers from "../src/api/computers.json";
import fs from 'fs';
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
    <form action={WriteComputerData}>
        <input name="name" />
        <input name="IPAddress" />
        <input type="submit" value="Submit" />
    </form>
}

export async function WriteComputerData({formData}){
    fs.writeFileSync("../api/computers.json", JSON.stringify(formData))
}
