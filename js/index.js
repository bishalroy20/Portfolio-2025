// email send 

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    Email.send({
      SecureToken: "YOUR_SECURE_TOKEN", // Get this from smtpjs.com
      To: "smartstoryai20@gmail.com",
      From: document.getElementById("email").value,
      Subject: "New Contact Form Message",
      Body: `
        Name: ${document.getElementById("name").value}<br>
        Email: ${document.getElementById("email").value}<br>
        Message: ${document.getElementById("message").value}
      `
    }).then(message => alert("Message sent successfully!"));
  });

