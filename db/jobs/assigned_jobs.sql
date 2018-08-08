select jobs.name, jobs.address, jobs.phone, jobs.details, jobs.est_hours
from jobs 
join employees on employees.user_id = jobs.user_id
where jobs.user_id = $1