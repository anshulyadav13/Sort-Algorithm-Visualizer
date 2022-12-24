async function selectionSort() {
    document.title = "Selection Sort";
    await desableControls();
    let child = mainContainer.childNodes;
    const len = child.length;

    for (i = 0; i < len - 1; i++) {
        let min = i;

        for (j = i + 1; j < len; j++) {
            const heightAtMin = parseInt(child[min].innerHTML);
            const heightAtJ = parseInt(child[j].innerHTML);
            if (heightAtMin > heightAtJ) {
                min = j;
            }
        }
        await swapBars(child, i, min);
        child[0].style.backgroundColor = "#fcbf1e";
    }
    enableControls();
    document.title = "Sorting Visulizer";
}
