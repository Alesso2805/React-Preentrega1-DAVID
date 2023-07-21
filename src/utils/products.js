const products = [
    {
        id: 1,
        name: "Age Gyozas",
        price: 20,
        description:
            "Empanaditas fritas rellenas de chancho y langostinos. Acompañado de salsa teriyaki",
        image: "https://tofuu.getjusto.com/orioneat-prod-resized/vpgf5xHDYJtwXATe7-1200-1200.webp",
        category: {
            name: "Entradas",
            id: 1,
        },
    },
    {
        id: 2,
        name: "Ebi Furai",
        price: 18,
        description:
            "Langostinos al panko. Acompañado de salsa teriyaki",
        image:
            "https://tofuu.getjusto.com/orioneat-prod-resized/F35GpzB8pNnJA4uF8-1200-1200.webp",
        category: {
            name: "Entradas",
            id: 1,
        },
    },
    {
        id: 3,
        name: "Gyozas",
        price: 18,
        description:
            "Empanaditas al vapor rellenas de chancho y langostinos. Acompañados de salsa ponzu",
        image:
            "https://tofuu.getjusto.com/orioneat-prod-resized/5Sv2HngFx7TXtHjow-1200-1200.webp",
        category: {
            name: "Entradas",
            id: 1,
        },
    },
    {
        id: 4,
        name: "Ebi philadelphia",
        price: 19,
        description:
            "Langostinos rellenos de queso philadelphia al panko. Acompañado de salsa teriyaki",
        image: "https://tofuu.getjusto.com/orioneat-prod-resized/DHppJpLutpwkYhCXH-1200-1200.webp",
        category: {
            name: "Entradas",
            id: 1,
        },
    },
    {
        id: 5,
        name: "Misoshiru",
        price: 14,
        description:
            "Tradicional caldo japonés a base de miso y acompañado de algas wakame y tofu en cubos",
        image:
            "https://tofuu.getjusto.com/orioneat-prod-resized/vuWH5ESCa3aam3PAo-1200-1200.webp",
        category: {
            name: "Entradas",
            id: 1,
        },
    },
    {
        id: 6,
        name: "Yakitori",
        price: 18,
        description:
            "Brochetas de pollo dulce y salado",
        image:
            "https://tofuu.getjusto.com/orioneat-prod-resized/8qhmWyTd2CqqWkHgF-1200-1200.webp",
        category: {
            name: "Entradas",
            id: 1,
        },
    },
    {
        id: 7,
        name: "Acevichado",
        price: 22,
        description: "Relleno de palta y langostinos cubierto con láminas de pescado y salsa acevichada",
        image: "https://tofuu.getjusto.com/orioneat-prod-resized/fYTEWq9nhkHoZWzSJ-1200-1200.webp",
        category: {
            name: "Makis",
            id: 2,
        },
    },
    {
        id: 8,
        name: "California",
        price: 22,
        description: 'Relleno de palta, langostinos y queso crema salpicado con ajonjoli blanco y negro. Acompañado de shoyu.',
        image:
            "https://tofuu.getjusto.com/orioneat-prod-resized/6jctnHBYchtc77KpA-1200-1200.webp",
        category: {
            name: "Makis",
            id: 2,
        },
    },
    {
        id: 9,
        name: "Furai",
        price: 22,
        description: "Relleno de queso crema, palta y langostinos. Empanizado y frito acompañado de salsa dulce",
        image: "https://tofuu.getjusto.com/orioneat-prod-resized/KN8qg5tRRNgmZhYuk-1200-1200.webp",
        category: {
            name: "Makis",
            id: 2,
        },
    },
    {
        id: 10,
        name: "Kiro",
        price: 22,
        description: "Relleno de palta y langostinos cubierto de salmón y una salsa de ají amarillo",
        image: "https://tofuu.getjusto.com/orioneat-prod-resized/9HMT888hyNYQZ2HWF-1200-1200.webp",
        category: {
            name: "Makis",
            id: 2,
        },
    },
    {
        id: 11,
        name: "Murazaki",
        price: 22,
        description: "Relleno de palta y langostinos cubierto con láminas de pulpo y bañado en salsa de olivo",
        image: "https://tofuu.getjusto.com/orioneat-prod-resized/AgAnBuf2qg4uQJ6ts-1200-1200.webp",
        category: {
            name: "Makis",
            id: 2,
        },
    },
    {
        id: 12,
        name: "Spicy",
        price: 22,
        description: "Relleno de palta y langostinos cubierto de salmón y una salsa picante",
        image: "https://tofuu.getjusto.com/orioneat-prod-resized/tDHzQs9gQP6djXQjw-1200-1200.webp",
        category: {
            name: "Makis",
            id: 2,
        },
    },
    {
        id: 13,
        name: "Sumokuchizu",
        price: 22,
        description: "Relleno de pescado, cebolla china y palta cubierto con queso atruchado y bañado en salsa dulce",
        image: "https://tofuu.getjusto.com/orioneat-prod-resized/YDQa5YdhMufjWyHDu-1200-1200.webp",
        category: {
            name: "Makis",
            id: 2,
        },
    },
    {
        id: 14,
        name: "Aloe",
        price: 9,
        description: "Bebida de sabila",
        image: "https://tofuu.getjusto.com/orioneat-prod-resized/ABkbw8JWRE8KDGwNh-1200-1200.webp",
        category: {
            name: "Bebidas",
            id: 3,
        },
    },
    {
        id: 15,
        name: "Asahi",
        price: 15,
        description: "Cerveza japonesa",
        image:
            "https://tofuu.getjusto.com/orioneat-prod-resized/LeJaFqY9rBEBsF3ey-1200-1200.webp",
        category: {
            name: "Bebidas",
            id: 3,
        },
    },
    {
        id: 16,
        name: "Inka Cola",
        price: 7,
        description: "Gaseosa",
        image: "https://tofuu.getjusto.com/orioneat-prod-resized/ogSfCgzyWMxHmpJ9A-1200-1200.webp",
        category: {
            name: "Bebidas",
            id: 3,
        },
    },
    {
        id: 17,
        name: "Kirin",
        price: 1800,
        description: "Cerveza japonesa",
        image:
            "https://tofuu.getjusto.com/orioneat-prod-resized/JWhay4qx8zNXp6c9P-1200-1200.webp",
        category: {
            name: "Bebidas",
            id: 3,
        },
    },
];

module.exports = {
    products,
};