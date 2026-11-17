# 📮 Postman Collection - Backend API

Esta collection do Postman contém todas as rotas da API do backend do Auth Example, com automação de autenticação e variáveis de ambiente configuradas.

## 🚀 Como usar

### 1. Importar a Collection e Environment

1. Abra o Postman
2. Clique em **Import**
3. Selecione os arquivos:
   - `backend.json` (Collection)
   - `backend-environment.json` (Environment)
4. A collection e o environment serão importados
5. **Selecione o Environment "Backend Environment"** no dropdown no canto superior direito

### 2. Variáveis de Ambiente

O Environment "Backend Environment" contém todas as variáveis de ambiente do projeto:

| Variável                | Valor Padrão                                            | Descrição                    |
| ----------------------- | ------------------------------------------------------- | ---------------------------- |
| `BASE_URL`              | `http://localhost:4500`                                 | URL base da API              |
| `PORT`                  | `4500`                                                  | Porta do servidor            |
| `JWT_SECRET`            | `secret-example`                                        | Chave secreta para JWT       |
| `DATABASE_URL`          | `postgresql://root:root@localhost:5432/auth_example_db` | URL do banco de dados        |
| `ALLOWED_ORIGINS`       | `http://localhost:3000`                                 | Origens permitidas para CORS |
| `AWS_REGION`            | _(vazio)_                                               | Região da AWS                |
| `AWS_ACCESS_KEY_ID`     | _(vazio)_                                               | Chave de acesso da AWS       |
| `AWS_SECRET_ACCESS_KEY` | _(vazio)_                                               | Chave secreta da AWS         |
| `APP_NAME`              | `Auth Example`                                          | Nome da aplicação            |
| `APP_DOMAIN`            | `example.com`                                           | Domínio da aplicação         |
| `APP_EMAIL`             | `info@example.com`                                      | Email da aplicação           |
| `NODE_VERSION`          | `22.17.1`                                               | Versão do Node.js            |

### 3. Variáveis da Collection (para testes)

| Variável           | Valor Padrão       | Descrição                         |
| ------------------ | ------------------ | --------------------------------- |
| `testName`         | `João Silva`       | Nome para testes                  |
| `testEmail`        | `joao@example.com` | Email para testes                 |
| `testDocument`     | `12345678901`      | CPF/CNPJ para testes              |
| `testPassword`     | `12345678`         | Senha para testes                 |
| `verificationCode` | `123456`           | Código de verificação             |
| `newPassword`      | `novaSenha123`     | Nova senha para reset             |
| `accessToken`      | _(automático)_     | Token JWT (salvo automaticamente) |

### 4. Fluxo de Teste Recomendado

#### 🔄 Fluxo Completo de Autenticação:

1. **📝 Sign Up** - Criar um novo usuário
2. **🔑 Sign In** - Fazer login (token será salvo automaticamente)
3. **👤 Get Me** - Verificar dados do usuário (usa token automaticamente)

#### 🔐 Fluxo de Recuperação de Senha:

1. **🔐 Forgot Password** - Solicitar código de recuperação
2. **🔓 Reset Password** - Redefinir senha com o código

#### ✅ Fluxo de Verificação de Email:

1. **🔄 Resend Verification Code** - Reenviar código de verificação
2. **✅ Confirm Email** - Confirmar email com o código

## 🤖 Automações Incluídas

### 🔑 Autenticação Automática

- O endpoint **Sign In** salva automaticamente o `accessToken` na variável da collection
- Todos os endpoints que requerem autenticação usam automaticamente o token salvo
- O token é verificado antes de cada requisição (expiração automática)

### 📝 Logs Automáticos

- Logs de todas as requisições no console do Postman
- Logs de erros de resposta automaticamente
- Verificação de expiração de token

### 🔄 Scripts Globais

- **Pré-requisição**: Verifica token expirado e log de requisições
- **Pós-resposta**: Log de status e erros

## 🛠️ Personalização

### Alterar Dados de Teste

Para usar seus próprios dados de teste, edite as variáveis da collection:

1. Clique no nome da collection
2. Vá na aba **Variables**
3. Altere os valores conforme necessário

### Alterar URL Base

Se sua API estiver rodando em outra porta ou servidor:

1. Altere a variável `BASE_URL` no Environment "Backend Environment"
2. Ou crie um novo Environment com suas próprias configurações

## 📋 Endpoints Disponíveis

### 🔒 Authentication

- `POST /api/sign-up` - Criar usuário
- `POST /api/sign-in` - Fazer login
- `POST /api/confirm-email` - Confirmar email
- `POST /api/forgot-password` - Solicitar recuperação de senha
- `POST /api/reset-password` - Redefinir senha
- `POST /api/resend-verification-code` - Reenviar código

### 👤 User

- `GET /api/me` - Dados do usuário (requer autenticação)

### 🏥 Health

- `GET /health` - Verificação de saúde da API

## 🎯 Dicas de Uso

1. **Sempre faça Sign In primeiro** para obter o token automaticamente
2. **Use o console do Postman** para ver os logs detalhados
3. **Verifique as variáveis** se algo não estiver funcionando
4. **O token é reutilizado** automaticamente em todas as requisições autenticadas

## 🐛 Troubleshooting

### Token não está sendo salvo

- Verifique se o Sign In retornou status 200
- Confira o console do Postman para mensagens de erro

### Erro 401 (Unauthorized)

- Faça Sign In novamente para obter um novo token
- Verifique se o token não expirou

### Erro de conexão

- Verifique se a API está rodando na porta correta (4500)
- Confirme se a variável `BASE_URL` no Environment está correta
- Certifique-se de que o Environment "Backend Environment" está selecionado

---

**Desenvolvido com ❤️ para facilitar os testes da API**
