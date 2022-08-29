<script setup>
  import { ref , onMounted} from 'vue'
    onMounted(()=>{
      console.log(111,this)
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
  