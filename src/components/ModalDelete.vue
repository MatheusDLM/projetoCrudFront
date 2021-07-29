<template>
  <div class="deleteModal">
    <div class="novoModal">
      <div class="container">
          <div>
              <a @click="$emit('close')" class="close">x</a>
            <h2><i class="small material-icons">warning</i> Deseja mesmo excluir <strong>{{produto.nome}} ?</strong></h2> 
            <div class="buttonModal">
                    <b-button @click="$emit('close')" variant="danger">Cancelar</b-button>
                    <b-button variant="success" @click="excluir(produto.id)">Salvar</b-button>
                </div>          
          </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import api from '../services/api';

export default {
    name: 'EditModal',
    props: ['produto'], //Importa o produto da página home
    methods: {

         excluir(produto){  //Metodo para deletar o produto
            api.delete(`/${produto}`)
        }
    }

}
</script>

<style scoped>
.novoModal{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }

    .novoModal .container{
        display: flex;
        flex-direction: column;
        align-items: top;
        justify-content: top;
        position: fixed;
        max-width: 500px;
        top: 30vh;
        bottom: 30vh;
        left: 0;
        right: 0;
        margin: 0 auto;
        padding: 2rem;
        border-radius: 4px;
        background-color: #FFF;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
        overflow: auto;
    }

    .formModal{
        display: flex;
        flex-direction: column;
    }

    .close{
        cursor: pointer;
        padding: 4px 15px;
        color: black;
        position: absolute;
        top: 10px;
        right: 20px;
        text-decoration: none;
    }

    .buttonModal{
  
        color: black;
        position: absolute;
        bottom: 50px;
        right: 50px  
    }

    .buttonModal button{
        cursor: pointer;
         padding: 4px 15px;
         margin: auto 10px;
       
    }

</style>