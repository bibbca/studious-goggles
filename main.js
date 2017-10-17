var glasses = 0;

function workClick(number){
    glasses = glasses + number;
    document.getElementById("glasses").innerHTML = glasses;
	calculateTickAmount();
};

var money = 0;
var sellingPrice = .5;

function sellGoggles(){
	glassesAvail = Math.floor(glasses);
	money = money + glassesAvail*sellingPrice;
	glasses = glasses - glassesAvail;
	document.getElementById('money').innerHTML = money.toFixed(2);
	document.getElementById('glasses').innerHTML = glasses;
	document.getElementById('sellingPrice').innerHTML = sellingPrice.toFixed(2);
	calculateTickAmount();
};


var friends = 0;
var friendMultiplier = 1;

function buyFriend(){
    var friendCost = Math.floor(10 * Math.pow(1.1,friends));     //works out the cost of this friend
    if(money >= friendCost){                                   //checks that the player can afford the friend
        friends = friends + 1;                                   //increases number of friends
    	money = money - friendCost;                          //removes the glasses spent
        document.getElementById('friends').innerHTML = friends; 
        document.getElementById('money').innerHTML = money.toFixed(2);  //updates the number of glasses for the user
    };
    var nextFriend = Math.floor(10 * Math.pow(1.1,friends));       //works out the cost of the next friend
    document.getElementById('friendCost').innerHTML = nextFriend;  //updates the cursor cost for the user
	calculateTickAmount();
};

var students = 0;
var studentMultiplier = 1;

function buyStudent(){
    var studentCost = Math.floor(10 * Math.pow(1.5,students))+10;   
    if(money >= studentCost){                                  
        students = students + 1;                                
    	money = money - studentCost;                        
        document.getElementById('students').innerHTML = students; 
        document.getElementById('money').innerHTML = money.toFixed(2);  
    };
    var nextStudent = Math.floor(10 * Math.pow(1.5,students))+10;       //works out the cost of the next friend
    document.getElementById('studentCost').innerHTML = nextStudent;  //updates the cursor cost for the user
	calculateTickAmount();
	//console.log(studentCost);
};

var factoryWorker = 0;
var factoryMultiplier = 1;

function buyFactoryWorker(){
    var factoryWorkerCost = Math.floor(10 * Math.pow(1.8,factoryWorker))+100;   
    if(money >= factoryWorkerCost){                                  
        factoryWorker = factoryWorker + 1;                                
    	money = money - factoryWorkerCost;                        
        document.getElementById('money').innerHTML = money.toFixed(2); 
        document.getElementById('factoryWorker').innerHTML = factoryWorker; 
    };
    var nextFactoryWorker = Math.floor(10 * Math.pow(1.8,factoryWorker))+100;       //works out the cost of the next friend
    document.getElementById('factoryWorkerCost').innerHTML = nextFactoryWorker;  //updates the cursor cost for the user
	calculateTickAmount();
	//console.log(factoryWorkerCost);
};

var enemy = 0;
var enemyMultiplier = 1;

function buyEnemy(){
    var enemyCost = 10 * Math.pow(2,enemy);   
    if(friends >= enemyCost){                                  
        enemy = enemy + 1;                                
    	friends = friends - enemyCost;
		sellingPrice = sellingPrice - .1;
        document.getElementById('enemy').innerHTML = enemy; 
        document.getElementById('friends').innerHTML = friends; 
		document.getElementById('sellingPrice').innerHTML = sellingPrice.toFixed(2); 
    };
    var nextEnemy = Math.floor(10 * Math.pow(2,enemy));       //works out the cost of the next friend
    document.getElementById('enemyCost').innerHTML = nextEnemy;  //updates the cursor cost for the user
	calculateTickAmount();
	//console.log(factoryWorkerCost);
};
/* var studentWeight = 1;

function buyStudentWeight(){
    var studentWeightCost = Math.floor(10 * Math.pow(1.5,studentWeight))+10;   
    if(glasses >= studentWeightCost){                                  
        studentWeight = studentWeight + 1;                                
    	glasses = glasses - studentWeightCost;                        
        document.getElementById('studentWeight').innerHTML = studentWeight; 
        document.getElementById('glasses').innerHTML = glasses;  
    };
    var nextStudentWC = Math.floor(1 * Math.pow(1.001,studentWeight)+25);       //works out the cost of the next friend
    document.getElementById('studentWeightCost').innerHTML = nextStudentWC;  //updates the cursor cost for the user
}; */

var clickAmount = 0;

function calculateTickAmount(){ 
	
	// Calculates Tick Clicks
	var friendClickAmount = friendMultiplier * friends * .5;
	var studentClickAmount = studentMultiplier * students * 1;
	var factoryClickAmount = factoryMultiplier * factoryWorker * 2;
	var enemyClickAmount = enemyMultiplier * enemy * 5;
	var clickAmount = friendClickAmount + studentClickAmount + factoryClickAmount + enemyClickAmount;
	document.getElementById('currentClickAmount').innerHTML = clickAmount;
	return(clickAmount);
}

window.setInterval(function(){
	var clickAmount = calculateTickAmount();
	workClick(clickAmount);
	//console.log(clickAmount);  //Some great logging action.
}, 1000);