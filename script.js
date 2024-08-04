document.addEventListener('DOMContentLoaded', () => {
    const dobInput = document.querySelector('#dob');
    const ageOnInput = document.querySelector('#ageOn');
    const resultText = document.querySelector('#resultText');
    const ageDiv = document.querySelector('#age');

    function calculateAge(dob, ageOn) {
        const birthDate = new Date(dob);
        const givenDate = new Date(ageOn);

        let years = givenDate.getFullYear() - birthDate.getFullYear();
        let months = givenDate.getMonth() - birthDate.getMonth();
        let days = givenDate.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(givenDate.getFullYear(), givenDate.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return `${years} Years ${months} Months ${days} Days`;
    }

    function updateResult() {
        const dob = dobInput.value;
        const ageOn = ageOnInput.value;
        if (dob && ageOn) {
            const age = calculateAge(dob, ageOn);
            resultText.textContent = 'Your age on given date is:';
            ageDiv.textContent = age;
        } else {
            resultText.textContent = '';
            ageDiv.textContent = '';
        }
    }

    dobInput.addEventListener('input', updateResult);
    ageOnInput.addEventListener('input', updateResult);
});
