let h1 = document.querySelector("h1");

function changeColor(color, dely, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, dely);
}

changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("yellow", 1000, () => {
        changeColor("pink ", 1000, () => {
          changeColor("blue", 1000);
        });
      });
    });
  });
});
