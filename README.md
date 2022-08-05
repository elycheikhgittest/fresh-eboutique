# fresh project

### commands

```
export SECRET_KEY=SuperDuperSecret 
export DATABASE_URL=postgres://postgres:postgresmaster@localhost:5432/eboutique 
deno task start
```

```
export SECRET_KEY=SuperDuperSecret 
export DATABASE_URL=postgres://postgres:postgresmaster@localhost:5432/eboutique 
deno run --allow-read --allow-env --allow-net  cli/create_table.cli.ts
```

```
export SECRET_KEY=SuperDuperSecret 
export DATABASE_URL=postgres://postgres:postgresmaster@localhost:5432/eboutique 
deno run --allow-read --allow-env --allow-net  cli/drop_tables.cli.ts
```

```
export SECRET_KEY=SuperDuperSecret 
export DATABASE_URL=postgres://postgres:postgresmaster@localhost:5432/eboutique 
deno run --allow-read --allow-env --allow-net cli/add.cli.ts
```

```
export SECRET_KEY=SuperDuperSecret 
export DATABASE_URL=postgres://postgres:postgresmaster@localhost:5432/eboutique 
deno run --allow-read --allow-env --allow-net db_services/artilces/getone.cli.ts
```

```
export SECRET_KEY=SuperDuperSecret 
export DATABASE_URL=postgres://postgres:postgresmaster@localhost:5432/eboutique 
deno run --allow-read --allow-env --allow-net db_services/users/add.cli.ts
```

# after changes in test/dev mode

```
export SECRET_KEY=SuperDuperSecret 
export DATABASE_URL=postgres://postgres:postgresmaster@localhost:5432/eboutique 
deno run --allow-read --allow-env --allow-net  cli/create_table.cli.ts
deno run --allow-read --allow-env --allow-net  cli/drop.cli.ts articles subcategories categories lieux tokens users 
deno run --allow-read --allow-env --allow-net  cli/create_table.cli.ts
deno run --allow-read --allow-env --allow-net db_services/users/add.cli.ts 22001101 1

deno run --allow-read --allow-env --allow-net  db_services/categories/add.cli.ts  بيع
deno run --allow-read --allow-env --allow-net  db_services/categories/add.cli.ts  ايجار
deno run --allow-read --allow-env --allow-net  db_services/categories/add.cli.ts  طلب

deno run --allow-read --allow-env --allow-net db_services/subcategories/add.cli.ts 1 maison


deno run --allow-read --allow-env --allow-net cli/add.cli.ts
```

# test new create tables way

```
export SECRET_KEY=SuperDuperSecret 
export DATABASE_URL=postgres://postgres:postgresmaster@localhost:5432/eboutique 
deno run --allow-read --allow-env --allow-net  cli/create_table.cli.ts
```
