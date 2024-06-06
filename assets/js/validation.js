
const itemCode = $("#code");
const errMsg = $("#error-message")

$('#itemAddForm').on('submit', function (e) {
    if (itemCode.val().trim() === '') {
        e.preventDefault();
        errMsg.show();
    } else {
        errMsg.hide();
    }
});