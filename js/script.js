// Get the modal
var modal = document.getElementById('modal');
const modalOk = document.getElementById('modalOk');
const modalBad = document.getElementById('modalBad');
// Get the button that opens the modal
var btnT = document.getElementById("purchase-btnT");
var btnB = document.getElementById("purchase-btnB");
var btnAt = document.getElementById("btnAt");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
btnT.onclick = function() {
    modal.style.display = "block";
};
btnB.onclick = function() {
    modal.style.display = "block";
};
btnAt.onclick = function() {
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
    console.log(dataString);
    $.post("create-order",
        dataString,
        function(data, status){
            if (status === 'success' & data === "accepted") {
                modalOk.style.display = "block";

            } else {
                modalBad.style.display = "block";

            }
        }).fail(() => {
        modalBad.style.display = "block";
    });
};


const btnAtTrigger = () => {
    //Btns
    const btnAtCB = $('.at-btn-bg');
    const btnAtCF = $('.at-btn-fg');
    if ($(btnT).visible(true) || $(btnB).visible(true)) {
        if (btnAtCB.css('display') === 'block') {
            console.log('BLOCK');
            // console.log('vis');
            btnAtCB.css('display', 'none');
            btnAtCF.css('display', 'none');
            $('.purchase-btn').animate({
                width: "+=10px",
            }, 80).animate({
                width: "-=20px",
            }, 80).animate({
                width: "+=20px",
            }, 80).animate({
                width: "-=10px",
            }, 80).animate({
                width: "+=10px",
            }, 80).animate({
                width: "-=20px",
            }, 80).animate({
                width: "+=20px",
            }, 80).animate({
                width: "-=10px",
            }, 80);
        }
    } else {
        if (btnAtCB.css('display') === 'none') {
            console.log('NONE');
            // console.log('hid');
            btnAtCB.css('display', 'block').animate({
                height: "+=10px",
                width: "+=10px",
            }, 50).animate({
                height: "-=10px",
                width: "-=10px",
            }, 100).animate({
                height: "+=10px",
                width: "+=10px",
            }, 50).animate({
                height: "-=10px",
                width: "-=10px",
            }, 100).animate({
                height: "+=10px",
                width: "+=10px",
            }, 50).animate({
                height: "-=10px",
                width: "-=10px",
            }, 100).animate({
                height: "+=10px",
                width: "+=10px",
            }, 50).animate({
                height: "-=10px",
                width: "-=10px",
            }, 100);
            btnAtCF.css('display', 'block');
        }
    }
};

const dataFormer = (arr) => {
    let result = {};
    arr.forEach((item) => {
        // console.log(item);
        result[item.name] = item.value;
    });
    return JSON.stringify(result);
    // console.log('result: ');
    // console.log(JSON.stringify(result));
}

$( "#formPurchase" ).on( "submit", function( event ) {
    event.preventDefault();
    modal.style.display = "none";
    let formDataString = $(this).serializeArray();
    // console.log(formDataString);

    request(dataFormer(formDataString));
});

// Menu
$("#btnMenu").on("click", function (e) {
    const menuItemClass = $('.menu-item');
    $(menuItemClass).css('display') === 'none' ? $(menuItemClass).css('display', 'flex') : $(menuItemClass).css('display', 'none');
});
$(window).on('resize', () => {
    if ($(window).width() > 600) {
        $('.menu-item').css('display', 'flex')
    } else {
        $('.menu-item').css('display', 'none');
    }
    
    //Btns
    btnAtTrigger();

});

$(window).on('scroll', () => {
    btnAtTrigger();
});
$(window).on('load', () => {
    btnAtTrigger();
});
