import { Card } from "./Card";

export class CardSelect {

    // 選択したカード
    answerCardArea: HTMLElement | null;
    selectCardArea: HTMLElement | null;
    modalSelect: HTMLElement | null;
    cardPosition: string;

    constructor() {
        this.answerCardArea = document.getElementById('answer-card-area')
        this.selectCardArea = document.getElementById('select-card-area')
        this.modalSelect = document.getElementById('modal-select')
        this.cardPosition = ""
    }

    public loadCard() {
        var card = new Card(0, "")

        var answerCards = card.createCardBacks()

        // answercardの中身の数だけ繰り返す
        for (const card of answerCards) {
            // カードの枚数だけイメージ追加
            this.answerCardArea?.insertAdjacentHTML('beforeend',
                `<img id="answer-card${card.position}"
                 src="${card.imagePath}"
                 class="esp-card">\n`)
        }

        // セレクト形成
        this.creatSelect()

        // モーダル形成
        this.creatModal()
    }

    // セレクト形成
    private creatSelect() {
        var card = new Card(0, "")
        var selectCards = card.createCardBacks()

        // selectcardの中身の数だけ繰り返す
        for (const card of selectCards) {
            // カードの枚数だけイメージ追加
            this.selectCardArea?.insertAdjacentHTML('beforeend',
                `<img id="select-card${card.position}"
                 src="${card.imagePath}"
                 class="esp-card select-card"
                 data-toggle="modal"
                 data-target="#exampleModalCenter">\n`)
            var esp = <HTMLImageElement>document.getElementById(`select-card${card.position}`)
            esp?.addEventListener("click", () => {
                this.cardPosition = `select-card${card.position}`
            })
        }
    }

    // モーダル形成
    private creatModal() {
        var card = new Card(0, "")
        var modalSelect = card.createSerectCards()

        // espcardの中身の数だけ繰り返す
        for (const card of modalSelect) {
            // カードの枚数だけイメージ追加
            this.modalSelect?.insertAdjacentHTML('beforeend',
                `<img id="esp${card.position}"
                 src="${card.imagePath}"
                 class="esp-card-s select-card rounded"
                 data-dismiss="modal">\n`)

            var esp = <HTMLImageElement>document.getElementById(`esp${card.position}`)
            esp?.addEventListener("click", () => {
                var img = <HTMLImageElement>document.getElementById(this.cardPosition)
                if (img == null) return
                img.src = `${card.imagePath}`
                this.cardPosition = ""
            })
        }
    }

    private cardClick(esp: HTMLImageElement, card: Card) {

    }
}