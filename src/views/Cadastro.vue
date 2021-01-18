<template>
   <div>
      <Title msg="Cadastro" />
      
      <div class="form container">
      
      <form action="" id="formCadastro">
         <label for="name">Nome</label>
         <input type="text" name="name" required>

         <label for="email">E-mail</label>
         <input type="email" name="email" required>

         <label for="cpf">CPF</label>
         <input type="number" name="cpf" placeholder="111.111.111.01" required>

         <div class="group-label">
      
            <div class="group-label-box">
               <label for="end">Endereço</label>
               <input type="text" placeholder="Rua, Número e Bairro" required>

                <label for="cep">CEP</label>
               <input type="text" placeholder="22.222.000" required>
            </div>

            <div class="group-label-box">
               <label for="state">Estado</label>
               <select name="state" id="state">
                  <option value="0">Selecione o Estado</option>
                  <option value="1">Minas Gerais</option>
                  <option value="2">São Paulo</option>
                  <option value="3">Rio de Janeiro</option>
               </select>

               <label for="city">Cidade</label>
               <select name="city" id="city">
                  <option value="0" id="select">Selecione a Cidade</option>
                  <option value="1">Belo Horizonte</option>
                  <option value="2">São Paulo</option>
                  <option value="3">Rio de Janeiro</option>
               </select>
            </div>
            
         </div>

         <h2>Forma de pagamento</h2>
         <hr>

         <div class="radio">
            <input type="radio" name="optionsRadios" id="options1" value="options1" checked>
            <label for="options1" class="radio">Cartão de Crédito</label>

            <input type="radio" name="optionsRadios" id="options2" value="options2">
            <label for="options2" class="radio">Boleto Bancário</label>
         </div>

         <div class="group-label">

            <div class="group-label-box">
               <label for="nomeDoCartao">Nome do Cartão</label>
               <input type="text" placeholder="Nome Impresso no cartão" required>
               <label for="numeroDoCartao">Número do Cartão</label>
               <input type="number" placeholder="5555 5555 5555 5555" required>
            </div>

            <div class="group-label-box">
               <label for="dataDeExpiracao">Data de Expiração</label>
               <div class="expiracao">
                  <select name="mes" id="mes">
                     <option value="">Mês</option>
                     <option value="jan">Janeiro</option>
                     <option value="fev">Fervereiro</option>
                     <option value="mar">Março</option>
                     <option value="maio">Maio</option>
                  </select>
                  <select name="ano" id="ano">
                     <option value="">Ano</option>
                     <option value="">2000</option>
                     <option value="">2021</option>
                  </select>
               </div>
                  <label for="codSeguranca">Código de Segurança</label>
                  <input type="number" placeholder="XXX">
            </div>
      
         </div>

         <hr>
         <p>Seu cartão será debitado em R$ 49,00</p>
         <a href="#" class="button">realizar matrícula</a>
         <small>Informações seguras e criptografadas</small>
      </form>
   </div>

   </div>
</template>

<script>
import Title from '../components/Title'
export default {
  name: 'Cadastro',
  components: { Title }
}
</script>

<style scoped>
 
   .form {
      width: 90%;
      margin: auto;
   }

   #formCadastro {
      display: flex;
      flex-direction: column;
   }

   .group-label {
      width: 100%;
      display: flex;
      flex-direction: column;
   }

   .group-label-box {
      display: flex;
      flex-direction: column;
   }

   .expiracao {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    #mes, #ano {
       width: 90%;
    }
    #mes, #ano input, select {
       margin-right: 20px;
    }

   input, select {
      background: var(--input-color);
      font-family: 'Nunito', sans-serif;
      font-weight: bold;
      color: var(--placeholder-color);
      border-radius: 5px;
      border: 0;
      outline: none;
      box-shadow: 0px 2px 2px var(--input-shadow-color);
      padding: 10px;
      margin: 10px 0;
      box-sizing: border-box;
   }

   label:first-child {
      margin-top: 30px;
   }

   label {
      font-weight: bold;
      color: var(--label-color);
   }

   ::placeholder {
      font-size: 14px;
      font-family: 'Nunito', sans-serif;
      font-weight: bold;
      color: var(--placeholder-color);
   }

   h2 {
      color: var(--color-primary);
      font-size: 16px;
      font-weight: bold;
      margin-top: 20px;
   }

   p, small {
      color: var(--color-title);
      font-weight: bold;
      font-size: 14px;
      margin-top: 30px;
   }

   small {
      font-size: 11px;
      margin-top: 15px;

   }

  #options2 {
     margin-left: 20px;
  }

  .radio {
     padding-left: 10px;
  }

  .button {
     background: var(--color-primary);
     color: var(--color);
     text-transform: uppercase;
     width: 200px;
     padding: 15px;
     border-radius: 4px;
     font-size: 14px;
     font-weight: bold;
     text-align: center;
     margin-top: 15px;
  }

   @media screen and (min-width: 768px) {
      
      #formCadastro {
         max-width: 768px;
         margin: auto;
      }
      .group-label {
         flex-direction: row;
         align-items: center;
         gap: 20px;
      }
      .group-label-box {
         width: 100%;         
      }
   }


</style>