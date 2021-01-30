function forPlus(id) {
    const quantityPlus = document.getElementById(id).value++;
    parseFloat(quantityPlus);

}
function forMinus(id) {
    const quantityMinus = document.getElementById(id).value--;
    parseFloat(quantityMinus);
}

function forSubTotalPlusFirstClass(id) {
    const subtotal = document.getElementById(id).innerText;
    const subtotalNumber = parseFloat(subtotal);
    const newSubTotal = subtotalNumber + 150;
    document.getElementById(id).innerHTML = newSubTotal;
    const tax = newSubTotal * 0.1;
    document.getElementById("vat").innerHTML = tax;
    const total = newSubTotal + tax;
    document.getElementById("total").innerHTML = total;
}
function forSubTotalMinusFirstClass(id) {
    const subTotalMinus = document.getElementById(id).innerText;
    const subTotalMinusNumber = parseFloat(subTotalMinus);
    const newSubtotalMinus = subTotalMinusNumber - 150;
    document.getElementById(id).innerHTML = newSubtotalMinus;
    const tax = newSubtotalMinus * 0.1;
    document.getElementById("vat").innerHTML = tax;
    const total = newSubtotalMinus + tax;
    document.getElementById("total").innerHTML = total;
}
function forSubtotalPlusEconomyClass(id) {
    const subTotalEconomy = document.getElementById(id).innerText;
    const subTotalEconomyNumber = parseFloat(subTotalEconomy);
    const newSubtotalEconomy = subTotalEconomyNumber + 100;
    document.getElementById(id).innerHTML = newSubtotalEconomy;
    const tax = newSubtotalEconomy * 0.1;
    document.getElementById("vat").innerHTML = tax;
    const total = newSubtotalEconomy + tax;
    document.getElementById("total").innerHTML = total;
}
function forSubTotalMinusEconomyClass(id) {
    const subtotalEconomy = document.getElementById(id).innerText;
    const subTotalEconomyNumber = parseFloat(subtotalEconomy);
    const newSubtotalEconomy = subTotalEconomyNumber - 100;
    document.getElementById(id).innerHTML = newSubtotalEconomy;
    const tax = newSubtotalEconomy * 0.1;
    document.getElementById("vat").innerHTML = tax;
    const total = newSubtotalEconomy + tax;
    document.getElementById("total").innerHTML = total;

}


const firstClassPlus = document.getElementById("first-class-plus-btn");
firstClassPlus.addEventListener("click", function () {
    forPlus("quantity-firstClass");
    forSubTotalPlusFirstClass("subtotal");

})

const firstClassMinus = document.getElementById("first-class-minus-btn");
firstClassMinus.addEventListener("click", function () {
    forMinus("quantity-firstClass");
    forSubTotalMinusFirstClass("subtotal");

})

const EconomyClassPlus = document.getElementById("Economy-class-plus-btn");
EconomyClassPlus.addEventListener("click", function () {
    forPlus("quantity-EconomyClass");
    forSubtotalPlusEconomyClass("subtotal");

})

const EconomyClassMinus = document.getElementById("Economy-class-minus-btn");
EconomyClassMinus.addEventListener("click", function () {
    forMinus("quantity-EconomyClass");
    forSubTotalMinusEconomyClass("subtotal");
})

const bookingbutton = document.getElementById("booking-btn");
bookingbutton.addEventListener("click", function () {
    const confirmBooking = document.getElementById("booking-form");
    confirmBooking.style.display = "none";
    const orderConfirmation = document.getElementById("order-confirmation");
    orderConfirmation.style.display = "block";

})


