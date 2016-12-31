window.onload = first; 

var canv;
var ctxcanv;

var player;
var ctxPlayer;

var food1;
var ctxfood;

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
var allfood = [];
var allfood1 = [];

var isPlaying;
var health;

var mapX = 0;
var map1X = gameWidth;


var spawnInterval;
var spawnTime = 7000; 
spawnAmount = 6; 


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
		
		food1 = document.getElementById("lemon");
		ctxfood = food1.getContext("2d");
		
		stats = document.getElementById("stats");
		ctxStats = stats.getContext("2d");
		
		canv.width = gameWidth;
		canv.height = gameHeight;
		player.width = gameWidth;
		player.height = gameHeight;
		food1.width = gameWidth;
		food1.height = gameHeight;
		stats.width = gameWidth;
		stats.height = gameHeight;
		
		ctxStats.fill = "#3D3D3D";
		ctxStats.font = "bold 15pt Cursive";
		
		player1 = new Player();
		
		resetHealth();
		resetWay();
		
		startLoop();
		
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
	startCreatingallfood();
}

function stopLoop() {
	isPlaying = false;
	loop();
}

function draw() {
	player1.draw();
	
	clearCtxFood();
	for(var i = 0; i < allfood.length; i++) {
		allfood[i].draw();
	}
}

function update() {
	
	drawBackground();
	updateStats();
	player1.update();
	
	for(var i = 0; i < allfood.length; i++) {
		allfood[i].update();
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
	 
	this.speed = 7;
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
	this.speed = 8;
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
Food.prototype.draw = function() {
	ctxfood3.drawImage(products, this.srcX, this.srcY, this.width,this.height,
		this.drawX, this.drawY, this.drawWidth, this.drawHeight);
}

Lemon.prototype.update = function() {
	this.drawX -= 7;
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
	
	for(var i = 0; i < allfood.length; i++) {
		if(this.drawX >= allfood[i].drawX && 
			this.drawY+60 >= allfood[i].drawY && 
			this.drawX <= allfood[i].drawX + allfood[i].width && 
			this.drawY+60 <= allfood[i].drawY + allfood[i].height){ 
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

