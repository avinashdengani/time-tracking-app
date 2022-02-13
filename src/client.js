const url = "http://localhost:9000";
const Client = (function() {
    function getTimers(success, error=null) {
        return fetch(url + '/api/timers', {
            headers: {
                Accept: 'application/json'
            },
        }).then(checkStatus)
        .then(parseJSON)
        .then(success);
    }

    function checkStatus(response) {
        if(response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const error = new Error(`HTTP ERROR ${response.statusText}`);;
            error.status = response.status;
            error.response = response;
            console.log("ERROR: " + error);
            throw error;
        }
    }

    function parseJSON(response) {
        return response.json();
    }

    return {
        getTimers
    };
}());

export default Client;