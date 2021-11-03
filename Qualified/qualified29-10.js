//2
-- Adicione sua consulta SQL aqui
SELECT
  DATE(criado_em) dia,
  descricao,
  COUNT(*) contagem
FROM eventos
WHERE nome = 'treinado'
GROUP BY dia, descricao
ORDER BY dia;

//3
-- Create your SELECT statement here
SELECT
  p.id,
  p.name,
  COUNT(*) toy_count
FROM people p
INNER JOIN toys t
  ON t.people_id = p.id
GROUP BY p.id, p.name;