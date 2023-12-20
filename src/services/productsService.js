import axios from "axios";
import { items  } from "../json/datos";

/**
 * @description Get products from dummyjson API
 * @param {number} limit
 * @returns {Promise}
 */

export async function getProducts(limit) {
    console.log(limit)
    return (`../json/productsData.js${limit}`);
}

export async function getProductById(id) {
    console.log(id)
    return (`../json/productsData.js${id}`); 
}

export async function getProductByCategory(categoria) {
    console.log(categoria)
    return (`../json/productsData.js${categoria}`);
}
