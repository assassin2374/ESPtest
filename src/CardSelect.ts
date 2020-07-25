import { Card } from "./Card";

export class CardSelect {

    // 選択したカード
    answerCardArea: HTMLElement | null;
    selectCardArea: HTMLElement | null;
    modalSelect: HTMLElement | null;
    answerButton: HTMLElement | null;
    resetButton: HTMLElement | null;
    matchAnswerCard: HTMLElement | null;
    cardPosition: number;
    answerCard: string[];
    selectCards: string[];

    constructor() {
        this.answerCardArea = document.getElementById('answer-card-area')
        this.selectCardArea = document.getElementById('select-card-area')
        this.modalSelect = document.getElementById('modal-select')
        this.answerButton = document.getElementById('answer-button')
        this.resetButton = document.getElementById('reset-button')
        this.matchAnswerCard = document.getElementById('modal-answer')
        this.cardPosition = 0
        this.answerCard = []
        this.selectCards = ["", "", "", "", ""]
    }

    public loadCard() {
        var card = new Card(0, "")

        var answerCards = card.createCardBacks()

        const cards = ["images/espo.jpeg",
            "images/espt.jpeg", "images/espw.jpeg",
            "images/espc.jpeg", "images/esps.jpeg"]

        // answercardの中身の数だけ繰り返す
        for (const card of answerCards) {
            // カードの枚数だけイメージ追加
            this.answerCardArea?.insertAdjacentHTML('beforeend',
                `<img id="answer-card${card.position}"
                 src="${card.imagePath}"
                 class="esp-card">\n`)
            // ランダムに数字を出す処理 範囲 0~4
            const randamResult = Math.floor(Math.random() * Math.floor(5));
            this.answerCard.push(cards[randamResult])
        }

        // セレクト形成
        this.createSelect()

        // モーダル形成
        this.createModal()

        // アンサー形成
        this.answerButton?.addEventListener("click", () => {
            this.createAnswer()
        });
        this.resetButton?.addEventListener("click", () => {
            location.reload()
        });
    }

    // セレクト形成
    private createSelect() {
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
                this.cardPosition = card.position
            })
        }
    }

    // モーダル形成
    private createModal() {
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
                var img = <HTMLImageElement>document.getElementById(`select-card${this.cardPosition}`)
                if (img == null) return
                img.src = `${card.imagePath}`
                // 配列にカード情報追加
                this.selectCards[this.cardPosition] = card.imagePath
                this.cardPosition = 0
            })
        }
    }

    // アンサー形成
    private createAnswer() {
        var card = new Card(0, "")
        var matchCard = 0

        var answerNumber = 0

        // answercardの中身を表示
        for (const card of this.answerCard) {
            // カードの枚数だけイメージ獲得
            var esp = <HTMLImageElement>document.getElementById(`answer-card${answerNumber}`)
            esp.src = card
            if (card == this.selectCards[answerNumber])
                matchCard++
            answerNumber++
        }
        this.matchAnswerCard?.insertAdjacentHTML('beforeend', `<p>${matchCard}</p>`)
    }

    private cardClick(esp: HTMLImageElement, card: Card) {

    }
}