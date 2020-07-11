import { Card } from "./Card";

export class CardSelect {

    // 選択したカード
    // card01: HTMLImageElement | null;
    // card02: HTMLImageElement | null;
    // card03: HTMLImageElement | null;
    // card04: HTMLImageElement | null;
    // card05: HTMLImageElement | null;
    // モーダル時のカード
    espo: HTMLImageElement | null;
    espt: HTMLImageElement | null;
    espw: HTMLImageElement | null;
    espc: HTMLImageElement | null;
    esps: HTMLImageElement | null;
    selectCardArea: HTMLElement | null;

    constructor() {
        // this.card01 = <HTMLImageElement>document.getElementById('card01')
        // this.card02 = <HTMLImageElement>document.getElementById('card02')
        // this.card03 = <HTMLImageElement>document.getElementById('card03')
        // this.card04 = <HTMLImageElement>document.getElementById('card04')
        // this.card05 = <HTMLImageElement>document.getElementById('card05')
        this.espo = <HTMLImageElement>document.getElementById('espo')
        this.espt = <HTMLImageElement>document.getElementById('espt')
        this.espw = <HTMLImageElement>document.getElementById('espw')
        this.espc = <HTMLImageElement>document.getElementById('espc')
        this.esps = <HTMLImageElement>document.getElementById('esps')
        this.selectCardArea = document.getElementById('select-card-area')


        // this.card01?.addEventListener("click", () => {
        //     // alert(`unkotinko`)
        // })
        // this.card02?.addEventListener("click", () => {
        //     // alert(`unkotinko`)
        // })
        // this.card03?.addEventListener("click", () => {
        //     // alert(`unkotinko`)
        // })
        // this.card04?.addEventListener("click", () => {
        //     // alert(`unkotinko`)
        // })
        // this.card05?.addEventListener("click", () => {
        //     // alert(`unkotinko`)
        // })

        this.espo?.addEventListener("click", () => {
            alert(`unkotinko`)
            this.test()
        })
        this.espt?.addEventListener("click", () => {
            // alert(`unkotinko`)
        })
        this.espw?.addEventListener("click", () => {
            // alert(`unkotinko`)
        })
        this.espc?.addEventListener("click", () => {
            // alert(`unkotinko`)
        })
        this.esps?.addEventListener("click", () => {
            // alert(`unkotinko`)
        })
    }

    public loadCard() {
        var card = new Card(0, "")

        var cards = card.createCardBacks()
        console.log(cards)

        // cardの中身の数だけ繰り返す
        for (const card of cards) {
            // カードの枚数だけイメージ追加
            this.selectCardArea?.insertAdjacentHTML('beforeend',
                `<img id="${card.position}"
                 src="${card.imagePath}"
                 class="esp-card select-card"
                 data-toggle="modal"
                 data-target="#exampleModalCenter">\n`)
        }
    }

    public test() {
        var cards: Card[] = []
        var card = new Card(0, "")

        var hoge = card.createSerectCards()
        console.log(hoge)

        // cardの中身の数だけ繰り返す
        for (const card of cards) {
            // createCards()
        }
    }
}