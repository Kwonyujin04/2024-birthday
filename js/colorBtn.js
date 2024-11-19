const buttons = document.querySelectorAll(".color_button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const color = button.getAttribute("data-color");

        box.style.backgroundColor = color;
    });
});