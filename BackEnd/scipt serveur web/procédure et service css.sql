/*procédure css*/
create PROCEDURE "DBA"."http_getCSS"(in url char(255))
result (css long varchar) dynamic result sets 1 
BEGIN
	call sa_set_http_header('Content-Type','text/css');
select xp_read_file(dba.getPath() || 'CSS\' || url)
END



/* service css*/
create service "css"
type 'RAW'
authorization OFF 
user "DBA"
url on 
methods 'GET'
as call dba.http_getCSS(:url);