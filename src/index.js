import "./reset.css";
import "./styles.css";
import "./tab-styles/home-style.css"
import "./tab-styles/menu-style.css"
import "./tab-styles/contact-style.css"

import { homeContent } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
let tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
    if(tab.id == "home") {
        tab.setAttribute("data-on-this-tab", "true");
        handleTab(tab);
    } else {
        tab.setAttribute("data-on-this-tab", "false");
    }
})

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        if(tab.dataset.onThisTab == 'false') {
            removeOnThisTab();
            tab.dataset.onThisTab = 'true';
            handleTab(tab);
        }
    })
})

function removeOnThisTab() {
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => {
        tab.dataset.onThisTab = 'false';
    })
}

function handleTab(tab) {
    let content = document.querySelector('#content');
    content.innerHTML = ''
    if (tab.id == 'home') {
        content.appendChild(homeContent);
    } else if (tab.id == 'menu') {
        content.appendChild(menu);
    } else {
        content.appendChild(contact);
    }
}