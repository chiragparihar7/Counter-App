const currentValue = document.querySelector('#Counter');

const decrement = () => {
    let value = parseInt(currentValue.innerHTML);
    value = value - 1;
    currentValue.innerHTML = value;
}

const incremet = () => {
    let value = parseInt(currentValue.innerHTML);
    value = value + 1;
    currentValue.innerHTML = value;
}