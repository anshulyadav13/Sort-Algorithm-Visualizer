
async function quickSort() {
    document.title = "Quick Sort";
    desableControls();
    let child = mainContainer.childNodes;
    await quick(child, 0, child.length - 1);
    enableControls();
    document.title = "Sorting Visulizer";
}
async function quick(child, beg, end) {
    if (beg >= end) {
        return;

    }
    let pivot = await partition(child, beg, end);
    await quick(child, beg, pivot - 1);
    await quick(child, pivot + 1, end);
}
async function partition(child, beg, end) {

    let j = beg;
    let pivot = parseInt(child[end].innerHTML);


    for (i = beg; i <= end; i++) {
        let heightAtI = parseInt(child[i].innerHTML);
        if (heightAtI < pivot) {
            await swapBars(child, i, j);
            j++;
        }
    }
    await swapBars(child, j, end);
    child[j].style.backgroundColor = "#fcbf1e";
    return j;

}