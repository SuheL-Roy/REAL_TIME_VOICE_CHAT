import React, { useState } from 'react'
import style from './register.module.css';
import StepEmailPhone from '../Steps/StepPhoneEmail/StepEmailPhone';
import StepOtp from '../Steps/Stepotp/StepOtp';
import StepName from '../Steps/StepName/StepName';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
import StepUserName from '../Steps/StepUsername/StepUserName';

const steps = {
    1:StepEmailPhone,
    2:StepOtp,
    3:StepName,
    4:StepAvatar,
    5:StepUserName
};

export default function Register() {
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
