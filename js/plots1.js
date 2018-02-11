  /************************************************************************************/
  /********************************* PLOT CALCULATIONS ******************************/
  /************************************************************************************/
/* variables for adjustment: Earnings, Monthly Voluntary repayment */

function calculate2(){


var mvrepay=[0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200, 210, 220, 230, 240, 250];/*per month only*/

var tdn1;
var earn1;
var bulk1;
var earnexc;
var exch_arc;
var bulkexch;
var cl3=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var j3=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var j3y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var j3m=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var j3yp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ir3=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var es3=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var art4=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var n3=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var pmt3=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fv3=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var y3=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var shif21=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var int3=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var shif31=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var tot=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  /******************************************* READ IN VARIABLES ********************************/

var ge = Number(document.form.ge.value);
var curr_bulk_ar=document.volunt.curr_bulk_ar.value;
var td1=document.form.td.value;
var bulkrcf=document.volunt.bulk_ar.value;

  /******************************************* Make time adjustments ********************************/

function timefrc(){

  if (td1=="per year") {
    tdn1=1;
  }
  else if (td1=="per month") {
    tdn1=12;
  }
  else if (td1=="per week") {
    tdn1=52;
  }

}
timefrc();

  /******************************************* EXCHANGE RATE ********************************/

function exchrcf(){

  for (var i = 0; i < obj.Sheet1.length; i++){
    if (obj.Sheet1[i].Currency == curr_bulk_ar){
      bulkexch=obj.Sheet1[i].Exchange_Rate;
    }
    if (obj.Sheet1[i].Currency == curr){
      earnexc=obj.Sheet1[i].Exchange_Rate;
    }
  }

  earn1 = ge*earnexc;

  bulk1 = bulkrcf*bulkexch;

}
exchrcf();

  /******************************** TIME UNTIL LOAN PAID OFF OR CANCELLED ****************************/

function cancelrcf(){

  for (var i=0; i < mvrepay.length; i++){

  cl3[i]=rl-bulk1;

    if (loantype=="Plan 1") {
      if ((earn1*tdn1)<=leth) {
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 30)==0) {
            ir3[i]= cl3[i]*(ip1[1]/12);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/30))-(mvrepay[i]/30);
          j3[i]=j3[i]+1;
        }
      }
      else if ((earn1*tdn1)>leth){
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 30)==0) {
            ir3[i]= cl3[i]*(ip1[1]/12);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/30))-(mvrepay[i]/30)-(mmr_init/30);
          j3[i]=j3[i]+1;
        }
      }
    }
    else if (loantype=="Plan 2") {
      if ((earn1*tdn1)<=leth){
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 30)==0) {
            ir3[i]= cl3[i]*(rpi[1]/12);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/30))-(mvrepay[i]/30);
          j3[i]=j3[i]+1;
        }
      }
      else if ((earn1*tdn1)>leth && (earn1*tdn1)<=uet) {
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 30)==0) {
            ir3[i]= cl3[i]*(((ip2*ifrac)+rpi[1])/12);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/30))-(mvrepay[i]/30)-(mmr_init/30);
          j3[i]=j3[i]+1;
        }
      }
      else if ((earn1*tdn1)>uet) {
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 30)==0) {
            ir3[i]= cl3[i]*((ip2+rpi[1])/12);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/30))-(mvrepay[i]/30)-(mmr_init/30);
          j3[i]=j3[i]+1;
        }
      }
    }
    else if (loantype=="Postgraduate Loan") {
      if ((earn1*tdn1)<=leth) {
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 30)==0) {
            ir3[i]= cl3[i]*((ipl+rpi[1])/12);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/30))-(mvrepay[i]/30);
          j3[i]=j3[i]+1;
        }
      }
      else if ((earn1*tdn1)>leth) {
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 30)==0) {
            ir3[i]= cl3[i]*((ipl+rpi[1])/12);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/30))-(mvrepay[i]/30)-(mmr_init/30);
          j3[i]=j3[i]+1;
        }
      }
    }

  j3y[i]=Math.floor(j3[i]/365);
  j3m[i]=Math.floor(((j3[i]/365)-j3y[i])*12);
  j3yp[i]=(j3[i]/365);
  }

}

cancelrcf();

    /********************************************** EXTRA SAVED **************************************/

