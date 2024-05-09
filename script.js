// cleaner code to have all selectors in one place
const counterValueEl = document.querySelector('.counter__value');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');

function incrementCounterValue(){
    //get current value of counter as string
    const currentCounterValue = counterValueEl.textContent;

    //convert from currentCounterValue from string to number with unary operator
    const currentCounterValueToNumber = +currentCounterValue;

    // increment counter value by 1++ for every click
    increasedCounterValue = currentCounterValueToNumber + 1;

    //set and display new counter value
    counterValueEl.textContent = increasedCounterValue;
}

increaseButtonEl.addEventListener('click', incrementCounterValue);
document.addEventListener('keydown', incrementCounterValue);

decreaseButtonEl.addEventListener('click', function(){
    //get current value of counter as string
    const currentCounterValue = counterValueEl.textContent;

    //convert from currentCounterValue from string to number with unary operator
    const currentCounterValueToNumber = +currentCounterValue;

    // decrease counter value by 1++ for every click
    //I declared this variable without a keyword, what are the repercussions? Is this advisable or should it be actively avoided?
    decreasedCounterValue = currentCounterValueToNumber - 1;

    //prevent value from being less than 0
    if(decreasedCounterValue <0){
        decreasedCounterValue =0;
    }

    //set and display new counter value
    counterValueEl.textContent = decreasedCounterValue;
});

resetButtonEl.addEventListener("click", function(){
    //set current value back to 0
    counterValueEl.textContent = 0;
});


