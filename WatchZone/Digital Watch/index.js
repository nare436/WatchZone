const p = document.querySelector("p");
function colorGen1(){
    let word = "0123456789abcdef";
    let color1 = "#"
    for(let i= 0; i<6; i++){
        color1 = color1 + word[Math.floor(Math.random()*16)];
    }
    return color1;
}
const updatedate = () => {
    let newDate = new Date();
    let datenow = newDate.toLocaleTimeString()
    p.textContent = datenow;
}
updatedate()
setInterval(updatedate,1000);
const updatecolor=() =>{
    document.body.style = `background-color: ${colorGen1()};`
}
setInterval(updatecolor,5000);
