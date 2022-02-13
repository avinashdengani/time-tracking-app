const url = "http://localhost:9000";
const Client = (function() {
    function getTimers(success, error=null) {
        return fetch(url + '/api/timers', {
            headers: {
                'Accept': 'application/json'
            },
        }).then(checkStatus)
        .then(parseJSON)
        .then(success);
    }

    function createTimer(data) {
        return fetch(url + '/api/timers', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
        }).then(checkStatus);
    }

    function updateTimer(data) {
        return fetch(url + '/api/timers', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
        }).then(checkStatus);
    }
    function deleteTimer(data) {
        return fetch(url + '/api/timers', {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
        }).then(checkStatus);
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
    function startTimer(data) {
        return fetch(url + '/api/timers/start', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
        }).then(checkStatus);
    }
    function stopTimer(data) {
        return fetch(url + '/api/timers/stop', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
        }).then(checkStatus);
    }

    function parseJSON(response) {
        return response.json();
    }

    return {
        getTimers,
        createTimer,
        updateTimer,
        deleteTimer,
        startTimer,
        stopTimer
    };
}());

export default Client;