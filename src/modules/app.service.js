export default class AppService {
    constructor(text, img) {
        this.text = text
        this.img = img
    }

    toString() {
        return JSON.stringify({
            text: this.text,
            img: this.img
        }, null, 2)
    }

    log() {
        console.log('[App service]:', this.text, this.img)
    }
}