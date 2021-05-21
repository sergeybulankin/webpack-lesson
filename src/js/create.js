function create(el) {
    return document.createElement(el);
}

function create_variable(word) {
    const variable = create('input');
    variable.type = 'text';
    variable.id = word;
    variable.placeholder = 'Введите ' + word;
    variable.style.marginBottom = '15px';

    return variable;
}

function create_button_result(text) {
    const button_result = create('span');
    button_result.style.cssText = `
        background-color: #254856;
        color: #ffffff;
        text-align: center;
        padding: 5px 2px;
        border-radius: 3px;
        font-family: Arial;
        font-size: 14px;
        cursor: pointer`;
    button_result.id = 'btn';
    button_result.textContent = text;

    return button_result;
}

function create_form() {
    const form = create('form');
    form.style.cssText = `
        width: 100px;
        display: flex;
        flex-direction: column;
    `;

    return form;
}

let form_elements = [
    create_variable('A'),
    create_variable('B'),
    create_variable('C'),
    create_button_result('Результат')
];

export default {form_elements, create_form};