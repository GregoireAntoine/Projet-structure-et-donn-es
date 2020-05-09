/*procédure panier*/

CREATE PROCEDURE "DBA"."panier"( nam char(255), prenam char(255) )
result (PainChocolat char(25),Croissant char(25),Pistolet char(25), CouqueRaisins char(25), Brioche char(25))
BEGIN
    call sa_set_http_header('Content-type','application:json; charset=utf-8');
	select sum(pain),sum(croi),sum(pis),sum(couque),sum(brio) from commande natural join enregistrement as e 
    where e.nom=nam and e.prenom=prenam;
END









/*web service panier*/ 

create service "panier"
type 'JSON'
authorization OFF 
user "DBA"
url on 
methods 'GET'
as call DBA.panier(:nam,:prenam);