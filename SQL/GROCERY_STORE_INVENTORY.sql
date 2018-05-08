SELECT id, name, stock FROM products
WHERE stock < 3
AND producent = 'CompanyA'
ORDER BY id
