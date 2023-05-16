function goToBooking() {
    window.location.assign("bookingform.html");
    }

function process() {
    var allpackage = document.getElementById("package");
    var package = allpackage.value;
    var num_of_people = document.getElementById("num-of-people").value
    var totalPayment;
    if (package === "pack1") {
        totalPayment = 2500 * num_of_people;
    }   else if (package === "pack2") {
        totalPayment = 7000 * num_of_people;
    }   else if (package === "pack3") {
        totalPayment = 4000 * num_of_people;
    }   else if (package === "pack4") {
        totalPayment = 5000 * num_of_people;
    }   else if (package === "pack5") {
        totalPayment = 6500 * num_of_people;
    }   
    document.getElementById('total').innerHTML = totalPayment;
setTimeout(() => {
    alert('Thank you! Booking Succed')
    window.location.assign('about.html')
    }, 1000);
}