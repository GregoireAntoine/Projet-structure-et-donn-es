
/*procédure commande*/
CREATE PROCEDURE "DBA"."Commande"(name char(255), prename char(255), adresse char(255), painchoco int, crois int, pipi int, couqueraisins int, brioche int, av int )
/* RESULT( nom_colonne type_colonne, ... ) */
BEGIN
insert into enregistrement ( nom, prenom,addresse) values (name,prename, adresse);
insert into commande (pain ,croi ,pis , couque, brio  ) values (painchoco,crois,pipi,couqueraisins,brioche);
insert into avis (avis) values (av);
END




/*web service*/

create service "commander"
type 'JSON'
authorization OFF 
user "DBA"
url on 
methods 'GET'
as call dba.Commande(:nom,:prenom,:adresse,:pain,:croi,:pis,:couque,:brioche,:satis);