import { Base, logThis } from "./base"
import styles from "../src/app/index.module.css"
import { useState }  from "react";
import Computers from "../src/api/computers.json";
import Image from "next/image";

export default function This(){
    return (
        <Base>
            <div className={styles.computers}>
                <GetComputers computers={Computers["Computers"]}/>
            </div>
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
            <a className={styles.tile} href="/viewComputer">
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
            </a>
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