function esavedrcf(){

  for (var i=0; i < mvrepay.length; i++){

      if ((earn1*tdn1)<=leth) {
          es3[i]= -(j3[i]/365)*(mvrepay[i]*12)-bulk1;
      }
      else if ((earn1*tdn1)>leth) {
          es3[i]=(j1/365)*(mmr_init*12)-(j3[i]/365)*((mvrepay[i]*12)+(mmr_init*12))-bulk1;
      }
  }
}
esavedrcf();
      /********************************************** PERCENT APR **************************************/

function findrc1(){

  for (var i=0; i < mvrepay.length; i++){

        n3[i]= (j3[i]/365)*12;
        pmt3[i] = mvrepay[i];
        fv3[i] = (mvrepay[i]*((j3[i]/365)*12))+es3[i]+bulk1;
        y3[i] =1;
        shif21[i]=1;
        int3[i]=0.00001;
	if (pmt3[i]==0){
	   shif21[i]=0;
	}
	else {
           while (y3[i]>=0 && shif21[i]>0) {
              y3[i] = (pmt3[i]*((Math.pow((1+shif21[i]),n3[i])-1)/(shif21[i]*(1+shif21[i])))+((pmt3[i]+bulk1)*Math.pow((1+shif21[i]),(n3[i]-1)))-(pmt3[i]/(1+shif21[i])))*Math.pow((1+shif21[i]),(n2-n3[i]))-fv3[i];    /*(Math.pow((1+shif21[i]),n3[i]))-((fv3[i]/pmt3[i])*shif21[i])-1;*/
              shif21[i] = shif21[i]-int3[i];
           }
	}

    shif31[i]=(Math.pow((1+shif21[i]),12)-1)*100;
    art4[i]=((mvrepay[i]*12)/365)*j3[i]+bulk1;
    tot[i]=art4[i]+(mmr_init*12*(j3[i]/365));
    if (shif31[i]<0){shif31[i]=0};
  }
}
findrc1();

      /********************************************** FORMAT OUTPUT **************************************/

  var shif31o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var es3o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var art4o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var toto=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  var j3ypo=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  for (var i=0; i < mvrepay.length; i++){

      shif31o[i] = parseFloat(Math.round(shif31[i]*100)/100).toFixed(2);
      es3o[i]=parseFloat(Math.round(es3[i]*100)/100).toFixed(2);
      art4o[i]=parseFloat(Math.round(art4[i]*100)/100).toFixed(2);
      toto[i]=parseFloat(Math.round(tot[i]*100)/100).toFixed(2);

      j3ypo[i]=parseFloat(Math.round(j3yp[i]*100)/100).toFixed(1);
    }

  var mvrepayp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for (var i=0; i < mvrepay.length; i++){
    mvrepayp[i]="\xA3"+mvrepay[i];
  }
      /********************************************** PLOT **************************************/
      for (var i=0; i < shif31o.length; i++){
        shif31o[i]=Number(shif31o[i]);
      }

      google.charts.load('current', {packages: ['corechart', 'line']});
      google.charts.setOnLoadCallback(drawCurveTypes2);

      function drawCurveTypes2() {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'X');
            data.addColumn('number', 'APR');

            data.addRows([
              [mvrepayp[0], shif31o[0]],
              [mvrepayp[1], shif31o[1]],
              [mvrepayp[2], shif31o[2]],
              [mvrepayp[3], shif31o[3]],
              [mvrepayp[4], shif31o[4]],
              [mvrepayp[5], shif31o[5]],
              [mvrepayp[6], shif31o[6]],
              [mvrepayp[7], shif31o[7]],
              [mvrepayp[8], shif31o[8]],
              [mvrepayp[9], shif31o[9]],
              [mvrepayp[10], shif31o[10]],
              [mvrepayp[11], shif31o[11]],
              [mvrepayp[12], shif31o[12]],
              [mvrepayp[13], shif31o[13]],
              [mvrepayp[14], shif31o[14]],
              [mvrepayp[15], shif31o[15]],
              [mvrepayp[16], shif31o[16]],
              [mvrepayp[17], shif31o[17]],
              [mvrepayp[18], shif31o[18]],
              [mvrepayp[19], shif31o[19]],
              [mvrepayp[20], shif31o[20]],
              [mvrepayp[21], shif31o[21]],
              [mvrepayp[22], shif31o[22]],
              [mvrepayp[23], shif31o[23]],
              [mvrepayp[24], shif31o[24]],
              [mvrepayp[25], shif31o[25]],
              [mvrepayp[26], shif31o[26]]
            ]);

            var options = {
              hAxis: {
                title: 'Additional Monthly Repayments',
                textStyle : {fontSize:12}
              },
              vAxis: {
                title: 'APR'
              },
              series: {
                curveType: 'function'
              },
              focusTarget: 'category',
              backgroundColor: '#F3F7FA',
              height:350,
              legend: { position: 'top', alignment: 'center' }
            };

            var chart = new google.visualization.LineChart(document.getElementById('chart_div2'));
            chart.draw(data, options);
          }
          $(window).resize(function(){
                  drawCurveTypes2();
                  });

  for (var i=0; i < toto.length; i++){
    toto[i]=Number(toto[i]);
  }

  for (var i=0; i < es3o.length; i++){
    es3o[i]=Number(es3o[i]);
  }

  for (var i=0; i < art4o.length; i++){
    art4o[i]=Number(art4o[i]);
  }


  google.charts.load('current', {packages: ['corechart', 'line']});
  google.charts.setOnLoadCallback(drawCurveTypes1);

  function drawCurveTypes1() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'X');
        data.addColumn('number', 'Total spent on loan');
        data.addColumn('number', 'Total spent on additional repayments');
        data.addColumn('number', 'Savings');

        data.addRows([
          [mvrepayp[0], toto[0], art4o[0], es3o[0]],
          [mvrepayp[1], toto[1], art4o[1], es3o[1]],
          [mvrepayp[2], toto[2], art4o[2], es3o[2]],
          [mvrepayp[3], toto[3], art4o[3], es3o[3]],
          [mvrepayp[4], toto[4], art4o[4], es3o[4]],
          [mvrepayp[5], toto[5], art4o[5], es3o[5]],
          [mvrepayp[6], toto[6], art4o[6], es3o[6]],
          [mvrepayp[7], toto[7], art4o[7], es3o[7]],
          [mvrepayp[8], toto[8], art4o[8], es3o[8]],
          [mvrepayp[9], toto[9], art4o[9], es3o[9]],
          [mvrepayp[10], toto[10], art4o[10], es3o[10]],
          [mvrepayp[11], toto[11], art4o[11], es3o[11]],
          [mvrepayp[12], toto[12], art4o[12], es3o[12]],
          [mvrepayp[13], toto[13], art4o[13], es3o[13]],
          [mvrepayp[14], toto[14], art4o[14], es3o[14]],
          [mvrepayp[15], toto[15], art4o[15], es3o[15]],
          [mvrepayp[16], toto[16], art4o[16], es3o[16]],
          [mvrepayp[17], toto[17], art4o[17], es3o[17]],
          [mvrepayp[18], toto[18], art4o[18], es3o[18]],
          [mvrepayp[19], toto[19], art4o[19], es3o[19]],
          [mvrepayp[20], toto[20], art4o[20], es3o[20]],
          [mvrepayp[21], toto[21], art4o[21], es3o[21]],
          [mvrepayp[22], toto[22], art4o[22], es3o[22]],
          [mvrepayp[23], toto[23], art4o[23], es3o[23]],
          [mvrepayp[24], toto[24], art4o[24], es3o[24]],
          [mvrepayp[25], toto[25], art4o[25], es3o[25]],
          [mvrepayp[26], toto[26], art4o[26], es3o[26]]
        ]);

        var options = {
          hAxis: {
            title: 'Additional Monthly Repayments',
            textStyle : {fontSize:12}
          },
          vAxis: {
            title: 'GBP'
          },
          series: {
            curveType: 'function'
          },
          focusTarget: 'category',
          backgroundColor: '#F3F7FA',
          height:350,
          legend: { position: 'top', alignment: 'center' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div1'));
        chart.draw(data, options);
      }

      $(window).resize(function(){
              drawCurveTypes1();
              });


      for (var i=0; i < j3ypo.length; i++){
        j3ypo[i]=Number(j3ypo[i]);
      }

      google.charts.load('current', {packages: ['corechart', 'line']});
      google.charts.setOnLoadCallback(drawCurveTypes3);

      function drawCurveTypes3() {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'X');
            data.addColumn('number', 'Time until loan is paid off');

            data.addRows([
              [mvrepayp[0], j3ypo[0]],
              [mvrepayp[1], j3ypo[1]],
              [mvrepayp[2], j3ypo[2]],
              [mvrepayp[3], j3ypo[3]],
              [mvrepayp[4], j3ypo[4]],
              [mvrepayp[5], j3ypo[5]],
              [mvrepayp[6], j3ypo[6]],
              [mvrepayp[7], j3ypo[7]],
              [mvrepayp[8], j3ypo[8]],
              [mvrepayp[9], j3ypo[9]],
              [mvrepayp[10], j3ypo[10]],
              [mvrepayp[11], j3ypo[11]],
              [mvrepayp[12], j3ypo[12]],
              [mvrepayp[13], j3ypo[13]],
              [mvrepayp[14], j3ypo[14]],
              [mvrepayp[15], j3ypo[15]],
              [mvrepayp[16], j3ypo[16]],
              [mvrepayp[17], j3ypo[17]],
              [mvrepayp[18], j3ypo[18]],
              [mvrepayp[19], j3ypo[19]],
              [mvrepayp[20], j3ypo[20]],
              [mvrepayp[21], j3ypo[21]],
              [mvrepayp[22], j3ypo[22]],
              [mvrepayp[23], j3ypo[23]],
              [mvrepayp[24], j3ypo[24]],
              [mvrepayp[25], j3ypo[25]],
              [mvrepayp[26], j3ypo[26]]
            ]);

            var options = {
              hAxis: {
                title: 'Additional Monthly Repayments',
                textStyle : {fontSize:12}
              },
              vAxis: {
                title: 'Years'
              },
              series: {
                curveType: 'function'
              },
              focusTarget: 'category',
              backgroundColor: '#F3F7FA',
              height:350,
              legend: { position: 'top', alignment: 'center' }
            };

            var chart = new google.visualization.LineChart(document.getElementById('chart_div3'));
            chart.draw(data, options);
          }

          $(window).resize(function(){
                  drawCurveTypes3();
                  });
