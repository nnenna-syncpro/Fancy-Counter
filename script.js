// cleaner code to have all selectors in one place
const increaseButtonEl = document.querySelector('.counter__button--increase');
const counterValueEl = document.querySelector('.counter__value');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');

increaseButtonEl.addEventListener('click', function(){
    //get current value of counter as string
    const currentCounterValue = counterValueEl.textContent;

    //convert from currentCounterValue from string to number with unary operator
    const currentCounterValueToNumber = +currentCounterValue;

    // increment counter value by 1++ for every click
    increasedCounterValue = currentCounterValueToNumber + 1;

    //set and display new counter value
    counterValueEl.textContent = increasedCounterValue;
    
});

decreaseButtonEl.addEventListener('click', function(){
    //get current value of counter as string
    const currentCounterValue = counterValueEl.textContent;

    //convert from currentCounterValue from string to number with unary operator
    const currentCounterValueToNumber = +currentCounterValue;

    // decrease counter value by 1++ for every click
    increasedCounterValue = currentCounterValueToNumber - 1;

    //set and display new counter value
    counterValueEl.textContent = increasedCounterValue;
})


