let boxes = document.querySelectorAll(".box");
      let reset = document.querySelector(".reset");
      let newgame = document.querySelector(".newgame");
      let msg = document.querySelector(".msg");
      let msg_container = document.querySelector(".msg_container");

      let turn0 = true; //player O
      const winpattern = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
      ];
      //  Function to click on print X or O

      boxes.forEach((box) => {
        //for loop
        box.addEventListener("click", () => {
          //function
          console.log("clicked");
          if (turn0 === true) {
            //player O turn
            box.innerText = "O";
            turn0 = false;
          } else {
            //player X turn
            box.innerText = "X";
            turn0 = true;
          }
          box.disabled = true; //button can't clicked twice

          checkwinner(); //function call
        });
      });
      const checkwinner = () => {
        for (let pattern of winpattern) {
          let pos1val = boxes[pattern[0]].innerText;
          let pos2val = boxes[pattern[1]].innerText;
          let pos3val = boxes[pattern[2]].innerText;

          if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
              console.log("Winner", pos1val);

              showwinner(pos1val); //fun call to display the winner message
            }
          }
        }
      };

      // hide New Game button initially
      newgame.classList.add("hide");

      const showwinner = (winner) => {
        msg.innerText = `CONGRATULATIONS WINNER IS  ${winner} 🥳`;
        msg - msg_container.classList.remove("hide");
        //to disable all button after 1 winner
        for (let box of boxes) {
          box.disabled = true;
        }
        // show New Game button
        newgame.classList.remove("hide");
        // hide Reset button after win
        reset.classList.add("hide");
      };

      const resetgame = () => {
        //RESET game
        turn0 = true;
        msg_container.classList.add("hide");
        //to Enable all button and make them empty
        for (let box of boxes) {
          box.disabled = false;
          box.innerText = "";
        }
        // hide New Game button again
        newgame.classList.add("hide");
        // show reset again
        reset.classList.remove("hide");
      };
      //trigger RESET game
      newgame.addEventListener("click", resetgame);
      reset.addEventListener("click", resetgame);