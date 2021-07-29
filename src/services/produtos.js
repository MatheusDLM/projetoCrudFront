import { http } from './config'

export default {
    listar:() => { //metodo para buscar a página home do produto
        return http.get('')
    },

    apagar:(produto) => { //metodo para deletar o produto
        return http.delete('', {data: produto})
    }

    
}