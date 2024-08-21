
export const about = () => {
    const content = document.getElementById("content");

    const about = document.createElement("div");
    about.setAttribute("id", "about");
    content.appendChild(about);

    const info = document.createElement("p");
    const phoneNumber = document.createElement("p");
    const address = document.createElement("p");

    about.appendChild(info);
    about.appendChild(phoneNumber);
    about.appendChild(address);
    
    info.textContent = "Welcome to Pasta Paradise, the ultimate destination for pasta lovers! Located in the heart of Florence, our restaurant is dedicated to celebrating pasta in all its delicious forms. We’re passionate about crafting the perfect pasta experience, from the finest ingredients to the most flavorful sauces.";
    phoneNumber.textContent = "📞 +39 393-555-943";
    address.textContent = "🏠 Via Faenza 107/Rosso, 79"
};