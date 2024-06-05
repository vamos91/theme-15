
# Exercices SQL

> Accès phpmyadmin (jeu de données)
> url: https://pma-sandbox.alt-tools.tech/
> user: theme15
> password: 


1. Sélectionnez tous les noms des différentes recettes :

```sql
SELECT name FROM recipes;
```

2. Sélectionnez le prénom, la spécialité de tous les chefs :

```sql
SELECT firstname, speciality FROM chief;
```

3. Sélectionnez le nom de toutes les recettes ayant un temps de préparation inférieur à 30 minutes :

```sql
SELECT name FROM recipes WHERE preparation_time < 30;
```

4. Sélectionnez le nom d'une recette spécifique et tous ses ingrédients :

```sql
SELECT r.name AS recipe_name, i.name AS ingredient_name, rhi.quantity
FROM recipes r
JOIN recipes_has_ingredients rhi ON r.id = rhi.recipes_id
JOIN ingredients i ON rhi.ingredients_id = i.id
WHERE r.id = 2;
```

5. Sélectionnez le nom, le nombre de personnes des recettes et les ingrédients de tous les chefs ayant une spécialité spécifique : (par exemple, "Cuisine italienne") :

```sql
SELECT c.firstname AS chef_name, r.name AS recipe_name, r.nb_persons AS number_of_persons, i.name AS ingredient_name, rhi.quantity AS ingredient_quantity
FROM chief c
JOIN recipes r ON c.id = r.chief_id
JOIN recipes_has_ingredients rhi ON r.id = rhi.recipes_id
JOIN ingredients i ON rhi.ingredients_id = i.id
WHERE c.speciality = 'Cuisine Italienne'
ORDER BY r.name ASC;
```

6. Sélectionnez le nom de tous les chefs cuisinant des recettes composées d'un ingrédient spécifique (par exemple, "Tomate") :

```sql
SELECT c.firstname AS chef_name
FROM chief c
JOIN recipes r ON c.id = r.chief_id
JOIN recipes_has_ingredients rhi ON r.id = rhi.recipes_id
JOIN ingredients i ON rhi.ingredients_id = i.id
WHERE i.id = 1;
```
