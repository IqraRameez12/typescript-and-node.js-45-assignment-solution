/*. Album: 
Write a function called make_album() that builds an Object describing a music album. The 
function should take in an artist name and an album title, and it should return a Object containing 
these two pieces of information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make 
at least one new function call that includes the number of tracks on an album */

/*function make_album(artist:string,albumTitle:string){
    return  {artist,albumTitle}
}

let album1=make_album("Ali","Rang-e-muhabbat")
    let album2=make_album("sara","tere ishq ky naam")
        let album3=make_album("Rahat","mosam-e- dil")
            let album4=make_album("tara","roshan andhera" )

            console.log(album1);
            console.log(album2);
            console.log(album3);
            console.log(album4);*/

 function make_album1(artist:string,albumTitle:string,numberOfTracks?:number){
    return {artist,albumTitle,numberOfTracks}
 }
 
 let album5=make_album1("Ali","Rang-e-muhabbat",25)
    let album6=make_album1("sara","tere ishq ky naam",40)
        let album7=make_album1("Rahat","mosam-e-dil",35)
            let album8=make_album1("tara","roshan andhera" )

            console.log(album5);
            console.log(album6);
            console.log(album7);
            console.log(album8);