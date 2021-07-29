<template>
 <div class="novoModal">
      <div class="container">
          <div>
              <a @click="$emit('close')" class="close">x</a>
            <h2>Detalhe do produto</h2>
            
          </div>
          <form @submit.prevent="editProduct" class="formModal">
            <span>Nome</span>
            <input type="text" placeholder="nome" v-model="produto.nome" required>
            <span>Descrição</span>
            <textarea name="textNovo" id="textNovo" cols="30" rows="5" v-model="produto.descricao" required></textarea>
            <span>Status</span>
                <dl>
                    <dd>
                        <select id="selectStatus" v-model="produto.status" size="1" required>
                            <option value="Em estoque">Em estoque</option>
                            <option value="Sem estoque">Sem estoque</option>
                        </select>
                    </dd>
                </dl>       
                <div class="categoria">
                    <span>Categoria</span>
                    <div class="radioTop">
                        <dl>
                            <dd>
                                <input type="radio" v-model="produto.categoria" class="inputTop" value="Categoria 1" checked>Categoria 1
                                <input type="radio" v-model="produto.categoria"  class="inputTop" value="Categoria 2">Categoria 2
                            </dd>
                        </dl>
                    </div>

                    <div class="radioBot">
                        <dl>
                            <dd>
                                <input type="radio" v-model="produto.categoria" class="inputBot" value="Categoria 3">Categoria 3
                                <input type="radio" v-model="produto.categoria" class="inputBot" value="Categoria 4">Categoria 4
                            </dd>
                        </dl>
                    </div>             
            </div>
                <div>
                    <span id="precoSpan" required>Preço</span>
                    <span id="qtdSpan" required>quantidade</span>
                </div>
                <div>
                    <input id="preco" v-model="produto.preco" type="number">
                    <input id="qtd" v-model="produto.quantidade" type="number">
                </div>
                <div class="buttonModal">
                    <b-button @click="$emit('close')" variant="danger">Cancelar</b-button>
                    <b-button variant="success" type="submit">Salvar</b-button>
                </div> 
          </form>        
      </div>
  </div>
</template>

<script>
import api from '../services/api';
export default {
    name: 'EditModal',
    props: ['produto'],
    methods: {

        editProduct() { //Metodo para editar produto
            if(this.input === ''){ //Se os inputs forem vazios, ele não retorna nada
               return;
            } 
            api.put(`/${this.produto.id}`,this.produto) //Altera produto antigo pelo novo
            .then(() => (
                alert('Editado com sucesso')                        
            ))
            .catch(err => console.log(err))
    
        }
    }

}
</script>

<style>

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
        max-width: 600px;
        top: 4vh;
        bottom: 4vh;
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

    #selectStatus {
        width: 30%;
    }

    .radioTop {
        margin: 7px 50px 0 0;
    }

    .radioBot {
        margin: 7px 50px 0 0;
    }

    .inputTop{
        margin: 10px 5px;
    }

    .inputBot{
    margin: 10px 5px;  
    }

    #preco, #qtd {
      width: 30%;
    }

    #precoSpan {
      margin: 0px 200px 0 0;
    }

    #qtd {       
     margin: 0px 0 0 80px; 
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