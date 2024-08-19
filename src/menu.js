import image1 from './assets/images/Pasta-Aglio-E-Olio.jpg';
import image2 from './assets/images/Fettuccine-Alfredo.jpg';
import image3 from './assets/images/linguine-with-frenched-green-beans-and-parsley-pesto.jpg';
import image4 from './assets/images/cauliflower-pasta.jpg';
import image5 from './assets/images/cacio-e-plantain.jpg';
import image6 from './assets/images/Pulling-from-the-Pantry-Puttanesca.jpg';
import image7 from './assets/images/Pasta-Bolognese.jpg';
import image8 from './assets/images/Lobster-Pasta.jpg';

export const menu = () => {
    const itemNames = ["Pasta-Aglio-E-Olio", "Fettuccine Alfredo", "Linguine with Frenched Green Beans and Parsley Pesto",
                       "Pasta with Roasted Cauliflower and Crispy Capers", "Cacio e Plantain", "Pulling-from-the-Pantry Puttanesca",
                       "Pasta Bolognese", "Lobster Pasta with Corn and Tomatoes"];

    const images = [image1, image2, image3, image4, image5, image6, image7, image8];

    const content = document.getElementById("content");

    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    content.appendChild(menu);

    const list = document.createElement("ul");
    menu.appendChild(list);

    for (let i = 0; i < images.length; i++) {
       const item = document.createElement("li");
        list.appendChild(item);
        const img = document.createElement("img");
        img.src = images[i];
        item.appendChild(img);
        const text = document.createElement("p");
        text.textContent = itemNames[i];
        item.appendChild(text);
    }
}