async function insertSort() {
    desableControls();
    document.title = "Insert Sort";
    let child = mainContainer.childNodes;
    const len = child.length;

    for (i = 1; i < len; i++) {
        let val = parseInt(child[i].innerHTML);
        // let colorOfI=child[i].style.backgroundColor;
        // child[i].style.backgroundColor="#fcbf1e";
        await waitforme( speedRange  );
        child[i].classList.add("bar-transition");


        j = i - 1;

        while (j >= 0 && parseInt(child[j].innerHTML) > val) {
            let heightAtJ = parseInt(child[j].innerHTML);
            let colorOfJ=child[j].style.backgroundColor;
            child[j].classList.add("bar-transition");
            child[j].style.backgroundColor="#c0eee6";
            await waitforme(100 + (speedRange / 10));
            let colorOfJ1=child[j+1].style.backgroundColor;
            
            // child[j+1].classList.add("bar-transition");
            await waitforme( speedRange  );
            child[j+1].style.backgroundColor="#c0eee6";
            child[j + 1].innerHTML = heightAtJ;
            child[j + 1].style.height = heightAtJ + "vh";
            await waitforme( speedRange  );
            child[j].classList.remove("bar-transition");
            child[j].style.backgroundColor=colorOfJ;
            await waitforme( speedRange );
            // child[j+1].classList.remove("bar-transition");
            child[j+1].style.backgroundColor=colorOfJ1;
           
            j--;
        }
        await waitforme( speedRange  );
        child[j + 1].innerHTML = val;
        child[j + 1].style.height = val + "vh";

        // child[i-1].style.backgroundColor = "#fcbf1e";
    }
    // child[child.length-1].style.backgroundColor = "#fcbf1e";
    enableControls();

    document.title = "Sorting Visulizer";
}