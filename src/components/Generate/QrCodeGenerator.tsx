
import { QRCodeSVG } from 'qrcode.react';
import React, {useState} from "react";
import styles from "./qrCodeGenerator.module.css"
import {GENERATE_DATA} from "../../constants.ts";

export const QrCodeGenerator: React.FC = () => {
    const [value, setValue] = useState<string>('');
    const [result, setResult] = useState<string>('');


    const onClickHandler = () => {
        const prevData:string[] = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]') ;
        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData ,value])
        );
        setResult(value);
        setValue('');
    }
    const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        setResult('');
    }
    console.log(result);
    return (
        <div className={styles.container}>

            <input type="text"
                   placeholder="Enter QR Code..."
                   value={value}
                   onChange={onChangeHandler}
                   className={styles.input}/>
            <button type="button" onClick={onClickHandler} className={styles.button}>
                Сгенерировать QR
            </button>
            <div className={styles.qrWrapper}>
                {result !== '' && (
                    <QRCodeSVG value={result} size={200}/>
                )}
            </div>

        </div>

    )
}
