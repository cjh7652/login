<template lang="">
    <h2>{{title}}</h2>

</template>
<script>

import {inject} from 'vue';
export default {
    setup(){
        const title = inject('title');
        return {
            title
        }
    }

}
</script>
<style lang="">
    
</style>