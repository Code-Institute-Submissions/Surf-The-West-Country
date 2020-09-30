function sendMail(contactForm){
    emailjs.send("gmail", "Surf The West Country", {
        "from_name": contactForm.firstName.value,
        "from_email": contactForm.email.value,
        "message_html": contactForm.terms.value
    })

    .then(
        function(response){
            console.log("SUCCESS", response);
            alert("Thank you. Email sent successfully!");
        },
        function(error){
            console.log("FAILED", error);
        }
    );

    return false;

}

function addSpotMail(surfForm){
    emailjs.send("gmail", "New Surf Spot", {
        "spot_name": surfForm.spotName.value,
        "spot_location": surfForm.spotLocation.value,
        "break-type": surfForm.break.value,
        "parking": surfForm.parking.value,
        "lifeguard": surfForm.lifeguard.value,
        "surfschool": surfForm.surfschool.value,
        "disabled": surfForm.disabled.value,
        "crowd_level": surfForm.crowdLevel.value,
        "additional": surfForm.additional.value,
        "public": surfForm.public.value
    })

    .then(
        function(responseTwo){
            console.log("SUCCESS", responseTwo);
            var hidden = document.getElementById("hide")
            hidden.style.display = "block"
            
        },
        function(errorTwo){
            console.log("FAILED", errorTwo);
        }
    );

    return false;
}