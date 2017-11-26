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
          if ((j3[i] % 365)==0) {
            ir3[i]= cl3[i]*ip1[1];
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/365))-((mvrepay[i]/365)*12);
          j3[i]=j3[i]+1;
        }
      }
      else if ((earn1*tdn1)>leth){
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 365)==0) {
            ir3[i]= cl3[i]*ip1[1];
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/365))-((mvrepay[i]/365)*12)-((mmr_init*12)/365);
          j3[i]=j3[i]+1;
        }
      }
    }
    else if (loantype=="Plan 2") {
      if ((earn1*tdn1)<=leth){
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 365)==0) {
            ir3[i]= cl3[i]*rpi[1];
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/365))-((mvrepay[i]/365)*12);
          j3[i]=j3[i]+1;
        }
      }
      else if ((earn1*tdn1)>leth && (earn1*tdn1)<=uet) {
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 365)==0) {
            ir3[i]= cl3[i]*((ip2*ifrac)+rpi[1]);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/365))-((mvrepay[i]/365)*12)-((mmr_init*12)/365);
          j3[i]=j3[i]+1;
        }
      }
      else if ((earn1*tdn1)>uet) {
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 365)==0) {
            ir3[i]= cl3[i]*(ip2+rpi[1]);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/365))-((mvrepay[i]/365)*12)-((mmr_init*12)/365);
          j3[i]=j3[i]+1;
        }
      }
    }
    else if (loantype=="Postgraduate Loan") {
      if ((earn1*tdn1)<=leth) {
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 365)==0) {
            ir3[i]= cl3[i]*(ipl+rpi[1]);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/365))-((mvrepay[i]/365)*12);
          j3[i]=j3[i]+1;
        }
      }
      else if ((earn1*tdn1)>leth) {
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 365)==0) {
            ir3[i]= cl3[i]*(ipl+rpi[1]);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/365))-((mvrepay[i]/365)*12)-((mmr_init*12)/365);
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
        fv3[i] = (mvrepay[i]*((j3[i]/365)*12))+es3[i];
        y3[i] =1;
        shif21[i]=1;
        int3[i]=0.00001;
	if (pmt3[i]==0){
	   shif21[i]=0;
	}
	else {
           while (y3[i]>=0 && shif21[i]>0) {
              y3[i] = pmt3[i]*((Math.pow((1+shif21[i]),n3[i])-1)/(shif21[i]*(1+shif21[i])))+((pmt3[i]+bulk1)*Math.pow((1+shif21[i]),(n3[i]-1)))-(pmt3[i]/(1+shif21[i]))-fv3[i];    /*(Math.pow((1+shif21[i]),n3[i]))-((fv3[i]/pmt3[i])*shif21[i])-1;*/
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


const CHART2 = document.getElementById("lineChart2");
console.log(CHART2)

let lineChart2=new Chart(CHART2, {
  type: 'line',
  data: data={
    labels: mvrepayp,
    datasets: [{
      label: 'Percentage APR',
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
              labelString: 'Monthly Voluntary Repayments (\xA3)'
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
      label: 'Total Spent on Voluntary Repayments',
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
              labelString: 'Monthly Voluntary Repayments (\xA3)'
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
              labelString: "Monthly Voluntary Repayments (\xA3)"
            }
          }]
      }
  }
});

}