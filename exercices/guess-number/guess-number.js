// Vérifie si l'input est valide
function isValidInput(input){
    // Retire les espaces en trop
    const sanitized = input.trim();

    // Si la chaîne est vide, l'input n'est pas valide
    if(sanitized.length === 0)
        return false;

    // Si l'input n'est pas un nombre, il n'est pas valide
    return !isNaN(input);
}

// L'option debug permet d'afficher le nombre à trouver dans le prompteur
// guessNumber retourne un booléen indiquant si l'utilisateur souhaite continuer le jeu ou pas
function guessNumber(debug){
    let number = Math.round(Math.random() * 10);
    let attempt = 5;
    let input;
    let compare;

    // L'utilisateur devine le nombre...
    do{
        // Décrémente le nombre d'essais
        attempt--;

        do{
            input = prompt(`Choisir un nombre entre 0 et 10. Essais restants: ${attempt}.${debug ? `\r\nNombre à trouver: ${number}` : ""}`);
        }
        // Si l'utilisateur cancel le prompt mais qu'il ne souhaite pas quitter, on boucle...
        while(input === null && confirm("Vous nous quittez déjà ?") === false);

        // Si l'utilisateur souhaite quitter (l'input à null a déclenché la modale de confirmation)
        if(input === null) 
            return false; // return permet de sortir de la fonction (et de la boucle en même temps)
       
        // Vérifie la validité de l'input (doit être un nombre)
        if(isValidInput(input)){
            // La différence entre l'input et le number peut être positive ou négative. Math.sign retourne 1 (positif) ou -1 (négatif)
            compare = Math.sign(Number(input) - number);
            
            if(compare === -1){
                alert("Plus grand");
            }
            else if(compare === 1){
                alert("Plus petit");
            }
        }
    }
    // Tant qu'il n'a pas trouvé le nombre exact et que le nombre d'essais est supérieur à zéro
    while(compare !== 0 && attempt > 0);

    const message = compare !== 0
    ? `Vous avez perdu! Le nombre était: ${number}.\r\nRelancer une partie ?`
    : `Vous avez gagné!\r\nRelancer une partie ?`;

    return confirm(message);
}


function start(debug){
    let playing = true;
    do{
        playing = guessNumber(debug);
    }
    while(playing);
}