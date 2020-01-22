export default class AppService {
    constructor(text, img) {
        this.text = text
        this.img = img
    }

    log() {
        console.log('[App service]:', this.text, this.img)
    }
}