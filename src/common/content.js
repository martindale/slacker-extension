// ==UserScript==
// @include https://www.facebook.com/
// ==/UserScript==
var audio = document.createElement('audio');

audio.setAttribute('src', kango.io.getResourceUrl('res/back-to-work.mp3'));
audio.setAttribute('autoplay', true);

document.querySelector('body').appendChild(audio);
