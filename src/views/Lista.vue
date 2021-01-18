<template>
   <div>
      <Title msg="Lista"/>

      <div class="form container">

         <h2>Lista de Clientes</h2>
         <hr>
         
         <form id="formLista">
            <label for="name">Nome do Cliente</label>
            <input type="text" name="name">
         </form>

         <div class="column-lista">

            <div class="column">
               <div class="column-title">
                  <h3>Nome</h3>
               </div>
               <div class="column-content">
                  <p>Example de nome</p>
                  <p>Example de nome</p>
                  <p>Example de nome</p>
                  <p>Example de nome</p>
               </div>
            </div>

            <div class="column">
               <div class="column-title">
                  <h3>Email</h3>
               </div>
               <div class="column-content">
                  <p>sample@mail.com</p>
                  <p>sample@mail.com</p>
                  <p>sample@mail.com</p>
                  <p>sample@mail.com</p>
               </div>
            </div>

            <div class="column">
               <div class="column-title">
                  <h3>Cpf</h3>
               </div>
               <div class="column-content">
                  <p>431.739.640-80</p>
                  <p>431.739.640-80</p>
                  <p>431.739.640-80</p>
                  <p>431.739.640-80</p>
               </div>
            </div>

            <div class="column">
               <div class="column-title">
                  <h3>Criado em</h3>
               </div>
               <div class="column-content">
                  <p>30-07-2020</p>
                  <p>30-07-2020</p>
                  <p>30-07-2020</p>
                  <p>30-07-2020</p>
               </div>
            </div>

         </div>
       
      </div>  
   </div>
</template>

<script>
import Title from '@/components/Title'

export default {
   name: 'Lista',
  components: { Title }
}
</script>

<style scoped>

   .form {
      width: 90%;
      margin: auto;
   }

   #formLista {
      display: flex;
      flex-direction: column;
   }

   h2 {
         color: var(--color-primary);
         font-size: 16px;
         font-weight: bold;
         margin-top: 20px;
   }

   label {
      font-weight: bold;
      color: var(--label-color);
   }

   input {
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
      height: 50px;
   }


   .column-lista {
      width: 100%;
      height: 500px;
      display: flex;
      justify-content: space-between;
      border: 1px solid var(--border-color);
      margin-top: 20px;
      margin-bottom: 80px;
   }

   .column {
      width: 100%;
      display: flex;
      flex-direction: column;
   }

   .column-title {
      padding: 10px;
      font-size: 0.8em;
      list-style: none;
      font-weight: bold;
      border-right: 1px solid var(--border-color);
   }

   .column-content {
      border-right: 1px solid var(--border-color);
   }

   .column-content p {
      display: flex;
      padding: 10px;
      font-size: 0.6em;
      font-weight: bold;
      border-bottom: 1px solid var(--border-color);
      border-top: 1px solid var(--border-color);

   }

   @media screen and (min-width: 768px) {
      .column-title {
         font-size: 1em;
      }

      .column-content p {
         font-size: 1em;
      }
   }
 
</style>