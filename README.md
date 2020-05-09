
PROJET 1T FINAL

Présentation de l'équipe : 
- Grégoire Antoine 

Description du projet :
Ce site web est un site permettant de prendre commande chez un boulanger qui livre uniquement ces clients et qui no possède pas de magasins.
Il y a plusieurs parties au site. 
Premièrement une page d'acceuil qui explique en quelques mots ce que fait le site et dans quel but.
Deuxièmement, une page de gamme montrant à tout ceux qui le voudront les diffèrentes viennoiserie qui leur sont proposer.
Troisèmement, une page de commande afin d'envoyer sa commande au boulanger.
et enfin un bouton qui lorsque l'on clique dessuss- demandera d'insérer le nom et prénom et vous donnera la commande passée auparavant.

Aspects implémentés
pour la partie front end nous avons mis d'abrd en place une page html reprenant tous les diffèrents visuels que nous voulions.
ensuite Nous avons mis en pkace le javascript afin de la rendre dynamique lors d'un clcik sur un bouton. Par exemple lorsque on clique sur 
le bouton "notre gamme" le visuel de la page change et affiche dès lors une liste des produits proposer. Ou bien si on clique sur commande 
on peut voir un formulaire dont les produits proposer sont directement envoyé depuis une base de données ainsi que leur prix.
Enfin si on clique sur ma commande cela activera un prompt qui demandera à l'utilisateur son nom et prénom afin de pouvoir voir sa cammonde passée.

Aussi dans le javascript nous avons du aussi lui permttre d'intergair grase au json et ajax avec la db. Mais aussi interagir avec le css.

nous avons aussi i-mis en place une page de css afin de rendre le site plus ageréable pour les yeux.

Au niveau du back end nous avons mis en place 3 services webe t 3 procédures pour l'api rest et aussi 4 procédures et 4 services web pour Les donées de base tels que le html, js, css et l'image
une fonction pour le chemin ainsi que les paramètre du serveur web
en plus d'un service web 
dans les api rest nous trouvont un service et une procédure permettant de transmettre à la page web les nom et prix des produits pour le formulaire de commande 
nous avons aussi une prodédure et une fonction qui permet de recevoir la commande du client et de l'enregistrer dans la base de donnée
mais aussi une procédure et un service web afin de récuperer le nom de l'utiliasteur et de lui renvoyer sa commande.

pour le reste des choses implémenté en back end il y a 
un service web et une procédure pour envoyé l'html
un service web et une procédure pour envoyé le javascript
un service web et une procédure  pour envoyé le css
un service web et une procédure pour envoyé l'image
une fonction pour récuperer le chemin 
et les paramètres du serveur web 

tout a été fait par mes soins

DETAIL API REST 

Pour le web service page le format renvoyé est raw le paramètre est l'url et le end point est lorsque le parametre est renvoyé
Pour le web service css le format renvoyé est raw le paramètre est l'url et le end point est lorsque le parametre est renvoyé
Pour le web service img le format renvoyé est raw le paramètre est l'url et le end point est lorsque le parametre est renvoyé
Pour le web service js le format renvoyé est raw le paramètre est l'url et le end point est lorsque le parametre est renvoyé

Pour le web service panier le format renvoyé est JSON les paramètres sont nam et prenam et le end point est lorsque la commande complète correspondant  au deux paramètres est renvoyé
Pour le web service GETproduit le format renvoyé est JSON il n'y pas de paramètres et le end point est lorsque les valeurs du tableaux sont envoyées
pour le web service commande le format renvoyé est en JSON les paramètres sont nom, prenom, adresse, pain, croi, pis, couque, brioche, satis le end poitn est lorsque la commande est enregistrer dans la table


DETAIL DB

table produits 2 champs : prod pour les produits propsé et prix pôur leur prix 
table avis 2 champs : avis pour la valeur de satisfaction de 0 à 10 et id pour voir à qui correspond cette avis
table commande 6 champs : id pour savoir de quelle commande il s'agit, pain pour le nombre de pain au chocolat, croi pour le nombre de croissant, pis pour le nombre de croissant, couque pour le nombre de couque au raisins et brio pour le nombre de brioche
table enregistrement 4 champs : id pour savoir de quelle commande il s'agit, prenom pour avoir le prenom du client, nom pour avoir le nom du client et addresse pour avoir l'adresse du client 
ou les tables enregistrement, avis et commande on comme primary key id 
et ou les tables commande et avis on comme contraintes la foreign key id se referencant dans la table enregistrement colonne id
