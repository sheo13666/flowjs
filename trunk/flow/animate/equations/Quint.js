Q.Quint = {
	i : function(time, begin, change, duration) {
		return change * (time /= duration) * time * time * time * time + begin;
	},
	o : function(time, begin, change, duration) {
		return change * ((time = time / duration - 1) * time * time * time * time + 1) + begin;
	},
	io : function(time, begin, change, duration) {
		if ((time /= duration / 2) < 1) {
			return change / 2 * time * time * time * time * time + begin;
		}
		return change / 2 * ((time -= 2) * time * time * time * time + 2) + begin;
	}
};