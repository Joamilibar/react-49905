// Si no se usa no se importa, es mejor eliminar o comentar
// import axios from "axios";
// import { categories } from "../json/categories";
// NOMBRES de archivos también deben estar en inglés
// datos => data
import { items } from "../json/datos";

/**
 * MISMA FUNCIÓN QUE SE DEBE GUARDAR EN UTILS O ALGO ASÍ
 */
const generateSlug = (title) => {
    // Reemplaza los caracteres especiales | símbolos con un espacio 
    // Corta los espacios al inicio y al final del slugging 
    // Reemplaza el espacio con guion  
    // Elimina los acentos
    title = title.replace(/[`~!@#$%^&*()_\-+=[\]{};:'"\\|/,.<>?\s]/g, ' ').toLowerCase()
    title = title.replace(/^\s+|\s+$/gm, '')
    title = title.replace(/\s+/g, '-')
    title = title.normalize('NFD').replace(/[\u0300-\u036f]/g,"")
  
    return title
  }

/**
 * @description Local JSON
 * @param {number} limit
 * @returns {Promise}
 */

export async function getProducts(limit) {
    // Si vas a hacer un log siempre agrega la ruta desde
    // dónde sale el log, es más fácil de trackear
    console.log("🚀 ~ file: productsService.js:13 ~ getProducts ~ limit:", limit)
    return (items);
}

export async function getProductById(id) {
    // Si vas a hacer un log siempre agrega la ruta desde
    // dónde sale el log, es más fácil de trackear
    console.log("🚀 ~ file: productsService.js:19 ~ getProductById ~ id:", id)
    return items.find( item => item.id === Number(id) ); 
}

export async function getProductBySlug(parameterSlug) {
    console.log("🚀 ~ file: productsService.js:45 ~ getProductBySlug ~ parameterSlug:", parameterSlug)
    // Genera el slug para cada uno, esto no debería ser así
    // el slug debe grabarse en la base de datos, o en el JSON en este
    // caso, pero para demostrar el uso de la función lo hago de esta manera
    const itemsWithSlug = items.map((product) => {
        const { slug, item } = product
        if(slug === '') {
            product.slug = generateSlug(item)
        }
        return product
    })
    console.log("🚀 ~ file: productsService.js:55 ~ itemsWithSlug ~ itemsWithSlug:", itemsWithSlug)
    const product = itemsWithSlug.find((item) => item.slug === parameterSlug)
    console.log("🚀 ~ file: productsService.js:56 ~ getProductBySlug ~ product:", product)
    return product
}

export async function getProductByCategory(category) {
    // Si vas a hacer un log siempre agrega la ruta desde
    // dónde sale el log, es más fácil de trackear
    console.log("🚀 ~ file: productsService.js:22 ~ getProductByCategory ~ category:", category)
    return items.filter(item => item.category === category);
}
