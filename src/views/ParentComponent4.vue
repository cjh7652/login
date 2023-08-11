<template lang="">
    <ChildComponent4 @send-message="sendMessage" />
</template>
<script>
import ChildComponent4 from './ChildComponent4';
export default {
    components: {ChildComponent4},
    methods : {
        sendMessage(data){
            console.log(data)
        }
    }
}
</script>
<style lang="">
    
</style>