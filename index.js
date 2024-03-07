fetch("./data.json")
    .then(response => response.json())
    .then(imageResult => load(imageResult));

// inputting all data for the timeline webpage from the JSON file
function load(imageResult)
{   
    // elements of the summary the founding of rome
    let img1 = document.getElementById("foundingTimelineImg");
    let text1 = document.getElementById("foundingTimelineText");
    let title1 = document.getElementById("foundingTimelineTitle");

    // elements of the summary of the start of the roman republic
    let img2 = document.getElementById("startTimelineImg");
    let text2 = document.getElementById("startTimelineText");
    let title2 = document.getElementById("startTimelineTitle");

    // elements of the summary of the settlement of the latin war
    let img3 = document.getElementById("settlementTimelineImg");
    let text3 = document.getElementById("settlementTimelineText");
    let title3 = document.getElementById("settlementTimelineTitle");

    // elements of the summary of the first punic war
    let img4 = document.getElementById("firstPunicWarTimelineImg");
    let text4 = document.getElementById("firstPunicWarTimelineText");
    let title4 = document.getElementById("firstPunicWarTimelineTitle");

    // elements of the summary of the second punic war
    let img5 = document.getElementById("secondPunicWarTimelineImg");
    let text5 = document.getElementById("secondPunicWarTimelineText");
    let title5 = document.getElementById("secondPunicWarTimelineTitle");

    // elements of the summary of the third punic war
    let img6 = document.getElementById("thirdPunicWarTimelineImg");
    let text6 = document.getElementById("thirdPunicWarTimelineText");
    let title6 = document.getElementById("thirdPunicWarTimelineTitle");

    // elements of the summary of the crisis of the third century
    let img7 = document.getElementById("crisisTimelineImg");
    let text7 = document.getElementById("crisisTimelineText");
    let title7 = document.getElementById("crisisTimelineTitle");

    // elements of the summary of the rise of the eastern empire
    let img8 = document.getElementById("riseTimelineImg");
    let text8 = document.getElementById("riseTimelineText");
    let title8 = document.getElementById("riseTimelineTitle");

    // elements of the summary of the fall of rome
    let img9 = document.getElementById("fallTimelineImg");
    let text9 = document.getElementById("fallTimelineText");
    let title9 = document.getElementById("fallTimelineTitle");
    
    for (var i = 0; i < imageResult.timeline.length; i++) {
        let img = imageResult.timeline[i].image;
        let textt = imageResult.timeline[i].text;
        let title = imageResult.timeline[i].titleImg;
        let url = imageResult.timeline[i].link;

        // get the image and put into a div element
        let imge = document.createElement("div");
        imge.innerHTML = `<a href=${url}> <img src=${img}  alt=${title} height="300" style="margin-top: 100px; margin-left:30px"></a>`;

        // get text information from the JSON file and put into a p element
        let txt = document.createElement("p");
        txt.innerHTML = `<p class="lead" style="font-size: 40px">${textt}</p>`;

        // get title information from the JSON file and put into a h2 element
        let subject = document.createElement("h2");
        subject.innerHTML = `<h2 class="featurette-heading fw-normal lh-1"><strong>${title}</strong></h2>`;

        // place images, text, and descriptions onto webpages
        if (imageResult.timeline[i].imageId === "foundingTime") {
            img1.appendChild(imge);
            text1.appendChild(txt);
            title1.appendChild(subject);
        }
        else if (imageResult.timeline[i].imageId === "startOfRepublicTime") {
            img2.appendChild(imge);
            text2.appendChild(txt);
            title2.appendChild(subject);
        }
        else if (imageResult.timeline[i].imageId === "settlementLatinWarTime") {
            img3.appendChild(imge);
            text3.appendChild(txt);
            title3.appendChild(subject);
        }
        else if (imageResult.timeline[i].imageId === "firstpunicwarTime") {
            img4.appendChild(imge);
            text4.appendChild(txt);
            title4.appendChild(subject);
        }
        else if (imageResult.timeline[i].imageId === "secondpunicwarTime") {
            img5.appendChild(imge);
            text5.appendChild(txt);
            title5.appendChild(subject);
        }
        else if (imageResult.timeline[i].imageId === "thirdpunicwarTime") {
            img6.appendChild(imge);
            text6.appendChild(txt);
            title6.appendChild(subject);
        }
        else if (imageResult.timeline[i].imageId === "crisisTime") {
            img7.appendChild(imge);
            text7.appendChild(txt);
            title7.appendChild(subject);
        }
        else if (imageResult.timeline[i].imageId === "riseEasternEmpireTime") {
            img8.appendChild(imge);
            text8.appendChild(txt);
            title8.appendChild(subject);
        }
        else if (imageResult.timeline[i].imageId === "fallTime") {
            img9.appendChild(imge);
            text9.appendChild(txt);
            title9.appendChild(subject);
        }

    }  
}