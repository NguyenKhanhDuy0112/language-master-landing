import api from "./api"

const getDashboard = () => {
    return api.get(`${api.url.dashboard}`).then((res:any) => res.data)
}

const dashboardService = {
    getDashboard
}

export default dashboardService;