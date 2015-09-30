module.exports = function(router) {
	router.get("/", function(req, res) {
		res.render("frontend/index", {title: "Main page"});
	});
	router.get("/cpu", function(req, res) {
		res.end("/cpu", "Test CPU Page");
	});
	router.get("/vcard", function(req, res) {
		res.end("Test Vard Page");
	});
};