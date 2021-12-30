// const SORT_TYPE = {POPULARITY: 0, DATE: 1, TITLE: 2};

const loadData = async () => {
    const response = await fetch("./fishEye.json");
    const data = await response.json();
    return data; 
  };

const getPhotographerId = () => {
    let search_params = new URLSearchParams(document.location.search.substring(1)); 
    let id = parseInt(search_params.get("id"));
    return id;
};
// console.log(getPhotographerId());

const getPhotographer = (data) => {
    let id = getPhotographerId();
    return data.photographers.filter(function (value) {
        return value.id === id;
    });
};

const headerPhotographer = (header) => {
    const thePhotographe = document.getElementById("photographer-page");

	header.forEach((photoId) => {
		let photo = new Photographer(photoId);
		thePhotographe.innerHTML = photo.createHTML2();
	});
};

const getPhotographerGallery = (data) => {
    let id = getPhotographerId();
    return data.media.filter(function (value) {
        return value.photographerId === id;
    });
};

const sortMedia = (gallery, type) => {
	switch (type) {
		case "popularity":
			return gallery.sort((a, b) => {
				return b.likes - a.likes;
			});
		case "date":
			return gallery.sort((a, b) => {
				return new Date(b.date) - new Date(a.date);
			});
		case "title":
			return gallery.sort((a, b) => a.title.localeCompare(b.title));
		default:
			return gallery.sort((a, b) => {
				return b.likes - a.likes;
			});
	}
};

const mediaGallery = (gallery) => {
    const elGallery = document.getElementById("gallery");
    const lightboxGallery = document.querySelector(".lightbox__container");

    const modale = document.getElementById("modale__lightbox");
    const close = document.querySelector(".lightbox__close");
    const links = document.querySelector(".photographer-page__gallery");

	gallery.forEach((media) => {
		let medias = new MediaFactory(media);
		elGallery.innerHTML += medias.createHtmlMedia();
        // creation slider
        lightboxGallery.innerHTML = medias.createLightbox();
	}); 

    links.onclick = function (e) {
		modale.style.display = "block";
        
    };

    close.onclick = function () {
        modale.style.display = "none";
    };
    
};

const installChangehandler = (gallery) => {
    document.addEventListener("change",(type) => {
        const elementGallery = document.querySelector(".photographer-page__gallery");
        elementGallery.innerHTML = "";
        const option = sortMedia(gallery, type.target.value);
        mediaGallery(option);
    });
}

function updateLikes() {
    const likes = document.querySelectorAll(".photographer-page__gallery__media__footer__like")
    likes.forEach(function (e) {
        e.addEventListener("click", function () {
            let elementCounter = e.querySelector(".photographer-page__gallery__media__footer__like__counter");  
            let likeSum = Number(elementCounter.textContent);
            const liked = e.dataset.liked === "true";
            e.dataset.liked = !liked;
            elementCounter.innerHTML = likeSum + (liked ? -1 : 1);
    });
});
}

function reloadLikes() {
    let totalLike = document.querySelector('.photographer-page__footer__aside__total-likes')
    let LikesMedia = document.querySelectorAll(".photographer-page__gallery__media__footer__like__counter");
    let likeSum = 0
    LikesMedia.forEach(function (like) {
        let likeUnit = Number(like.textContent)
        likeSum += likeUnit
    });
    totalLike.innerHTML = likeSum
    // return likeSum
}


const init = async() => {
    const data = await loadData();
    // const photographers = data.photographers;
    const id = getPhotographer(data);
    headerPhotographer(id);
    const gallery = getPhotographerGallery(data);
    const sorted = sortMedia(gallery);
    mediaGallery(sorted);
    installChangehandler(sorted);
    updateLikes();
    reloadLikes()
  };
  init();





















  // const sortMedia = (gallery, type) => {
//     return gallery.sort(function(a, b) {
//         let dateA = new Date(a.date);
//         let dateB = new Date(b.date);

//         if (dateA > dateB)
//            return -1;
//         if (dateA < dateB )
//            return 1;
//         return 0;
//       });
// };

// const sortMedia = (gallery, type) => {
//     return gallery.sort(function(a, b) {
//         if (a.title > b.title)
//            return -1;
//         if (a.title < b.title)
//            return 1;
//         return 0;
//       });
// };

// const sortMedia = (gallery, type) => {
//     return gallery.sort(function(a, b) {
//         if (a.likes > b.likes)
//            return -1;
//         if (a.likes < b.likes)
//            return 1;
//         return 0;
//       });
// };


// let like = () => {
//     if (this.liked){
//         this.imgLikes -= 1
//         // Media.totalLikes -= 1
//     } else {
//         this.imgLikes += 1
//         // Media.totalLikes += 1
    
// }}