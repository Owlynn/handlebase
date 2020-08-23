const emph = function(string) {
    return `{{${string}}}`;
};

// const compile = function(param) {
//     let string = " ";    
//     string = titleElement.innerHTML.replace(emph("age"), param.age);
//     string = string.replace(emph("name"), param.name);
//     return string;
// }

const compile = function(element, param) {
    let string = element.innerHTML;

    Object.entries(param).forEach( (elem) => { 
        string = string.replace(emph(elem[0]), elem[1]);
    });
    return string;
};