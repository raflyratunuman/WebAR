document.addEventListener("DOMContentLoaded", function() {
	const sceneEl = document.querySelector('a-scene');
  let arSystem;
  sceneEl.addEventListener('loaded', function () {
	  arSystem = sceneEl.systems["mindar-face-system"];
	});
	const startButton = document.querySelector("#example-start-button");
	const stopButton = document.querySelector("#example-stop-button");
	const switchCameraButton = document.querySelector("#example-switch-camera-button");
	// arReady event triggered when ready
        sceneEl.addEventListener("arReady", (event) => {
	  console.log("ar ready");
        });
	// detect target found
        sceneEl.addEventListener("targetFound", event => {
          console.log("target found");
        });
	// detect target lost
        sceneEl.addEventListener("targetLost", event => {
          console.log("target lost");
        });
	// arError event triggered when something went wrong. Mostly browser compatbility issue
        sceneEl.addEventListener("arError", (event) => {
	  console.log("ar error");
        });
	startButton.addEventListener('click', () => {
	  arSystem.start(); // start AR 
        });
	stopButton.addEventListener('click', () => {
	  arSystem.stop(); // stop
	});
	switchCameraButton.addEventListener('click', () => {
	  arSystem.switchCamera();
	});
      });

document.addEventListener("DOMContentLoaded", function() {
  const list = ["glasses1", "glasses2", "hat1", "hat2", "earring"];
  const visibles = [true, false, false, true, true];
  const setVisible = (button, entities, visible) => {
    if (visible) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
    entities.forEach((entity) => {
      entity.setAttribute("visible", visible);
    });
  }
  list.forEach((item, index) => {
    const button = document.querySelector("#" + item);
    const entities = document.querySelectorAll("." + item + "-entity");
    setVisible(button, entities, visibles[index]);
    button.addEventListener('click', () => {
      visibles[index] = !visibles[index];
      setVisible(button, entities, visibles[index]);
    });
  });
})