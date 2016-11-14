var protobuf = require("../..");

module.exports = proto_source;

/**
 * .proto source.
 * @param {string[]} files Input files
 * @param {!Object} options Source options
 * @param {function(?Error, Root=)} callback Callback function
 */
function proto_source(files, options, callback) {
    protobuf.load(files, function(err, root) {
        callback(err, root);
    });
}
