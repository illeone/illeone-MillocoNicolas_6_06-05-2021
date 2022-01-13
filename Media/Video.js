class Video {

	constructor(data) {
		this.videoSrc = data.video;
		this.videoTitle = data.title;
		this.videoPhotographerId = data.photographerId;
		this.videoLikes = data.likes;
	}

	createHtmlMedia() {
		return `
        <figure class="photographer-page__gallery">
            <video controls class="photographer-page__gallery__media tabindex="2">
                <source src="Photos/media/${this.videoSrc}"/>
            </video>
            <div class="photographer-page__gallery__media__footer">
                <figcaption class="photographer-page__gallery__media__footer__figcaption">${this.videoTitle}</figcaption>
                <div class="photographer-page__gallery__media__footer__like">
                        <p class="photographer-page__gallery__media__footer__like__counter">${this.videoLikes}</p>
                        <button class="photographer-page__gallery__media__footer__like__button far fa-heart"</button>
                    </div>
            </div>
        </figure>
        `;
	}
    createLightbox() {
        return `
        <div class="lightbox hide">
                <img class="lightbox__media" src="Photos/media/${this.videoSrc}"</img>
                <div class="lightbox__media__footer">
                    <figcaption class="lightbox__media__footer__figcaption">${this.videoTitle}</figcaption>
                </div>
        </div>
        `;
    }
}