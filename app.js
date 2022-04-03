const image = document.querySelectorAll(".image");
const imageContainer = document.querySelector(".image-container");
const generateButton = document.querySelector(".generate-button");

generateButton.addEventListener("click", fetchImages);

function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/3")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.message);

            // let images = ["img1", "img2", "img3"];
            // for (let i = 0; i < images.length; i++) {
            for (let i = 0; i < data.message.length; i++) {
                // let dogImage = document.createElement("img");
                // dogImage.classList.add("image");
                // dogImage.innerHTML = images[i];
                // dogImage.setAttribute("src", data.message[i]);
                // imageContainer.append(dogImage);
                // console.log(images[i]);

                console.log(image[i]);
                console.log(data.message[i]);
                image[i].src = data.message[i];
                // image[i].style.padding = "none";

                image[i].style.padding = 0;
                // image[i].style.border = "3px solid black";
            }
        })
        .catch(function (error) {
            console.log(error);
        })


    image.innerHTML = "Loading...";
}