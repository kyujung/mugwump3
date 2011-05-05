/*jslint white: true, onevar: true, undef: true, nomen: true, regexp: true, plusplus: true, bitwise: true, newcap: true, browser: true, maxerr: 50, indent: 4 */
var input = function () {
    var value = prompt("WHAT'S YOUR GUESS?", "0");
    return value;
};

function tableDraw () {

	$table = $("<table>").attr("border","1").attr("cellpadding","0").attr("cellspacing","0");	
	$colgroup = $("<colgroup/>");
	$colgroup.append("<col/>").attr("width","12");
	$thead = $("<thead/>");
	$tbody = $("<tbody/>");
	
	for (var i=0; i<100; i++) {	
	  if((i % 10) == 0)
		$tr = $("<tr/>");
		
		$tr.append($("<td/>").attr("scope","col").html(i));
		$tbody.append($tr);
	}
	
	$tr = $("<tr/>");	
	$thead.append($tr);	
	$table.append($colgroup);
	$table.append($thead);
	$table.append($tbody);
	$("#test1").after($table);
	
};

$(document).ready(function() {
  $('button.main').click(function() {
    var mw = 4, m = 0, n = 0, tt = 1;
    var p = new Array();
   
    for (var i=0; i<5; i++){
         p[i] = new Array(3);
    }  

    //Create New Mugwumps
    for (var j=1; j<3; j++){
      for (var i=1; i<5; i++){ 
         p[i][j]= Math.floor(Math.random()*10);
       }
     }  
      
   tableDraw();
   
 do{  
    var d = new Array(); 
    
    m = input();
    n = input();
    m = parseInt(m);
    m = m+1;
    n = parseInt(n);
      
    $("tr").eq(m).children().eq(n).css("background-color", "BLUE");
    var t= $("td:first").html();     
    
    for (var i=1; i<5; i++){
           if((p[i][1] == m) && (p[i][2] == n)){
               p[i][1]= -1;
               alert("YOU FOUND MUGWUMP: " + i);
               mw= mw - 1;
               
             if(mw == 0){
               alert("YOU GOT THEM ALL IN " + t + " TURNS!");
               break;
              } 
           }
           else
             d[i]= Math.sqrt((p[i][1]-m)*(p[i][1]-m) + (p[i][2]-n)*(p[i][2]-n));
    }

    alert("YOU ARE " + parseInt(d[1]) + " UNITS FROM MUGWUMP " + "1" + "   \n" 
        + "YOU ARE " + parseInt(d[2]) + " UNITS FROM MUGWUMP " + "2" + "   \n"
        + "YOU ARE " + parseInt(d[3]) + " UNITS FROM MUGWUMP " + "3" + "   \n"
        + "YOU ARE " + parseInt(d[4]) + " UNITS FROM MUGWUMP " + "4");

        tt= tt + 1;        
  }while(tt < 11);
     
    if(mw > 0){ 
          tt -= 1;
          alert("SORRY, THAT'S " + tt + " TRIES. HERE IS WHERE THEY'RE HIDING");
      
      for (var i=1; i<5; i++){
          if(p[i][1] !== -1)
          $('#output_area').after("MUGWUMP ", i, " IS AT (", p[i][1],",",p[i][2],")");  
          $('#output_area').after("<br>");  
          m= p[i][1];
          n= p[i][2];
          m +=1;
          $("tr").eq(m).children().eq(n).css("background-color", "RED");
          var t= $("td:first").html();         
       } 
      }
       $('#output_area').after("THAT WAS FUN! LET'S PLAY AGAIN.......");
       $('#output_area').after("FOUR MORE MUGWUMPS ARE NOW IN HIDING.");
       $('#output_area').after("<br>");   
  });
});
//window.onload = main;