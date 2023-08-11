<template lang="">
    <ChildComponet @send-message="sendMessage" ref="child_component" />
</template>
<script>
import ChildComponet from './ChildComponet2'
export default {
    components: {ChildComponet},
    mounted() {
        this.$refs.child_component.callFromParent()
    },
}
</script>
<style lang="">
    
</style>