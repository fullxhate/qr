import { GENERATE_DATA } from "../../constants.ts";
import { QRCodeSVG } from "qrcode.react";
import styles from "./GenerateHistory.module.css"
import React from "react";


export const GenerateHistory: React.FC = () => {
    const data: string[] = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]') ;
    return (
    <div className={styles.container}>
        {data.map((text) => (
            <p key={text} className={styles.history}>
                {text}
                <QRCodeSVG value={text} size={100} className={styles.qrCode} />
            </p>
        ))}
    </div>
)
}