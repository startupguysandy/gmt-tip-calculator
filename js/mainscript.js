window.addEventListener('load', ()=> {
    //
    // Variables
    //
    let allFields = Array.from(document.querySelectorAll('.tip-calculator input'));
    let tipTotalAmount = 0.0;

    //
    // Methods
    //
    function clickHandler() {
        calculateTipTotal();
        calculatePerPerson();
    }

    function calculateTipTotal() {
        let labelForTotal = document.getElementById('owed');

        let totalCost = allFields[0].value;
        let tipPercent = allFields[2].value / 100;
        tipTotalAmount = totalCost * tipPercent;

        labelForTotal.innerText = 'Total to tip: $'+tipTotalAmount;
    }

    function calculatePerPerson() {
        let labelForTotal = document.getElementById('perperson');

        let numPeople = allFields[1].value;
        let amountPerPerson = tipTotalAmount / numPeople;

        labelForTotal.innerText = 'Tip per person: $'+amountPerPerson;
    }

    //
    // Inits and Event Listeners
    //

    // Listen for fields losing focus
    document.documentElement.addEventListener('change', clickHandler, false);

});

// TODO:
//  - Listen for events happening on the page
//  - Once a field has been updated (lost focus) then calculate amount to tip based on all fields
//  - Once we've calculated the tip amount, split it out per person
//  - Validate the type of info in the fields, make sure it's valid
//  - Don't take any action unless all 3 fields are completed


/*
 * Things to do:
 * - Get all of the fields.
 * - Listen for form submissions (I think he means on fields losing focus)
 * - Calculate the tip as a percentage of the total bill.
 * - Add the tip to the total.
 * - Calculate the per-person amount by dividing the total with tip among the total number of people.
 */