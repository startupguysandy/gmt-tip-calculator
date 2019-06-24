window.addEventListener('load', ()=> {
    //
    // Variables
    //
    let allFields = Array.from(document.querySelectorAll('.tip-calculator input'));
    let tipTotalAmount = 0.0;

    //
    // Methods
    //
    function clickHandler(event) {
        updateFields(event);
        runCalculations();
    }

    function updateFields(currentField) {
        if(checkField(currentField) === true) {
            currentField.target.setAttribute('data-edited', true);
        }
    }

    function checkIfFieldsEdited(currentField) {
        return currentField === 'true';
    }

    function checkField(fieldToCheck) {
        if(fieldToCheck.target.value === "") {
            alert('Error: Field is empty!');
            fieldToCheck.target.focus();
            return false;
        }

        // regular expression to match only alphanumeric characters and spaces
        var regularExpression = /^[\w ]+$/;

        // validation fails if the input doesn't match our regular expression
        if(!regularExpression.test(fieldToCheck.target.value)) {
            alert("Error: Input contains invalid characters!");
            fieldToCheck.target.focus();
            return false;
        }

        return true;
    }

    function permissionToCalculate() {
        let editedFieldTracker = [];
        for(let item of allFields) {
            editedFieldTracker.push(item.getAttribute('data-edited'));
        }

        return editedFieldTracker.every(checkIfFieldsEdited);
    }

    function runCalculations() {
        if(permissionToCalculate() === true) {
            calculateTipTotal();
            calculatePerPerson();
        }
    }

    function calculateTipTotal() {
        let labelForTotal = document.getElementById('owed');

        // calculate tip
        let totalCost = parseFloat(allFields[0].value);
        let tipPercent = parseFloat(allFields[2].value / 100);
        tipTotalAmount = parseFloat(totalCost * tipPercent);

        let totalIncludingTip = totalCost + tipTotalAmount;

        labelForTotal.innerText = 'Total To Pay: $'+totalIncludingTip+' (includes a tip of $'+tipTotalAmount+')';
    }

    function calculatePerPerson() {
        let labelForTotal = document.getElementById('perperson');

        let numPeople = allFields[1].value; // TODO: Get the field by the name, not the index number
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
//  - DONE: Listen for events happening on the page
//  - DONE: Once a field has been updated (lost focus) then calculate amount to tip based on all fields
//  - DONE: Once we've calculated the tip amount, split it out per person
//  - DONE: Create a foreach loop which adds a data label to say if the fields been updated by the user, only perform the calculation once all 3 have been done
//  - DONE: Add the tip amount onto the total. Make it like "Total Amount to Pay: $24 (include $4 tip)"
//  - DONE: Validate the type of info in the fields, make sure it's valid


/*
 * Things to do:
 * - Get all of the fields.
 * - Listen for form submissions (I think he means on fields losing focus)
 * - Calculate the tip as a percentage of the total bill.
 * - Add the tip to the total.
 * - Calculate the per-person amount by dividing the total with tip among the total number of people.
 */