/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 
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
  loader.load('assets/glasses.glb', (gltf) => {
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

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".hidden");
  
    const revealSection = () => {
      const triggerBottom = window.innerHeight * 0.8;
  
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
  
        if (sectionTop < triggerBottom) {
          section.classList.add("revealed");
        } else {
          section.classList.remove("revealed");
        }
      });
    };
  
    window.addEventListener("scroll", revealSection);
  });