//-----------------SIDEBAR---------------------------//
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
//-----------------FIM DO SIDEBAR------------------//

//-----------------TREEVIEW DO SIDEBAR-------------//


var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");

  });
}
//-----------------FIM DO TREEVIEW DO SIDEBAR-------//

//------------CONVERSAO DE MOEDA--------------------//
var jscontent = $.ajax( {
  type: "GET",
  dataType: "JSON",
  url: "https://economia.awesomeapi.com.br/json/all",
  success: function(data){
    document.getElementById("currency_one").innerHTML = data.USD.code + " " + data.USD.high;
    document.getElementById("currency_two").innerHTML = data.CAD.code + " " + data.CAD.high;
    document.getElementById("currency_tree").innerHTML = data.EUR.code + " " + data.EUR.high;
    document.getElementById("currency_four").innerHTML = data.AUD.code + " " + data.AUD.high;
  }
});
//------------FIM DA CONVERSAO DE MOEDA------------//
