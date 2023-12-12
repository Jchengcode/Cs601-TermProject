function sendEmail() {
    Email.send({
        SecureToken : "3848FF2A8BC54963CF77E059F6D86CFBF02C8608D23832DAABDE12D8DA39D67C55F2243519AABE4D651DF25246509664", //  secure token
        To : 'jcheng33@bu.edu',
        From : document.getElementById('email').value,
        Subject : "New Contact Form Message",
        Body : "Name: " + document.getElementById('name').value
            + "<br>Email: " + document.getElementById('email').value
            + "<br>Message: " + document.getElementById('message').value
    }).then(
        message => alert("The email successfully sent")
    );
}

