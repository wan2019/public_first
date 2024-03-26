function w3_open() {
    document.getElementById('mySidebar').style.display = 'block';
}
function w3_close() {
    document.getElementById('mySidebar').style.display = 'none';
}
$(document).ready(function () {
    function w3_open() {
        document.getElementById('mySidebar').style.width = '40%';
        document.getElementById('mySidebar').style.display = 'block';
    }

    function w3_close() {
        document.getElementById('mySidebar').style.display = 'none';
    }
    function setHeaderHight() {
        if ($('#menu').is(':visible')) {
            var targetHigh = $('header .logo').innerHeight();
            $('header .container').css('height', targetHigh);
        }
    }
});
