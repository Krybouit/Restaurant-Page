export const home = () => {
    const content = document.getElementById("content");
    
    const home = document.createElement("div");
    home.setAttribute("id", "home");
    content.appendChild(home);

    const homeTitle = document.createElement("h2");
    const homeText =  document.createElement("p");
    const nav = document.createElement("nav");
    const reserveBtn = document.createElement("button");
    const takeoutBtn = document.createElement("button");

    home.appendChild(homeTitle);
    home.appendChild(homeText);
    home.appendChild(nav);
    nav.appendChild(reserveBtn);
    nav.appendChild(takeoutBtn);

    homeTitle.textContent = "#1 Pasta in Italy";
    homeText.textContent = "made with love since 1887";
    reserveBtn.textContent = "Reservations";
    takeoutBtn.textContent = "Takeout";
};