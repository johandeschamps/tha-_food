const panier = []; // Initialise un tableau vide pour stocker les articles du panier.

/**
 * Ajoute un article au panier. Si l'article existe déjà, augmente sa quantité.
 * @param {string} article - Le nom de l'article à ajouter.
 * @param {number} prix - Le prix de l'article à ajouter.
 */
function ajouterAuPanier(article, prix) {
    const item = panier.find(item => item.article === article); // Recherche dans le panier un article ayant le même nom.
    if (item) { // Si l'article existe déjà dans le panier...
        item.quantite++; // ... augmente sa quantité de 1.
    } else { // Si l'article n'existe pas dans le panier...
        panier.push({ article, prix, quantite: 1 }); // ... ajoute un nouvel article avec une quantité de 1.
    }
    afficherPanier(); // Met à jour l'affichage du panier.
}

/**
 * Affiche le contenu du panier et le prix total.
 * Met à jour l'élément HTML du panier avec les articles et le total.
 */
function afficherPanier() {
    const panierElement = document.getElementById('panier'); // Sélectionne l'élément HTML représentant le panier.
    panierElement.innerHTML = ''; // Vide le contenu HTML actuel de l'élément panier.
    let total = 0; // Initialise le total à 0.
    panier.forEach(item => { // Pour chaque article dans le panier...
        const li = document.createElement('li'); // Crée un nouvel élément de liste.
        li.textContent = `${item.article} - ${item.prix.toFixed(2)}€ x ${item.quantite}`; // Définit le texte de l'élément de liste.
        panierElement.appendChild(li); // Ajoute l'élément de liste à l'élément panier.
        total += item.prix * item.quantite; // Ajoute le prix total de cet article au total général.
    });
    const totalElement = document.createElement('li'); // Crée un nouvel élément de liste pour afficher le total.
    totalElement.textContent = `Total: ${total.toFixed(2)}€`; // Définit le texte de l'élément total.
    panierElement.appendChild(totalElement); // Ajoute l'élément total à l'élément panier.
}

/**
 * Ajoute des écouteurs d'événements de clic à tous les boutons "Ajouter au panier".
 * Lorsqu'un bouton est cliqué, ajoute l'article correspondant au panier.
 */
document.querySelectorAll('.achat').forEach(button => { // Sélectionne tous les éléments HTML avec la classe 'achat'.
    button.addEventListener('click', (event) => { // Ajoute un écouteur d'événements de clic à chaque bouton.
        const carte = event.target.closest('.carte'); // Trouve l'élément parent le plus proche avec la classe 'carte'.
        const article = carte.querySelector('.titre').textContent; // Récupère le nom de l'article.
        const prix = parseFloat(carte.querySelector('.prix').textContent.replace('€', '')); // Récupère le prix de l'article et le convertit en nombre.
        ajouterAuPanier(article, prix); // Ajoute l'article au panier.
    });
});

// Ajoute un écouteur d'événement de clic à l'icône du panier.
document.getElementById('icone-panier').addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut (comme la navigation).
    const panierContainer = document.querySelector('.panier-container'); // Sélectionne le conteneur du panier.
    panierContainer.classList.toggle('visible'); // Bascule la classe 'visible' pour afficher/masquer le panier.
});

// Tableau d'objets représentant les produits
const produits = {
    entrees: [
        { nom: "Crevettes au satay", img: "img/crevete.jfif", prix: "7.90€" },
        { nom: "Salade de concombre thaï", img: "img/concombre.jfif", prix: "4.90€" },
        { nom: "Rouleau de printemps", img: "img/rouleau-de-printemps.jpg", prix: "5.90€" },
        { nom: "Soupe thaï au lait de coco", img: "img/soupe-thai-au-lait-de-coco-1.jpeg", prix: "4.90€" }
    ],
    plats: [
        { nom: "Padthaï", img: "img/Authentic-Pad-Thai_square-1908.jpg", prix: "9.90€" },
        { nom: "Curry Massaman", img: "img/Chicken Massaman Curry cc.jpg", prix: "9.90€" },
        { nom: "Curry Rouge", img: "img/thai-red-curry-34c1e6d.webp", prix: "9.90€" },
        { nom: "Curry vert", img: "img/green-curry-new-sq-2.jpg", prix: "9.90€" }
    ],
    desserts: [
        { nom: "Riz, mangue, lait de coco", img: "img/Thai-Mango-Sticky-Rice3.jpg", prix: "4.90€" },
        { nom: "Pancake à la banane", img: "img/1599389045_82344.jpg", prix: "3.90€" },
        { nom: "Banane au lait de coco", img: "img/i1633-banane-au-lait-de-coco-a-ma-facon.webp", prix: "3.90€" },
        { nom: "Salade de fruits, lait de coco", img: "img/thai-ruam-mit-dessert-768x1024.webp", prix: "3.90€" }
    ]
};