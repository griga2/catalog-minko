import { defineStore } from 'pinia'
import { reactive, ref} from 'vue';

// import ref from '@ref'
export const useUserStore = defineStore('userStore', () => {

    const products = reactive([
      {
        name:'Grey Hunters',
        price:300,
      },
      {
        name:'Grey Hunters',
        price:200,
      },{
        name:'Grey Hunters',
        price:200,
      },
      {
        name:'Grey Hunters',
        price:200,
      },{
        name:'Grey Hunters',
        price:200,
      },
      {
        name:'Grey Hunters',
        price:200,
      },
      {
        name:'Grey Hunters',
        price:200,
      },
      {
        name:'Grey Hunters',
        price:200,
      },{
        name:'Grey Hunters',
        price:200,
      },
      {
        name:'Grey Hunters',
        price:200,
      },{
        name:'Grey Hunters',
        price:200,
      },
      {
        name:'Grey Hunters',
        price:200,
      },
    ]);
    
    const current_product = ref('');

    const categories = reactive([
      {name:"Space Wolves"},
      {name:"Blood Angels"}
    ]);

    return {
        products,
        categories,
        current_product
    }
})