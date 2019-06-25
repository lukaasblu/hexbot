let square, span;
function start_app() {
    square = document.getElementById('color-square');
    span = document.getElementById('color-hex-code');
    document.querySelector('#change-color-btn').addEventListener('click', fetchColor);

    fetchColor();
}

function setSquareColor(responseJson) {
    const colorHexCode = responseJson.colors[0].value;
    span.innerHTML = colorHexCode;
    square.style.backgroundColor = colorHexCode;
    console.log('Color retrieved:', colorHexCode);
}

function fetchColor() {
    NOOPBOT_FETCH({
        API: 'hexbot',
    }, setSquareColor);
}