import axios from "axios";


export default class ListPageModel{

static async getPost(){
const res = await axios.get('http://localhost:3078/posts');
return res.data;
}

}