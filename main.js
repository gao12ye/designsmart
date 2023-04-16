const windowEl = document.getElementById("window");
const addTransomBtn = document.getElementById("add-transom");
const addMullionBtn = document.getElementById("add-mullion");

function createTransom() {
    const transom = document.createElement("div");
    transom.className = "transom";
    transom.style.top = "50%";
    windowEl.appendChild(transom);

    const dimension = document.createElement("span");
    dimension.className = "dimension";
    dimension.style.top = "-20px";
    transom.appendChild(dimension);

    return transom;
}

function createMullion() {
    const mullion = document.createElement("div");
    mullion.className = "mullion";
    mullion.style.left = "50%";
    windowEl.appendChild(mullion);

    const dimension = document.createElement("span");
    dimension.className = "dimension";
    dimension.style.left = "-20px";
    mullion.appendChild(dimension);

    return mullion;
}

function updateDimensions(el, type) {
    const dimension = el.querySelector(".dimension");
    if (type === "transom") {
        dimension.textContent = `${Math.round(el.offsetTop)} px`;
    } else {
        dimension.textContent = `${Math.round(el.offsetLeft)} px`;
    }
}

function makeDraggable(el, type) {
    let isDragging = false;
    let startX, startY;

    el.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX - el.offsetLeft;
        startY = e.clientY - el.offsetTop;
    });
    window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        if (type === "transom") {
            el.style.top = `${e.clientY - startY}px`;
        } else {
            el.style.left = `${e.clientX - startX}px`;
        }
        updateDimensions(el, type);
    });

    window.addEventListener("mouseup", () => {
        isDragging = false;
    });
}

addTransomBtn.addEventListener("click", () => {
    const transom = createTransom();
    makeDraggable(transom, "transom");
    updateDimensions(transom, "transom");
});

addMullionBtn.addEventListener("click", () => {
    const mullion = createMullion();
    makeDraggable(mullion, "mullion");
    updateDimensions(mullion, "mullion");
});

