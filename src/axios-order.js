import axios from 'axios';

const instance=axios.create({
    baseURL:'https://react-burgerapp-be6ca-default-rtdb.firebaseio.com/'
});


export default instance;