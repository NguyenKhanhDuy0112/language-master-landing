import api from "./api"

const getMyScore = () => {
    return api.get(`${api.url.home}/Dashbroad/YourScore`).then((res:any) => res.data)
}

const homeService = {
    getMyScore
}

export default homeService;