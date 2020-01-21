function createAnalytics() {
    let counter = 0
    let isDestroy = false

    const listener = () => { counter++ }

    document.addEventListener('click', listener)

    return {
        destroy() {
            document.removeEventListener('click', listener)
            isDestroy = true
        },

        getClicks() {
            if (isDestroy) {
                console.log(`Analytics is destroyed! Total clicks = ${counter}`)   
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()