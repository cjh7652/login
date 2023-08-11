<template lang="">
    <div>
        <CompostionAPIInject /> 
    </div>
</template>x
<script>
import {provide} from 'vue';
import CompostionAPIInject from './CompostionAPIInject';

export default {
        components : {
            CompostionAPIInject
        },
        setup() {
            provide('title', '신철이 졸지마')
        }
}
</script>
<style lang="">
    
</style>