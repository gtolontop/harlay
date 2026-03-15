function updateTotal() {
    // prendre valeur quantité

    const qIron = Number(document.getElementById('qiron').innerHTML);
    const qStreet = Number(document.getElementById('qstreet').innerHTML);
    const qRoad = Number(document.getElementById('qroad').innerHTML);
    const qTroll = Number(document.getElementById('qtroll').innerHTML);

    // calcul le total 
    const total = qIron * 12000 + qStreet * 15000 + qRoad * 21000 + qTroll * 99999;

    //  affichier le total bas de page
    document.getElementById('total').innerHTML = total;
}


// fonctions ajouter/ enlever et tout et tout
function addIron(val) {
    let vi_iron = Number(document.getElementById('qiron').innerHTML);
    let vf_iron = vi_iron + val;
    if (vf_iron >= 0) {
        document.getElementById('qiron').innerHTML = vf_iron;
        updateTotal();
    }
}

function addStreet(val) {
    let vi_street = Number(document.getElementById('qstreet').innerHTML);
    let vf_street = vi_street + val;
    if (vf_street >= 0) {
        document.getElementById('qstreet').innerHTML = vf_street;
        updateTotal();
    }
}

function addRoad(val) {
    let vi_road = Number(document.getElementById('qroad').innerHTML);
    let vf_road = vi_road + val;
    if (vf_road >= 0) {
        document.getElementById('qroad').innerHTML = vf_road;
        updateTotal();
    }
}

function addTroll(val) {
    let vi_troll = Number(document.getElementById('qtroll').innerHTML);
    let vf_troll = vi_troll + val;
    if (vf_troll >= 0) {
        document.getElementById('qtroll').innerHTML = vf_troll;
        updateTotal();
    }
}

// fonction d'annulation  (fonctionel mtn)
function annuler() {
    document.getElementById('qtroll').innerHTML = 0;
    document.getElementById('qroad').innerHTML = 0;
    document.getElementById('qstreet').innerHTML = 0;
    document.getElementById('qiron').innerHTML = 0;
    updateTotal()
}


// tentative de payement
function payer() {

    const qIron = Number(document.getElementById('qiron').innerHTML);
    const qStreet = Number(document.getElementById('qstreet').innerHTML);
    const qRoad = Number(document.getElementById('qroad').innerHTML);
    const qTroll = Number(document.getElementById('qtroll').innerHTML);

    // calcul le total
    const total = qIron * 12000 + qStreet * 15000 + qRoad * 21000 + qTroll * 99999;

    if (total > 0) {

        // 10% de chance de tomber sur la variante spéciale
        if (Math.random() < 0.90) {
            alert("🎰 JACKPOT... non en fait non");
            alert("On a failli accepter. On a ri. On a refusé.");
            alert("Votre banque a appelé. Elle pleure.");
            alert("Votre conseiller financier démissionne en direct 📞");
            alert("La moto vous regarde avec pitié 🏍️");
            alert("Elle repart en stock. Honte à vous.");
            alert("Un pigeon dehors vous a vu faire ça. Il est déçu.");
            alert("Vous avez le droit à un sticker de consolation 🥲");
            alert("Le sticker c'était un mensonge aussi.");
            alert("❌ Paiement refusé. Comme votre dignité.");
        } else {
            alert("❌ Paiement refusé");
            alert("Vous êtes à découvert 💸");
            alert("c'est un peu la honte");
            alert("allez sur le 100-yen-shop plutôt");
            alert("va falloir arrêter d'acheter n'importe quoi");
            alert("l'ursaf prélève actuellement vos meubles");
        }
    }
}