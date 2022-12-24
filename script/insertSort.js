async function insertSort(){
    desableControls();
    document.title="Insert Sort";
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
        
        child[0].style.backgroundColor ="#fcbf1e";
    }
    enableControls();
    
    document.title="Sorting Visulizer";
}