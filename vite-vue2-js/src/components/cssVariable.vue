<template>
  <div>
    <div class="one">1:</div>
   
  </div>
</template>

<script>
export default {

}
</script>
<style>
:root {
  --w: 456px;
  --a: 123px;
  --b: red;
}

@media screen and (min-width: 768px) {
  :root {
  --b: blue;
  }
}
</style>
<style scoped>

.one {
  width: var(--w);
  height: var(--a);
  border: 1px solid  var(--b);
}
 
</style>