import { defineStore } from 'pinia'
import { reactive, ref} from 'vue';

// import ref from '@ref'
export const useUserStore = defineStore('userStore', () => {

    const products = reactive([
      {
        name:'Grey Hunters',
        price:200,
        id:"1",
      },
      {
        name:'Grey Hunters',
        price:200,
      id:"2",
      },{
        name:'Grey Hunters',
        price:200,
id:"3",
      },
      {
        name:'Grey Hunters',
        price:200,
id:"4",
      },{
        name:'Grey Hunters',
        price:200,
id:"5",
      },
      {
        name:'Grey Hunters',
        price:200,
id:"6",
      },
      {
        name:'Grey Hunters',
        price:200,
id:"8",
      },
      {
        name:'Grey Hunters',
        price:200,
id:"9",
      },{
        name:'Grey Hunters',
        price:200,
id:"10",
      },
      {
        name:'Grey Hunters',
        price:200,
id:"11",
      },{
        name:'Grey Hunters',
        price:200,
id:"12",
      },
      {
        name:'Grey Hunters',
        price:200,
id:"13",
      },
      {
        name:'Grey Hunters',
        price:300,
      },
      {
        name:'Grey Hunters',
        price:200,
id:"14",
      },{
        name:'Grey Hunters',
        price:200,
id:"15",
      },
      {
        name:'Grey Hunters',
        price:200,
id:"16",
      },{
        name:'Grey Hunters',
        price:200,
id:"",
      },
      {
        name:'Grey Hunters',
        price:200,
id:"17",
      },
      {
        name:'Grey Hunters',
        price:200,
id:"18",
      },
      {
        name:'Grey Hunters',
        price:200,
id:"19",
      },{
        name:'Grey Hunters',
        price:200,
    id:"20",
      }
    ]);
    
    const current_product = ref('2');

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