# NodeJs uploads

## Iniciar o prisma

```bash
# Configura o postgres como padrão
yarn prisma init
```

## Após subir o container do postgres, testa a conexão

```bash
# Conecta no banco de dados upload
psql -h localhost -U uploads -d uploads

# Lista os dados da tabela files
uploads=# select * from files

# \l -> lista os bancos de dados
# \q -> Para sair
```

## Roda a migrate do Prisma

```bash
# Roda a migrate no prisma
yarn prisma migrate dev

# Alica a migração no banco de dados
yarn prisma migrate deploy

# Visualia a tabela no Prisma
yarn prisma studio
```
