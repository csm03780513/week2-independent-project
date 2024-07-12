document.getElementById("akan-form")
    .addEventListener("submit", function(event) {
        event.preventDefault();
        const birthday = document.getElementById("birthday").value;
        const gender = document.getElementById("gender").value;

        if (birthday === "") {
            alert("Please enter your birthday.");
            return;
        }
    }
);