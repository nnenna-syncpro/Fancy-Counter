// cleaner code to have all selectors in one place
const counterEl = document.querySelector('.counter');
const counterTitleEl = document.querySelector('.counter__title');
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

    //prevent counter value from being more than 5 
    if(increasedCounterValue >5){
        increasedCounterValue =5;

        //if counter is more than 5:
        //change background color, display message to buy pro version, and disable increase and decrease buttons
        counterEl.classList.add('counter--limit');
        counterTitleEl.innerHTML = "Limit! Buy <b>PRO</b> for > 5";

        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;
    }

    //set and display new counter value
    counterValueEl.textContent = increasedCounterValue;
    increaseButtonEl.blur();
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
    decreaseButtonEl.blur();
});

resetButtonEl.addEventListener("click", function(){
    //set current value back to 0
    counterValueEl.textContent = 0;

    //reset counter background color, title and re-enable buttons after counter hits limit of 5
    counterEl.classList.remove('counter--limit');
    counterTitleEl.textContent = "Fancy Counter";

    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;

    //after clicking the reset button it becomes focused, so keydown on spacebar immmediately after the reset button is immediately undone
    //unfocus button after click
    resetButtonEl.blur();
});


