import api from "./api"

const loginLeaner = (body: {userName: string, password: string}) => {
    return api.post(`${api.url.auth}/LearnerLogin`, body).then((res) => res.data)
}

const authService = {
    loginLeaner
}

export default authService;