async function bubbleSort() {
   document.title = "Bubble Sort";
   await desableControls();
   let mainContainer = document.getElementById("main-container");
   let child = mainContainer.childNodes;
   const len = child.length;
   for (i = 0; i < len - 1; i++) {

      console.log(child[i].innerHTML);
      for (j = 0; j < len - i - 1; j++) {
         const heightAtJ = parseInt(child[j].innerHTML);
         const heightAtJ1 = parseInt(child[j + 1].innerHTML);
         // console.log(typeof(heightAtJ1));
         if (heightAtJ > heightAtJ1) {

            await swapBars(child, j, j + 1);

         }
      }
      child[len - i - 1].style.backgroundColor = "#fcbf1e";

      // console.log(child[child.length-i].innerHTML);

   }
   child[0].style.backgroundColor = "#fcbf1e";
   document.title = "Sorting Visulizer";
   enableControls();
}
