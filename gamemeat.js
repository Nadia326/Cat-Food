window.onload = first; 

var canv;
var ctxcanv;

var player;
var ctxPlayer;


var food1;
var ctxfood1;
var food2;
var ctxfood2;
var food3;
var ctxfood3;
var food4;
var ctxfood4;
var food5;
var ctxfood5;
var food6;
var ctxfood6;
var stats;
var ctxStats;

var way;

var gameWidth = 1000;
var gameHeight = 550;

var background1 = new Image();
background1.src = "bag.jpg";

var background = new Image();
background.src = "bag.jpg";

var products = new Image();
products.src = "pic.png";

var player1;
var allfood2 = [];
var allfood = [];
var allfood3 = [];
var allfood4 = [];
var allfood5 = [];
var allfood6 = [];
var isPlaying;
var health;


var spawnInterval;
var spawnTime = 6000; 
var spawnAmount = 2; 
var spawnInterval1;
var spawnInterval3; 
var spawnInterval4; 
var spawnInterval5; 
var spawnInterval6;



var requestAnimFrame = window.requestAnimFrame || 
						window.webkitRequestAnimationFrame || 
						window.mozRequestAnimationFrame || 
						window.oRequestAnimationFrame || 
						window.msRequestAnimationFrame; 

function first() { 
		canv = document.getElementById("bg"); 
		ctxcanv = canv.getContext("2d");
		
		player = document.getElementById("player");
		ctxPlayer = player.getContext("2d");
		
		food2 = document.getElementById("meat");
		ctxfood2 = food2.getContext("2d");

		food1 = document.getElementById("arbuz");
		ctxfood1 = food1.getContext("2d");
		food3 = document.getElementById("lemon");
		ctxfood3 = food3.getContext("2d");
		food4 = document.getElementById("carrot");
		ctxfood4 = food4.getContext("2d");
		food5 = document.getElementById("bread");
		ctxfood5 = food5.getContext("2d");
		food6 = document.getElementById("fish");
		ctxfood6 = food6.getContext("2d");
		stats = document.getElementById("stats");
		ctxStats = stats.getContext("2d");
		
		
		ctxStats.fill = "#3D3D3D";
		ctxStats.font = "bold 15pt Cursive";
		
		player1 = new Player();
		
		resetHealth();
		resetWay();
		
		startLoop(); 
		startCreatingallfood(); startCreatingallfood2(); 
		startCreatingallfood3();
		startCreatingallfood4(); 
		startCreatingallfood5(); 
		startCreatingallfood6();
		document.addEventListener("keydown", checkKeyDown, false);
		document.addEventListener("keyup", checkKeyUp, false);
}

function resetHealth() {
	health = 100;
}

function resetWay(){
	way = 0;
}





function loop() {
	if(isPlaying) {
		draw();
		update();
		requestAnimFrame(loop);
	}
}

function startLoop() {
	isPlaying = true;
	loop();
	
	
}

function stopLoop() {
	isPlaying = false;
	loop();
}

function draw() {
	player1.draw();
	clearCtxFood3();
	for(var i = 0; i < allfood3.length; i++) {
		allfood3[i].draw(); 
	}
	clearCtxFood2();
	for(var i = 0; i < allfood2.length; i++) {
		allfood2[i].draw();
	}
	clearCtxFood();
	for(var i = 0; i < allfood.length; i++) {
		allfood[i].draw();
	}
	clearCtxFood4();
	for(var i = 0; i < allfood4.length; i++) {
		allfood4[i].draw();
	}
	clearCtxFood5();
	for(var i = 0; i < allfood5.length; i++) {
		allfood5[i].draw();
	}
	clearCtxFood6();
	for(var i = 0; i < allfood6.length; i++) {
		allfood6[i].draw();
	}
}

function update() {
	
	drawBackground();
	updateStats();
	player1.update();
	
	for(var i = 0; i < allfood2.length; i++) {
		allfood2[i].update();	
	}
	for(var i = 0; i < allfood.length; i++) {
		allfood[i].update();
	}
	for(var i = 0; i < allfood3.length; i++) {
		allfood3[i].update();
	}
	for(var i = 0; i < allfood4.length; i++) {
		allfood4[i].update();
	}
	for(var i = 0; i < allfood5.length; i++) {
		allfood5[i].update();
	}
	for(var i = 0; i < allfood6.length; i++) {
		allfood6[i].update();
	}
}



