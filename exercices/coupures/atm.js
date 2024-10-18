const CURRENCY_CUTS = [
    { value:.01, description: "pièce(s) de 1 centime" },
    { value:.02, description: "pièce(s) de 2 centimes" },
    { value:.05, description: "pièce(s) de 5 centimes" },
    { value:.1, description: "pièce(s) de 10 centimes" },
    { value:.2, description: "pièce(s) de 20 centimes" },
    { value:.5, description: "pièce(s) de 50 centimes" },
    { value:1, description: "pièce(s) de 1 euro" },
    { value:2, description: "pièce(s) de 2 euros" },
    { value:5, description: "billet(s) de 5 euros" },
    { value:10, description: "billet(s) de 10 euros" },
    { value:20, description: "billet(s) de 20 euros" },
    { value:50, description: "billet(s) de 50 euros" },
    { value:100, description: "billet(s) de 100 euros" },
    { value:200, description: "billet(s) de 200 euros" },
    { value:500, description: "billet(s) de 500 euros" }
];

function computeChange(remaining){
    // Afin que l'algo fonctionne de manière optimale, on trie le tableau de coupures afin d'avoir la valeur la plus grande en 1ère position (index à 0)
    const sortedCurrencyCut = CURRENCY_CUTS.sort((a, b) => a.value < b.value ? 1 : -1);

    result = [];
    for(const cut of sortedCurrencyCut){
        // Si la valeur de la coupure est plus élevée que le montant restant, on passe à l'itération suivante
        if(cut.value > remaining) continue;

        const quantity = Math.floor(remaining/cut.value);
        remaining = computeRemaining(remaining, cut.value);

        result.push({
            quantity,
            cut
        })
    }

    return result;
}

function resultToHTML(result){
    return result
        .map(v => `<li>${v.quantity} ${v.cut.description}</li>`)
        .join('');
}

// Calcul de la valeur restante. Multiplication puis division par 100 pour éviter les erreurs liées aux virgules
function computeRemaining(currentRemaining, cutValue){
    const cR = currentRemaining * 100;
    const cV = cutValue * 100;
    return (cR % cV)/100;
}

function start(){
    const value = document.getElementById('amount').value;
    const resultElm = document.getElementById('result');
    const result = computeChange(value);
    
    resultElm.innerHTML = `<ul>${resultToHTML(result)}</ul>`;
}