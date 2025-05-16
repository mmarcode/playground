const cubeData = [
  {
    class: "c1",
    colors: ["white", "#ccc", "#ccc", "#eee", "#eee", "#ddd"]
  },
  {
    class: "c2",
    colors: ["#222", "#222", "#222", "#333", "#333", "#444"]
  }
];

const sideNames = ["front", "back", "right", "left", "top", "bottom"];
const scene = document.getElementById("scene");

cubeData.forEach(({ class: cubeClass, colors }) => {
  const container = document.createElement("div");
  container.className = "container";

  const shadow = document.createElement("div");
  shadow.className = "shadow";

  const cube = document.createElement("div");
  cube.className = `cube ${cubeClass}`;

  sideNames.forEach((name, i) => {
    const side = document.createElement("div");
    side.className = `side ${name}`;
    side.style.backgroundColor = colors[i];
    if (name === "front") {
      side.style.boxShadow = cubeClass === "c1"
        ? "inset 0 0 2px rgba(0, 0, 0, 0.2)"
        : "inset 0 0 2px rgba(255, 255, 255, 0.1)";
    }
    cube.appendChild(side);
  });

  container.appendChild(shadow);
  container.appendChild(cube);
  scene.appendChild(container);
});
