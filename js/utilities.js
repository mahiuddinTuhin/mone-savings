function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId).innerText;
    const value = parseFloat(element);
    return value;
}

function setTextElementValueById(elementId, newValue) {
    document.getElementById(elementId).innerText = newValue;
    return;
}