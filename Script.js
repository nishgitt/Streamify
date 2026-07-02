// Local JSON Mock Data Store
const movieData = [
    { id: 1, title: "Stranger Things", type: "TV Show", genre: "Sci-Fi", rating: "4.8", duration: "4 Seasons", desc: "When a young boy vanishes, a small town uncovers a mystery.", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=400" },
    { id: 2, title: "Inception", type: "Movie", genre: "Sci-Fi", rating: "4.9", duration: "148 min", desc: "A thief who steals corporate secrets through the use of dream-sharing technology.", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400" },
    { id: 3, title: "The Dark Knight", type: "Movie", genre: "Action", rating: "4.9", duration: "152 min", desc: "When the menace known as the Joker wreaks havoc on Gotham.", image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=400" },
    { id: 4, title: "Breaking Bad", type: "TV Show", genre: "Drama", rating: "5.0", duration: "5 Seasons", desc: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing methamphetamine.", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=400" },
    { id: 5, title: "The Witcher", type: "TV Show", genre: "Fantasy", rating: "4.6", duration: "3 Seasons", desc: "A mutated monster-hunter struggles to find his place in a world.", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400" },
    { id: 6, title: "Avengers: Endgame", type: "Movie", genre: "Action", rating: "4.8", duration: "181 min", desc: "The Avengers assemble once more to reverse Thanos' actions.", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=400" },
    { id: 7, title: "Wednesday", type: "TV Show", genre: "Mystery", rating: "4.7", duration: "1 Season", desc: "Wednesday Addams navigates life at Nevermore Academy.", image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=400" },
    { id: 8, title: "Interstellar", type: "Movie", genre: "Sci-Fi", rating: "4.9", duration: "169 min", desc: "A team of explorers travel through a wormhole in space.", image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=400" }
];

// Initialize System App Engine
document.addEventListener("DOMContentLoaded", () => {
    initHero();
    renderPage("home");
    setupEventListeners();
});

// Build Hero Spotlight Section
function initHero() {
    const hero = document.getElementById("hero-banner");
    const spotlight = movieData[0];
    hero.style.backgroundImage = `linear-gradient(to right, rgba(20,20,20,0.9), rgba(20,20,20,0.1)), url('${spotlight.image}')`;
    hero.innerHTML = `
        <div class="hero-content">
            <h1 class="hero-title">${spotlight.title}</h1>
            <div class="hero-meta">${spotlight.genre} | ⭐ ${spotlight.rating} | ${spotlight.duration}</div>
            <p class="hero-desc">${spotlight.desc}</p>
        </div>
    `;
}

// Global Core Layout Renderer
function renderPage(view, filterData = movieData) {
    const container = document.getElementById("content-display");
    container.innerHTML = "";

    let sectionsToRender = [];

    if (view === "home") {
        sectionsToRender = [
            { title: "Trending Content", items: filterData },
            { title: "Continue Watching", items: filterData.slice().reverse() },
            { title: "Popular Movies", items: filterData.filter(m => m.type === "Movie") },
            { title: "Popular TV Shows", items: filterData.filter(m => m.type === "TV Show") }
        ];
    } else if (view === "movies") {
        sectionsToRender = [{ title: "Blockbuster Movies", items: filterData.filter(m => m.type === "Movie") }];
    } else if (view === "tv-shows") {
        sectionsToRender = [{ title: "Top Rated TV Series", items: filterData.filter(m => m.type === "TV Show") }];
    } else if (view === "my-list") {
        const myListIds = JSON.parse(localStorage.getItem("ott_mylist")) || [];
        const savedItems = movieData.filter(m => myListIds.includes(m.id));
        sectionsToRender = [{ title: "My Play Wishlist", items: savedItems }];
    } else if (view === "search") {
        sectionsToRender = [{ title: "Search Results Matrix", items: filterData }];
    }

    sectionsToRender.forEach(sec => {
        if (sec.items.length === 0) return;

        const secEl = document.createElement("div");
        secEl.className = "movie-section";

        const titleEl = document.createElement("h2");
        titleEl.className = "section-title";
        titleEl.innerText = sec.title;
        secEl.appendChild(titleEl);

        const gridEl = document.createElement("div");
        gridEl.className = "movie-grid";

        sec.items.forEach(item => {
            const card = document.createElement("div");
            card.className = "movie-card";
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="movie-info">
                    <h4>${item.title}</h4>
                    <small>⭐ ${item.rating}</small>
                </div>
            `;
            card.addEventListener("click", () => triggerDetailsModal(item));
            gridEl.appendChild(card);
        });

        secEl.appendChild(gridEl);
        container.appendChild(secEl);
    });
}

// Modal View Component Controller
function triggerDetailsModal(item) {
    const modal = document.getElementById("details-modal");
    const body = document.getElementById("modal-body");
    const myListIds = JSON.parse(localStorage.getItem("ott_mylist")) || [];
    const isAdded = myListIds.includes(item.id);

    body.innerHTML = `
        <div style="display:flex; gap:20px; flex-wrap:wrap;">
            <img src="${item.image}" style="width:220px; border-radius:4px;">
            <div style="flex:1;">
                <h2>${item.title}</h2>
                <h4 style="color:var(--accent-color); margin:10px 0;">${item.type} | ${item.genre} | ${item.duration}</h4>
                <p style="color:var(--text-muted); margin-bottom:20px;">${item.desc}</p>
                <button id="toggle-list-btn" class="section-title" style="background:var(--accent-color); color:white; border:none; padding:10px 20px; border-radius:4px; cursor:pointer;">
                    ${isAdded ? '<i class="fas fa-check"></i> Remove from List' : '<i class="fas fa-plus"></i> Add to My List'}
                </button>
            </div>
        </div>
    `;

    document.getElementById("toggle-list-btn").onclick = () => {
        let currentList = JSON.parse(localStorage.getItem("ott_mylist")) || [];
        if (currentList.includes(item.id)) {
            currentList = currentList.filter(id => id !== item.id);
        } else {
            currentList.push(item.id);
        }
        localStorage.setItem("ott_mylist", JSON.stringify(currentList));
        triggerDetailsModal(item);
    };

    modal.classList.remove("hidden");
}

// System UI Control Binding
function setupEventListeners() {
    document.querySelectorAll(".nav-item").forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderPage(btn.getAttribute("data-target"));
        };
    });

    const searchInp = document.getElementById("search-input");
    searchInp.oninput = () => {
        const query = searchInp.value.toLowerCase();
        if (query === "") {
            renderPage("home");
            return;
        }
        const filtered = movieData.filter(m => m.title.toLowerCase().includes(query) || m.genre.toLowerCase().includes(query));
        renderPage("search", filtered);
    };

    document.querySelector(".close-modal").onclick = () => {
        document.getElementById("details-modal").classList.add("hidden");
    };
}