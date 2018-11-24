// Get the modal
var modal = document.getElementById('modal');
const modalOk = document.getElementById('modalOk');
const modalBad = document.getElementById('modalBad');
// Get the button that opens the modal
var btnT = document.getElementById("purchase-btnT");
var btnB = document.getElementById("purchase-btnB");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
console.log(span);

// When the user clicks on the button, open the modal
btnT.onclick = function() {
    modal.style.display = "block";
};
btnB.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal.style.display = "none";
};
span[1].onclick = function() {
    modalOk.style.display = "none";
};
span[2].onclick = function() {
    modalBad.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal || event.target == modalOk || event.target == modalBad) {
        modal.style.display = "none";
        modalOk.style.display = "none";
        modalBad.style.display = "none";
    }
}


//Part 2
const request = (dataString) => {
    $.post("mock.json",
        dataString,
        function(data, status){
            console.log(data);
            console.log(status);
            if (status === 'success' & data === "accepted") {
                console.log('mOk');
                modalOk.style.display = "block";

            } else {
                modalBad.style.display = "block";

            }
        });
};

$( "#formPurchase" ).on( "submit", function( event ) {
    event.preventDefault();
    modal.style.display = "none";
    let formDataString = $(this).serialize();
    console.log('formData', formDataString );
    request(formDataString);
});

