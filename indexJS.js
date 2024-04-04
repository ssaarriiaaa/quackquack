document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("input");
    const messagesContainer = document.getElementById("messages");

    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            if (input.trim() !== "") {
                inputField.value = "";
                output(input);
            }
        }
    });

    function addChatEntry(input, product) {
        let userDiv = document.createElement("div");
        userDiv.className = "user response";
        userDiv.innerHTML = input;
        messagesContainer.appendChild(userDiv);

        let duckDiv = document.createElement("div");
        let duckText = document.createElement("span");
        duckDiv.className = "duck response";
        duckText.innerText = "Preparing the quack...";
        duckDiv.appendChild(duckText);
        messagesContainer.appendChild(duckDiv);

        setTimeout(() => {
            duckText.innerText = product;
        }, 500);
    }

    function output(input) {
        let product = responses[Math.floor(Math.random() * responses.length)];
        addChatEntry(input, product);
    }

    const responses = [
        "quack!",
        "quack quack!!",
        "quack.",
        "QUACK",
        "QUACKKKKK",
        "quack!!!!!!!!",
        "quack quack quack.",
        "quack, quack quack quack quack? quack quack! quack! quack.",
        "quack. quack? QUACK!",
        "qqqqquuuuuaaaaaccckkkkkkk....",
        ".............quack!",
        "quackkkkkkkkkkkkkkkk...",
        "𓅭𓅭𓅭𓅭𓅭𓅭𓅭",
        "qua-",
        "quack?",
        "meow.",
    ];
});