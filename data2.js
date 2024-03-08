fetch("./data.json")
    .then(response => response.json())
    .then(imageResult => load(imageResult));

// inputting all data for the Punic Wars webpage from the JSON file
function load(imageResult)
{   
    // first punic war elements
    let img1 = document.getElementById("firstPunicWarMapImg");
    let text1 = document.getElementById("firstPunicWarMapImgDescription");
    let title1 = document.getElementById("crisisofThirdCenImgTitle");

    // second punic war elements
    let img2 = document.getElementById("secondPunicWarMapImg");
    let text2 = document.getElementById("secondPunicWarMapImgDescription");
    let title2 = document.getElementById("secondPunicWarMapImgTitle");

    // third punic war elements
    let img3 = document.getElementById("thirdPunicWarMapImg");
    let text3 = document.getElementById("thirdPunicWarMapImgDescription");
    let title3 = document.getElementById("thirdPunicWarMapImgTitle");
    
    for (var i = 0; i < imageResult.punicWars.length; i++) {
        let img = imageResult.punicWars[i].image;
        let textt = imageResult.punicWars[i].text;
        let title = imageResult.punicWars[i].titleImg;

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
        if (imageResult.punicWars[i].imageId === "first") {
            img1.appendChild(imge);
            text1.appendChild(txt);
            title1.appendChild(subject);
        }
        else if (imageResult.punicWars[i].imageId === "second") {
            img2.appendChild(imge);
            text2.appendChild(txt);
            title2.appendChild(subject);
        }
        else if (imageResult.punicWars[i].imageId === "third") {
            img3.appendChild(imge);
            text3.appendChild(txt);
            title3.appendChild(subject);
        }

    }
}