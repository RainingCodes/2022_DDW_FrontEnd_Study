<template>
    <div>
        <h1>Hello, {{title}}!</h1>
        <div>{{htmlString}}</div>
        <div v-html="htmlString"></div>
        <input type="text" v-model="valueModel"/><br>
        <input type="number" v-model.number="numberModel"/><br>
        <textarea v-model="message"></textarea><br>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="864">제주</option>
        </select><br>
        <label>
            <input type="checkbox" v-model="check" true-value="yes" false-value="no">{{check}}
        </label><br><br>
        <div>
            <label><input type="checkbox" value="서울" v-model="checked">서울</label>
            <label><input type="checkbox" value="부산" v-model="checked">부산</label>
            <label><input type="checkbox" value="제주" v-model="checked">제주</label>
            <br>
            <span>체크한 지역 : {{ checked }}</span>
        </div><br><br>
        <div>
            <label><input type="radio" v-bind:value="radioValue1" v-model="picked">{{radioValue1}}</label>
            <label><input type="radio" v-bind:value="radioValue2" v-model="picked">부산</label>
            <label><input type="radio" v-bind:value="radioValue3" v-model="picked">제주</label>
            <br>
            <span>체크한 지역 : {{ picked }}</span>
        </div><br><br>
        <img v-bind:src="imgSrc" width="100"/><br><br>
        <input type="text" v-model="textValue"/>
        <button type="button" v-bind:disabled="textValue==''">Click</button><br><br>
        <div class="container" v-bind:class="{
            'active': isActive, 'text-red':hasError}">Class Binding</div><br><br>
        <div v-bind:style="styleObject">인라인 스타일 바인딩</div><br>
        <div v-bind:style="[baseStyle, addStyle]">인라인 스타일 바인딩2</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            htmlString:'<p style="color:red;">This is a red string</p>',
            title: 'World',
            valueModel:'South Korea',
            numberModel:3,
            message:"여러 줄을 입력할 수 있는 textarea입니다.",
            city:"864",
            check:true,
            checked:[],
            picked:'',
            radioValue1:'서울',
            radioValue2:'부산',
            radioValue3:'제주',
            imgSrc:"https://kr.vuejs.org/images/logo.png",
            textValue:"",
            isActive:true,
            hasError:false,
            styleObject: {
                color:'red',
                fontSize:'13px'
            },
            baseStyle:'background-color:yellow;width:100%;height:100px;',
            addStyle:'color:red;font-weigth:bold;'
        };
    }
}
</script>
<style scoped>
    container {
        width:100%;
        height:100px;
    }
    .active {
        background-color: yellow;
        font-weight: bold;
    }
    .text-red {
        color:red;
    }
</style>