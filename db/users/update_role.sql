UPDATE users
SET role = $1
where id = $2
returning *