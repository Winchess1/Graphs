//Var for Charts
var graph2 = document.getElementById("graph2");
var ctxc = graph2.getContext("2d");
//Var for Indicators
var indicators = document.getElementById("indicators");
var ctxi = indicators.getContext("2d");

ctxc.strokeStyle="black";
ctxc.lineWidth="0.2";
//Net for chart
for (i=0;i<20;i++){	
ctxc.beginPath();
ctxc.moveTo(0,i*10);
ctxc.lineTo(1000,i*10);
ctxc.stroke();

ctxc.beginPath();
ctxc.moveTo(i*20,0);
ctxc.lineTo(i*20,1000);
ctxc.stroke();
}

//Chart itself
ctxc.lineWidth="3";
ctxc.lineCap ="round"; //закруглить
ctxc.strokeStyle="green";

//Candles
var chartDataS =[];
var chartDataE =[];
var chartDataForIndicatorsS =[];
var chartDataForIndicatorsE = [];

for (i=0;i<40;i++){	
chartDataS[i] = (Math.floor(Math.random() * 200));
chartDataE[i] = (Math.floor(Math.random() * 200));  
chartDataForIndicatorsS[i] = chartDataS[i] - 200;
chartDataForIndicatorsE[i] = chartDataE[i] - 200;

}

document.getElementById("10m").addEventListener("click",function(){
ctxc.clearRect(0,0,400,200);
ctxc.strokeStyle="black";
ctxc.lineWidth="0.2";
//Net for graph
for (i=0;i<20;i++){
ctxc.beginPath();
ctxc.moveTo(0,i*10);
ctxc.lineTo(1000,i*10);
ctxc.stroke();
ctxc.beginPath();
ctxc.moveTo(i*20,0);
ctxc.lineTo(i*20,1000);
ctxc.stroke();
}
ctxc.lineWidth="3";
ctxc.lineCap ="round"; //закруглить

for (i=0;i<40;i++){	
ctxc.strokeStyle="green";	 
ctxc.beginPath();
ctxc.moveTo(10+(10*i),200-chartDataS[i]);
					  ctxc.lineTo(10+(10*i),200-chartDataE[i]);

if(chartDataE[i]>chartDataS[i]){
	ctxc.strokeStyle="red";	
}
ctxc.stroke();
chartDataS[i]=200-chartDataS[i];
chartDataE[i]=200-chartDataE[i];
}

ctxc.lineWidth="0.7";
chartLine(40,10);
})

document.getElementById("5m").addEventListener("click",function(){
//Net for graph
ctxc.clearRect(0,0,400,200);
ctxc.strokeStyle="black";
ctxc.lineWidth="0.2";
for (i=0;i<20;i++){
ctxc.beginPath();
ctxc.moveTo(0,i*10);
ctxc.lineTo(1000,i*10);
ctxc.stroke();
ctxc.beginPath();
ctxc.moveTo(i*20,0);
ctxc.lineTo(i*20,1000);
ctxc.stroke();
}
ctxc.lineWidth="3";
ctxc.lineCap ="round";
//Red and Green candles
for (i=0;i<20;i++){	
ctxc.strokeStyle="green";	
ctxc.beginPath();
ctxc.moveTo(10+(20*i),200-chartDataS[i]);
ctxc.lineTo(10+(20*i),200-chartDataE[i]);
if(chartDataE[i]>chartDataS[i]){
	ctxc.strokeStyle="red";	
}
ctxc.stroke();
chartDataS[i]=200-chartDataS[i];
chartDataE[i]=200-chartDataE[i];

}
ctxc.lineWidth="0.7";
chartLine(20,20)
})


