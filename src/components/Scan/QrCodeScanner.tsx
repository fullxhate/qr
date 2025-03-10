import { Scanner } from '@yudiel/react-qr-scanner';
import {useState} from "react";
import styles from "./qrCodeScanner.module.css";
import { SCAN_DATA } from "../../constants.ts"
export const QrCodeScanner =  () => {
    const [scanned, setScanned] = useState<string>('');
    const scanHandler = (result: {rawValue: string}[]) => {
       setScanned(result[0].rawValue);
       const prevData: string[] = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]') ;
       localStorage.setItem(
           SCAN_DATA,
           JSON.stringify([...prevData ,result[0].rawValue])
       );
    }



    return (

        <div className={styles.container}>
            <p>
                {scanned}
            </p>
            <Scanner

                onScan={scanHandler}
                components={{
                    audio:false,
                    finder:false,
                }}
                styles={{
                    container: { width: 350 }
                }}
                 />
        </div>
    )
}