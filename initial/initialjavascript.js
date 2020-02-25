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

    document.getElementById("currency_one").innerHTML = "$ " + parseFloat(data.USD.high).toFixed(2).replace(".", ",");
    document.getElementById("currency_two").innerHTML = "C$ " + parseFloat(data.CAD.high).toFixed(2).replace(".", ",");
    document.getElementById("currency_tree").innerHTML = "€ " + parseFloat(data.EUR.high).toFixed(2).replace(".", ",");
    document.getElementById("currency_four").innerHTML = "A$ " + parseFloat(data.AUD.high).toFixed(2).replace(".", ",");
  }
});

$(function() {
  function count($this){
      var current = parseInt($this.html(), 10);
      $this.html(++current);
      if(current !== $this.data('count')){
          setTimeout(function(){count($this)}, 50);
      }
  }        
/*$("#currency_one").each(function() {
    $(this).data('count', parseInt($(this).html(), 10));
    $(this).html('0');
    count($(this));
});*/
});


//------------FIM DA CONVERSAO DE MOEDA------------//

//------------GRÁFICO LONGO------------------------//
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLogScales);

function drawLogScales() {
  
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Ganhos');
      data.addColumn('number', 'Despesas');

      data.addRows([
        [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
        [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
        [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
        [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
        [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
        [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
        [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
        [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
        [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
        [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
        [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
        [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
      ]);

      var options = {
        hAxis: {
          title: 'Tempo',
          logScale: true,
        },
        vAxis: {
          title: 'Ganhos e despesas',
          logScale: false
        },
        colors: ['#36a360', '#bf0b2f'],
        title: 'Patrimônio',
        width: "500",
        height: "378",
        display: "table",
        padding: "15px",
      };

      var chart = new google.visualization.LineChart(document.getElementById('grafico-longo'));
      chart.draw(data, options);
    }



//------------FIM DO GRÁFICO LONGO-----------------//

//------------GRÁFICO BALANCETE--------------------//

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['ativo', 'valor'],
    ['Poupança',     11],
    ['C. Corrente',      2],
    ['Dividendos',  2]
  ]);

  var options = {
    title: 'Patrimônio',
    pieHole: 0.4,
    width: "500",
    height: "378",
  };

  var chart = new google.visualization.PieChart(document.getElementById('grafico-balancete'));
  chart.draw(data, options);
}

//------------FIM DO GRÁFICO BALANCETE-------------//

//-------------PROFILE PICTURE--------------------//

$("#profileImage").click(function(e) {
  $("#imageUpload").click();
});

function fasterPreview( uploader ) {
  if ( uploader.files && uploader.files[0] ){
        $('#profileImage').attr('src', 
           window.URL.createObjectURL(uploader.files[0]) );
  }
}

$("#imageUpload").change(function(){
  fasterPreview( this );
});

//-------INICIO DA FUNÇÃO DE VOLTA AO TOPO--//

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//-------FIM DA FUNÇAO DE VOLTA AO TOPO-----//
