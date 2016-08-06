function test(event) {
	//alert("Here");
document.getElementById("st")
    .addEventListener("keypress", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
    	//alert('sp');
        var d=document.getElementById('ts').innerHTML;
        //console.log(d);
        subs=d.lastIndexOf('mail ');
        sube=d.lastIndexOf('<pre');
        tes=d.lastIndexOf('<br>');
        d=d.substring(subs,sube);
        if(tes-subs<=102)
        {
        subs=d.indexOf(' ');
        sube=d.lastIndexOf('<');
        d=d.substring(subs,sube);

        //console.log(tes);
        console.log(d);
        console.log(subs);
    }
    else
    	alert("NO");

        
   }



});
}