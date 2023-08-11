import React, {useState} from 'react'
import Header from "./components/Header";
import FormCalculation from "./components/FormCalculation";
import CalculationTable from "./components/CalculationTable";

function App() {

    const [calculationList, setCalculationList] = useState([])

    const addCalculationHandler = (calculation) => {
        setCalculationList((prevValue) => [calculation, ...prevValue])
    }

    return (
        <>
            <Header/>
            <FormCalculation addCalculation = {addCalculationHandler} />
            {calculationList.length !== 0 ? <CalculationTable calculations = {calculationList} /> : <h3>У вас нет ни одной инвестиции</h3>}
        </>
    );
}

export default App;
