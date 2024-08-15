import './style.css';
import './home.js';
import './menu.js';
import {home} from './home.js';
import {menu} from './menu.js';

(function tabSwitch() {
    const content = document.getElementById("content");
    const homeBtn = document.getElementById("homeBtn");
    const menuBtn = document.getElementById("menuBtn");
    let isHomeActive = true;
    let isMenuActive = false;

    homeBtn.addEventListener("click", function() {
    if(isHomeActive === true) {
        return;
    } else if(isHomeActive === false) {
        isHomeActive = true;
        isMenuActive = false;

        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        
        home();
    }
    })

    menuBtn.addEventListener("click", function() {
        if(isMenuActive === true) {
            return;
        } else if(isMenuActive === false) {
            isMenuActive = true;
            isHomeActive = false;

            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }

            menu();         
        }
        })

    home()
})();