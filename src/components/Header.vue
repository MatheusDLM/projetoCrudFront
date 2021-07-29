<template>
  <div id="header">
      <div class="headerButton">
        <b-button variant="success" @click="NovoModal">+ Novo</b-button>
        <b-button variant="danger">Excluir</b-button>
      </div>

      <Modal v-if="showNovoModal"
      @close="NovoModal">
      </Modal>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
    name: 'Header',
    components:{
        Modal
    },
    data(){
        return{
            showNovoModal: false //Modal escondido
        }
    },
    methods:{
        NovoModal(){
            this.showNovoModal = !this.showNovoModal; //Modal recebe valor inverso
        }
    }
}
</script>

<style scoped>

    #header{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        

    }

    .headerButton{
        width: 70%;
        background-color: rgb(240, 240, 240);
        margin: 25px 0px 15px;
        padding: 15px;
       
    }

    button{
        margin: auto 10px;
    }

</style>