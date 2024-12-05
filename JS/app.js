import * as THREE from 'three';
import { MindARThree } from 'mindar-face-three';

const initAR = async () => {
  const mindarThree = new MindARThree({
    container: document.querySelector('#ar-container'),
    videoSettings: { facingMode: 'user' }
  });

  const { renderer, scene, camera } = mindarThree;

  // Add lighting
  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);

  // Load glasses model
  const loader = new THREE.GLTFLoader();
  loader.load('C:\Users\Organizer1\Documents\Web AR Project\assets\glasses.glb', (gltf) => {
    const glasses = gltf.scene;
    glasses.scale.set(0.05, 0.05, 0.05); // Adjust size of glasses
    glasses.position.set(0, 0.03, -0.1); // Adjust position relative to face
    scene.add(glasses);
  });

  // Start AR
  await mindarThree.start();
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
};

initAR();