import axios from "axios";
import authHeader from './auth-header';
const api_url = process.env.REACT_APP_API_URL 
export class StudentService {
    getStudentsAll () {
        return  axios
                    .get(api_url + 'student', { headers: authHeader() })
                    .then(res => res.data) ;
    }a
    // getStudentsAll () {
    //     return axios.get('assets/demo/data/student.json').then(res => res.data.data);
    // }
}