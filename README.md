# AeroStrike Elite - Premium Football Cleats Launch Page

A modern, high-conversion, and fully responsive Product Launch Landing Page showcasing the flagship **AeroStrike Elite** football cleats (soccer shoes). This page is built using semantic HTML5, modern vanilla CSS3, and interactive ES6 JavaScript, presented with a dark green-black stadium lighting aesthetic.

---

## 🌟 Key Features

### 1. Hero & Navigation
- **Sticky Glassmorphic Navbar**: Fixed header after scrolling past 50px with a sleek dark green blur background.
- **Mobile Menu**: Responsive hamburger menu that animates into an "X" on toggle.
- **Theme Toggle (Dark/Light Mode)**: Supports live theme switching and saves the preference in `localStorage`.
- **Autoplay Image Slider**: Cycles through high-resolution boot views (profile, traction stud plate, touch knit, puddle splash) with manual buttons and dot indicators.

### 2. Information Sections
- **Tech Features Grid**: 6 responsive feature cards (conical speed studs, carbon outsole plates, tactile grip knit, HydroShield rain repeller, dynamic collar lock, and featherlight build) with custom hover states and glowing shadows.
- **Product Gallery**: Highlights multiple detailed views with interactive zoom overlays and fullscreen Lightbox modal previews.
- **Gear Pricing Packages**: Interactive selection of three packages (Starter Turf, Match Pro [Recommended], Tournament Bundle) that styles chosen plans and saves them to `localStorage`.
- **Dynamic Scroll Statistics**: Animated counters counting from `0` to milestones (Miles Logged, Goals Scored, Satisfaction Rate, Leagues Shipped) when scrolled into viewport via `IntersectionObserver`.
- **Accordion FAQs**: Accordion panel detailing sizing, wash procedures, cleat plate warranties, and artificial turf compatibility.

### 3. Forms & Interactivity
- **Newsletter Subscription**: Real-time validation of email structures. Persists subscriber email to `localStorage` and alerts users via toast banners.
- **Contact Support Form**: Checks name, email, phone digit lengths, and message field inputs before firing success toast feedbacks.
- **Back to Top Button**: Floating capsule that appears past 300px and executes smooth scroll back to the header on click.

---

## 📂 Folder Structure

```text
Product-Landing-Page/
├── index.html       # Main HTML layout file
├── style.css        # Green-black stylesheet containing variables, media queries, and keyframes
├── script.js        # DOM interaction, lightbox modal, slider, and local storage bindings
├── README.md        # Project guide and overview
└── images/          # High-resolution generated football cleat assets
    ├── hero.png     # Lime-green cleat profile image
    ├── product1.png # Close-up of outsole studs
    ├── product2.png # Close-up of texture touch knit
    ├── product3.png # Mud/grass splash action shot
    └── users/       # Profile images for player reviews
        ├── user1.png
        ├── user2.png
        └── user3.png
```

---

## ⚙️ Technologies Used

- **HTML5**: Structured semantic markup.
- **CSS3 Layouts**: Flexbox and CSS Grid layout structures with standard media query breakpoints.
- **CSS Variables**: Dynamic dark-green/neon-lime and light-mint/emerald configurations.
- **JavaScript (ES6+)**: Custom DOM operations, Intersection Observers, scroll listeners, validation regexes, and local storage API bindings.
- **FontAwesome**: Vector icons loaded via CDN.
- **Google Fonts**: Modern typography combinations of `Outfit` (headings) and `Inter` (body).

---

## 🚀 How to Run Locally

Since this project consists of standard client-side files, there are two easy ways to preview the landing page:

### Method 1: Direct File Opening
Simply double-click the `index.html` file inside the `Product-Landing-Page/` folder or drag it into any web browser.

### Method 2: Local HTTP Server (Recommended)
Running a local development server ensures that assets load correctly and prevents browser policy issues.

1. Navigate to the project root in your terminal:
   ```bash
   cd Product-Landing-Page
   ```
2. Serve using any standard development tool:
   - **Vite (if using local workspace)**: `npm run dev` and navigate to the given port.
   - **Python**: `python -m http.server 8080` (Visit `http://localhost:8080` in your browser)
   - **VS Code**: Install the *Live Server* extension, open the project folder, and click "Go Live" in the status bar.
