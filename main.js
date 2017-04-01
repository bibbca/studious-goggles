var glasses = 0;
var friends = 0;
var students = 0;
var employees = 0;
var professionals = 0;

function workPress(number) {
 money = money + number; 
 document.getElementById("money").innerHTML = money;
};

function buyFriend(){
    var friendCost = Math.floor(10 * Math.pow(1.1,friends));     //works out the cost of this cursor
    if(glasses >= friendCost){                                   //checks that the player can afford the cursor
        friends = friends + 1;                                   //increases number of cursors
    	glasses = glasses - friendCost;                          //removes the cookies spent
        document.getElementById('friends').innerHTML = friends;  //updates the number of cursors for the user
        document.getElementById('glasses').innerHTML = glasses;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,friends));       //works out the cost of the next cursor
    document.getElementById('friendCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
  workPress(friends);
}, 1000);
