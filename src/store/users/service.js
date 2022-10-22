import FetchService from "@/utils/FetchService";
import API from "@/constants/API";

class UserService {
    login(data) {
        return FetchService.fetch({
            endpoint: API.LOGIN,
            method: 'POST',
            body: data,
        })
    }
    register(data) {
        return FetchService.fetch({
            endpoint: API.USER,
            method: 'POST',
            body: data,
        })
    }
}

export default new UserService();
