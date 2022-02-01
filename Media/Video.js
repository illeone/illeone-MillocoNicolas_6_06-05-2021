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
            <a href="#" role="button" class="media__link videoLogo">
                <video class="photographer-page__gallery__media tabindex="2" alt="${this.videoTitle}" aria-label="le titre de la video est ${this.videoTitle}" src="Photos/media/${this.videoSrc}"></video>
            </a>
            <div class="photographer-page__gallery__media__footer">
                <figcaption class="photographer-page__gallery__media__footer__figcaption">${this.videoTitle}</figcaption>
                <div class="photographer-page__gallery__media__footer__like">
                        <p class="photographer-page__gallery__media__footer__like__counter aria-label="la photo a reçu ${this.videoLikes} j'aime"">${this.videoLikes}</p>
                        <button class="photographer-page__gallery__media__footer__like__button far fa-heart" aria-label="cliquer pour mettre un j'aime à cette photo"</button>
                 </div>
            </div>
        </figure>
        `;
	}
    createLightbox() {
        return `
        <div class="lightbox hide">
                <video controls class="lightbox__media" alt="${this.videoTitle}" src="Photos/media/${this.videoSrc}"></video>
                <div class="lightbox__media__footer">
                    <figcaption class="lightbox__media__footer__figcaption">${this.videoTitle}</figcaption>
                </div>
        </div>
        `;
    }
}