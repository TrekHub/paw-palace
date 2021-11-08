//creating the constructor function for Dogs

function Dog(name, price, image) {

    this.name = name;
    this.price = price;
    this.image = image;

}


// creating an array of Dogs

const Dogs = [
    new Dog('Husky', 20000, 'images/husky1.jpg'),
    new Dog('Great Dane', 23000, 'images/great_dane1.jpg'),
    new Dog('German', 27000, 'images/german1.jpg'),
    new Dog('Bull Dog', 18000, 'images/bulldog1.jpg'),
    new Dog('Husky', 20000, 'images/husky2.jpg'),
    new Dog('Great Dane', 23000, 'images/great_dane2.jpg'),
    new Dog('German', 27000, 'images/german2.jpg'),
    new Dog('Bull Dog', 18000, 'images/bulldog2.jpg'),
    new Dog('Husky', 20000, 'images/husky3.jpg'),
    new Dog('Great Dane', 23000, 'images/great_dane3.jpg'),
    new Dog('German', 27000, 'images/german3.jpg'),
    new Dog('Bull Dog', 18000, 'images/bulldog3.jpg'),

]


const gallery = document.getElementById('gallery_list');

Dogs.forEach((newDog) => {

    let galleryItem = document.createElement('div')
   
    galleryItem.classList.add("col-lg-3", "m-2")

   

    // <div class="col-lg-3 mt-3">  </div>

    galleryItem.innerHTML = `
  
                <div class="card ">
                    <img height="400" width="300" src="${newDog.image}" class="card-img " alt="...">
                    <div class="card-img-overlay">
                        <button class="btn btn-primary mx-lg-5 " type="submit">Buy</button>
                    </div>
                    <div class="card-text d-flex justify-content-between">
                        <p class="fs-4 m-2">${newDog.name}</p>
                        <p class="fs-4 m-2">Ksh ${newDog.price}</p>
                    </div>
                </div>
          
    `;

    gallery.appendChild(galleryItem)





})