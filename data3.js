fetch("./data.json")
    .then(response => response.json())
    .then(imageResult => load(imageResult));

// inputting all data for the Rise of Rome webpage from the JSON file
function load(imageResult)
{   
    // founding of rome elements
    let img1 = document.getElementById("foundingOfRomeImg");
    let text1 = document.getElementById("foundingOfRomeImgDescription");
    let title1 = document.getElementById("foundingOfRomeImgTitle");

    // roman republic elements
    let img2 = document.getElementById("romanRepublicImg");
    let text2 = document.getElementById("romanRepublicImgDescription");
    let title2 = document.getElementById("romanRepublicImgTitle");

    // latin war elements
    let img3 = document.getElementById("latinWarImg");
    let text3 = document.getElementById("latinWareImgDescription");
    let title3 = document.getElementById("latinWarImgTitle");
    
    for (var i = 0; i < imageResult.riseOfRome.length; i++) {
        let img = imageResult.riseOfRome[i].image;
        let textt = imageResult.riseOfRome[i].text;
        let title = imageResult.riseOfRome[i].titleImg;

        // get the image and put into a div element
        let imge = document.createElement("div");
        imge.innerHTML = `<img src=${img}  alt=${title} height="300" style="margin-top: 100px; margin-left:30px"></img>`;

        // get text information from the JSON file and put into a p element
        let txt = document.createElement("p");
        txt.innerHTML = `<p class="lead">${textt}</p>`;

        // get title information from the JSON file and put into a h2 element
        let subject = document.createElement("h2");
        subject.innerHTML = `<h2 class="featurette-heading fw-normal lh-1"><strong>${title}</strong></h2>`;

        // place images, text, and descriptions onto webpages
        if (imageResult.riseOfRome[i].imageId === "founding") {
            img1.appendChild(imge);
            text1.appendChild(txt);
            title1.appendChild(subject);
        }
        else if (imageResult.riseOfRome[i].imageId === "republic") {
            img2.appendChild(imge);
            text2.appendChild(txt);
            title2.appendChild(subject);
        }
        else if (imageResult.riseOfRome[i].imageId === "latin") {
            img3.appendChild(imge);
            text3.appendChild(txt);
            title3.appendChild(subject);
        }

    }
}