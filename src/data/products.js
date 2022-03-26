const products = [{"id":1,"title":"Matsoft","description":"Ceratotherium simum","price":"$5412.27","pictureUrl":"http://dummyimage.com/101x100.png/cc0000/ffffff"},
{"id":2,"title":"Subin","description":"Odocoileus hemionus","price":"$3402.05","pictureUrl":"http://dummyimage.com/202x100.png/cc0000/ffffff"},
{"id":3,"title":"Alpha","description":"Zenaida asiatica","price":"$1739.54","pictureUrl":"http://dummyimage.com/149x100.png/dddddd/000000"},
{"id":4,"title":"Aerified","description":"Oryx gazella callotis","price":"$9410.60","pictureUrl":"http://dummyimage.com/240x100.png/dddddd/000000"},
{"id":5,"title":"Viva","description":"Oryx gazella callotis","price":"$2154.85","pictureUrl":"http://dummyimage.com/192x100.png/cc0000/ffffff"},
{"id":6,"title":"Fix San","description":"Odocoileus hemionus","price":"$3987.81","pictureUrl":"http://dummyimage.com/249x100.png/ff4444/ffffff"},
{"id":7,"title":"Quo Lux","description":"Alligator mississippiensis","price":"$2448.17","pictureUrl":"http://dummyimage.com/119x100.png/5fa2dd/ffffff"},
{"id":8,"title":"Hatity","description":"Tadorna tadorna","price":"$1797.58","pictureUrl":"http://dummyimage.com/225x100.png/dddddd/000000"},
{"id":9,"title":"Pannier","description":"Ornithorhynchus anatinus","price":"$9760.83","pictureUrl":"http://dummyimage.com/109x100.png/cc0000/ffffff"},
{"id":10,"title":"Fintone","description":"Phoenicopterus ruber","price":"$5406.08","pictureUrl":"http://dummyimage.com/219x100.png/ff4444/ffffff"}]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
