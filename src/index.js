import './style.css';
import './home.js';
import './menu.js';
import {home} from './home.js';
import {menu} from './menu.js';
import {about} from './about.js';

(function tabSwitch() {
    const content = document.getElementById("content");
    const homeBtn = document.getElementById("homeBtn");
    const menuBtn = document.getElementById("menuBtn");
    const aboutBtn = document.getElementById("aboutBtn");
    let isHomeActive = true;
    let isMenuActive = false;
    let isAboutActive = false;

    homeBtn.addEventListener("click", function() {
    if(isHomeActive === true) {
        return;
    } else if(isHomeActive === false) {
        isHomeActive = true;
        isMenuActive = false;
        isAboutActive = false;

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
            isAboutActive = false;

            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }

            menu();         
        }
    })

    aboutBtn.addEventListener("click", function() {
        if(isAboutActive === true) {
            return;
        } else if(isAboutActive === false) {
            isAboutActive = true;
            isHomeActive = false;
            isMenuActive = false;

            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }

            about();
        }
    })

    home()
})();

