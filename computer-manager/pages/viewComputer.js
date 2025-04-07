import { Base, logThis } from "./base"
import styles from "../src/app/viewComputer.module.css"
import { useState }  from "react";
import Computers from "../src/api/computers.json";
import Image from "next/image";
import { Chart } from 'react-google-charts';

export default function This(){
    return (
        <Base>
            <h2>
                Desktop 1
            </h2>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <Image
                     className={styles.computerImage}
                     src="/laptop_windows.svg"
                     alt="Next.js logo"
                     width={512}
                     height={512}
                     priority
                     />
                <div style={{color: "var(--foreground1)"}}>
                Status: offline
                </div>
                <ul className={styles.features}>
                    <li className={styles.CPU}>CPU Usage: 32%</li>
                    <li className={styles.MEM}>Memory Usage: 43%</li>
                    <li >Operating System: Arch Linux x86_64</li>
                    <li>CPU: Intel(R) Core(TM) Ultra 7 155H (22) @ 4.80 GHz</li>
                    <li>GPU: Intel Arc Graphics @ 2.25 GHz [Integrated]</li>
                    <li>DISK: 451.00 GiB / 863.15 GiB</li>
                </ul>
                <GetCPU /><br/>
                <GetMemory />
            </div>

        </Base>
    );
}

function GetMemory({}){
    const data = [
  ['Process', 'Memory'],
  ['Isolated Web Co', 24.6],
  ['thunderbird', 3.6],
  ['node', 3.2],
  ['firefox', 2.8],
  ['electron', 2.7],
  ['next-server', 2.6],
  ['kitty', 1.5],
  ['WebExtensions', 1.0],
  ['others', 2.1],
  ['free',55.9],
];

const options = {
  title: 'Memory Usage',
};

return (
    <div className={styles.MemChart}>
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
  );
}


function GetCPU({}){
    const data = [
  ['Process', 'Usage'],
  ['Isolated Web Co', 0.4],
  ['node', 0.3],
  ['firefox', 0.2],
  ['Hyprland', 0.2],
  ['others', 0.2],
  ['free',98.7],
];

const options = {
  title: 'CPU Usage',
};

return (
    <div className={styles.CPUChart}>
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
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
