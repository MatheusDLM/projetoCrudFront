<template>
  <div id="home">
        <div class="lista-crud">          
            <div class="Pesquisa">
                <span class="spanGerenciar">Gerenciar Produtos</span> 
                <div class="Pesquisa">
                    <input class="inputPesquisa" type="text" placeholder="Nome do produto...">
                    <b-button variant="success"><i class="small material-icons">search</i>Pesquisar</b-button>
                
                </div>
            </div>
            <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                <thead>
                    <tr class="trTable">
                        <th><input type="checkbox" id="scales" name="scales"></th>
                            <th>Codigo</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Categoria</th>
                            <th>Status</th>
                            <th></th>
                            <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="produto in produtos" :key="produto.id">
                        <td><input type="checkbox" id="check" :value="produto.id" v-model="checkedId"></td>
                        <td>{{produto.id}}</td>
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.preco}}</td>
                        <td>{{ produto.categoria}}</td>
                        <td>{{ produto.status}}</td> 
                        <td class="tdButton"><b-button variant="success" @click="editModal(produto)"><i class="large material-icons">editar</i></b-button>
                        <b-button class="btnDelete" value="produtos.id" @click="deleteModal(produto)"><i class="large material-icons">delete_sweep</i></b-button></td>             
                        
                    </tr>
                </tbody>
            </table>
        </div>
        

        <editModal v-if="showEditModal" :produto="fullProduto" :listar="this.listar()" @close="editModal(produto)">
        </editModal>
        <deleteModal v-if="showDeleteModal" :produto="fullProduto" :listar="this.listar()" @close="deleteModal(produto)">
        </deleteModal>
    </div>
</template>

<script>
import Produto from '../services/produtos'
import EditModal from '../components/ModalEdit.vue'
import DeleteModal from '../components/ModalDelete.vue'

export default {
    name: 'Home',

    components:{ //Chamando os components modals
        EditModal,
        DeleteModal
    },

        mounted(){
            this.listar() //Listando produtos
        },
    
    data(){
        return{
            produto:{}, //Objeto produto
            produtos:[], //Array produto
            showEditModal: false, //Começa o modal escondido
            fullProduto: {}, //Objeto fullProduto
            showDeleteModal: false, //Caso negativo, ele não recebe nada
            checkedId: [] //Array teste
            
        }
    },

    methods:{

        async listar(){  //Chamando a lista dos produtos
            await Produto.listar().then(response => {
            this.produtos = response.data //Produtos recebe lista
        })
        },

      /*  selectCheck(){
            if(this.checkedId === null){
                return
            } else {
            console.log(this.checkedId)     Para testes futuros do check
            }
        }, */
        

        editModal(produto){     //Chamando editModal
            this.showEditModal = !this.showEditModal; //Quando clica, showEditModal recebe valor inverso

            if(this.showEditModal){ //Caso positivo ele recebe produto
                this.fullProduto = produto
            } else { //Caso negativo, ele não recebe nada
                this.fullProduto = {};
            }
        },

        deleteModal(produto){ //Chamando deleteModal
            this.showDeleteModal = !this.showDeleteModal; //Quando clica, showDeleteModal recebe valor inverso

            if(this.showDeleteModal){
                this.fullProduto = produto //Caso positivo ele deleta produto
            } else {
                this.fullProduto = {}; //Caso negativo, ele não recebe nada
            }
        },

      /*  deletaSelec(){
            api.delete(`/${this.checkedId}`) Teste nos checkbox
            this.listar();
        } */
    }
}
</script>

<style scoped>

    #home{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

    .lista-crud{
        width: 70%;
       
    }

    .Pesquisa {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        background-color: rgb(240, 240, 240);
        
    }

    .spanGerenciar{
        font-weight: bold;
        font-size: 130%;
    }

    .inputPesquisa{
        height: 33px;
        border-radius: 5px;
    }
    
    .tdButton button{
        margin: 0px 4px;
        height: 40px;
        width: 50px;
        border-radius: 15px;
    }

    .trTable{
        background-color: rgb(240, 240, 240);
    }

    .btnDelete {
        background-color: orange;
    }

    .small material-icons {
        margin: 10px;
    }


</style>