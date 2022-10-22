import UserService from './service';
import FetchService from "@/utils/FetchService";
import {clearStorage, getItem} from "@/utils/LocalStorage";
import {TOKEN} from "@/constants/AsyncStorage";

const SET_USER = 'setUser';
const START_LOADING = 'setStartLoad';
const FINISH_LOADING = 'setFinishLoad';
const SET_ERROR = 'setError';

export default {
    login(context, data) {
        context.commit(START_LOADING);
        context.commit(SET_ERROR, null);
        return UserService.login(data)
            .then(response => {
                FetchService.token = response?.token;
                context.commit(SET_USER, response);
                return response;
            })
            .catch(error => context.commit(SET_ERROR, error))
            .finally(() => {
                context.commit(FINISH_LOADING);
            })
    },
    register(context, data) {
        context.commit(START_LOADING);
        context.commit(SET_ERROR, null);
        return UserService.register(data)
            .then(response => {
                FetchService.token = response?.auth_token;
                context.commit(SET_USER, response);
                return response;
            })
            .catch(error => context.commit(SET_ERROR, error))
            .finally(() => {
                context.commit(FINISH_LOADING);
            })
    },
    logout(context) {
        context.commit(SET_USER, null);
        clearStorage();
    },
    checkToken(context) {
        const token = getItem(TOKEN);
        if (token) {
            FetchService.token = token;
            context.commit(SET_USER, { auth_token: token })
        }
    },
    clearError(context) {
        context.commit(SET_ERROR, null);
    }
}
