//-----------------Expandable sidebar--------------------//

var mini = true;
document.getElementById("myUL").style.visibility="hidden";   
function toggleSidebar() {
  
    if (mini) {
      
        console.log("opening sidebar");
        document.getElementById("mySidebar").style.width = "252px";
        document.getElementById("container-tela").style.marginLeft = "210px";   
        document.getElementById("myUL").style.visibility="visible";    

        this.mini = false;
    } else {
        console.log("closing sidebar");
        document.getElementById("mySidebar").style.width = "50px";
        document.getElementById("container-tela").style.marginLeft = "0px";
        document.getElementById("myUL").style.visibility="hidden";

        this.mini = true;
    }
}

//------------CONVERSAO DE MOEDA TESTE-------------//


//------------FIM DA CONVERSAO DE MOEDA TESTE------//

//------------TREE VIEW SIDEBAR-------------//

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");

  });
}
//------------FIM DA TREE VIEW SIDEBAR-------------//