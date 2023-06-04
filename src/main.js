// main.js
import { createApp } from "vue";
import './style.css';
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
    MdRestaurantRound,
    MdSportsbarOutlined,
    FaPizzaSlice,
    MdLocalcafeOutlined,
    MdFastfoodRound,
    GiHotMeal,
    MdBakerydiningRound,
    MdLocalgasstationRound,
    FaAngleLeft,
    OiLocation,
    GiForkKnifeSpoon,
    BiStarFill,
    BiStarHalf,
    BiStar
} from "oh-vue-icons/icons";

addIcons(
    MdRestaurantRound,
    MdSportsbarOutlined,
    FaPizzaSlice,
    MdLocalcafeOutlined,
    MdFastfoodRound,
    GiHotMeal,
    MdBakerydiningRound,
    MdLocalgasstationRound,
    FaAngleLeft,
    OiLocation,
    GiForkKnifeSpoon,
    BiStarFill,
    BiStarHalf,
    BiStar
    );

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");