
function task1(){
	a= ""
	dec = document.getElementById("task1");
for (i = 0; i<7; i++){
    a= a+'#'
  document.write(a+'<br>');
}
}


function task2(){
	a = 0;

for (var i = 0; i < 100; i++) {
	a= a+1;

if (a%3==0 && a%5 ==0){
	document.write("fizzbuzz"+"<br>");
}

else if( a%3 == 0 ){
	document.write("fizz"+"<br>");
}
else if ( a%5 == 0 ){
	document.write("buzz"+"<br>");
}



else

	{document.write(a+"<br>")}

	}
}
