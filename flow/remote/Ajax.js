new Flow.Plugin({
	name : "Ajax",
	version : "1.0.2",
	description : "Enables XHR request chaining",
	constructor : function(url, method) {
		var req = new HttpRequest();
		Flow.Augment(req, {
			call : function(func) {
				this.onsuccess = func;
				return req;
			}
		});
		req.open(method || "GET", url, true);
		if (method && method.toUpperCase() == "POST") {
			req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		}
		return req;
	}
});
