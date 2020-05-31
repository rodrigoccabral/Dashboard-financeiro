//-----------------SIDEBAR---------------------------//
var mini = true;
document.getElementById("myUL").style.visibility="hidden";   
function toggleSidebar() {
  
    if (mini) {
      
        console.log("opening sidebar");
        //document.getElementById("mySidebar").style.width = "252px";
        document.getElementById("mySidebar").style.width = "210px";
        document.getElementById("container-tela").style.marginLeft = "210px";
        document.getElementById("myUL").style.visibility="visible";

        this.mini = false;
    } else {

        console.log("closing sidebar");
        document.getElementById("mySidebar").style.width = "60px";
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

//------------GRÁFICO LONGO------------------------//
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLogScales);

function drawLogScales() {
  
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Questões');
      //data.addColumn('number', 'Despesas');

      data.addRows([
        [0, 0],    [1, 10],   [2, 23],  [3, 17],   [4, 18],  [5, 9]
      ]);

      var options = {
        hAxis: {
          title: 'Tempo',
          logScale: true,
        },
        vAxis: {
          title: 'Número de questões',
          logScale: false
        },
        colors: ['#36a360', '#bf0b2f'],
        title: 'Histórico de resoluções',
        width: "500",
        height: "378",
        display: "table",
        padding: "15px",
      };

      var chart = new google.visualization.LineChart(document.getElementById('grafico-longo'));
      chart.draw(data, options);
    }



//------------FIM DO GRÁFICO LONGO-----------------//

//------------GRÁFICO DE RENDIMENTO--------------------//

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var acertos = document.getElementById("acertos").textContent;
  var erros = document.getElementById("erros").textContent;

  total.innerHTML = parseInt(acertos) + parseInt(erros); //Soma dos acertos + erros

  var data = google.visualization.arrayToDataTable([
    ['ativo', 'valor'],
    ['Acertos',     parseInt(acertos)], //Número de acertos
    ['Erros',         parseInt(erros)], //Número de erros

  ]);

  var options = {
    title: 'Percentual de rendimento',
    pieHole: 0.4,
    width: "500",
    height: "378",
  };

  var chart = new google.visualization.PieChart(document.getElementById('grafico-balancete'));
  chart.draw(data, options);
}

//------------FIM DO GRÁFICO DE RENDIMENTO-------------//

//-------INICIO DA FUNÇÃO DE VOLTA AO TOPO--//

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//-------FIM DA FUNÇAO DE VOLTA AO TOPO-----//
