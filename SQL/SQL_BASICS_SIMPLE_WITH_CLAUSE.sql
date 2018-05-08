WITH special_sales AS
  (select * from sales where price > 90)

  select id, name from departments

WHERE id IN (SELECT department_id FROM special_sales)
