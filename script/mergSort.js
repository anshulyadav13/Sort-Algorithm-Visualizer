async function mergeSort() {
    document.title = "Merge Sort";
    desableControls();
    await mergeS(mainContainer.childNodes, 0, mainContainer.childNodes.length - 1);
    enableControls();
    document.title = "Sorting Visulizer";
}
async function mergeS(child, beg, end) {
    if (beg >= end) return;
    let mid = (beg + end) >> 1;
    await mergeS(child, beg, mid);
    await mergeS(child, mid + 1, end);
    await merge(child, beg, mid, end);
}
async function merge(child, beg, mid, end) {
    let i = beg;
    let j = mid + 1;
    let copy = new Array(1);
    let k = beg;
    while (i <= mid && j <= end) {
        let hightAtJ = parseInt(child[j].innerHTML);
        let hightAtI = parseInt(child[i].innerHTML);
        await waitforme(100 + (speedRange / 10));
        const colori = child[i].style.backgroundColor;
        const colorj = child[j].style.backgroundColor;

        child[j].style.backgroundColor = "#c0eee6";
        child[j].classList.add("bar-transition");
        child[i].style.backgroundColor = "#c0eee6";
        child[i].classList.add("bar-transition");

        if (hightAtI <= hightAtJ) {
            copy[k++] = hightAtI;
            console.log("i " + hightAtI);
            i++;
            await waitforme(100 + (speedRange / 10));
            child[i - 1].style.backgroundColor = colori;
        } else {
            copy[k++] = hightAtJ;
            console.log("j " + hightAtJ);
            j++;
            await waitforme(100 + (speedRange / 10));
            child[j - 1].style.backgroundColor = colorj;
        }
        await waitforme(100 + (speedRange / 10));
        
    child[j].classList.remove("bar-transition");
    await waitforme(100 + (speedRange / 10));
    child[i].classList.remove("bar-transition");

    }
    if (i > mid) {
        while (j <= end) {
            const colorj = child[j].style.backgroundColor;

            child[j].style.backgroundColor = "#c0eee6";
            child[j].classList.add("bar-transition");
            hightAtJ = parseInt(child[j].innerHTML);
            copy[k++] = hightAtJ;
            console.log("ertra j " + hightAtJ);
            j++;
            child[j - 1].style.backgroundColor = colorj;
            await waitforme(100 + (speedRange / 10));
    child[j-1].classList.remove("bar-transition");
        }
    } else {
        while (i <= mid) {
            const colori = child[i].style.backgroundColor;

            child[i].style.backgroundColor = "#c0eee6";
            child[i].classList.add("bar-transition");
            hightAtI = parseInt(child[i].innerHTML);
            copy[k++] = hightAtI;
            console.log("ertra i " + hightAtI);
            i++;
            child[i - 1].style.backgroundColor = colori;
            await waitforme(100 + (speedRange / 10));
    child[i-1].classList.remove("bar-transition");
        }
    }

    for (i = beg; i <= end; i++) {
        child[i].style.height = copy[i] + "vh";

        child[i].innerHTML = copy[i];
        await waitforme(speedRange);
        child[i].style.backgroundColor = "#fcbf1e";

    }


}

