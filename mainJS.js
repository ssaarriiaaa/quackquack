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
    "𓅭𓅭𓅭𓅭𓅭𓅭𓅭" ,
    "qua-",
    "quack?",
    "meow.",
    ""
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
   
    let duckDiv = document.createElement("div");
    let duckText = document.createElement("span");
    duckDiv.id = "duck";
    duckDiv.className = "duck response";
    duckText.innerText = "Preparing the quack...";
    duckDiv.appendChild(duckText);
    messagesContainer.appendChild(duckDiv);
   
    setTimeout(() => {
      duckText.innerText = `${product}`;
    }, 2000); 
}

const inputField = document.getElementById("input")
   inputField.addEventListener("keydown", function(e) {
       if (e.code === "Enter") {
           let input = inputField.value;
           inputField.value = "";
           output(input);
   }
 });