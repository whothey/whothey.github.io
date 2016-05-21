module.exports = {
    request: new XMLHttpRequest(),
    headers: [],

    get: function(url, data) {
        this.request.open('GET', url, true);
    },

    post: function(url, data) {
        this.request.open('POST', url, true);
    }
};
