const cvs = document.getElementById("gameCanvas");
const ctx = cvs.getContext("2d");

//server code
app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Game vars and consts
let frames = 0;
const DEGREE = Math.PI / 180;

// Load sprite image
const sprite = new Image();
sprite.src = "https://www.cube.exchange/_next/image?url=%2Fassets%2Fcube-logo-black-1011-241.png&w=256&q=75";  // Add your sprite image URL

// Game state
const state = {
  current: 0,
  ready: 0,
  playing: 1,
  over: 2
}

// Control the game
cvs.addEventListener("click", function(evt){
    switch(state.current){
        case state.ready:
            state.current = state.playing;
            break;
        case state.playing:
            // bird.flap();
            break;
        case state.over:
            // Reset the game
            state.current = state.ready;
            break;
    }
});

// Background
const bg = {
  sX: 0,
  sY: 0,
  w: 275,
  h: 226,
  x: 0,
  y: cvs.height - 226,

  draw: function(){
      ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
      ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
  }
}

// Foreground
const fg = {
  sX: 276,
  sY: 0,
  w: 224,
  h: 112,
  x: 0,
  y: cvs.height - 112,

  draw: function(){
      ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
      ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
  }
}

// Draw
function draw(){
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    bg.draw();
    fg.draw();
}

// Update
function update(){
  // Update things
}

// Loop
function loop(){
    update();
    draw();
    frames++;

    requestAnimationFrame(loop);
}
loop();
const cvs = document.getElementById("gameCanvas");
const ctx = cvs.getContext("2d");

// Game vars and consts
let frames = 0;
const DEGREE = Math.PI / 180;

// Load sprite image
const sprite = new Image();
sprite.src = "https://www.cube.exchange/_next/image?url=%2Fassets%2Fcube-logo-black-1011-241.png&w=256&q=75";  // Add your sprite image URL

// Game state
const state = {
  current: 0,
  ready: 0,
  playing: 1,
  over: 2
}

// Control the game
cvs.addEventListener("click", function(evt){
    switch(state.current){
        case state.ready:
            state.current = state.playing;
            break;
        case state.playing:
            // bird.flap();
            break;
        case state.over:
            // Reset the game
            state.current = state.ready;
            break;
    }
});

// Background
const bg = {
  sX: 0,
  sY: 0,
  w: 275,
  h: 226,
  x: 0,
  y: cvs.height - 226,

  draw: function(){
      ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
      ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
  }
}

// Foreground
const fg = {
  sX: 276,
  sY: 0,
  w: 224,
  h: 112,
  x: 0,
  y: cvs.height - 112,

  draw: function(){
      ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
  }
}

// Draw
function draw(){
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    bg.draw();
    fg.draw();
}

// Update
function update(){
  // Update things
}

// Loop
function loop(){
    update();
    draw();
    frames++;

    requestAnimationFrame(loop);
}
loop();
