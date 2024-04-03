responses = [
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
    "𓅭𓅭𓅭𓅭𓅭𓅭𓅭"  
]

function output(input) {

    // update DOM
    addChatEntry (input, product);
}

function addChatEntry(input, product) {
    const messagesContainer = document.getElementById("messages");
    
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `${input}`;
    messagesContainer.appendChild(userDiv);
   
    let botDiv = document.createElement("div");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    messagesContainer.appendChild(botDiv);
   
    setTimeout(() => {
      botText.innerText = `${product}`;
    }, 2000); 
}



//const inputField = document.getElementById("input")
//    inputField.addEventListener("keydown", function(e) {
//        if (e.code === "Enter") {
//            let input = inputField.value;
//            inputField.value = "";
//            output(input);
//    }
//  });