import calculate from './calculation';

function showNotification(html) {
    let notification = document.createElement('div');
    notification.style.top = '15px';
    notification.innerHTML = html;
    document.body.append(notification);

    setTimeout(() => {notification.remove()}, 1500);
}

btn.addEventListener('click', () => {
    showNotification(calculate());
})