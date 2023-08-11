import React, {useRef, useState} from "react";
import './style.css';
import ErrorModal from "../ErrorModal";
import calculateHandler from "../../utils.js";


function FormCalculation({addCalculation}) {
    const savingsRef = useRef()
    const contributionRef = useRef()
    const expectedReturnRef = useRef()
    const durationRef = useRef()

    const [error, setError] = useState(null);

    const resetForm = () => {
        savingsRef.current.value = '';
        contributionRef.current.value = '';
        expectedReturnRef.current.value = '';
        durationRef.current.value = '';
    }

    const addInvestmentHandler = (e) => {
        const savings = savingsRef.current.value
        const contribution = contributionRef.current.value
        const expectedReturn = expectedReturnRef.current.value
        const duration = durationRef.current.value

        e.preventDefault()

        if (savings <= 0 || contribution <= 0 || expectedReturn <= 0 || duration <= 0) {
            setError({
                title: 'Неверный ввод', message: 'В полях ввода не должно быть отрицательных и нулевых значений',
            });
            return
        }
        const resultCalculate =  calculateHandler({
            'current-savings': savings,
            'yearly-contribution': contribution,
            'expected-return': expectedReturn,
            duration
        })

        addCalculation(resultCalculate)
        resetForm()
    }

    const errorHandler = () => {
        setError(null);
        resetForm()
    };


    return (<>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onClose={errorHandler}
            />}
            <form className='form' onSubmit={addInvestmentHandler} onReset={resetForm}>
                <div className='input-group'>
                    <p>
                        <label htmlFor='current-savings'>Ваши текущие накопления ($)</label>
                        <input ref={savingsRef} type='number' id='current-savings'/>
                    </p>
                    <p>
                        <label htmlFor='yearly-contribution'>
                            Сколько отложите за год ($)
                        </label>
                        <input ref={contributionRef} type='number' id='yearly-contribution'/>
                    </p>
                </div>
                <div className='input-group'>
                    <p>
                        <label htmlFor='expected-return'>
                            Ожидаемый Процент (%, в год)
                        </label>
                        <input ref={expectedReturnRef} type='number' id='expected-return'/>
                    </p>
                    <p>
                        <label htmlFor='duration'>
                            Продолжительность Инвестирования (лет)
                        </label>
                        <input ref={durationRef} type='number' id='duration'/>
                    </p>
                </div>
                <p className='actions'>
                    <button type='reset' className='buttonAlt'>
                        Сбросить
                    </button>
                    <button type='submit' className='button'>
                        Рассчитать
                    </button>
                </p>
            </form>
        </>

    )

}

export default FormCalculation