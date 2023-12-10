import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// const geometry = new THREE.TorusGeometry(10, 3, 16, 100, 6.283185307179586); 
// const material = new THREE.MeshBasicMaterial( {color: 0xDD0000, wireframe : true } ); 
// const torus = new THREE.Mesh( geometry, material ); scene.add( torus );
const geometry = new THREE.SphereGeometry(); 
const material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } ); 
const sphere = new THREE.Mesh( geometry, material ); scene.add( sphere );
camera.position.z = 3;

function animate() {
	requestAnimationFrame( animate );

	sphere.rotation.x += 0.01;
	sphere.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
