
let urun_1 = {
    urun_adi: 'Lal Iç Cephe Plastik Duvar Boyası 20 Kg',
    urun_fiyat: 226.71,
    urun_resmi: 'https://n11scdn.akamaized.net/a1/602_857/03/94/11/00/IMG-7619461148345766653.jpg',
    urun_aciklamasi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nulla nobis obcaecati adipisci, voluptatem debitis modi nesciunt veritatis magnam vel, exercitationem soluta quibusdam quod fugiat beatae architecto suscipit inventore officia repellat minima saepe quisquam! A laboriosam explicabo ad maiores? Labore quod ducimus harum aliquid deserunt accusantium repellat quas mollitia maxime.',
    
}

let urun_2 = {
    urun_adi: 'Qcy T17 Bluetooth 5.1 Kulak İçi Kulaklık',
    urun_fiyati: 249.00,
    urun_resmi: 'https://n11scdn.akamaized.net/a1/602_857/10/51/52/98/IMG-7909093112363410043.jpg',
    urun_aciklamasi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nulla nobis obcaecati adipisci, voluptatem debitis modi nesciunt veritatis magnam vel, exercitationem soluta quibusdam quod fugiat beatae architecto suscipit inventore officia repellat minima saepe quisquam! A laboriosam explicabo ad maiores? Labore quod ducimus harum aliquid deserunt accusantium repellat quas mollitia maxime.',
}

let urun_3 = {
    urun_adi: 'Hypergear Freedom BT150 Bluetooth 4.1 Kulak İçi Kulaklık',
    urun_fiyati: 149.90,
    urun_resmi: 'https://n11scdn.akamaized.net/a1/602_857/02/20/45/43/07546654.jpg',
    urun_aciklamasi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nulla nobis obcaecati adipisci, voluptatem debitis modi nesciunt veritatis magnam vel, exercitationem soluta quibusdam quod fugiat beatae architecto suscipit inventore officia repellat minima saepe quisquam! A laboriosam explicabo ad maiores? Labore quod ducimus harum aliquid deserunt accusantium repellat quas mollitia maxime.'
}


// Array içinde obje kullanımı 

let urunler = [
    {
        urun_adi: 'Lal Iç Cephe Plastik Duvar Boyası 20 Kg',
        urun_fiyat: 226.71,
        urun_resmi: 'https://n11scdn.akamaized.net/a1/602_857/03/94/11/00/IMG-7619461148345766653.jpg',
        urun_aciklamasi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nulla nobis obcaecati adipisci, voluptatem debitis modi nesciunt veritatis magnam vel, exercitationem soluta quibusdam quod fugiat beatae architecto suscipit inventore officia repellat minima saepe quisquam! A laboriosam explicabo ad maiores? Labore quod ducimus harum aliquid deserunt accusantium repellat quas mollitia maxime.',
        
    },
    {
        urun_adi: 'Qcy T17 Bluetooth 5.1 Kulak İçi Kulaklık',
        urun_fiyati: 249.00,
        urun_resmi: 'https://n11scdn.akamaized.net/a1/602_857/10/51/52/98/IMG-7909093112363410043.jpg',
        urun_aciklamasi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nulla nobis obcaecati adipisci, voluptatem debitis modi nesciunt veritatis magnam vel, exercitationem soluta quibusdam quod fugiat beatae architecto suscipit inventore officia repellat minima saepe quisquam! A laboriosam explicabo ad maiores? Labore quod ducimus harum aliquid deserunt accusantium repellat quas mollitia maxime.',
    },
    {
        urun_adi: 'Hypergear Freedom BT150 Bluetooth 4.1 Kulak İçi Kulaklık',
        urun_fiyati: 149.90,
        urun_resmi: 'https://n11scdn.akamaized.net/a1/602_857/02/20/45/43/07546654.jpg',
        urun_aciklamasi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nulla nobis obcaecati adipisci, voluptatem debitis modi nesciunt veritatis magnam vel, exercitationem soluta quibusdam quod fugiat beatae architecto suscipit inventore officia repellat minima saepe quisquam! A laboriosam explicabo ad maiores? Labore quod ducimus harum aliquid deserunt accusantium repellat quas mollitia maxime.'
    }
    
    
]

// Urun 1 

let product_1_img = document.getElementById('product_1_img').src = urun_1.urun_resmi
let product_1_title = document.getElementById('product_1_title').innerHTML = urun_1.urun_adi
let product_1_description = document.getElementById('product_1_description').innerHTML = urun_1.urun_aciklamasi
let product_1_price = document.getElementById('product_1_price').innerText = 'Fiyatı: '+ urun_1.urun_fiyat + ' TL';

// Urun 2
let product_2_img = document.getElementById('product_2_img').src = urun_2.urun_resmi
let product_2_title = document.getElementById('product_2_title').innerHTML = urun_2.urun_adi
let product_2_description = document.getElementById('product_2_description').innerHTML = urun_2.urun_aciklamasi




let i = 2;
// Urun 3
let product_3_img = document.getElementById('product_3_img').src = urunler[i].urun_resmi
let product_3_title = document.getElementById('product_3_title').innerHTML = urunler[i].urun_adi
let product_3_description = document.getElementById('product_3_description').innerHTML = urunler[i].urun_aciklamasi

