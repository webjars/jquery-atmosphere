/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        'jquery.atmosphere': [ 'webjars!jquery.js' ]
    }
});