//Line that links all candles
function chartLine(chartcounter,chartMidLine){
	console.log(chartDataS);
console.log(chartDataE);

for (i=0;i<chartcounter;i++){	
ctxc.strokeStyle="black";	
ctxc.beginPath();
if (chartDataS[i]<chartDataE[i]){
ctxc.moveTo(10+(chartMidLine*i),chartDataS[i]);
if (chartDataS[i+1]<chartDataE[i+1]){
ctxc.lineTo(10+(chartMidLine*(i+1)),chartDataS[i+1]);
}
else 
	ctxc.lineTo(10+(chartMidLine*(i+1)),chartDataE[i+1]);
ctxc.stroke();
}

else{
	ctxc.moveTo(10+(chartMidLine*i),chartDataE[i]);
	if(chartDataS[i+1]<chartDataE[i+1]){
ctxc.lineTo(10+(chartMidLine*(i+1)),chartDataS[i+1]);
	}
else{
ctxc.lineTo(10+(chartMidLine*(i+1)),chartDataE[i+1]);		
	}
ctxc.stroke();
}

}

// inverting array back to normal
for (i=0;i<40;i++){	
chartDataS[i]=200-chartDataS[i];
chartDataE[i]=200-chartDataE[i];
}
}


//Indicator
//Net for graph
ctxi.clearRect(0,0,400,200);
ctxi.strokeStyle="black";
ctxi.lineWidth="0.2";
for (i=0;i<20;i++){
ctxi.beginPath();
ctxi.moveTo(0,i*10);
ctxi.lineTo(1000,i*10);
ctxi.stroke();
ctxi.beginPath();
ctxi.moveTo(i*20,0);
ctxi.lineTo(i*20,1000);
ctxi.stroke();
}

var k;
var lowestPrice = 200;
var biggestPrice = 0;

if(chartDataS[19]-200>chartDataE[19]-200){
for (i=0;i<20;i++){
if (chartDataS[i]<lowestPrice){
	lowestPrice = chartDataS[i];
}

if (chartDataS[i]>biggestPrice){
	biggestPrice = chartDataS[i];
}
}	
k = (chartDataS[19] - lowestPrice)/(biggestPrice - lowestPrice)*100; 
console.log(k+"%");
}

else{for (i=0;i<20;i++){
if (chartDataE[i]<lowestPrice){
	lowestPrice = chartDataE[i];
}

if (chartDataE[i]>biggestPrice){
	biggestPrice = chartDataE[i];
}
}	
k = (chartDataE[19] - lowestPrice)/(biggestPrice - lowestPrice)*100; 
console.log(k+"%");

}




//Temp canvas
var graph = document.getElementById("graph");
var ctx = graph.getContext("2d");
ctx.strokeStyle="black";
ctx.lineWidth="0.2";
ctx.beginPath();
for (i=0;i<20;i++){
ctx.beginPath();
ctx.moveTo(0,i*10);
ctx.lineTo(1000,i*10);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(i*20,0);
ctx.lineTo(i*20,1000);
ctx.stroke();
}
ctx.beginPath();
ctx.lineWidth="5";
var pi = Math.PI;
ctx.arc(150,100,75,75,pi,false);
ctx.stroke();

	document.getElementById('color').oninput = function(){
		  myColor =this.value;
	}
	graph.onmousedown = function (event) {
		graph.onmousemove = function(event) {
		var x = event.offsetX;
	var y = event.offsetY;
	ctx.fillRect(x-5,y-5,10,10);
	ctx.fillStyle = myColor;
	ctx.fill();
	}
	graph.onmouseup =function(){
		graph.onmousemove = null;
	}
};


/*map 
(function(){
	
	var array = [10,20,30,40];
	_.each(array, function(id,number){
		console.log(id);
		console.log(number);
	});
	
	var numb = [1,1,2,3];
	var multi = _.map(numb, function(value, index, items){		
		
		items[index] = items[index]*5;		
		return value*10;
	});
	console.log(numb);
	console.log(multi);
})();
*/

/*reduce = sum
(function(){
	
	var array = [1,2,3];
	var sum = _.reduce(array, function(total, item, index, array){
		if(index==1){
		console.log(array[0]);}
		return total + item;
		
	});
	
	
	
	
	console.log(sum);

})();*/

(function(){	
	var number = [1,2,3,4,5,6,7];
	var found = _.filter(number, function(num){
		return num % 3 == 0;		
	});	
	console.log(found);
})();



$(document).ready(function(){
	
	$("button").click(function(){
		$.get('netflix-stock-price.csv', function(data, status){
			$("#test").html(data);
			console.log(data);
			alert(status);
		})
	})
})

