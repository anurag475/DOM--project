let arr=['RCB','CSK','KKR','SRH','LSG','PBKS','MI','GT','DC','RR']


let btn=document.querySelector('button')
let h1=document.querySelector('h1')
btn.addEventListener('click',function(){
    let num=Math.floor(Math.random()*arr.length)
    let winner=arr[num]
    h1.innerHTML=winner


})





