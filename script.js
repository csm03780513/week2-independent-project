document.getElementById("akan-form")
    .addEventListener("submit", function(event) {
        event.preventDefault();
        const birthday = document.getElementById("birthday").value;
        const gender = document.getElementById("gender").value;

        if (birthday === "") {
            alert("Please enter your birthday.");
            return;
        }

        const date = new Date(birthday);
        const dayOfWeek = date.getUTCDay();

        const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        let akanName = "";
        if (gender === "male") {
            akanName = maleNames[dayOfWeek];
        } else if (gender === "female") {
            akanName = femaleNames[dayOfWeek];
        }

        document.getElementById("result").textContent = `Your Akan name is ${akanName}`;
    });