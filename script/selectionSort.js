async function selectionSort() {
    document.title = "Selection Sort";
    await desableControls();
    let child = mainContainer.childNodes;
    const len = child.length;

    for (i = 0; i < len - 1; i++) {
        let min = i;
        child[i].style.backgroundColor = "#c0eee6";
        child[i].classList.add("bar-transition");
        await waitforme(100 + (speedRange / 10));
        for (j = i + 1; j < len; j++) {
            const heightAtMin = parseInt(child[min].innerHTML);
            let colorOfJ=child[j].style.backgroundColor;
            child[j].style.backgroundColor = "#c0eee6";
            await waitforme(100 + (speedRange / 10));

            const heightAtJ = parseInt(child[j].innerHTML);
            if (heightAtMin > heightAtJ) {
               
                min = j;
            }
            child[j].style.backgroundColor = colorOfJ;
            await waitforme(100 + (speedRange / 10));
        }
        let colorOfMin=child[min].style.backgroundColor;
        child[min].style.backgroundColor = "#fcbf1e";
            await waitforme(100 + (speedRange / 10));
            
            await swapBars(child, i, min);
            child[min].style.backgroundColor=colorOfMin;
            await waitforme(100 + (speedRange / 10));
        child[i].classList.remove("bar-transition");
        child[i].style.backgroundColor = "#fcbf1e";
    }
    enableControls();
    document.title = "Sorting Visulizer";
}
