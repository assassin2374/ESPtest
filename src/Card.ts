export class Card {

    position: number;
    imagePath: string;

    constructor(position: number, imagePath: string) {
        this.position = position
        this.imagePath = imagePath
    }

    public createSerectCards(): Card[] {
        var cards: Card[] = []

        let imagePaths = ["images/espo.jpeg",
            "images/espt.jpeg", "images/espw.jpeg",
            "images/espc.jpeg", "images/esps.jpeg"]

        // cardの中身の数だけ繰り返す
        var position = 0
        for (const imagePath of imagePaths) {
            var card = new Card(position, imagePath)
            cards.push(card)
            position++
        }

        return cards
    }

    public createCardBacks(): Card[] {
        var cards: Card[] = []

        // cardの中身の数だけ繰り返す
        for (let position = 0; position < 5; position++) {
            var card = new Card(position, "images/cardback.jpg")
            cards.push(card)
        }

        return cards
    }
}