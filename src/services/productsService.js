import axios from "axios";
import { items } from "../json/datos";
import { categorias } from "../json/categories";

/**
 * @description Local JSON
 * @param {number} limit
 * @returns {Promise}
 */

export async function getProducts(limit) {
    console.log(limit)
    return (items);
}

export async function getProductById(id) {
    console.log(id)
    return items.find( item => item.id === Number(id) ); 
}

export async function getProductByCategory(categoria) {
    console.log(categoria)
    return items.filter(item => item.categoria === categoria);
}
