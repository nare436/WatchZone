const p = document.querySelector("#count");
const appenddiv = document.querySelector(".info");
let time=0;
let intervalid = null;
// CODE FOR DIFFRENT TIME FUNCTION
const starttime = () =>{
    if (intervalid !== null) return;
    intervalid = setInterval(()=>{
        let itime = ++time;
        p.innerHTML = itime;
    },1000)
}
const stoptime = () =>{
    clearInterval(intervalid);
    intervalid = null;
}
const resettime = () =>{
    time=0;
    p.innerHTML = time;
}
const gettime = () =>{
    const newElem = document.createElement("div")
    newElem.classList.add("list");
    newElem.innerHTML =`<li> Your Time is ${time} </li>`;
    appenddiv.appendChild(newElem);
}
const cleartime = () =>{
    appenddiv.innerHTML = ``
}
const refresh = () =>{
    location.reload();
}
// CODE FOR EVENT WHEN BUTTON ARE CLICKED
document.querySelector("#start").addEventListener("click", starttime);
document.querySelector("#stop").addEventListener("click", stoptime);
document.querySelector("#reset").addEventListener("click", resettime);
document.querySelector("#clear").addEventListener("click", cleartime);
document.querySelector("#gettime").addEventListener("click", gettime);
document.querySelector("#refresh").addEventListener("click", refresh);