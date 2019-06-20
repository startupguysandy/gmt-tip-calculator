window.addEventListener('load', ()=> {
    //
    // Variables
    //
    let allFields = Array.from(document.querySelectorAll('.tip-calculator input'));

    //
    // Methods
    //
    var calculateTip = function(event) {
        let labelForTotal = document.getElementById('owed');

        let totalCost = allFields[0].value;
        let numPeople = allFields[1].value;
        let tipPercent = allFields[2].value / 100;
        let tipTotalAmount = totalCost * tipPercent;

        console.log("Total Cost: " + totalCost);
        console.log("Number of People: " + numPeople);
        console.log("Tip Percent: " + tipPercent);

        labelForTotal.innerText = 'Total to tip: $'+tipTotalAmount;
    };

    //
    // Inits and Event Listeners
    //

    // Listen for fields losing focus
    document.documentElement.addEventListener('change', calculateTip, false);

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