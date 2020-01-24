import $ from 'jquery'

function createAnalytics() {
    let counter = 0
    let isDestroy = false

    const listener = () => { counter++ }

    $(document).on('click', listener)

    return {
        destroy() {
            $(document).off('click', listener)
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