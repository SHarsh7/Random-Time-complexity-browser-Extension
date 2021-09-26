import data from "./data.js";

function randomTimeComp(){
    let keys = Object.keys(data);
    let prop = keys[Math.floor(Math.random() * keys.length)];

    let sortAlgo=document.getElementById('sortAlgo');
    sortAlgo.innerHTML=prop;

    let bCase=document.getElementById('bCase');
    let aCase=document.getElementById('aCase');
    let wCase=document.getElementById('wCase');

    bCase.innerHTML=data[prop].Best;
    aCase.innerHTML=data[prop].Average;
    wCase.innerHTML=data[prop].Worst;

}
randomTimeComp();
document.getElementById('shuffle').addEventListener('click',randomTimeComp);