import { ISLANDS } from "./data.js";

const islandPicker = document.getElementById("islandPicker");
const todayTemp = document.getElementById("todayTemp");
const todayCloud = document.getElementById("todayCloud");
const todayNote = document.getElementById("todayNote");
const constellationChips = document.getElementById("constellationChips");
const zonesGrid = document.getElementById("zonesGrid");
const zonesIslandName = document.getElementById("zonesIslandName");

function renderIslandPicker(activeId) {
  islandPicker.innerHTML = "";
  ISLANDS.forEach((island) => {
    const btn = document.createElement("button");
    btn.className = "island-btn" + (island.id === activeId ? " active" : "");
    btn.textContent = island.label;
    btn.addEventListener("click", () => selectIsland(island.id));
    islandPicker.appendChild(btn);
  });
}

function renderToday(island) {
  todayTemp.textContent = island.today.temp;
  todayCloud.textContent = island.today.cloud;
  todayNote.textContent = island.today.note;

  constellationChips.innerHTML = "";
  island.constellations.forEach((name) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = name;
    constellationChips.appendChild(chip);
  });
}

function renderZones(island) {
  zonesIslandName.textContent = island.label;
  zonesGrid.innerHTML = "";
  island.zones.forEach((zone) => {
    const card = document.createElement("div");
    card.className = "zone-card";
    card.innerHTML = `
      <span class="zone-icon">${zone.icon}</span>
      <div>
        <p class="zone-name">${zone.name}</p>
        <p class="zone-meta">${zone.meta}</p>
      </div>
    `;
    zonesGrid.appendChild(card);
  });
}

function selectIsland(id) {
  const island = ISLANDS.find((i) => i.id === id) || ISLANDS[0];
  renderIslandPicker(island.id);
  renderToday(island);
  renderZones(island);
}

// Isla inicial: Tenerife
selectIsland("tenerife");