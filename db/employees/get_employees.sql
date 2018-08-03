SELECT * 
FROM users
join employees on employees.user_id = users.id
join employer on employer.employer_id = employees.employer_id
where employer.employer_id = 1 