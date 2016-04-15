var world = {};
world.renderer = new THREE.WebGLRenderer();
world.renderer.setSize(800, 640);
document.body.appendChild(world.renderer.domElement);

THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1);

world.scene = new THREE.Scene();

world.camera = new THREE.PerspectiveCamera(35, 800 / 640, 0.1, 10000);
world.camera.position.set(10, 10, 15);
world.camera.lookAt(new THREE.Vector3());



window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();




var geometry = new THREE.BoxGeometry(100, 100, 0.1);
var material = new THREE.MeshLambertMaterial({ color: "#FFFFFF" });
var ground = new THREE.Mesh(geometry, material);
world.scene.add(ground);

var light = new THREE.PointLight( 0xFFFF00 );
light.position.set(10, 0, 10);
world.scene.add(light);


function gameLoop() {
  
  
  world.renderer.render(world.scene, world.camera);
};




function loop() {
  window.requestAnimFrame(loop);
  gameLoop(world1);
}


/*
setInterval(function() {
world.camera.rotation.x += Math.PI/12*Math.random();
world.camera.rotation.y += Math.PI/12*Math.random();
world.camera.rotation.z += Math.PI/12*Math.random();
}, 100);
*/