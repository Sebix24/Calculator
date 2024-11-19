const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonClick = button.textContent;

        //Button clear
        if(button.id === "clear"){
            screen.textContent = "0";
            return;
        }

        //button to delete number on screen
        if(button.id === "delete"){
            if(screen.textContent.length === 1 || screen.textContent === "ERROR!"){
                screen.textContent = "0"
            }
            else{
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        //button equal for operations
        if(button.id === "equal"){
            try{
                screen.textContent = eval(screen.textContent);
                return;
            }
            catch{
                screen.textContent = "ERROR!";
                return;
            }
        }

        //print number on screen
        if(screen.textContent === "0" || screen.textContent === "ERROR!"){
            screen.textContent = buttonClick;
        }
        else{
            screen.textContent += buttonClick;
        }
    })
})