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
                <img class="photographer-page__gallery__media" alt="${this.imgTitle}" aria-label="le titre de la photo est ${this.imgTitle}" src="Photos/media/${this.imgSrc}"</img>
                <div class="photographer-page__gallery__media__footer">
                    <figcaption class="photographer-page__gallery__media__footer__figcaption">${this.imgTitle}</figcaption>
                    <div class="photographer-page__gallery__media__footer__like">
                        <p class="photographer-page__gallery__media__footer__like__counter" aria-label="la photo a reçu ${this.imgLikes} j'aime">${this.imgLikes}</p>
                        <button class="photographer-page__gallery__media__footer__like__button far fa-heart" aria-label="cliquer pour mettre un j'aime à cette photo"</button>
                    </div>
                </div>
            </div>
        </figure>
        `;
	}
    createLightbox() {
        return `
        <div class="lightbox hide">
                <img class="lightbox__media" alt="${this.imgTitle}" src="Photos/media/${this.imgSrc}"</img>
                <div class="lightbox__media__footer">
                    <figcaption class="lightbox__media__footer__figcaption">${this.imgTitle}</figcaption>
                </div>
        </div>
        `;
    }
}



