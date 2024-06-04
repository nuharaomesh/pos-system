import CustomerModel from "../model/CustomerModel.js";
import {customers} from "../db/db.js";

function loadTable() {

    $('#customer-table-bdy').empty();

    customers.map((item, index) => {
       let records = `<tr>
                                    <td class="cus_id">${item.id}</td>
                                    <td class="cus_first_name">${item.firstName}</td>
                                    <td class="cus_last_name">${item.lastName}</td>
                                    <td class="cus_last_name">${item.address}</td>
                                    <td class="cus_last_name">${item.salary}</td>
                                    <td class="cus_last_name">${item.age}</td>
                            </tr>`
        $('#customer-table-bdy').append(records)
    });
}

$("#customer-save").on('click', () => {

    const id = $('#customer-id').val();
    const firstName = $('#first-name').val();
    const lastName = $('#last-name').val();
    const address = $('#cus-address').val();
    const salary = $('#cus-salary').val();
    const age = $('#cus-age').val();

    const customer = new CustomerModel(id, firstName, lastName, address, salary, age);

    customers.push(customer);
    loadTable();
});