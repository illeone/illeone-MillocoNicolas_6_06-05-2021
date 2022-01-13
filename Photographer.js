class Photographer{
    constructor(data){
        this.name = data.name;
        this.id = data.id;
        this.city = data.city;
        this.country = data.country;
        this.tags = data.tags;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = data.portrait;
        this.imgLikes = data.likes;

    }

    createHTML() {

        return `
        <div class= "photographe">
                <a class="photographer__profil" href="page-photographe.html?id=${this.id}">
                    <img class="vignette" src="photos/ID/${this.portrait}" alt="">
                    <h2 class="photographer__profil__name">${this.name}</h2>
                </a>
                <p class="location">${this.city}, ${this.country}</p>
                <p class="tagline">${this.tagline}</p>
                <p class="price">${this.price}€/jour</p>
                <ul class="filter_tags">${this.tags.map(tags =>
                    `<li class="filter_tags_main"${tags}">#${tags}</li>`).join(" ")}</ul> 
        </div>`;
    }

    createHTML2() {
        
        return  `
                 <div class="photographer-page__header">
                    <div class="photographer-page__header__profil">
                        <h1 class="photographer-page__name">${this.name}</h1>
                        <p class="photographer-page__location">${this.city}, ${this.country}</p>
                        <p class="photographer-page__tagline">${this.tagline}</p>
                        <ul class="photographer-page__taglist">${this.tags.map(tag => 
                            `<li  class="photographer-page__tags  filtre_nav_head">#${tag}</li>`).join(" ")}</ul>
                    </div>
                    <button class="photographer-page__contact__button" tabindex="3" onclick="displayPhotographerModale()">Contactez-moi</button>
                    <img class="photographer-page__vignette" src="photos/ID/${this.portrait}" class="photographer-page__photo" alt="Photographie de profil de ${this.name}">
                </div>
                <div class="jaja">
                    <aside class="photographer-page__footer__aside">
                        <p class="photographer-page__footer__aside__total-likes"></p>
                        <i class="heart-card fas fa-heart"></i>
                     </aside>
                    <p class="photographer-page__footer__price" tabindex="3">${this.price}€/jour</p>
                </div>
                `
    } 
}