import { SCAN_DATA } from "../constants.ts"
import { QRCodeSVG } from "qrcode.react";
import styles from "./ScanHistory.module.css"
export const ScanHistory = () => {
const data: string[] = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]') ;

    return (
        <div className={styles.container}>
            {data.map((text) => (
                <p key={text} className={styles.history}>
                    {text}
                    <QRCodeSVG value={text} size={100}/>
                </p>
            ))}

        </div>
    )
}