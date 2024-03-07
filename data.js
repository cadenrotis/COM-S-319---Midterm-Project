fetch("./data.json")
    .then(response => response.json())
    .then(imageResult => load(imageResult));

// inputting all data for the Fall of Rome webpage from the JSON file
function load(imageResult)
{   
    // crisis of the third century elements
    let img1 = document.getElementById("crisisofThirdCenImg");
    let text1 = document.getElementById("crisisofThirdCenImgDescription");
    let title1 = document.getElementById("crisisofThirdCenImgTitle");

    // rise of the eastern empire elements
    let img2 = document.getElementById("riseOfEasternEmpireImg");
    let text2 = document.getElementById("riseOfEasternEmpireImgDescription");
    let title2 = document.getElementById("riseOfEasternEmpireImgTitle");

    // fall of rome elements
    let img3 = document.getElementById("fallOfRomeImg");
    let text3 = document.getElementById("fallOfRomeImgDescription");
    let title3 = document.getElementById("fallOfRomeImgTitle");
    
    for (var i = 0; i < imageResult.fallOfRome.length; i++) {
        let img = imageResult.fallOfRome[i].image;
        let textt = imageResult.fallOfRome[i].text;
        let title = imageResult.fallOfRome[i].titleImg;

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
        if (imageResult.fallOfRome[i].imageId === "crisis") {
            img1.appendChild(imge);
            text1.appendChild(txt);
            title1.appendChild(subject);
        }
        else if (imageResult.fallOfRome[i].imageId === "rise") {
            img2.appendChild(imge);
            text2.appendChild(txt);
            title2.appendChild(subject);
        }
        else if (imageResult.fallOfRome[i].imageId === "fall") {
            img3.appendChild(imge);
            text3.appendChild(txt);
            title3.appendChild(subject);
        }

    }
}