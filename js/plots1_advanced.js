  /************************************************************************************/
  /********************************* PLOT CALCULATIONS ******************************/
  /************************************************************************************/
/* variables for adjustment: Earnings, Monthly Voluntary repayment */

function calculate2(){
  var mvrepay=[0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200, 210, 220, 230, 240, 250];/*per month only*/
  var earn1;
  var bulk1;
  var earnexc;
  var exch_arc;
  var bulkexch;
  var mmr_init_plot;
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
  var ge = Number(document.plot_form.plot_ge.value);
  var curr_bulk_ar=document.volunt.plot_curr_bulk_ar.value;
  var bulkrcf=Number(document.volunt.plot_bulk_ar.value);
  /************************************************** OVERSEAS ***************************************/
  function overseasfplots() {
    c = document.form_over.c.value;
    if (loantype=="Plan 1"){
      rp=0.09;
      for (var i = 0; i < obj.Sheet1.length; i++){
        if (obj.Sheet1[i].Country == c){
          curr=obj.Sheet1[i].Currency;
          exch=obj.Sheet1[i].Exchange_Rate;
          leth=obj.Sheet1[i].Earnings_threshold;
        }
      }
    }
    if (loantype=="Plan 2"){
      rp=0.09;
      for (var i = 0; i < obj2.Sheet2.length; i++){
        if (obj2.Sheet2[i].Country == c){
          curr=obj2.Sheet2[i].Currency;
          exch=obj2.Sheet2[i].Exchange_Rate;
          leth=obj2.Sheet2[i].Lower_income_threshold;
          uet=obj2.Sheet2[i].Upper_income_threshold;
        }
      }
    }
    if (loantype=="Postgraduate Loan"){
      rp=0.06;
      for (var i = 0; i < obj3.Sheet3.length; i++){
        if (obj3.Sheet3[i].Country == c){
          curr=obj3.Sheet3[i].Currency;
          exch=obj3.Sheet3[i].Exchange_Rate;
          leth=obj3.Sheet3[i].Lower_income_threshold;
        }
      }
    }
    for (var i = 0; i < obj.Sheet1.length; i++){
      if (obj.Sheet1[i].Currency == curr_bulk_ar){
        bulkexch=obj.Sheet1[i].Exchange_Rate;
      }
    }
    earn1 = Number(ge*exch);
    bulk1 = bulkrcf*bulkexch;
  }
  overseasfplots();
  /*********************************************** MANDATORY MONTHLY REPAYMENT ****************************/
  function mmrfplots() {
    if (earn1>leth) {
      mmr_init_plot=((earn1-leth)*rp)/12;
    }
    else if (earn1<=leth) {
       mmr_init_plot=0;
    }
  }
  mmrfplots();
  /*********************************************** REALTIME LOAN ****************************/
  function realtimef() {
    ifrac=(earn1-leth)/(uet-leth);
    if (paye=="No") {
      rl=dl;
    }
    else if (paye=="Yes") {
      if (loantype=="Plan 1") {
        if (earn1<=leth) {
          rl=(dl);
        }
        else if (earn1>leth) {
          rl=(dl-(mmr_init_plot*12*tp));
        }
      }
      else if (loantype=="Plan 2") {
        if (earn1<=leth) {
          rl=(dl);
        }
        else if (earn1>leth) {
          rl=(dl-(mmr_init_plot*12*tp));
        }
      }
      else if (loantype=="Postgraduate Loan") {
        if (earn1<=leth) {
          rl=(dl);
        }
        else if (earn1>leth) {
          rl=(dl-(mmr_init_plot*12*tp));
        }
      }
    }
    if (rl<0){rl=0;}
    else if (rl>=0) {rl=rl;}
  }
  realtimef();
  /******************************** TIME UNTIL LOAN PAID OFF OR CANCELLED ****************************/
  function cancelrcf(){
  for (var i=0; i < mvrepay.length; i++){
  cl3[i]=rl-bulk1;
    if (loantype=="Plan 1") {
      if (earn1<=leth) {
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 30)==0) {
            ir3[i]= cl3[i]*(intrate/12);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/30))-(mvrepay[i]/30);
          j3[i]=j3[i]+1;
        }
      }
      else if (earn1>leth){
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 30)==0) {
            ir3[i]= cl3[i]*(intrate/12);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/30))-(mvrepay[i]/30)-(mmr_init_plot/30);
          j3[i]=j3[i]+1;
        }
      }
    }
    else if (loantype=="Plan 2") {
      if (earn1<=leth){
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 30)==0) {
            ir3[i]= cl3[i]*(intrate/12);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/30))-(mvrepay[i]/30);
          j3[i]=j3[i]+1;
        }
      }
      else if (earn1>leth) {
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 30)==0) {
            ir3[i]= cl3[i]*(intrate/12);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/30))-(mvrepay[i]/30)-(mmr_init_plot/30);
          j3[i]=j3[i]+1;
        }
      }
    }
    else if (loantype=="Postgraduate Loan") {
      if (earn1<=leth) {
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 30)==0) {
            ir3[i]= cl3[i]*(intrate/12);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/30))-(mvrepay[i]/30);
          j3[i]=j3[i]+1;
        }
      }
      else if (earn1>leth) {
        while (cl3[i]>0 && j3[i]<(cancelledl)) {
          if ((j3[i] % 30)==0) {
            ir3[i]= cl3[i]*(intrate/12);
          }
          else{
            ir3[i]=ir3[i];
          }
          cl3[i]=(cl3[i]+(ir3[i]/30))-(mvrepay[i]/30)-(mmr_init_plot/30);
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
  /**************************** TIME UNTIL CANCELLATION NO ADDITIONAL REPAYMENTS ******************************/
  function payoffnarplots(){
    cl1=rl;
    j1=0;
    if (loantype=="Plan 1") {
      if (earn1<=leth) {
        while (cl1>0 && j1<(cancelledl)) {
          if ((j1 % 30)==0) {
            ir1= cl1*(intrate/12);
          }
          else{
            ir1=ir1;
          }
          cl1=(cl1+(ir1/30));
          j1=j1+1;
        }
      }
      else if (earn1>leth) {
        while (cl1>0 && j1<(cancelledl)) {
          if ((j1 % 30)==0) {
            ir1= cl1*(intrate/12);
          }
          else{
            ir1=ir1;
          }
          cl1=(cl1+(ir1/30))-(mmr_init_plot/30);
          j1=j1+1;
        }
      }
    }
    else if (loantype=="Plan 2") {
      if (earn1<=leth) {
        while (cl1>0 && j1<(cancelledl)) {
          if ((j1 % 30)==0) {
            ir1= cl1*(intrate/12);
          }
          else{
            ir1=ir1;
          }
          cl1=(cl1+(ir1/30));
          j1=j1+1;
        }
      }
      else if (earn1>leth) {
        while (cl1>0 && j1<(cancelledl)) {
          if ((j1 % 30)==0) {
            ir1= cl1*(intrate/12);
          }
          else{
            ir1=ir1;
          }
          cl1=(cl1+(ir1/30))-(mmr_init_plot/30);
          j1=j1+1;
        }
      }
    }
    else if (loantype=="Postgraduate Loan") {
      if (earn1<=leth) {
        while (cl1>0 && j1<(cancelledl)) {
          if ((j1 % 30)==0) {
            ir1= cl1*(intrate/12);
          }
          else{
            ir1=ir1;
          }
          cl1=(cl1+(ir1/30));
          j1=j1+1;
        }
      }
      else if (earn1>leth) {
        while (cl1>0 && j1<(cancelledl)) {
          if ((j1 % 30)==0) {
            ir1= cl1*(intrate/12);
          }
          else{
            ir1=ir1;
          }
          cl1=(cl1+(ir1/30))-(mmr_init_plot/30);
          j1=j1+1;
        }
      }
    }
    jy1=Math.floor(j1/365);
    jm1=Math.floor(((j1/365)-jy1)*12);
  }
  payoffnarplots();
  /********************************************** EXTRA SAVED **************************************/
  function esavedrcf(){
  for (var i=0; i < mvrepay.length; i++){
    if (earn1<=leth) {
        es3[i]= -(j3[i]/365)*(mvrepay[i]*12)-bulk1;
    }
    else if (earn1>leth) {
        es3[i]=(j1/365)*(mmr_init_plot*12)-(j3[i]/365)*((mvrepay[i]*12)+(mmr_init_plot*12))-bulk1;
      }
    }
  }
  esavedrcf();
  /********************************************** PERCENT APR **************************************/
  function findrc1(){
    for (var i=0; i < mvrepay.length; i++){
/*      n3[i]= (j3[i]/365)*12;
      pmt3[i] = mvrepay[i];
      fv3[i] = (mvrepay[i]*((j3[i]/365)*12))+es3[i]+bulk1;
      y3[i] =1;
      shif21[i]=0.00001;
      int3[i]=0.00001;
      if (pmt3[i]==0 && bulk1==0){
        shif21[i]=0;
      }
      else {
        while (y3[i]<0) {
          y3[i] = (pmt3[i]*((Math.pow((1+shif21[i]),n3[i])-1)/(shif21[i]*(1+shif21[i])))+((pmt3[i]+bulk1)*Math.pow((1+shif21[i]),(n3[i]-1)))-(pmt3[i]/(1+shif21[i])))*Math.pow((1+shif21[i]),(n2-n3[i]))-fv3[i];
          shif21[i] = shif21[i]-int3[i];
        }
      }
      shif31[i]=(Math.pow((1+shif21[i]),12)-1)*100;*/
      art4[i]=((mvrepay[i]*12)/365)*j3[i]+bulk1;
      tot[i]=art4[i]+(mmr_init_plot*12*(j3[i]/365));
    }
  }
  findrc1();
  /********************************************** LOAN FATE **************************************/
  function loanfate(){
    if (j1==cancelledl) {
      loancomp="Your loan will be written off - see the row below";
    }
    else if (jy1>1 && jm1==1){
      loancomp=jy1 +" years, "+jm1 +" month";
    }
    else if (jy1==1 && jm1>1){
      loancomp=jy1 +" year, "+jm1 +" months";
    }
    else {
      loancomp=jy1 +" years, "+jm1 +" months";
    }
  }
  loanfate();
  /********************************************** FORMAT OUTPUT **************************************/
    rlo = parseFloat(Math.round(rl*100)/100).toFixed(2);
    mmro=parseFloat(Math.round(mmr_init_plot*100)/100).toFixed(2);

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    rlo=numberWithCommas(rlo);
    mmro=numberWithCommas(mmro);
  /********************************************** OUTPUT **************************************/
    document.getElementById('mmr').innerHTML="£"+mmro;
    document.getElementById('tcanc').innerHTML=loancomp;
  /********************************************** FORMAT OUTPUT **************************************/
  var shif31o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var es3o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var art4o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var toto=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var j3ypo=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for (var i=0; i < mvrepay.length; i++){
    /*shif31o[i] = parseFloat(Math.round(shif31[i]*100)/100).toFixed(2);*/
    es3o[i]=parseFloat(Math.round(es3[i]*100)/100).toFixed(2);
    art4o[i]=parseFloat(Math.round(art4[i]*100)/100).toFixed(2);
    toto[i]=parseFloat(Math.round(tot[i]*100)/100).toFixed(2);
    j3ypo[i]=parseFloat(Math.round(j3yp[i]*100)/100).toFixed(1);
  }
  var mvrepayp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for (var i=0; i < mvrepay.length; i++){
    mvrepayp[i]="\xA3"+mvrepay[i];
  }
  /********************************* APR PLOT ***********************************/
/*  for (var i=0; i < shif31o.length; i++){
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
      legend: { position: 'top', alignment: 'center' },
      chartArea:{left:45,top:25,bottom:45,right:0,width:"100%",height:"100%"}
    };
    var chart = new google.visualization.LineChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
  }
  $(window).resize(function(){
    drawCurveTypes2();
  });*/
    /********************************* SAVINGS PLOT ***********************************/
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
      title: 'Monthly Additional Repayments',
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
    legend: { position: 'top', alignment: 'center' },
    chartArea:{left:65,top:25,bottom:45,right:0,width:"100%",height:"100%"}
  };
  var chart = new google.visualization.LineChart(document.getElementById('chart_div1'));
  chart.draw(data, options);
}
$(window).resize(function(){
  drawCurveTypes1();
});
/********************************* TIME TO PAYOFF ***********************************/
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
      title: 'Monthly Additional Repayments',
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
    legend: { position: 'top', alignment: 'center' },
    chartArea:{left:45,top:25,bottom:45,right:0,width:"100%",height:"100%"}
  };
  var chart = new google.visualization.LineChart(document.getElementById('chart_div3'));
  chart.draw(data, options);
}
$(window).resize(function(){
  drawCurveTypes3();
});
}

