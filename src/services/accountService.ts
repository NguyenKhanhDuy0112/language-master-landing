import api from "./api"

const getProfile = () => {
    return api.get(`${api.url.account}/Profile`).then((res:any) => res.data)
}

const accountService = {
    getProfile
}

export default accountService;