// const titleElement = document.getElementById("title");
// titleElement.innerHTML = compile(titleElement, { 
//     name : 'Jean-Eudes', 
//     age : 45
// });

// const paragElement = document.getElementById("para");
// paragElement.innerHTML = compile(paragElement, { 
//     mot : "huitre"
// });
    
const param = { 
    mot : "huitre",
    name : 'Jean-Eudes', 
    age : 45
};
const paragElement = document.getElementById("tout");
paragElement.innerHTML = compile(paragElement, param);