/********************************* AUTO ADJUST SLIDERS ***********************************/
/************* GROSS EARNINGS ****************/
var earnings_input = document.getElementById("earnings_value");
var earnings_slider = document.getElementById("earnings");
earnings_input.oninput = function() {
  plot_earnings_slider.innerHTML=earnings_input.value;
  plot_earnings_output.innerHTML=earnings_input.value;
  earnings_slider.innerHTML=earnings_input.value;
  document.getElementById("earnings").value = this.value;
  document.getElementById("plot_earnings").value = this.value;
  document.getElementById("plot_earnings_value").value = this.value;
}
earnings_slider.oninput = function() {
  plot_earnings_slider.innerHTML=earnings_input.value;
  plot_earnings_output.innerHTML=earnings_input.value;
  earnings_input.innerHTML=earnings_slider.value;
  document.getElementById("earnings_value").value = this.value;
  document.getElementById("plot_earnings").value = this.value;
  document.getElementById("plot_earnings_value").value = this.value;
}
/************* GROSS EARNINGS PLOT MAX ****************/
function range_range() {
  var plot_c = document.getElementById("overseas").value;
  for (var i = 0; i < obj.Sheet1.length; i++){
    if (obj.Sheet1[i].Country == plot_c){
      var plot_exch=obj.Sheet1[i].Exchange_Rate;
    }
  }
  var plot_exch_max = 100000/plot_exch;
  document.getElementById("earnings").max = plot_exch_max;
}
/************* GROSS EARNINGS PLOT ****************/
var plot_earnings_slider = document.getElementById("plot_earnings");
var plot_earnings_output = document.getElementById("plot_earnings_value");
plot_earnings_output.oninput = function() {
  plot_earnings_slider.innerHTML=plot_earnings_output.value;
  document.getElementById("plot_earnings").value = this.value;
}
plot_earnings_slider.oninput = function() {
  plot_earnings_output.innerHTML = plot_earnings_slider.value;
  document.getElementById("plot_earnings_value").value = this.value;
}
/************* BULK REPAYMENT PLOT ****************/
var plot_bulk_ar_slider = document.getElementById("plot_bulk_ar");
var plot_bulk_ar_output = document.getElementById("plot_bulk_ar_value");
plot_bulk_ar_output.oninput = function() {
  plot_bulk_ar_slider.innerHTML=plot_bulk_ar_output.value;
  document.getElementById("plot_bulk_ar").value = this.value;
}
plot_bulk_ar_slider.oninput = function() {
  plot_bulk_ar_output.innerHTML = plot_bulk_ar_slider.value;
  document.getElementById("plot_bulk_ar_value").value = this.value;
}

var loan_input = document.getElementById("loan");
loan_input.oninput = function() {
  plot_bulk_ar_slider.innerHTML=loan_input.value;
  document.getElementById("plot_bulk_ar").max = this.value;
}

/************* GROSS EARNINGS PLOT MAX ****************/
function range_range_plot() {
  var plot_c = document.getElementById("overseas").value;
  for (var i = 0; i < obj.Sheet1.length; i++){
    if (obj.Sheet1[i].Country == plot_c){
      var plot_exch=obj.Sheet1[i].Exchange_Rate;
    }
  }
  var plot_exch_max = 100000/plot_exch;
  document.getElementById("plot_earnings").max = plot_exch_max;
}

/************* BULK REPAYMENT PLOT MAX ****************/
function bulk_range_range() {
  var loan_input = document.getElementById("loan").value;
  var plot_c = document.getElementById("plot_currency_input").value;
  for (var i = 0; i < obj.Sheet1.length; i++){
    if (obj.Sheet1[i].Currency == plot_c){
      var plot_exch=obj.Sheet1[i].Exchange_Rate;
    }
  }
  var plot_exch_max = loan_input/plot_exch;
  document.getElementById("plot_bulk_ar").max = plot_exch_max;
}
