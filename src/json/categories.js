// Siempre es mejor usar nombres de variables o constantes o clases
// en inglés cómo estándares internacionales. Es bueno acostumbrase a eso
// desde el inicio.

const baseUrl = '/category'

export const categories =  [
    {
        category: 'Camas',
        link: `${ baseUrl}/beds`,
    }, 
    {
        category: 'Baños',
        link: `${ baseUrl}/bathrooms`,
        
    }, 
    {
        category: 'Complementos',
        link: `${ baseUrl}/complements`,
    }
];