
$("#customer-section").css({display: "none"});
$("#order-section").css({display: "none"});

$("#nav-item").on('click', () => {
    $("#item-section").css({display: "block"});
    $("#customer-section").css({display: "none"});
    $("#order-section").css({display: "none"});
});
$("#nav-orders").on('click', () => {
    $("#order-section").css({display: "block"});
    $("#customer-section").css({display: "none"});
    $("#item-section").css({display: "none"});
});
$("#nav-customer").on('click', () => {
    $("#customer-section").css({display: "block"});
    $("#order-section").css({display: "none"});
    $("#item-section").css({display: "none"});
});

