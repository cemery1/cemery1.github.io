let width, height;
let colors = ['#1093A7', '#24454D', '#DEF2F3', '#19D3F1'];
let pixel = 24;
let tick = [];
let gridColor = [];

let sketch = function(p) {
  p.setup = function() {
    width = p.windowWidth
    height = p.windowHeight
    let cvn = p.createCanvas(width, height);

    for(let i = 0; i*pixel < height; i++) {
      gridColor[i] = [];
      tick[i] = [];

      for(let j = 0; j*pixel < width; j++){
        gridColor[i][j] = '#24454D';
        tick[i][j] = p.random();
      }
    }
  }

  p.draw = function() {
    p.noStroke();

    for(let i = 0; i < gridColor.length; i++) {
      for(let j = 0; j < gridColor[0].length; j++) {
        p.fill(gridColor[i][j]);
        p.rect(j*pixel, i*pixel, pixel, pixel);

        tick[i][j] += 0.015;
        if(tick[i][j] >= 1.0) {
          tick[i][j] = 0.0;
          if(j === 0) {
            let updateColors = colors.slice(0);
            updateColors.push(gridColor[i][j], gridColor[i][j]);

            gridColor[i][j] = p.random(updateColors);
          }
          else {
            gridColor[i][j] = gridColor[i][j-1];
          }
        }
      }
    }
  }

  p.windowResized = function() {
    width = p.windowWidth
    height = p.windowHeight
    p.resizeCanvas(p.windowWidth, p.windowHeight);

    let newGridColor = [];
    let newTick = [];
    for(let i = 0; i*pixel < height; i++) {
      newGridColor[i] = [];
      newTick[i] = [];

      for(let j = 0; j*pixel < width; j++){
        if(i < gridColor.length & j < gridColor[0].length) {
          newGridColor[i][j] = gridColor[i][j];
          newTick[i][j] = tick[i][j];
        }
        else {
          newGridColor[i][j] = '#24454D';
          newTick[i][j] = p.random();
        }
      }
    }

    gridColor = newGridColor;
    tick = newTick;
  }
};

new p5(sketch, 'home-background');