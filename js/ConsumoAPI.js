function getPOkemon(){
    const nombreP=document.getElementById("pokename").value.toLowerCase();


if(nombreP==="")
{
    alert("Please enter a Pokemon name or ID.");
    return;
}

fetch(`https://pokeapi.co/api/v2/pokemon/${nombreP}`)
.then(response=> {
    if(!response.ok){
        throw new Error("Pokemon Not Found");
    }
      
    return response.json();
})
.then(data => {
    const pokeinfo= `
    <h2>${data.name.toUpperCase()}</h2>
    <img src="${data.sprites.front_default}"alt = "${data.name}">
    <p><strong>Tipe:</strong> ${data.types.map(type=>type.type.name).join(", ")}</p>
    <p><strong>Weight:</strong> ${(data.weight / 10).toFixed(1)} kg</p> 
    <p><strong>Height:</strong> ${(data.height / 10).toFixed(1)} m</p>  
`  // toFixied convert a in specific number of decimals
    document.getElementById("poke-info").innerHTML=pokeinfo;
})
.catch(error => {
      alert(error.message);
      document.getElementById("poke-info").innerHTML = "";
});

    
}
