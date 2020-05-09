/* procédure*/
CREATE  PROCEDURE "DBA"."http_getPage"(in url char (255) )
result( html long varchar) dynamic result sets 1
BEGIN
	call sa_set_http_header('Content-Type','text/html');
select xp_read_file(dba.getPath() || url ||'.html')
END



/* service web page */

create service "page"
type 'RAW'
authorization OFF 
user "DBA"
url on 
methods 'GET'
as call dba.http_getPage(:url);
