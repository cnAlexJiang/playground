<script setup>
  import { useRoute, useRouter } from 'vue-router'
  import { ref , onMounted} from 'vue'
    onMounted(()=>{
    const route = useRoute();
    const router = useRouter()
    console.log(111,this, route, router)

    })


  </script>
  
  <template>
   <div>
    Component 1
   </div>
   
  </template>
  
  <style scoped>
  .read-the-docs {
    color: #888;
  }
  </style>
  