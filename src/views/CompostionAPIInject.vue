<template lang="">
 
    <CompositionAPIInject1 />
</template>
<script>
import CompositionAPIInject1 from './CompositionAPIInject1'
import {inject} from 'vue';
export default {
    components: {
        CompositionAPIInject1
    },
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