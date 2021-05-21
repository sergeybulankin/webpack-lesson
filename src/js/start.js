import elements from './create'

function start(form_elements, create_form) {
    let frag = document.createDocumentFragment();
    for (let i = 0; i < form_elements.length; i++) {
        frag.appendChild(form_elements[i]);
    }

    document.body.append(create_form());
    document.forms[0].appendChild(frag)
}
start(elements['form_elements'], elements['create_form']);