/**
 * Siempre utiliza los nombres de los parámetros en inglés
 * Así evitas el spanglish, ejemplo: { ...item (inglés), descripcion (español)... }
 * 
 * Utiliza además los slugs, en vez de cargar un id en la url cargas el slug,
 * el ID es para pasarlo de forma interna y no para mostrarlo en la url. Temas
 * de SEO y seguridad. El Slug incluso lo puedes generar de forma automática con
 * una función, mira el ejemplo que te dejé desde el id 4 en adelante.
 * 
 * No hacen falta las comillas en el parámetro, usa además comillas simples,
 * le quitan carga a la navegador al momento de compilar
 * 
 * NUNCA uses la ñ
 */
export const items = [
    {
        id: 1,
        slug: 'featherbed-duvet',
        item: 'Featherbed Duvet',
        description: 'Mezcla de duvet y pluma de cuerpo para oponer resistencia el peso del cuerpo.',
        image: '/img/featherbed.png',
        category: 'beds',
        stock: 5,
        price: 600000
    },
    {
        id: 2,
        slug: 'almohada-duvet',
        item: 'Almohada Duvet',
        description: 'Permite un soporte ideal sin perder suavidad.',
        image: '/img/almohadas.png',
        category: 'beds',
        stock: 30,
        price: 180000
    },
    {
        id: 3,
        slug: 'bata-luxury',
        item: 'Bata Luxury',
        description: 'Una bata ideal para un momento de relax.',
        image: '/img/bata_luxury.png',
        category: 'bathrooms',
        stock: 25,
        price: 60000
    },
    {
        id: 4,
        slug: '',
        item: 'Juego Sábanas Crucero',
        description: '100% Algodón de fibra extra larga de 500 hilos.',
        image: '/img/sabana_crucero.png',
        category: 'beds',
        stock: 10,
        price: 220000
    },
    {
        id: 5,
        slug: '',
        item: 'Juego Piecera Lino',
        description: 'Funda Piecera 120*220 + 2 Fundas de Cojín 50*70.',
        image: '/img/piecera_lino.png',
        category: 'Complemento',
        stock: 12,
        price: 199000
    },
    {
        id: 6,
        slug: '',
        item: 'Plumón Classic',
        description: '100% Algodón 420 Hilos Downproof. 100% Duvet Ganso 750 FP.',
        image: '/img/plumon_classic.png',
        category: 'beds',
        stock: 10,
        price: 780000
    },
    {
        id: 7,
        slug: '',
        item: 'Plumón Premium',
        description: '100% Algodón Premium Ultra light Downproof. 100% Duvet Ganso 850 FP.',
        image: '/img/plumon_premium.png',
        category: 'beds',
        stock: 17,
        price: 1100000
    },
    {
        id: 8,
        slug: '',
        item: 'Juego Sábana Doble Alforza',
        description: 'Juego Sábana Doble Alforza',
        image: '/img/sabana_doblealforza.png',
        category: 'beds',
        stock: 12,
        price: 220000
    }
];

