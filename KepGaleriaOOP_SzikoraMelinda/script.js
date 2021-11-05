
$(function () {
    

    const kepAdat = [

        {
            cim: "A csók",
            eleresiUt: "kepek/kep1.jpg",
            leiras: "Gustav Klimt osztrák festő festménye"
        },
        {
            cim: "Csillagos éjj",
            eleresiUt: "kepek/kep2.jpg",
            leiras: "Vincent van Gogh holland festő olajfestménye"
        },    
        {
            cim: "Hollók a gabonaföldek felett",
            eleresiUt: "kepek/kep3.jpg",
            leiras: "Gogh 1890. júliusi festménye"
        }
    ]


    /* kis képek */
    const galeriaSzulo = $("#galeria");
    let sablonElem = $(".kartya");
    for (let index = 0; index < kepAdat.length; index++) {

        const ujElem = sablonElem.clone().appendTo(galeriaSzulo);
        const ujKartya = new Kartya(ujElem, kepAdat[index]);
    }

    /* nagy kép */
    const nagyKepSzulo = $("#fokep");
    const ujElem = sablonElem.clone().appendTo(nagyKepSzulo);
    const nagyKartya = new Kartya(ujElem, kepAdat[0]);

    sablonElem.remove();


    /* nagy kép választása */
    $(window).on("kepValasztas", (event) => {

       nagyKartya.setAdatok(event.detail);
    });


    /* lapozás */
    let index = 0;

    function jobbra() {
        
        index++;

        if(index > kepAdat.length-1) {

            index = 0;
        }
        nagyKartya.setAdatok(kepAdat[index]);    
    }

    function balra() {

        index--;

        if(index < 0) {

            index = kepAdat.length-1;
        }
        nagyKartya.setAdatok(kepAdat[index]);
    }

    $("#bal").click(balra);
    $("#jobb").click(jobbra);
    
});