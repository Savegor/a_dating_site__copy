import axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: 'http://localhost:4000/',
    headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
        'authorization' : localStorage.getItem('token')
    }
})

export const authAPI = {
    register(data) {
        return instance.post('register', {
            name: data.data.name, 
            username: data.data.login, 
            password: data.data.password,
            desc: data.data.desc, 
            email: data.data.email, 
            sex: data.data.sex, 
            interests: data.interests})
    },
    login(data) {
        return instance.post('login', {username: data.name, password: data.password})
    },
    getAuth() {
        return instance.get('auth/me')
    },
    getUserById(id){
        return instance.get('getUserById?id=' + id)
    },
    getUserByUsername(username){
        return instance.get('getUserByUsername?username=' + username)
    }
}

export const profileAPI = {
    editProfile(data) {
        return instance.post('profile',{
            
        })
    }
}

export const interestsAPI = {
    getAllInterests(){
        return instance.get('getAllInterests')
    }
}
