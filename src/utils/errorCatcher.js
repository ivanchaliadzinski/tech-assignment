const ERROR_STATUSES = [401, 403, 404, 502, 504];

const errorCatcher = resp => {
    if (!resp.ok) {
        if (ERROR_STATUSES.includes(resp.status)) {
            throw { errorMessage: 'Authentification error' };
        } else {
            return resp.json().then(data => {
                if (data) {
                    throw {errorMessage: data};
                } else {
                    throw {errorMessage: `Bad Request - ${resp.status}`};
                }
            });
        }
    }

    return resp.json();
};

export default errorCatcher;
