import Immutable from 'immutable';

export const defaultGPUs = new Immutable.List(
  [
    // -----
    // GTX
    // -----
    {
      vendor: 'NVIDIA',
      name:'Geforce GTX 1060 6GB',
      hashRate:23,
      power: 120,
      price: 264.99,
      pictureUrl: 'products/GPUs/GeForce_GTX_1060.png',
      productUrl: 'https://www.amazon.com/EVGA-GeForce-Support-Graphics-06G-P4-6161-KR/dp/B01IPVSGEC',
      count:1,
    },
    {
      vendor: 'NVIDIA',
      name:'GTX 1050 4GB',
      hashRate:15,
      power: 190,
      price: 230.63,
      pictureUrl: 'products/GPUs/gtx_1050_ti.jpg',
      productUrl: 'https://www.amazon.com/gp/product/B076CMN8DJ/',
      count:1,
    },
    // {
    //   vendor: 'NVIDIA',
    //   name:'GTX 960 ?',
    //   hashRate:17,
    //   power: 140,
    //   price: 220,
    //   count:1,
    // },
    // -----
    // AMD RX
    // -----
    {
      vendor: 'AMD',
      name:'RX 580 4GB',
      hashRate:22.6,
      power: 130,
      price: 549.99,
      pictureUrl: 'products/GPUs/rx_580_4GB.jpg',
      productUrl: 'https://www.amazon.com/Radeon-Dual-fan-GDDR5-Graphics-DUAL-RX580-O4G/dp/B071CMPRZZ/',
      count:1,

    },
    // {
    //   vendor: 'AMD',
    //   name:'Rx 480',
    //   hashRate:20,
    //   power: 140,
    //   price: 200,
    //   count:1,
    // },
    // -----
    // AMD R9
    // -----
    // {
    //   vendor: 'AMD',
    //   name:'R9 390',
    //   hashRate:29.0,
    //   power: 0,
    //   price: 0,
    //   count:1,
    // },
    // {
    //   vendor: 'AMD',
    //   name:'R9 290x',
    //   hashRate:22,
    //   power: 163,
    //   price: 250,
    //   count:1,
    // },
    // {
    //   vendor: 'AMD',
    //   name:'R9 280x',
    //   hashRate:22.5,
    //   power: 0,
    //   price: 0,
    //   count:1,
    // },
    // -----
    // AMD HD
    // -----
    // {
    //   vendor: 'AMD',
    //   name:'HD 7970',
    //   hashRate:20.1,
    //   power: 0,
    //   price: 0,
    //   count:1,
    // },
    // {
    //   vendor: 'AMD',
    //   name:'HD 7950',
    //   hashRate:15.3,
    //   power: 0,
    //   price: 0,
    //   pictureUrl: 'products/GPUs/.png',
    //   productUrl: '',
    //   count:1,
    // },
  ]
);

export const defaultPSUs = new Immutable.List(
  [
    {
        name: 'CX750M',
        vendor: 'Corsair',
        price: 79.99,
        powerSupply: 750,
        pictureUrl: 'products/PSUs/Corsair_CX750M.jpg',
        productUrl: 'https://www.amazon.com/Corsair-Bronze-Certified-Modular-CP-9020061-NA/dp/B00ALK3KEM',
    },
    {
        name: 'CX850M',
        vendor: 'Corsair',
        price: 109,
        powerSupply: 850,
        pictureUrl: 'products/PSUs/Corsair_CX850M.jpg',
        productUrl: 'https://www.amazon.com/Corsair-Bronze-Certified-Non-Modular-CP-9020123-NA/dp/B00OVCJKWC',
    },
    {
        name: '750 GQ',
        vendor: 'EVGA',
        price: 94.99,
        powerSupply: 750,
        pictureUrl: 'products/PSUs/EVGA_750GQ.jpg',
        productUrl: 'https://www.amazon.com/EVGA-Modular-Warranty-Supply-210-GQ-0750-V1/dp/B017HA3RGE',
    },
    {
        name: 'placeholder test',
        vendor: 'EVGA',
        price: 94.99,
        powerSupply: 750,
    },
  ]
);

export const defaultMotherboards = new Immutable.List(
  [
    {
      name: 'GA-B250M-DS3H',
      vendor: 'GIGABYTE',
      socket: 'LGA 1151',
      pci: 3,
      price: 59.99,
      power: 50,
      formFactor: 'Micro ATX',
      pictureUrl: 'products/motherboards/GA-B250M-DS3H.png',
      productUrl: 'https://www.amazon.com/GIGABYTE-GA-B250M-DS3H-LGA1151-Intel-Motherboard/dp/B01N2WG23X',
    },
    {
      name: 'PRIME Z270-A',
      vendor: 'ASUS',
      socket: 'LGA 1151',
      pci: 5,
      price: 159,
      power: 60,
      formFactor: 'ATX',
      pictureUrl: 'products/motherboards/PRIME-Z270-A.png',
      productUrl: 'https://www.amazon.com/ASUS-PRIME-Z270-LGA1151-Motherboard/dp/B01NGTYV2Q',
    }
  ]
);
