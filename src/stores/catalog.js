import { defineStore } from 'pinia'
import { reactive, ref} from 'vue';

// import ref from '@ref'
export const useUserStore = defineStore('userStore', () => {

    const products = reactive([
      {
        name:'Grey Hanters',
        price:300,
      },
      {
        name:'Grey Hanters',
        price:200,
      },{
        name:'Grey Hanters',
        price:200,
      },
      {
        name:'Grey Hanters',
        price:200,
      },{
        name:'Grey Hanters',
        price:200,
      },
      {
        name:'Grey Hanters',
        price:200,
      },
      {
        name:'Grey Hanters',
        price:200,
      },
      {
        name:'Grey Hanters',
        price:200,
      },{
        name:'Grey Hanters',
        price:200,
      },
      {
        name:'Grey Hanters',
        price:200,
      },{
        name:'Grey Hanters',
        price:200,
      },
      {
        name:'Grey Hanters',
        price:200,
      },
    ]);
    
    const current_product = ref('');

    const categories = reactive([
      {name:"Space Wolwes"},
      {name:"Blood Angel"}
    ]);

    return {
        products,
        categories,
        current_product
    }
})