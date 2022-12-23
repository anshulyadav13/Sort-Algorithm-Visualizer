// sdocument.write("jay bajarangbali ji");
window.onload=function(){
    show();
}
rangeEvent=document.getElementById("range");
rangeEvent.addEventListener("change",show);

const speedRangeEvent=document.getElementById("speed-range");
let speedRange=speedRangeEvent.value;
speedRangeEvent.addEventListener("change",function(){
    document.getElementById("max-speed").innerHTML=speedRangeEvent.value;
    speedRange=speedRangeEvent.value;

});
let mainContainer=document.getElementById("main-container");



function show(){
    let range=document.getElementById("range").value;
    let maxRange=document.getElementById("maxRange");
    document.getElementById("max-speed").innerHTML=speedRangeEvent.value;
    maxRange.innerHTML=range;
console.log("showing");
// console.log("range is: "+range);

while(mainContainer.firstChild){
    mainContainer.removeChild(mainContainer.firstChild);
    // console.log("removed");
}


for( i=1;i<=range;i++){
  
     childBar=document.createElement("div");
     
    let height=Math.floor(Math.random()*(i*4))+5;
    if(height>=82) height=80;

    height=Math.floor(height);
    // console.log("now height is"+height);
    let heightString=height+"vh";
    childBar.style.height=heightString;
    if((height&1)==0)
    childBar.style.backgroundColor="#181D31";
    else
    childBar.style.backgroundColor="#E6DDC4";
    
    childBar.style.color="#F49D1A";

    
    childBar.style.width=3+"vw";
    childBar.style.borderRadius="3px";
   
    
    childBar.innerHTML=Math.floor(height);
        
   
    mainContainer.appendChild(childBar);
 height=0;
    
}

}

async function desableControls(){
    
    document.querySelector(".control").classList.add("desabled");
    document.querySelector("#enable-button").classList.remove("desabled");
    console.log("desabled");
}

function enableControls(){
    document.querySelector(".control").classList.remove("desabled");
    document.querySelector("#enable-button").classList.add("desabled");
    console.log("enabled");

}

async function swapBars(child,j,k){
    const heightAtJ=parseInt(child[j].innerHTML);
    const heightAtJ1=parseInt(child[k].innerHTML);
    const actualheightAtJ=parseInt(child[j].style.height);
    const actualheightAtJ1=parseInt(child[k].style.height);

const colorj=child[j].style.backgroundColor;
         const colorj1=child[k].style.backgroundColor;
         child[j].style.backgroundColor ="#678983";
         await waitforme(speedRange);
         child[k].style.backgroundColor ="#678983";
         await waitforme(speedRange);
         
         child[k].style.height=actualheightAtJ+"vh";
         child[k].innerHTML=heightAtJ;
         child[j].style.height=actualheightAtJ1+"vh";
         child[j].innerHTML=heightAtJ1;
         await waitforme(100 + (speedRange/10));
         child[k].style.backgroundColor = colorj1;
         await waitforme(100 + (speedRange/10));
        child[j].style.backgroundColor =colorj ;
}

async function setBars(child,j,k){
   
    const heightAtJ1=parseInt(child[k].innerHTML);
     
    const actualheightAtJ1=parseInt(child[k].style.height);

    const colorj=child[j].style.backgroundColor;
         const colorj1=child[k].style.backgroundColor;

         child[j].style.backgroundColor ="#678983";
         await waitforme(speedRange);
         child[k].style.backgroundColor ="#678983";
         await waitforme(speedRange);
         
         
         child[j].style.height=actualheightAtJ1+"vh";
         child[j].innerHTML=heightAtJ1;

         await waitforme(100 + (speedRange/10));
         child[k].style.backgroundColor = colorj1;
         await waitforme(100 + (speedRange/10));
        child[j].style.backgroundColor =colorj ;
}


function waitforme(delay) {
//   console.log("del "+delay);
return new Promise(resolve => { 
    setTimeout(() => { resolve('') }, delay); 
}) 
}


async function bubbleSort(){
   await desableControls();
 let mainContainer=document.getElementById("main-container");
 let child=mainContainer.childNodes;
 const len=child.length;
 for(i=0;i<len -1;i++){
    
    console.log(child[i].innerHTML);
    for(j=0;j<len-i-1;j++){
        const heightAtJ=parseInt(child[j].innerHTML);
        const heightAtJ1=parseInt(child[j+1].innerHTML);
        // console.log(typeof(heightAtJ1));
        if(heightAtJ > heightAtJ1){
             
       await swapBars(child,j,j+1);
             
        } }
        child[len-i-1].style.backgroundColor ="#2b4450";

    // console.log(child[child.length-i].innerHTML);

 }
 child[0].style.backgroundColor ="#2b4450";
 enableControls();
}

async function selectionSort(){
    await desableControls();
    let child=mainContainer.childNodes;
    const len=child.length;
  
    for(  i=0;i<len-1;i++){
        let min=i;

        for(  j=i+1;j<len;j++){
            const heightAtMin=parseInt(child[min].innerHTML);
        const heightAtJ=parseInt(child[j].innerHTML);
            if(heightAtMin > heightAtJ){
                min=j;
            }
        }
        await swapBars(child,i,min);
        child[0].style.backgroundColor ="#2b4450";
    }
    enableControls();
}

async function insertSort(){
   desableControls();
   let child=mainContainer.childNodes;
   const len=child.length;
 
   for(  i=1;i<len;i++){
       let val=parseInt(child[i].innerHTML);
       
        j=i-1;
         
       while(j>=0 && parseInt(child[j].innerHTML) > val){
          let heightAtJ=parseInt(child[j].innerHTML);
        await waitforme(100 + (speedRange/10));
        child[j+1].innerHTML=heightAtJ;
        child[j+1].style.height=heightAtJ+"vh";
 
        j--;
       }
       await waitforme(100 + (speedRange/10));
       child[j+1].innerHTML=val;
       child[j+1].style.height=val+"vh";
      
       child[0].style.backgroundColor ="#2b4450";
   }
   enableControls();

}

async function quickSort(){
     
    desableControls();
    let child=mainContainer.childNodes;
    await quick(child,0,child.length-1);
    enableControls();
}
async function quick(child,beg,end){
    if(beg>=end){
        return ;

    }
    let pivot= await partition(child,beg,end);
   await quick(child,beg,pivot-1);
    await quick(child,pivot+1,end);
}
async function partition(child,beg,end){

    let j=beg;
    let pivot=parseInt(child[end].innerHTML);


    for(i=beg;i<=end;i++){
        let heightAtI=parseInt(child[i].innerHTML);
        if( heightAtI < pivot){
            await swapBars(child,i,j);
            j++;
        }
    }
    await swapBars(child,j,end);
    child[j].style.backgroundColor="#2b4450";
    return j;

}

