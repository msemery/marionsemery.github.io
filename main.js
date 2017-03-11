$(document).ready(function(){
    // on crée une fonction scroll qui prend deux paramètres :
    // le lien sur lequel on clique (lien), et sa cible (target)
    var scroll = function(lien, cible) {
    // on demande faire un truc quand on clique sur le lien
        $(lien).click(function(){
    // on dit qu'on veut animer notre html et notre body
            $('html, body').animate({
    // on décrit l'animation souhaitée : ici un scroll jusqu'à la coordonnée top de notre cible
                scrollTop: $(cible).offset().top
    //on précise la durée de l'animation en millisecondes (tu peux la changer si tu veux, j'ai mis au pif)
            }, 800);
        });
    }

// on a créé la fonctin, en gros un manuel d'instruction pour js qui dit "prend ceci et fait cela"
// mais maintenant il faut lui dire d'appliquer la fonction à quelque chose, sinon il va rien faire
// donc il faut executer la fonction en remplaçant les paramètres définit en ligne 4
// par les elements que l'on veut affecter
    scroll("#xp-lien", "#XP");
    scroll("#fo-lien", "#FO");
    scroll("#co-lien", "#CO");
    scroll("#pa-lien", "#PA");
    scroll("#avatar-lien", "#avatar");
})
