
class Kartya {

    constructor(elem, adat) {

        this.elem = elem;
        this.adat = adat;

        this.cim = this.elem.children("h3");
        this.kep = this.elem.children("img");
        this.leiras = this.elem.children("p");

        this.setAdatok(this.adat);

        this.elem.on("click", () => {

            this.sajatEsemeny();
        });
    }


    setAdatok(ertekek) {

        this.cim.html(ertekek.cim);
        this.kep.attr("src", ertekek.eleresiUt);
        this.leiras.html(ertekek.leiras);
    }


    /* nagy kép választása */
    sajatEsemeny() {

        let esemeny = new CustomEvent("kepValasztas", {detail: this.adat});
        window.dispatchEvent(esemeny);
    }

}