document.addEventListener("keydown", handleKeyPress1);
function handleKeyPress1(event) {
   
    var id =prompt("enter disk number");
    if(id==="1"){
        const element = document.querySelector("#one");
        var position = element.getBoundingClientRect();
        element.style.position = "relative";
        if (event.key === "w") {
            alert("w");
            var currenttop=parseInt(element.style.top) || 0;
            element.style.top = currenttop - 200 + "px";    
        } 
        else if (event.key === "s") {
            alert("s");
            var currenttop=parseInt(element.style.top) || 0;
            element.style.top = currenttop + 200 + "px";
        } 
        else if (event.key === "d") {
            alert("d");
            var currentLeft = parseInt(element.style.left) || 0;
            element.style.left = (currentLeft + 140) + 'px';
        } 
        else if (event.key === "a") {
            alert("a");
            var currentLeft = parseInt(element.style.left) || 0;
            element.style.left = (currentLeft - 140) + 'px';    
        } 
        else {    // Handle other keys if needed
        }
    }
    else if(id==="2"){
        const element = document.querySelector("#two");
        var position = element.getBoundingClientRect();
        element.style.position = "relative";
        if (event.key === "w") {
            alert("w");
            var currenttop=parseInt(element.style.top) || 0;
            element.style.top = currenttop - 200 + "px";    
        } 
        else if (event.key === "s") {
            alert("s");
            var currenttop=parseInt(element.style.top) || 0;
            element.style.top = currenttop + 200 + "px";
        } 
        else if (event.key === "d") {
            alert("d");
            var currentLeft = parseInt(element.style.left) || 0;
            element.style.left = (currentLeft + 140) + 'px';
        } 
        else if (event.key === "a") {
            alert("a");
            var currentLeft = parseInt(element.style.left) || 0;
            element.style.left = (currentLeft - 140) + 'px';    
        } 
        else {    // Handle other keys if needed
        }
    }
    else if(id==="3"){
        const element = document.querySelector("#three");
        var position = element.getBoundingClientRect();
        element.style.position = "relative";
        if (event.key === "w") {
            alert("w");
            var currenttop=parseInt(element.style.top) || 0;
            element.style.top = currenttop - 200 + "px";    
        } 
        else if (event.key === "s") {
            alert("s");
            var currenttop=parseInt(element.style.top) || 0;
            element.style.top = currenttop + 200 + "px";
        } 
        else if (event.key === "d") {
            alert("d");
            var currentLeft = parseInt(element.style.left) || 0;
            element.style.left = (currentLeft + 140) + 'px';
        } 
        else if (event.key === "a") {
            alert("a");
            var currentLeft = parseInt(element.style.left) || 0;
            element.style.left = (currentLeft - 140) + 'px';    
        } 
        else {    // Handle other keys if needed
        }
    }
    id=null;

}


