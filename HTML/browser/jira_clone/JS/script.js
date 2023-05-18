    //  return the first element that matches selector
     let addBtn = document.querySelector(".add-btn");
     console.log(addBtn);

     var isModalPresent = false;
     addBtn.addEventListener("Click", function () {

        // case1 - If modal is not present
        // then display modal

        if (! isModalPresent){
        //    display modal; 
        }

        // case2 - If modal is present 
        // then hide  modal

        else if (isModalPresent){
            // hide modal

        }
        isModalPresent = ! isModalPresent;

     })

