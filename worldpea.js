function side() {
    var isDisplayed = document.getElementById('hover-menu').style.display === 'flex';
    if (isDisplayed) {
        document.getElementById('menu').style.color = 'green';
        document.getElementById('hover-menu').style.display = 'none';
    }
    else {
        document.getElementById('hover-menu').style.display = 'flex';
    }
}
var btn = document.getElementById('shop-button')
function clicked(){
    location.href = 'shop.html'
}
// btn.addEventListener('click', clicked())