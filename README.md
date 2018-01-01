# ChatNodeJS

## _Description_

###Objective Créer un chat d'équipe "Slack-like" en temps réel.

Cas d'usages utilisateur

[X] Un utilisateur doit être capable de se connecter à l'aide de Facebook, Twitter et d'un compte Google. => OK sur Twitter

[] Si un utilisateur se connecte avec Facebook, il devra choisir un pseudo d'usage.

[X] Un utilisateur doit pouvoir créer/rejoindre/quitter un ou plusieurs canaux.

[X] Un utilisateur doit pouvoir parler au sein de l'un des canaux et en utilisant du texte normal

[] ou la syntaxe Markdown mettre du gras, italique etc (Utiliser une bibliothèque à cet effet).

[] Un utilisateur peut être admin ou simple user sur le canal.

[] Un utlisateur peut laisser une "emotion" sur un message d'un utilisateur.


Cas d'usages administrateur

[X] Un administrateur peut supprimer, censurer, kicker, bannir et transformer un utilisateur en admin. - Un message censuré ou supprimé, devra être affiché comme tel

Cas d'usages superadmin

[] Un superadmin peut supprimer un canal même s'il n'est pas admin de celui-ci.

BONUS

[X] Un effort a été fait sur l'UI => FontAwesome + Bootstrap

[] Il est possible de définir un photo de profil pour l'user

[X] Il est possible d'uploader des fichiers ou d'embed des vidéos YouTube => YouTube OK

[X] Votre application est responsive.

NOTE :

[X] Votre application doit conserver les sessions après redémarrage et a travers les clusters. Car, oui votre application doit utiliser les clusters !!