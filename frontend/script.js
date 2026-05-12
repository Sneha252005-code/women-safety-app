/* =========================
   SOS ALERT FUNCTION
========================= */

async function sendAlert() {

    try {

        const response = await fetch("http://localhost:5000/alert", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                message: "Emergency Help Needed",
                location: "Current Location",
                time: new Date().toLocaleString()

            })

        });

        const data = await response.text();

        alert(data);

    } catch (error) {

        console.log(error);

        alert("Failed To Send Alert");

    }

}

/* =========================
   USER REGISTRATION
========================= */

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const emergency = document.getElementById("emergency").value;
        const password = document.getElementById("password").value;

        try {

            const response = await fetch("http://localhost:5000/register", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    emergency,
                    password
                })

            });

            const data = await response.text();

            alert(data);

            window.location.href = "login.html";

        } catch (error) {

            console.log(error);

            alert("Registration Failed");

        }

    });

}

/* =========================
   LOGIN FUNCTION
========================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (email && password) {

            alert("Login Successful");

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid Login");

        }

    });

}