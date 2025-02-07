$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(275, 650, 150, 20)
createPlatform(540, 600, 95, 20)
createPlatform(300, 500, 50, 20)
createPlatform(500, 400, 60, 20)
createPlatform(700, 280, 150, 20)
createPlatform(350, 275, 15, 20)
createPlatform(100, 200, 150, 20)
createPlatform(1000, 500, 20, 20)
createPlatform(1100, 190, 20, 20)
createPlatform(1300, 700, 20, 20)


    // TODO 3 - Create Collectables
createCollectable("database", 155, 158);
createCollectable("database", 1090, 149);
createCollectable("database", 1290, 658);


    
    // TODO 4 - Create Cannons
createCannon("top", 200, 500);
createCannon("right", 550, 1200);
createCannon("bottom", 750, 750);
createCannon("right", 790, 100);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
