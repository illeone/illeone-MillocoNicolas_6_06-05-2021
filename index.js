  const loadData = async () => {
    const response = await fetch('./fishEye.json');
    const data = await response.json();
    return data; 
  }

  const dysplayPhotographer = (photographers) => {
    let sectionPhotographers = document.getElementById('photographers');
    console.log (sectionPhotographers);
    sectionPhotographers.innerHTML = '';
        
    photographers.forEach(element => {
      let unPhotographe = new Photographer(element);      
      sectionPhotographers.innerHTML += unPhotographe.createHTML();
    });
  }

  const navigationTags = document.querySelectorAll('.filtre_nav_head');
  // let filter_tags_main = [];
  
  
  const filterTag = (photographers) => {
  navigationTags.forEach((tag) => {
    tag.addEventListener('click', (e) => {
      // console.log (e.target.innerHTML);
  
      const words = e.target.innerHTML.split('#');
      // console.log(words[1]);
      const filterPhotographer = photographers.filter(Photographe => Photographe.tags.includes(words[1]));
      
      dysplayPhotographer(filterPhotographer);
  
    });
  });
  }

  const init = async() => {
    const data = await loadData();
    console.log(data);
    const photographers = data.photographers;
    console.log(photographers);
    dysplayPhotographer(photographers);
    filterTag(photographers);
  }
  init();

















// ##########################################################################################



  // let some = 10
  // let a = 12

  // some = a + some 


  

  // const PhotographersPage = document.getElementById("photographer-page");
  // let counter = 0;
  
  // PhotographersPage.addEventListener("click", () => {
  //   counter++;
  //   console.log(counter);
  // });

 