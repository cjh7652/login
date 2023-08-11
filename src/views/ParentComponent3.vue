<template lang="">
    <ChildCompoent3  @send-message="sendMessage" ref="child_component" /> 
    <button type='button' @click="changeChildData">change child Data</button>
</template>
<script>
import ChildCompoent3 from './ChildComponent3'
export default {
    components: {ChildCompoent3},
    methods:{
        changeChildData(){
            this.$refs.child_component.msg='부모컴포넌트가 변경한 데이터';
        }
    }
}
</script>
<style lang="">
    
</style>