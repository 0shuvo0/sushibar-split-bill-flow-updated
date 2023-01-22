<template>
  <router-view/>
</template>

<script>
export default {
  mounted(){
    window.addEventListener('click', () => {
      if(document.querySelector('.modal-wrapper')){
        if(!document.body.classList.contains('no-scroll')){
          document.body.classList.add('no-scroll')
        }
      }else{
        if(document.body.classList.contains('no-scroll')){
          document.body.classList.remove('no-scroll')
        }
      }
    })
  }
}
</script>