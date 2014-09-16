
function Inicio(){
	var canvas = document.getElementById('lienzo');
	var context = canvas.getContext('2d');

	context.beginPath();
    context.strokeStyle = "#000";
    context.fillStyle = "#AAA";
	context.arc(200,200,125, (Math.PI * 2), false);
	context.fill();
	context.stroke();
    context.closePath();

    for (var i = 0 ; i <= 400 ; i+=10) {
    context.beginPath();
    context.strokeStyle = "#000";
    context.moveTo(0, i);
    context.lineTo(i, 0);
    context.stroke();
    context.closePath(); 
    }  

    for (var i = 10 ; i <= 400 ; i+=10) {
    context.beginPath();
    context.strokeStyle = "#000";
    context.moveTo(i, 400);
    context.lineTo(400, i);
    context.stroke();
    context.closePath(); 
    } 

}

