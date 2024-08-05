export const home = () => {
    const homePage = document.getElementById("content")

    const homeTitle = document.createElement("h2");
    const homeText =  document.createElement("p");
    const nav = document.createElement("nav");
    const reserveBtn = document.createElement("button");
    const takeoutBtn = document.createElement("button");

    homePage.appendChild(homeTitle);
    homePage.appendChild(homeText);
    homePage.appendChild(nav);
    nav.appendChild(reserveBtn);
    nav.appendChild(takeoutBtn);

    homeTitle.textContent = "#1 Pasta in Italy";
    homeText.textContent = "made with love since 1887";
    reserveBtn.textContent = "Reservations";
    takeoutBtn.textContent = "Takeout";
};