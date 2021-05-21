export default function calculate() {
    let inputs = document.forms[0].querySelectorAll('input');

    let result = 0;
    for (let i = 0; i < inputs.length; i++) {
        result = Number(result) + Number(inputs[i].value);
    }
    return result;
}