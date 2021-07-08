const form = document.querySelector('#Searchform');
const div = document.querySelector('.container');

form.addEventListener('submit',async (e)=>{

        e.preventDefault();
        removeImage();
        const tvShows= form.elements.query.value;
        const config= {params:{q:tvShows}};
        const res = await axios.get(`https://api.tvmaze.com/search/shows`,config);
        form.elements.query.value="";
        showTvShows(res.data);
        

})

const showTvShows = (shows)=>{

       for(let result of shows){
           if(result.show.image){
               const img = document.createElement('img');
               img.src = result.show.image.medium;
               div.appendChild(img);
               img.classList.add('image');
           }
       }
}

const removeImage=()=>{

    const img = document.querySelectorAll('img');
    for(let image of img)
         div.removeChild(image);
}