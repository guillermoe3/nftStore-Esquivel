const products = [
{"id":1,"title":"VIA® Veranda Blend™","description":"Ceratotherium simum", "category":"homeCoffee","price":"$5412.27","stock": "25","pictureUrl":"https://globalassets.starbucks.com/assets/f8886602b0d64cc38cee1d0908ffe125.jpg?impolicy=1by1_tight_288"},
{"id":2,"title":"Starbucks VIA® Instant Colombia Coffee","description":"Odocoileus hemionus","category":"homeCoffee","price":"$3402.05","stock": "35","pictureUrl":"https://globalassets.starbucks.com/assets/3f85a9b6cbdf4e1c90ad02bb8be1acfa.jpg?impolicy=1by1_tight_288"},
{"id":3,"title":"Veranda Blend®","description":"Zenaida asiatica","category":"hotCoffee","price":"$1739.54","stock": "10","pictureUrl":"https://globalassets.starbucks.com/assets/2c8f40a3b37648539d74e271479b3f9a.jpg?impolicy=1by1_wide_topcrop_630"},
{"id":4,"title":"VIA® Italian Roast","description":"Oryx gazella callotis","category":"homeCoffee", "price":"$9410.60","stock": "5","pictureUrl":"https://globalassets.starbucks.com/assets/4c4bd49d19984ce29cc5f158a0242687.jpg?impolicy=1by1_tight_288"},
{"id":5,"title":"Caffé Misto","description":"Oryx gazella callotis","category":"hotCoffee", "price":"$2154.85","stock": "5","pictureUrl":"https://globalassets.starbucks.com/assets/d668acbc691b47249548a3eeac449916.jpg?impolicy=1by1_tight_288"},
{"id":6,"title":"Cappuccino","description":"Odocoileus hemionus","category":"hotCoffee", "price":"$3987.81","stock": "9","pictureUrl":"https://globalassets.starbucks.com/assets/77801559b72b469583f4d484adc1bfa7.jpg?impolicy=1by1_tight_288"},
{"id":7,"title":"VIA® Quo Lux","description":"Alligator mississippiensis","category":"homeCoffee", "price":"$2448.17","stock": "250","pictureUrl":"https://globalassets.starbucks.com/assets/3f85a9b6cbdf4e1c90ad02bb8be1acfa.jpg?impolicy=1by1_tight_288"},
{"id":8,"title":"Espresso Con Panna","description":"Tadorna tadorna","category":"hotCoffee", "price":"$1797.58","stock": "2125","pictureUrl":"https://globalassets.starbucks.com/assets/55083489399e435e81cf41d899051a5a.jpg?impolicy=1by1_tight_288"},
{"id":9,"title":"VIA® Colombia","description":"Ornithorhynchus anatinus","category":"homeCoffee", "price":"$9760.83","stock": "3","pictureUrl":"https://globalassets.starbucks.com/assets/f8886602b0d64cc38cee1d0908ffe125.jpg?impolicy=1by1_tight_288"},
{"id":10,"title":"VIA® Sweetened Ice Coffee","description":"Phoenicopterus ruber","category":"homeCoffee", "price":"$5406.08","stock": "1","pictureUrl":"https://globalassets.starbucks.com/assets/713f533b151b4d4d92d76eddeb06d4a2.jpg?impolicy=1by1_tight_288"}]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    })
}

export const getItemById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 2000)
    })
}

//exports const getItem(id)
