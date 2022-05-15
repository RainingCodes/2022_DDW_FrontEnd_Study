import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default {
    mounted() {
        console.log('믹스인 mounted');
    },
    unmounted() {
        console.log('믹스인 unmounted');
    },
    methods: {
        async $api(url, method, data) {
            return (await axios({
                method: method,
                url,
                data
            }).catch(e => {
                console.log(e)
            })).data;
        }
    }
}