import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'4496c856609d46b5b48fcd6f312caa91',
    }
})