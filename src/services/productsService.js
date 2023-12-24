import axios from "axios";
import { items } from "../json/datos";


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

export async function getProductByCategory(Category) {
    console.log(Category)
    return items.filter(item => item.categoria === Category);
}
