class MediaFactory {
    constructor(data) {
        if (data.type === "image") {
			return new Image(data);
		} else if (data.type === "video") {
			return new Video(data);
		}
    }
}
