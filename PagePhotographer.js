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
    const form = document.getElementById("name");
    form.innerHTML = header[0].name
    console.log(header);
    console.log(header.name);


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

const mediaGallery = (gallery) => {
    const elGallery = document.getElementById("gallery");
    const lightboxGallery = document.querySelector(".lightbox__container");

	gallery.forEach((media) => {
		let medias = new MediaFactory(media);
		elGallery.innerHTML += medias.createHtmlMedia();
        // creation slider
        lightboxGallery.innerHTML += medias.createLightbox();
	}); 

    addImageEvent();
   
};

const addImageEvent = () => {
    const allImg = document.querySelectorAll(".photographer-page__gallery__media");
    let photoLightbox = document.querySelectorAll(".lightbox__media");
    const modale = document.getElementById("modale__lightbox");
    const close = document.querySelector(".lightbox__close");
    const next = document.querySelector(".lightbox__next");
    const items = document.querySelectorAll(".lightbox__media");
    let currentImage;
    let count = 0;
    const nbSlide = photoLightbox.length;
    // console.log(photoLightbox.length);
    
    allImg.forEach( (img) => {
        img.addEventListener("click", (event) => {  
            currentImage = event.currentTarget.getAttribute("src"); 
            photoLightbox.forEach((img) => {
                if (currentImage == img.getAttribute("src")) {
                    console.log(img.src);
                     img.parentNode.classList.remove("hide");
                     modale.style.display = "block"; 

                     close.addEventListener("click", (e) => {
                            modale.style.display = "none";
                            img.parentNode.classList.add("hide");
                    });
                    next.forEach(btn => {
                        btn.addEventListener("click" , (e) => {
                            e.stopPropagation();
                            console.log(e.currentTarget.src)
                        })
                    });
                };
            });
            
        });
    });
    slide()
};

function slide(){
const next = document.querySelector(".lightbox__next");
let photoLightbox = document.querySelectorAll(".lightbox__media");
const nbSlide = photoLightbox.length;
console.log(photoLightbox.length);
let count = 0;
console.log(count);

next.addEventListener("click", () => {
    if( count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }
})
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
const installChangeHandler = (gallery) => {
    document.addEventListener("change",(type) => {
        const elementGallery = document.querySelector(".photographer-page__gallery");
        elementGallery.innerHTML = "";
        const option = sortMedia(gallery, type.target.value);
        mediaGallery(option);
        updateLikes();
    });
}

const reloadLikes = () => {
    let totalLike = document.querySelector(".photographer-page__footer__aside__total-likes")
    let LikesMedia = document.querySelectorAll(".photographer-page__gallery__media__footer__like__counter");
    let likeSum = 0
    LikesMedia.forEach(function (like) {
        let likeUnit = Number(like.textContent)
        likeSum += likeUnit
    });
    totalLike.innerHTML = likeSum;
    return likeSum;   
}

const updateLikes = () => {
    const likes = document.querySelectorAll(".photographer-page__gallery__media__footer__like")
    likes.forEach(function (e) {
        e.addEventListener("click", function (i) {
            let elementCounter = e.querySelector(".photographer-page__gallery__media__footer__like__counter"); 
            let heartButton = e.querySelector(".fa-heart"); 
            let likeSum = Number(elementCounter.textContent);
            const liked = e.dataset.liked === "true";
            e.dataset.liked = !liked;
            elementCounter.innerHTML = likeSum + (liked ? -1 : 1);

            reloadLikes();

            if (liked) {
                heartButton.classList.remove("fas");
				heartButton.classList.add("far");			
			} else if (!liked) {
                heartButton.classList.remove("far");
				heartButton.classList.add("fas");				
			}
    });
});
}

const init = async() => {
    const data = await loadData();
    // const photographers = data.photographers;
    const id = getPhotographer(data);
    headerPhotographer(id);
    const gallery = getPhotographerGallery(data);
    const sorted = sortMedia(gallery);
    mediaGallery(sorted);
    installChangeHandler(sorted);
    reloadLikes();
    updateLikes();
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