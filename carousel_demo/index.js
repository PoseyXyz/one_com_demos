let current_val = 0
let total_card_length = 13
let cards_on_display = 6
let card_pixel_width = 266
let max_width = card_pixel_width*cards_on_display
let total_width = card_pixel_width*total_card_length
let last_offset = total_width - max_width
let multiplier  = 2.9

function next() {
    const carousel_el = document.querySelector('.gel-carousel__scrollable')
    if(current_val>last_offset){
        current_val = 0
        carousel_el.style.transform = `translateX(-${current_val}px)`
        carousel_el.style.transitionDuration = '2s'
    }else{
        current_val += card_pixel_width*multiplier
        carousel_el.style.transform = `translateX(-${current_val}px)`
        carousel_el.style.transitionDuration = '2s'
    }  
}

function previous(){
    const carousel_el = document.querySelector('.gel-carousel__scrollable')
    if(current_val<=max_width){
        current_val = 0 
        carousel_el.style.transform = `translateX(${0}px)`
        carousel_el.style.transitionDuration = '2s'
    }else{
        current_val -= card_pixel_width*multiplier
        carousel_el.style.transform = `translateX(-${current_val}px)`
        carousel_el.style.transitionDuration = '2s'
    }
}


 // console.log(current_val);
    // // const headline = document.querySelector('.headline')
    // // headline.innerHTML =  'Hello'
    // console.log(`${current_val * totalWidth}`)
    // carousel_el.style.transform = `translateX(-${current_offset}px)`
    // carousel_el.style.transitionDuration = '2s'

    // if (current_val >= 30) {
    //     current_val = 0
    //     console.log(current_val);
    //     const carousel_el = document.querySelector('.gel-carousel__list')
    //     // const headline = document.querySelector('.headline')
    //     // headline.innerHTML = 'Hello'
    //     carousel_el.style.transform = `translateX(-${1 * current_val}%)`
    //     carousel_el.style.transitionDuration = '2s'
    // } else {
    //     current_val += 30
    //     console.log(current_val);
    //     const carousel_el = document.querySelector('.gel-carousel__list')
    //     // const headline = document.querySelector('.headline')
    //     // headline.innerHTML = 'Hello'
    //     carousel_el.style.transform = `translateX(-${1 * current_val}%)`
    //     carousel_el.style.transitionDuration = '2s'

    // }