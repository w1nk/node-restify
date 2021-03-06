// Copyright 2012 Mark Cavage, Inc.  All rights reserved.



///--- API

function _requestLogger(req, res, next) {
        if (!req.log)
                return (next());

        req.log = req.log.child({
                req_id: req.getId()
        }, true);
        return (next());
}



///--- Exports

module.exports = function requestLogger() {
        return (_requestLogger);
};
