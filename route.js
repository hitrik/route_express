module.exports = function(router) {
	router.get("/", function(req, res) {
		res.end("Main page");
	});
	router.get("/cpu", function(req, res) {
		res.end("Test CPU Page");
	});
	router.get("/vcard", function(req, res) {
		res.end("Test Video cards Page");
	});
};