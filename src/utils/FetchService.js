import {DOMEN_URL} from "@/constants/API";
import {setItem} from "@/utils/LocalStorage";
import {TOKEN} from "@/constants/AsyncStorage";
import errorCatcher from "@/utils/errorCatcher";

class FetchService {
    _api = DOMEN_URL;
    _token = '';

    get token() {
        return this._token;
    }
    set token(token) {
        this._token = token;
        setItem(TOKEN, token);
    }
    get api() {
        return this._api;
    }
    set api(api) {
        this._api = api;
    }
    fetch({
        url= '',
        endpoint = '',
        method = 'GET',
        useToken = true,
        params = null,
        body = null,
        header = null,
    }) {
        let headers = {};
        if (!url && endpoint) {
            url = new URL(this._api + endpoint);
        }
        if (params) {
            url += `?${new URLSearchParams(params)}`;
        }
        if (body) {
            body = JSON.stringify(body);
            headers['Content-Type'] = 'application/json';
        }
        if (useToken) {
            headers['Authorization'] = this._token && `Token ${this._token}`;
        }
        if (headers) {
            headers = {...headers, ...header};
        }
        return fetch(url, {
            method,
            body,
            headers,
        }).then(response => errorCatcher(response));
    }
}

export default new FetchService();

