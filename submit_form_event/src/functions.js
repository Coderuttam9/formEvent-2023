const userform = document.getElementById("user_form");
const inputPhoto = document.getElementById("inputPhoto");
const show = document.getElementById("show");
const CreateImage = document.createElement("ul");

show.appendChild(CreateImage);

const reset = document.getElementById("reset");
const msg = document.querySelector(".msg");

// get data form the form
userform.onsubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data);
    console.log(data);

    // input value validations
    if (!data.name || !data.email || !data.mobile) {
        msg.innerHTML = createAlert("All filds are requird", "danger");
    } else {
        msg.innerHTML = createAlert("Data stable", "success");
    }
};

const imgArray = [];

inputPhoto.addEventListener("change", () => {
    const files = inputPhoto.files;
    for (let i = 0; i < files.length; i++) {
        imgArray.push(files[i]);
    }

    showImage();
});


// show the multiple image 
function showImage() {
    let images = "";
    imgArray.forEach((item, index) => {
        images += `
            <img class =" w-100 p-10 mt-10" src="${URL.createObjectURL(
              item
            )}" alt="image">
        `;
    });
    CreateImage.innerHTML = images;
}

// reset input  and image  by clicking
reset.onclick = () => {
    CreateImage.remove();
    location.reload();
};