function Player() {
	
	this.srcX = 0; 
	this.srcY = 0; 
	this.drawX = 0;
	this.drawY = 0;
	this.width = 155;
	this.height = 155;
	this.drawWidth = 120;
	this.drawHeight = 120;
	this.isUp = false;
	this.isDown = false;
	this.isRight = false;
	this.isLeft = false;
	 
	this.speed = 12;
}

function Lemon() {
	
	this.srcX = 0;
	this.srcY = 795; 
	this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;
	this.drawY = Math.floor(Math.random() * gameHeight);
	this.width = 130;
	this.height = 130;
	this.drawWidth = 100;
	this.drawHeight = 100;
	this.speed = 5;
}
function spawnFood3(count) {
	for(var i = 0; i < count; i++) {
		allfood3[i] = new Lemon;
	}
}

function startCreatingallfood3() {
	stopCreatingallfood3(); 
	spawnInterval3 = setInterval(function(){spawnFood3(spawnAmount)},spawnTime)
}

function stopCreatingallfood3() {
	clearInterval(spawnInterval3);
}
Lemon.prototype.draw = function() {
	ctxfood3.drawImage(products, this.srcX, this.srcY, this.width,this.height,
		this.drawX, this.drawY, this.drawWidth, this.drawHeight);
}

Lemon.prototype.update = function() {
	this.drawX -= 20;
	if(this.drawX + this.width < 0) {
		this.destroy();
	}
}

Lemon.prototype.destroy = function() {
	allfood3.splice(allfood3.indexOf(this),1);
}
function clearCtxFood3() {
	ctxfood3.clearRect(0, 0, gameWidth, gameHeight);
}

function Bread() {
	
	this.srcX = 0;
	this.srcY = 265; 
	this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;
	this.drawY = Math.floor(Math.random() * gameHeight);
	this.width = 130;
	this.height = 130;
	this.drawWidth = 100;
	this.drawHeight = 100;
	this.speed = 5;
}
function spawnFood5(count) {
	for(var i = 0; i < count; i++) {
		allfood5[i] = new Bread;
	}
}

function startCreatingallfood5() {
	stopCreatingallfood5(); 
	spawnInterval5 = setInterval(function(){spawnFood5(spawnAmount)},spawnTime)
}

function stopCreatingallfood5() {
	clearInterval(spawnInterval5);
}
Bread.prototype.draw = function() {
	ctxfood5.drawImage(products, this.srcX, this.srcY, this.width,this.height,
		this.drawX, this.drawY, this.drawWidth, this.drawHeight);
}

Bread.prototype.update = function() {
	this.drawX -= 20;
	if(this.drawX + this.width < 0) {
		this.destroy();
	}
}

Bread.prototype.destroy = function() {
	allfood5.splice(allfood5.indexOf(this),1);
}
function clearCtxFood5() {
	ctxfood5.clearRect(0, 0, gameWidth, gameHeight);
}





function Carrot() {
	
	this.srcX = 0;
	this.srcY = 395; 
	this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;
	this.drawY = Math.floor(Math.random() * gameHeight);
	this.width = 150;
	this.height = 145;
	this.drawWidth = 100;
	this.drawHeight = 100;
	this.speed = 5;
}
function spawnFood4(count) {
	for(var i = 0; i < count; i++) {
		allfood4[i] = new Carrot;
	}
}

function startCreatingallfood4() {
	stopCreatingallfood4(); 
	spawnInterval4 = setInterval(function(){spawnFood4(spawnAmount)},spawnTime)
}

function stopCreatingallfood4() {
	clearInterval(spawnInterval4);
}
Carrot.prototype.draw = function() {
	ctxfood4.drawImage(products, this.srcX, this.srcY, this.width,this.height,
		this.drawX, this.drawY, this.drawWidth, this.drawHeight, this.speed);
}

Carrot.prototype.update = function() {
	this.drawX -= 20;
	if(this.drawX + this.width < 0) {
		this.destroy();
	}
}

Carrot.prototype.destroy = function() {
	allfood4.splice(allfood4.indexOf(this),1);
}
function clearCtxFood4() {
	ctxfood4.clearRect(0, 0, gameWidth, gameHeight);
}


