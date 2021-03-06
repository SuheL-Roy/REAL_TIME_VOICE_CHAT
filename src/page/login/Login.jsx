import React, { useState } from 'react'
import styles from './login.module.css';
import StepEmailPhone from '../Steps/StepPhoneEmail/StepEmailPhone';
import StepOtp from '../Steps/Stepotp/StepOtp';

const steps = {
    1:StepEmailPhone,
    2:StepOtp
    
};
export default function Login() {
    const [step,setstep] = useState(1);
    const Step = steps[step]
    function onNext() {
        setstep(step+1);
    }
    return (
        <div>
            <Step onNext={onNext} />
        </div>
    )
}
