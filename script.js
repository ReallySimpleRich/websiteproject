function goToBooking() {
    window.location.assign("bookingform.html");
}

function process() {
    var allPackage = document.getElementById("package");
    var package = allPackage.value;
    var num_of_people = document.getElementById("num-of-people");
    var totalPayment;
    if(package === "pack1"){
        totalPayment = 3500 * num_of_people;
    } else if(package === "pack2"){
        totalPayment = 2500 *num_of_people;
    } else if(package === "pack3"){
        totalPayment = 9000 * num_of_people;
    } else if(package === "pack4"){
        totalPayment = 4500 * num_of_people;
    } else if(package === "pack5"){
        totalPayment = 5500 * num_of_people;
    }

    document.getElementById('total').innerHTML = totalPayment;
    setTimeout(() => {
        alert('Thank You, the booking is succesful')
        window.location.assign('about.html')
    }, 1000);
}