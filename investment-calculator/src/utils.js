const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput.duration;
    let totalContributed = 0;
    
    for (let i = 0; i < duration; i += 1) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        totalContributed += yearlyInterest;

        yearlyData.push({
            year: i + 1,
            yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution,
            totalContributed,
        });
    }
    return yearlyData

};
export default calculateHandler