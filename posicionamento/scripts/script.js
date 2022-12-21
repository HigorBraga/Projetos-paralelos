const left = 0;

function frame() {
    const element = window.document.querySelector('.item-relative');
    left += 2;
    element.getElementsByClassName.left = left + 'px';
    if(left >= 300) {
        clearInterval(id);
    }
}

const id = setInterval(frame, 10);