function Fish() {
	
	this.srcX = 0;
	this.srcY = 545; 
	this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;
	this.drawY = Math.floor(Math.random() * gameHeight);
	this.width = 150;
	this.height = 135;
	this.drawWidth = 100;
	this.drawHeight = 100;
	this.speed = 5;
}
function spawnFood6(count) {
	for(var i = 0; i < count; i++) {
		allfood6[i] = new Fish;
	}
}

function startCreatingallfood6() {
	stopCreatingallfood6(); 
	spawnInterval6 = setInterval(function(){spawnFood6(spawnAmount)},spawnTime)
}

function stopCreatingallfood6() {
	clearInterval(spawnInterval6);
}
Fish.prototype.draw = function() {
	ctxfood6.drawImage(products, this.srcX, this.srcY, this.width,this.height,
		this.drawX, this.drawY, this.drawWidth, this.drawHeight);
}

Fish.prototype.update = function() {
	this.drawX -= 20;
	if(this.drawX + this.width < 0) {
		this.destroy();
	}
}

Fish.prototype.destroy = function() {
	allfood6.splice(allfood6.indexOf(this),1);
}
function clearCtxFood6() {
	ctxfood6.clearRect(0, 0, gameWidth, gameHeight);
}


function Meat() {
	
	this.srcX = 0;
	this.srcY = 675; 
	this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;
	this.drawY = Math.floor(Math.random() * gameHeight);
	this.width = 130;
	this.height = 125;
	this.drawWidth = 100;
	this.drawHeight = 100;
	this.speed = 5;
}
function spawnFood2(count) {
	for(var i = 0; i < count; i++) {
		allfood2[i] = new Meat;
	}
}

function startCreatingallfood2() {
	stopCreatingallfood2(); 
	spawnInterval = setInterval(function(){spawnFood2(spawnAmount)},spawnTime)
}

function stopCreatingallfood2() {
	clearInterval(spawnInterval);
}
Meat.prototype.draw = function() {
	ctxfood2.drawImage(products, this.srcX, this.srcY, this.width,this.height,
		this.drawX, this.drawY, this.drawWidth, this.drawHeight);
}

Meat.prototype.update = function() {
	this.drawX -= 20;
	if(this.drawX + this.width < 0) {
		this.destroy();
	}
}

Meat.prototype.destroy = function() {
	allfood2.splice(allfood2.indexOf(this),1);
}
function clearCtxFood2() {
	ctxfood2.clearRect(0, 0, 1000, 550);
}


function Food() {
	
	this.srcX = 0;
	this.srcY = 155; 
	this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;
	this.drawY = Math.floor(Math.random() * gameHeight);
	this.width = 140;
	this.height = 135;
	this.drawWidth = 100;
	this.drawHeight = 100;
	this.speed = 5;
}
function spawnFood(count) {
	for(var i = 0; i < count; i++) {
		allfood[i] = new Food;
	}
}

function startCreatingallfood() {
	stopCreatingallfood(); 
	spawnInterval1 = setInterval(function(){spawnFood(spawnAmount)},spawnTime)
}

function stopCreatingallfood() {
	clearInterval(spawnInterval);
}
Food.prototype.draw = function() {
	ctxfood1.drawImage(products, this.srcX, this.srcY, this.width,this.height,
		this.drawX, this.drawY, this.drawWidth, this.drawHeight);
}

Food.prototype.update = function() {
	this.drawX -= 20;
	if(this.drawX + this.width < 0) {
		this.destroy();
	}
}

Food.prototype.destroy = function() {
	allfood.splice(allfood.indexOf(this),1);
}
function clearCtxFood() {
	ctxfood1.clearRect(0, 0, gameWidth, gameHeight);
}






Player.prototype.draw = function() {
	clearCtxPlayer();
	ctxPlayer.drawImage(products, this.srcX, this.srcY, this.width,this.height,
		this.drawX, this.drawY, this.drawWidth, this.drawHeight);
}


