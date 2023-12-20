import axios from "axios";
import { items } from "../json/datos";

export async function getCategories(categoria) {
    return (`./json/datos.js/${categoria}`);
}
