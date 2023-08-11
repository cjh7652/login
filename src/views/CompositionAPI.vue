<template lang="ko">
    <div>
        <h2>Calclator</h2>
        <div>
            <input type="text" v-model="num1" >
            <span>+</span>
            <input type="text" v-model="num2" >
            <span>=</span>
            <span>{{result}}</span>
        </div>
    </div>
</template>
<script>
import {plusCalcultor} from '../common.js';
import {onMounted} from 'vue';
export default {
    name: 'Calclator',
    setup(){
        let {num1, num2, result} = plusCalcultor();
        onMounted(()=>{
            console.log('Component is mounted!')
        });
     return{
            num1, num2, result
        } 
    }
}
</script>
<style lang="">
    
</style>