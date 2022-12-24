// sdocument.write("jay bajarangbali ji");
window.onload = function () {
    show();
}
rangeEvent = document.getElementById("range");
rangeEvent.addEventListener("change", show);

const speedRangeEvent = document.getElementById("speed-range");
let speedRange = speedRangeEvent.value;
speedRangeEvent.addEventListener("change", function () {
    // document.getElementById("max-speed").innerHTML =  speedRangeEvent.value;
    speedRange = speedRangeEvent.value;

});
let mainContainer = document.getElementById("main-container");



function show() {
    let range = document.getElementById("range").value;
    let maxRange = document.getElementById("maxRange");
    // document.getElementById("max-speed").innerHTML = speedRangeEvent.value ;
    maxRange.innerHTML = range;
    console.log("showing");
    // console.log("range is: "+range);

    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
        // console.log("removed");
    }


    for (i = 1; i <= range; i++) {

        childBar = document.createElement("div");

        let height = Math.floor(Math.random() * (i * 4)) + 5;
        if (height >= 82) height = 80;

        height = Math.floor(height);
        // console.log("now height is"+height);
        let heightString = height + "vh";
        childBar.style.height = heightString;
        if ((height & 1) == 0)
            childBar.style.backgroundColor = "#120136";
        else
            childBar.style.backgroundColor = "#40bad5";

        childBar.style.color = "#fa1e0e";


        childBar.style.width = 3 + "vw";
        childBar.style.borderRadius = "3px";


        childBar.innerHTML = Math.floor(height);



        mainContainer.appendChild(childBar);
        height = 0;

    }

}

async function desableControls() {

    document.querySelector(".control").classList.add("desabled");
    document.querySelector("#enable-button").classList.remove("desabled");
    console.log("desabled");
}

function enableControls() {
    document.querySelector(".control").classList.remove("desabled");
    document.querySelector("#enable-button").classList.add("desabled");
    console.log("enabled");

}

async function swapBars(child, j, k) {
    const heightAtJ = parseInt(child[j].innerHTML);
    const heightAtJ1 = parseInt(child[k].innerHTML);
    const actualheightAtJ = parseInt(child[j].style.height);
    const actualheightAtJ1 = parseInt(child[k].style.height);

    const colorj = child[j].style.backgroundColor;
    const colorj1 = child[k].style.backgroundColor;
    child[j].style.backgroundColor = "#c0eee6";
    await waitforme(speedRange);
    child[k].style.backgroundColor = "#c0eee6";
    await waitforme(speedRange);
    child[k].style.height = actualheightAtJ + "vh";
    child[k].innerHTML = heightAtJ;
    child[j].style.height = actualheightAtJ1 + "vh";
    child[j].innerHTML = heightAtJ1;
    await waitforme(100 + (speedRange / 10));
    child[k].style.backgroundColor = colorj1;
    await waitforme(100 + (speedRange / 10));
    child[j].style.backgroundColor = colorj;
}

async function setBars(child, j, k) {

    const heightAtJ1 = parseInt(child[k].innerHTML);

    const actualheightAtJ1 = parseInt(child[k].style.height);

    const colorj = child[j].style.backgroundColor;
    const colorj1 = child[k].style.backgroundColor;

    child[j].style.backgroundColor = "#c0eee6";
    await waitforme(speedRange);
    child[k].style.backgroundColor = "#c0eee6";
    await waitforme(speedRange);


    child[j].style.height = actualheightAtJ1 + "vh";
    child[j].innerHTML = heightAtJ1;

    await waitforme(100 + (speedRange / 10));
    child[k].style.backgroundColor = colorj1;
    await waitforme(100 + (speedRange / 10));
    child[j].style.backgroundColor = colorj;
}


function waitforme(delay) {
    //   console.log("del "+delay);
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, delay);
    })
}









