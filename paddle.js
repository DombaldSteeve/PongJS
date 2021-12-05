const SPEED = 0.007

export default class paddle {

    constructor(paddleElem) {
        this.paddleElem = paddleElem
    }


    get position() {
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"))
    }

    
    rect() {
        return this.paddleElem.getBoundingClientRect()
    }

    set position(value) {
        this.paddleElem.style.setProperty("--position", value)
    }

    reset() {
        this.position = 50
    }

    update(delta, ballHeight) {
        this.position += SPEED * delta * (ballHeight - this.position)
    }

}