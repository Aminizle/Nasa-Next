// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
import React from "react";

document.querySelector('#searchButton').addEventListener('click', getImage)
// window.onload = getImage;



const key = "JU7IDnJ2gDoCgPj1aE6mcfSmqtgIkDwcyKXp9eTD"


function getImage() {

let date = document.querySelector('#input').value

fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
    .then( res => res.json())
    .then( data => {
        console.log(data)
       
        document.querySelector('.name').innerText = data.title              
        document.querySelector('.description').innerText = data.explanation
        document.querySelector('img').src = data.hdurl

    })
    .catch(err => {
        console.log(`error ${err}`)
        
    });
}

export default getImage;