Player.prototype.update = function() {
	if(health <= 0) {
		stopLoop();
		alert ("Давай снова собирать мою любимую еду! Нажми OK, затем F5");
	}
	way++;
	
	if(this.drawX < 0) this.drawX = 0; 
	if(this.drawX > gameWidth - this.drawWidth) this.drawX = gameWidth - this.drawWidth;
	if(this.drawY < 0) this.drawY = 0;
	if(this.drawY > gameHeight - this.drawHeight) this.drawY = gameHeight - this.drawHeight;
	
	for(var i = 0; i < allfood2.length; i++) {
		if(this.drawX >= allfood2[i].drawX && 
			this.drawY+60 >= allfood2[i].drawY && 
			this.drawX <= allfood2[i].drawX + allfood2[i].width && 
			this.drawY+60 <= allfood2[i].drawY + allfood2[i].height){ 
				health++;
			} 	
			
	}
	
	for(var i = 0; i < allfood6.length; i++) {
		if(this.drawX >= allfood6[i].drawX && 
			this.drawY+60 >= allfood6[i].drawY && 
			this.drawX <= allfood6[i].drawX + allfood6[i].width && 
			this.drawY+60 <= allfood6[i].drawY + allfood6[i].height){ 
				health++;
			} 	
			
	}
	for(var i = 0; i < allfood5.length; i++) {
		if(this.drawX >= allfood5[i].drawX && 
			this.drawY+60 >= allfood5[i].drawY && 
			this.drawX <= allfood5[i].drawX + allfood5[i].width && 
			this.drawY+60 <= allfood5[i].drawY + allfood5[i].height){ 
				health++;
			} 	
			
	}
	for(var i = 0; i < allfood.length; i++) {
		if(this.drawX >= allfood[i].drawX && 
			this.drawY+60 >= allfood[i].drawY && 
			this.drawX <= allfood[i].drawX + allfood[i].width && 
			this.drawY+60 <= allfood[i].drawY + allfood[i].height){ 
				health--;
			} 	
			
	}
	for(var i = 0; i < allfood3.length; i++) {
		if(this.drawX >= allfood3[i].drawX && 
			this.drawY+60 >= allfood3[i].drawY && 
			this.drawX <= allfood3[i].drawX + allfood3[i].width && 
			this.drawY+60 <= allfood3[i].drawY + allfood3[i].height){ 
				health--;
			} 	
			
	}
	for(var i = 0; i < allfood4.length; i++) {
		if(this.drawX >= allfood4[i].drawX && 
			this.drawY+60 >= allfood4[i].drawY && 
			this.drawX <= allfood4[i].drawX + allfood4[i].width && 
			this.drawY+60 <= allfood4[i].drawY + allfood4[i].height){ 
				health--;
			} 	
			
	}
	this.chooseDirection();
} 

Player.prototype.chooseDirection = function() {
	if(this.isUp) 
		this.drawY -= this.speed;
	if(this.isDown) 
		this.drawY += this.speed;
	if(this.isRight) 
		this.drawX += this.speed;
	if(this.isLeft) 
		this.drawX -= this.speed;
} 

function checkKeyDown(e) {
	var keyID = e.keyCode || e.which; 
	var keyChar = String.fromCharCode(keyID);
	
	if(keyChar == "W") {
		player1.isUp = true;
		e.preventDefault(); 
	}
	if(keyChar == "S") {
		player1.isDown = true;
		e.preventDefault(); 
	}	
	if(keyChar == "D") {
		player1.isRight = true;
		e.preventDefault(); 
	}	
	if(keyChar == "A") {
		player1.isLeft = true;
		e.preventDefault(); 
	}
}

function checkKeyUp(e) {
	var keyID = e.keyCode || e.which; 
	var keyChar = String.fromCharCode(keyID);
	
	if(keyChar == "W") {
		player1.isUp = false;
		e.preventDefault(); 
	}
	if(keyChar == "S") {
		player1.isDown = false;
		e.preventDefault(); 
	}	
	if(keyChar == "D") {
		player1.isRight = false;
		e.preventDefault(); 
	}	
	if(keyChar == "A") {
		player1.isLeft = false;
		e.preventDefault(); 
	}
}




function clearCtxPlayer() {
	ctxPlayer.clearRect(0, 0, gameWidth, gameHeight);
}



function updateStats() {
	ctxStats.clearRect(0, 0, gameWidth, gameHeight);
	ctxStats.fillText("Очки: " + health, 10, 20);
	ctxStats.fillText("Путь: " + way, 10, 50);
}

function drawBackground() {
	ctxcanv.clearRect(0, 0, gameWidth, gameHeight);
	ctxcanv.drawImage(background, 0, 0, 600, 349,
		mapX, 0, gameWidth, gameHeight);
	ctxcanv.drawImage(background1, 0, 0, 600, 349,
		map1X, 0, gameWidth, gameHeight);
}
var mapX = 0;
var map1X = gameWidth;
