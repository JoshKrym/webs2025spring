import { Base, logThis } from "./base"
import styles from "../src/app/addComputer.module.css"
import { useState }  from "react";
import Computers from "../src/api/computers.json";
import Image from "next/image";

export default function This(){
    return (
        <Base>
            <form className={styles.ComputerForm}>
                <label for="Computer Name">Computer Name: </label>
                <input name="Computer Name"/><br/>
                <label for="IP Address">IP Address: </label>
                <input name="IP Address"/><br/>
                <label for="Image">Image: </label>
                <input name="Image" type="file" className={styles.FileForm}/>
            </form>
        </Base>
    );
}

function GetComputers({computers}){
    const myComputers = []
    for(let i=0; i<computers.length; i++){
        myComputers.push(<ComputerTile computerName={computers[i]["name"]} ipAddress={computers[i]["IPAddress"]} image="/laptop_windows.svg" />);
    }
    return myComputers
}

function ComputerTile({computerName, ipAddress, image}){
    const [color, setColor] = useState('#9d0006');
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

//function Card({ children }) {
//  return (
//    <div className="card">
//      {children}
//    </div>
//  );
//}
//
//export default function Profile() {
//  return (
//    <Card>
//      <div>
//        This is it
//      </div>
//    </Card>
//  );
//}
//
