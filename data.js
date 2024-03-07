fetch("./data.json")
    .then(response => response.json())
    .then(imageResult => load(imageResult));

function load(imageResult)
{
    // punic wars timeline elements
    
    
    // crisis of the third century elements
    let img4 = document.getElementById("crisisofThirdCenImg");
    let text4 = document.getElementById("crisisofThirdCenImgDescription");
    let title4 = document.getElementById("crisisofThirdCenImgTitle");

    // rise of the eastern empire elements
    let img5 = document.getElementById("riseOfEasternEmpireImg");
    let text5 = document.getElementById("riseOfEasternEmpireImgDescription");
    let title5 = document.getElementById("riseOfEasternEmpireImgTitle");

    // fall of rome elements
    let img6 = document.getElementById("fallOfRomeImg");
    let text6 = document.getElementById("fallOfRomeImgDescription");
    let title6 = document.getElementById("fallOfRomeImgTitle");
    
    for (var i = 0; i < imageResult.images.length; i++) {
        let img = imageResult.images[i].image;
        let textt = imageResult.images[i].text;
        let title = imageResult.images[i].titleImg;

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
        if (imageResult.images[i].imageId === "crisis") {
            img4.appendChild(imge);
            text4.appendChild(txt);
            title4.appendChild(subject);
        }
        else if (imageResult.images[i].imageId === "rise") {
            img5.appendChild(imge);
            text5.appendChild(txt);
            title5.appendChild(subject);
        }
        else if (imageResult.images[i].imageId === "fall") {
            img6.appendChild(imge);
            text6.appendChild(txt);
            title6.appendChild(subject);
        }
    } 
}