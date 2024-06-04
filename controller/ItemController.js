import ItemModel from "../model/ItemModel.js";
import {items} from "../db/db.js";

const itemTblBody = $("#item-table-body");
function loadTable() {

    itemTblBody.empty();

    items.map((item, index) => {
        let records = `<tr class="custom-tr">
                                    <td class="item_code">${item.itemCode}</td>
                                    <td class="item_name">${item.itemName}</td>
                                    <td class="item_price">${item.price}</td>
                                    <td class="item_qty">${item.qty}</td>
                              </tr>`
        itemTblBody.append(records);
    });
}

$("#save_item").on('click', function () {

    const itemCode = $("#code").val();
    const itemName = $("#item-name").val();
    const price = $("#item-price").val();
    const qty = $("#item-quantity").val();

    const item = new ItemModel(itemCode, itemName, price, qty);

    items.push(item)
    loadTable();
});

var index;

let code = "";
let itemName = "";
let itemPrice = "";
let qty = "";

itemTblBody.on('click', 'tr', function () {

    index = $(this).index();
    code = $(this).find('.item_code').text();
    itemName = $(this).find('.item_name').text();
    itemPrice = $(this).find('.item_price').text();
    qty = $(this).find('.item_qty').text();
});

$("#update-item-btn").on('click', function () {
    $('#new-code').val(code);
    $('#new-item-name').val(itemName);
    $('#new-item-price').val(itemPrice);
    $('#new-item-quantity').val(qty);
});

$('#update-item').on('click', function () {

    var code = $('#new-code').val();
    var itemName = $('#new-item-name').val();
    var itemPrice = $('#new-item-price').val();
    var itemQty = $('#new-item-quantity').val();

    const item = {
        itemCode: code,
        itemName: itemName,
        price: itemPrice,
        qty: itemQty
    }
    console.log(item)

    items.splice(index, 1, item);
    loadTable();
});