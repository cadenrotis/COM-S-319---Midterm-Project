fetch("./data.json")
    .then(response => response.json())
    .then(imageResult => load(imageResult));

function load(imageResult)
{
    let img1 = document.getElementById("crisisofThirdCenImg");
    let text1 = document.getElementById("crisisofThirdCenImgDescription");
    let title1 = document.getElementById("crisisofThirdCenImgTitle");

    let img2 = document.getElementById("riseOfEasternEmpireImg");
    let text2 = document.getElementById("riseOfEasternEmpireImgDescription");
    let title2 = document.getElementById("riseOfEasternEmpireImgTitle");

    let img3 = document.getElementById("fallOfRomeImg");
    let text3 = document.getElementById("fallOfRomeImgDescription");
    let title3 = document.getElementById("fallOfRomeImgTitle");
    
    for (var i = 0; i < imageResult.images.length; i++) {
        // load the images and text out
        let img = imageResult.images[i].image;
        let textt = imageResult.images[i].text;
        let title = imageResult.images[i].titleImg;

        // create div for picture
        let imge = document.createElement("div");
        imge.innerHTML = `<img src=${img}  alt=${title} height="300" style="margin-top: 100px; margin-left:50px"></img>`;

        // create p for text
        let txt = document.createElement("p");
        txt.innerHTML = `<p class="lead">${textt}</p>`;

        // create something for title
        let subject = document.createElement("h2");
        subject.innerHTML = `<h2 class="featurette-heading fw-normal lh-1"><strong>${title}</strong></h2>`;

        if (imageResult.images[i].imageId === "crisis") {
            img1.appendChild(imge);
            text1.appendChild(txt);
            title1.appendChild(subject);
        }
        else if (imageResult.images[i].imageId === "rise") {
            img2.appendChild(imge);
            text2.appendChild(txt);
            title2.appendChild(subject);
        }
        else if (imageResult.images[i].imageId === "fall") {
            img3.appendChild(imge);
            text3.appendChild(txt);
            title3.appendChild(subject);
        }
    } // end for loop
}