/*
const CHART2 = document.getElementById("lineChart2");
console.log(CHART2)

let lineChart2=new Chart(CHART2, {
  type: 'line',
  data: data={
    labels: mvrepayp,
    datasets: [{
      label: 'APR',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(12, 207, 73,0.4)',
      borderColor: 'rgba(12, 207, 73,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(12, 207, 73,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointBorderRadius: 5,
      data: shif31o
    }]
  },
  options: {
      scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'APR (%)'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Monthly Additional Repayments (\xA3)'
            }
          }]
        }
      }
  });


const CHART3 = document.getElementById("lineChart3");
console.log(CHART3)

let lineChart3=new Chart(CHART3, {
  type: 'line',
  data: data={
    labels: mvrepayp,
    datasets: [{
      label: 'Savings Made',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(12, 207, 73,0.4)',
      borderColor: 'rgba(12, 207, 73,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(12, 207, 73,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointBorderRadius: 5,
      data: es3o
    },
    {
      label: 'Total Spent on Loan',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(218, 71, 71, 0.4)',
      borderColor: 'rgba(218, 71, 71, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(218, 71, 71, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointBorderRadius: 5,
      data: toto
    },
    {
      label: 'Total Spent on Additional Repayments',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(85, 117, 220,0.4)',
      borderColor: 'rgba(85, 117, 220,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(85, 117, 220,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointBorderRadius: 5,
      data: art4o
    }]
  },
  options: {
      scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'British Pounds (\xA3)'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Monthly Additional Repayments (\xA3)'
            }
          }]
      }
  }
});

const CHART4 = document.getElementById("lineChart4");
console.log(CHART4)

let lineChart4=new Chart(CHART4, {
  type: 'line',
  data: data={
    labels: mvrepayp,
    datasets: [{
      label: 'Time until loan is paid off',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointBorderRadius: 5,
      data: j3ypo
    }]
  },
  options: {
      scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Time until loan is paid off (Years)'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Monthly Additional Repayments (\xA3)"
            }
          }]
      }
  }
});*/

}
