let entername='';

function adtocart(ev){
    console.log(ev.target.value)
    entername = ev.target.value 
}
 
 function printname(){
     document.getElementById('error').innerHTML=""
     if(entername==''){ 
         document.getElementById('error').innerHTML='please enter the value'
     }else
     {
    let tasklist =document.getElementById('tasklist')
        let li= document.createElement('li')
        li.className='itemlist'
        li.textContent=entername
        tasklist.appendChild(li);
//  let pos=ram.firstElementChild
// if(pos==null){
//     ram.appendChild(li)  
// }else{
//     ram.insertBefore(li,ram)
// }
 
let a=document.createElement('a')
a.textContent='X'
a.href='javascript:void(0)';
a.className='remove'
li.appendChild(a)
  }
 }

 let btn=document.querySelector('ul')
 btn.addEventListener('click',(e)=>{
    let tasklist =document.getElementById('tasklist')
    let li =e.target.parentNode;
    tasklist.removeChild(li)
 })


//  for(let i=1 ; i<5;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000)
//     console.log(i)
//  }
 