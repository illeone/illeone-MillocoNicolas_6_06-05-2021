class Image {

	constructor(data,) {
		this.imgSrc = data.image;
		this.imgTitle = data.title;
		this.imgPhotographerId = data.photographerId;
		this.imgLikes = data.likes;
        this.src = data.id;
	}

	createHtmlMedia() {
		return `
        <figure class="photographer-page__gallery">
            <div class="media">
                <img class="photographer-page__gallery__media" src="Photos/media/${this.imgSrc}"</img>
                <div class="photographer-page__gallery__media__footer">
                    <figcaption class="photographer-page__gallery__media__footer__figcaption">${this.imgTitle}</figcaption>
                    <div class="photographer-page__gallery__media__footer__like">
                        <p class="photographer-page__gallery__media__footer__like__counter">${this.imgLikes}</p>
                        <button class="photographer-page__gallery__media__footer__like__button far fa-heart"</button>
                    </div>
                </div>
            </div>
        </figure>
        `;
	}
    createLightbox() {
        return `
        <div class="lightbox hide">
                <img class="lightbox__media" src="Photos/media/${this.imgSrc}"</img>
                <div class="lightbox__media__footer">
                    <figcaption class="lightbox__media__footer__figcaption">${this.imgTitle}</figcaption>
                </div>
        </div>
        `;
    }
}



