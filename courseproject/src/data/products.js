import homePageProduct1 from '../images/homePageProduct1.webp'
import homePageProduct2 from '../images/homePageProduct2.webp'
import homePageProduct3 from '../images/homePageProduct3.webp'
import homePageProduct4 from '../images/homePageProduct4.webp'
import homePageProduct5 from '../images/homePageProduct5.webp'
import homePageProduct6 from '../images/homePageProduct6.webp'
import homePageProduct7 from '../images/homePageProduct7.webp'
import homePageProduct8 from '../images/homePageProduct8.webp'
import homePageProduct9 from '../images/homePageProduct9.webp'
import homePageProduct10 from '../images/homePageProduct10.webp'
import homePageProduct11 from '../images/homePageProduct11.webp'
import homePageProduct12 from '../images/homePageProduct12.webp'
import synthesizer1 from '../images/synthesizer1.webp'
import synthesizer2 from '../images/synthesizer2.webp'
import synthesizer3 from '../images/synthesizer3.webp'
import synthesizer4 from '../images/synthesizer4.webp'
import synthesizer5 from '../images/synthesizer5.webp'
import headphones1 from '../images/headphones1.webp'
import headphones2 from '../images/headphones2.webp'
import headphones3 from '../images/headphones3.webp'
import headphones4 from '../images/headphones4.webp'
import headphones5 from '../images/headphones5.webp'
import drums1 from '../images/drums1.webp'
import drums2 from '../images/drums2.webp'
import drums3 from '../images/drums3.webp'
import drums4 from '../images/drums4.webp'
import drums5 from '../images/drums5.webp'
import drums6 from '../images/drums6.webp'
import audiointerfaces1 from '../images/audiointerfaces1.webp'
import audiointerfaces2 from '../images/audiointerfaces2.webp'
import audiointerfaces3 from '../images/audiointerfaces3.webp'
import audiointerfaces4 from '../images/audiointerfaces4.webp'
import audiointerfaces5 from '../images/audiointerfaces5.webp'
import microphones1 from '../images/microphones1.webp'
import microphones2 from '../images/microphones2.webp'
import microphones3 from '../images/microphones3.webp'

export const products = [
    {
        id: 543543,
        type: 'guitars',
        name: 'Гитара классическая LaMancha Rubinito LSM',
        presence: true,
        price: 519,
        image: homePageProduct1,
        label: 'popular',
        description: 'Классическая гитара LaMancha Rubinito LSM предлагает отличный звук и комфортный хват. Идеально подходит для начинающих музыкантов. \n\nХарактеристики:\n- Материал корпуса: Сосна\n- Материал грифа: Клен\n- Материал накладки: Махагон\n- Струны: Нейлоновые\n- Длина мензуры: 650 мм\n- Вес: 1.8 кг',
        specifications: {
            bodyMaterial: "Сосна",
            neckMaterial: "Клен",
            fingerboardMaterial: "Махагон",
            strings: "Нейлоновые",
            scaleLength: "650 мм",
            weight: "1.8 кг"
        }
    },
    {
        id: 624624,
        type: 'microphones',
        name: 'Микрофон Electro-Voice CO9',
        presence: true,
        price: 280,
        image: homePageProduct2,
        label: 'popular',
        description: 'Микрофон Electro-Voice CO9 обеспечивает высокое качество записи благодаря своей чувствительности и надежной конструкции. \n\nХарактеристики:\n- Тип: Динамический\n- Частотный диапазон: 50 - 15000 Гц\n- Чувствительность: -54 дБ\n- Разъем: XLR\n- Вес: 0.5 кг',
        specifications: {
            type: "Динамический",
            frequencyResponse: "50 - 15000 Гц",
            sensitivity: "-54 дБ",
            connector: "XLR",
            weight: "0.5 кг"
        }
    },
    {
        id: 366423,
        type: 'guitars',
        name: 'Гитара акустическая Cort AD810SSB',
        presence: false,
        price: 500,
        image: homePageProduct3,
        label: 'popular',
        description: 'Акустическая гитара Cort AD810SSB сочетает в себе великолепное звучание и привлекательный дизайн, идеально подходит для сценических выступлений. \n\nХарактеристики:\n- Материал корпуса: Сосна\n- Материал грифа: Клен\n- Материал накладки: Розовое дерево\n- Струны: Стальные\n- Длина мензуры: 640 мм\n- Вес: 2.0 кг',
        specifications: {
            bodyMaterial: "Сосна",
            neckMaterial: "Клен",
            fingerboardMaterial: "Розовое дерево",
            strings: "Стальные",
            scaleLength: "640 мм",
            weight: "2.0 кг"
        }
    },
    {
        id: 434245,
        type: 'guitars',
        name: 'Гитара акустическая Cort AD810 OP',
        presence: true,
        price: 444,
        image: homePageProduct4,
        label: 'popular',
        description: 'Эта акустическая гитара Cort AD810 OP известна своим теплым звуком и отличной динамикой, что делает её идеальным выбором для любых музыкальных жанров. \n\nХарактеристики:\n- Материал корпуса: Сосна\n- Материал грифа: Клен\n- Материал накладки: Розовое дерево\n- Струны: Стальные\n- Длина мензуры: 640 мм\n- Вес: 1.9 кг',
        specifications: {
            bodyMaterial: "Сосна",
            neckMaterial: "Клен",
            fingerboardMaterial: "Розовое дерево",
            strings: "Стальные",
            scaleLength: "640 мм",
            weight: "1.9 кг"
        }
    },
    {
        id: 526345,
        type: 'guitars',
        name: 'Электрогитара Ibanez GIO GRG121DX-BKF Black Flat',
        presence: true,
        price: 1049,
        image: homePageProduct5,
        label: 'popular',
        description: 'Электрогитара Ibanez GIO GRG121DX-BKF предлагает мощный звук и отличную играбельность, идеально подходит для рок-музыки. \n\nХарактеристики:\n- Материал корпуса: Сосна\n- Материал грифа: Клен\n- Материал накладки: Розовое дерево\n- П pickups: Humbucker\n- Длина мензуры: 648 мм\n- Вес: 3.5 кг',
        specifications: {
            bodyMaterial: "Сосна",
            neckMaterial: "Клен",
            fingerboardMaterial: "Розовое дерево",
            pickups: "Humbucker",
            scaleLength: "648 мм",
            weight: "3.5 кг"
        }
    },
    {
        id: 864764,
        type: 'synthesizers',
        name: 'Синтезатор Casio CT-S200BK',
        presence: true,
        price: 821,
        image: homePageProduct6,
        label: 'popular',
        description: 'Синтезатор Casio CT-S200BK с множеством звуковых эффектов и встроенных ритмов, идеально подходит для начинающих музыкантов. \n\nХарактеристики:\n- Клавиши: 61\n- Полифония: 48\n- Звуки: 400\n- Ритмы: 77\n- Вес: 3.3 кг',
        specifications: {
            keys: "61",
            polyphony: "48",
            sounds: "400",
            rhythms: "77",
            weight: "3.3 кг"
        }
    },
    {
        id: 321432,
        type: 'guitars',
        name: 'Гитара электроакустическая Eko Ranger CW EQ Sunburst',
        presence: true,
        price: 825,
        image: homePageProduct7,
        label: 'new',
        description: 'Электроакустическая гитара Eko Ranger CW EQ Sunburst предлагает богатый звук и возможность подключения к усилителю, что делает её универсальным инструментом. \n\nХарактеристики:\n- Материал корпуса: Сосна\n- Материал грифа: Клен\n- Материал накладки: Розовое дерево\n- Электроника: Встроенный преамп\n- Струны: Стальные\n- Вес: 2.2 кг',
        specifications: {
            bodyMaterial: "Сосна",
            neckMaterial: "Клен",
            fingerboardMaterial: "Розовое дерево",
            electronics: "Встроенный преамп",
            strings: "Стальные",
            weight: "2.2 кг"
        }
    },
    {
        id: 65436543,
        type: 'guitars',
        name: 'Гитара акустическая Eko Ranger 6 Black',
        presence: true,
        price: 900,
        image: homePageProduct8,
        label: 'new',
        description: 'Акустическая гитара Eko Ranger 6 Black сочетает стильный дизайн с отличным звуком, идеально подходит для игры в любом жанре. \n\nХарактеристики:\n- Материал корпуса: Сосна\n- Материал грифа: Клен\n- Материал накладки: Розовое дерево\n- Струны: Стальные\n- Длина мензуры: 650 мм\n- Вес: 2.0 кг',
        specifications: {
            bodyMaterial: "Сосна",
            neckMaterial: "Клен",
            fingerboardMaterial: "Розовое дерево",
            strings: "Стальные",
            scaleLength: "650 мм",
            weight: "2.0 кг"
        }
    },
    {
        id: 3546,
        type: 'guitars',
        name: 'Гитара акустическая Eko Ranger 6 Blue Sunburst',
        presence: true,
        price: 920,
        image: homePageProduct9,
        label: 'new',
        description: 'Eko Ranger 6 Blue Sunburst - это гитара с красивым дизайном и ярким звуком, которая привлечет внимание слушателей. \n\nХарактеристики:\n- Материал корпуса: Сосна\n- Материал грифа: Клен\n- Материал накладки: Розовое дерево\n- Струны: Стальные\n- Длина мензуры: 650 мм\n- Вес: 2.1 кг',
        specifications: {
            bodyMaterial: "Сосна",
            neckMaterial: "Клен",
            fingerboardMaterial: "Розовое дерево",
            strings: "Стальные",
            scaleLength: "650 мм",
            weight: "2.1 кг"
        }
    },
    {
        id: 763673,
        type: 'guitars',
        name: 'Гитара акустическая Eko Ranger 6 Brown Sunburst',
        presence: false,
        price: 900,
        image: homePageProduct10,
        label: 'new',
        description: 'Эта гитара Eko Ranger 6 Brown Sunburst предлагает теплый звук и элегантный внешний вид, идеальна для сольных выступлений. \n\nХарактеристики:\n- Материал корпуса: Сосна\n- Материал грифа: Клен\n- Материал накладки: Розовое дерево\n- Струны: Стальные\n- Длина мензуры: 650 мм\n- Вес: 2.0 кг',
        specifications: {
            bodyMaterial: "Сосна",
            neckMaterial: "Клен",
            fingerboardMaterial: "Розовое дерево",
            strings: "Стальные",
            scaleLength: "650 мм",
            weight: "2.0 кг"
        }
    },
    {
        id: 765765,
        type: 'guitars',
        name: 'Гитара акустическая Eko Ranger 6 Natural',
        presence: true,
        price: 870,
        image: homePageProduct11,
        label: 'new',
        description: 'Гитара Eko Ranger 6 Natural предлагает чистое звучание и натуральный вид, что делает её идеальным выбором для акустической музыки. \n\nХарактеристики:\n- Материал корпуса: Сосна\n- Материал грифа: Клен\n- Материал накладки: Розовое дерево\n- Струны: Стальные\n- Длина мензуры: 650 мм\n- Вес: 1.9 кг',
        specifications: {
            bodyMaterial: "Сосна",
            neckMaterial: "Клен",
            fingerboardMaterial: "Розовое дерево",
            strings: "Стальные",
            scaleLength: "650 мм",
            weight: "1.9 кг"
        }
    },
    {
        id: 876587,
        type: 'guitars',
        name: 'Гитара акустическая Eko Ranger 6 Red Sunburst',
        presence: true,
        price: 790,
        image: homePageProduct12,
        label: 'new',
        description: 'Eko Ranger 6 Red Sunburst - это яркая гитара с мощным звуком, которая станет отличным дополнением к любой музыкальной коллекции. \n\nХарактеристики:\n- Материал корпуса: Сосна\n- Материал гриф: Клен\n- Материал накладки: Розовое дерево\n- Струны: Стальные\n- Длина мензуры: 650 мм\n- Вес: 2.0 кг',
        specifications: {
            bodyMaterial: "Сосна",
            neckMaterial: "Клен",
            fingerboardMaterial: "Розовое дерево",
            strings: "Стальные",
            scaleLength: "650 мм",
            weight: "2.0 кг"
        }
    },
    {
        id: 321431,
        type: 'synthesizers',
        name: 'Синтезатор Kurzweil KP10 LB',
        presence: true,
        price: 307,
        image: synthesizer1,
        description: 'Синтезатор Kurzweil KP10 LB предлагает широкий диапазон звуков и простоту в использовании, отлично подходит для учебы и творчества. \n\nХарактеристики:\n- Клавиши: 61\n- Полифония: 64\n- Звуки: 300\n- Ритмы: 100\n- Вес: 3.5 кг',
        specifications: {
            keys: "61",
            polyphony: "64",
            sounds: "300",
            rhythms: "100",
            weight: "3.5 кг"
        }
    },
    {
        id: 2501234,
        type: 'synthesizers',
        name: 'Синтезатор Terris TK-250 BK',
        presence: true,
        price: 234,
        image: synthesizer2,
        description: 'Синтезатор Terris TK-250 BK - это доступный инструмент с хорошим звучанием, идеально подходит для начинающих музыкантов. \n\nХарактеристики:\n- Клавиши: 54\n- Полифония: 32\n- Звуки: 128\n- Ритмы: 50\n- Вес: 2.5 кг',
        specifications: {
            keys: "54",
            polyphony: "32",
            sounds: "128",
            rhythms: "50",
            weight: "2.5 кг"
        }
    },
    {
        id: 2501235,
        type: 'synthesizers',
        name: 'Синтезатор Arturia AstroLab',
        presence: true,
        price: 6967,
        image: synthesizer3,
        description: 'Arturia AstroLab - это профессиональный синтезатор с высоким качеством звука и множеством возможностей для создания музыки. \n\nХарактеристики:\n- Клавиши: 49\n- Полифония: 128\n- Звуки: 500\n- Ритмы: 200\n- Вес: 4.0 кг',
        specifications: {
            keys: "49",
            polyphony: "128",
            sounds: "500",
            rhythms: "200",
            weight: "4.0 кг"
        }
    },
    {
        id: 2501236,
        type: 'synthesizers',
        name: 'Синтезатор Yamaha PSR-E473',
        presence: true,
        price: 3232,
        image: synthesizer4,
        description: 'Синтезатор Yamaha PSR-E473 предлагает богатый набор функций и эффектов для создания музыки в разных стилях. \n\nХарактеристики:\n- Клавиши: 61\n- Полифония: 64\n- Звуки: 830\n- Ритмы: 300\n- Вес: 4.5 кг',
        specifications: {
            keys: "61",
            polyphony: "64",
            sounds: "830",
            rhythms: "300",
            weight: "4.5 кг"
        }
    },
    {
        id: 2501237,
        type: 'synthesizers',
        name: 'Синтезатор Casio CT-S500',
        presence: true,
        price: 2097,
        image: synthesizer5,
        description: 'Синтезатор Casio CT-S500 с множеством звуков и стилей идеально подходит для живых выступлений и создания музыки. \n\nХарактеристики:\n- Клавиши: 61\n- Полифония: 64\n- Звуки: 800\n- Ритмы: 200\n- Вес: 3.8 кг',
        specifications: {
            keys: "61",
            polyphony: "64",
            sounds: "800",
            rhythms: "200",
            weight: "3.8 кг"
        }
    },
    {
        id: 2601230,
        type: 'headphones',
        name: 'Наушники Beyerdynamic DT 770 Pro 250 Ohm',
        presence: true,
        price: 787,
        image: headphones1,
        description: 'Наушники Beyerdynamic DT 770 Pro 250 Ohm обеспечивают высокое качество звука и комфорт во время длительного использования. \n\nХарактеристики:\n- Тип: Закрытые\n- Частотный диапазон: 5 - 35000 Гц\n- Импеданс: 250 Ом\n- Чувствительность: 96 дБ\n- Вес: 0.25 кг',
        specifications: {
            type: "Закрытые",
            frequencyResponse: "5 - 35000 Гц",
            impedance: "250 Ом",
            sensitivity: "96 дБ",
            weight: "0.25 кг"
        }
    },
    {
        id: 2601231,
        type: 'headphones',
        name: 'Наушники Beyerdynamic DT 990 Pro 250 Ohm',
        presence: true,
        price: 910,
        image: headphones2,
        description: 'Beyerdynamic DT 990 Pro 250 Ohm - это открытые наушники с детализированным звучанием, идеально подходят для студийной работы. \n\nХарактеристики:\n- Тип: Открытые\n- Частотный диапазон: 5 - 35000 Гц\n- Импеданс: 250 Ом\n- Чувствительность: 96 дБ\n- Вес: 0.25 кг',
        specifications: {
            type: "Открытые",
            frequencyResponse: "5 - 35000 Гц",
            impedance: "250 Ом",
            sensitivity: "96 дБ",
            weight: "0.25 кг"
        }
    },
    {
        id: 2601232,
        type: 'headphones',
        name: 'Наушники Beyerdynamic DT 770 Pro 80 Ohm',
        presence: true,
        price: 787,
        image: headphones3,
        description: 'Наушники Beyerdynamic DT 770 Pro 80 Ohm предлагают сбалансированный звук и отличную изоляцию, что делает их идеальными для студийной работы. \n\nХарактеристики:\n- Тип: Закрытые\n- Частотный диапазон: 5 - 35000 Гц\n- Импеданс: 80 Ом\n- Чувствительность: 96 дБ\n- Вес: 0.25 кг',
        specifications: {
            type: "Закрытые",
            frequencyResponse: "5 - 35000 Гц",
            impedance: "80 Ом",
            sensitivity: "96 дБ",
            weight: "0.25 кг"
        }
    },
    {
        id: 2601233,
        type: 'headphones',
        name: 'Наушники Shure SE215-CL-EFS',
        presence: true,
        price: 561,
        image: headphones4,
        description: 'Наушники Shure SE215-CL-EFS снабжены качественными драйверами, обеспечивают превосходное качество звука и надежную изоляцию. \n\nХарактеристики:\n- Тип: Индивидуальные\n- Частотный диапазон: 22 - 17000 Гц\n- Чувствительность: 107 дБ\n- Разъем: 3.5 мм\n- Вес: 0.1 кг',
        specifications: {
            type: "Индивидуальные",
            frequencyResponse: "22 - 17000 Гц",
            sensitivity: "107 дБ",
            connector: "3.5 мм",
            weight: "0.1 кг"
        }
    },
    {
        id: 2601234,
        type: 'headphones',
        name: 'Наушники Axelvox HD710',
        presence: true,
        price: 171,
        image: headphones5,
        description: 'Axelvox HD710 - это доступные наушники с хорошим качеством звука, идеально подходят для повседневного использования. \n\nХарактеристики:\n- Тип: Закрытые\n- Частотный диапазон: 20 - 20000 Гц\n- Импеданс: 32 Ом\n- Чувствительность: 105 дБ\n- Вес: 0.2 кг',
        specifications: {
            type: "Закрытые",
            frequencyResponse: "20 - 20000 Гц",
            impedance: "32 Ом",
            sensitivity: "105 дБ",
            weight: "0.2 кг"
        }
    },
    {
        id: 2701230,
        type: 'drums',
        name: 'Ударная установка Tama Superstar Classic CL52KRS-CFF',
        presence: true,
        price: 6323,
        image: drums1,
        description: 'Ударная установка Tama Superstar Classic обеспечивает мощное звучание и высокое качество сборки, идеально подходит для профессиональных музыкантов. \n\nХарактеристики:\n- Материал: Бук\n- Количество барабанов: 5\n- Включенные тарелки: 2\n- Аппаратное обеспечение: В комплекте\n- Вес: 20.0 кг',
        specifications: {
            material: "Бук",
            numberOfDrums: "5",
            includedCymbals: "2",
            hardware: "В комплекте",
            weight: "20.0 кг"
        }
    },
    {
        id: 2701231,
        type: 'drums',
        name: 'Ударная установка Tama Superstar Classic CL52KRS-TPB',
        presence: true,
        price: 6323,
        image: drums2,
        description: 'Tama Superstar Classic CL52KRS-TPB - это ударная установка с отличным звучанием и возможностью настройки под любые музыкальные стили. \n\nХарактеристики:\n- Материал: Бук\n- Количество барабанов: 5\n- Включенные тарелки: 2\n- Аппаратное обеспечение: В комплекте\n- Вес: 20.0 кг',
        specifications: {
            material: "Бук",
            numberOfDrums: "5",
            includedCymbals: "2",
            hardware: "В комплекте",
            weight: "20.0 кг"
        }
    },
    {
        id: 2701232,
        type: 'drums',
        name: 'Ударная установка Tama Starclassic MA42TZS-PBK',
        presence: false,
        price: 21950,
        image: drums3,
        description: 'Tama Starclassic MA42TZS-PBK - это профессиональная ударная установка с утонченным звучанием и высокой чувствительностью. \n\nХарактеристики:\n- Материал: Клен\n- Количество барабанов: 6\n- Включенные тарелки: 3\n- Аппаратное обеспечение: В комплекте\n- Вес: 25.0 кг',
        specifications: {
            material: "Клен",
            numberOfDrums: "6",
            includedCymbals: "3",
            hardware: "В комплекте",
            weight: "25.0 кг"
        }
    },
    {
        id: 2701233,
        type: 'drums',
        name: 'Ударная установка Tama Starclassic WBS52RZS-LOR',
        presence: true,
        price: 19303,
        image: drums4,
        description: 'Ударная установка Tama Starclassic WBS52RZS-LOR предлагает невероятную динамику и мощное звучание, подходит для любых жанров. \n\nХарактеристики:\n- Материал: Клен\n- Количество барабанов: 6\n- Включенные тарелки: 3\n- Аппаратное обеспечение: В комплекте\n- Вес: 25.0 кг',
        specifications: {
            material: "Клен",
            numberOfDrums: "6",
            includedCymbals: "3",
            hardware: "В комплекте",
            weight: "25.0 кг"
        }
    },
    {
        id: 2701234,
        type: 'drums',
        name: 'Ударная установка Tama Superstar Classic CL52KRS-CFF',
        presence: true,
        price: 18382,
        image: drums5,
        description: 'Эта ударная установка Tama Superstar Classic сочетает в себе качество и надежность, идеально подходит для живых выступлений. \n\nХарактеристики:\n- Материал: Бук\n- Количество барабанов: 5\n- Включенные тарелки: 2\n- Аппаратное обеспечение: В комплекте\n- Вес: 20.0 кг',
        specifications: {
            material: "Бук",
            numberOfDrums: "5",
            includedCymbals: "2",
            hardware: "В комплекте",
            weight: "20.0 кг"
        }
    },
    {
        id: 2701235,
        type: 'drums',
        name: 'Ударная установка Pearl Export EXX725S/C',
        presence: true,
        price: 15999,
        image: drums6,
        description: 'Ударная установка Pearl Export EXX725S/C - это качественный инструмент, который подходит как для новичков, так и для опытных музыкантов. \n\nХарактеристики:\n- Материал: Поперечная сосна\n- Количество барабанов: 5\n- Включенные тарелки: 2\n- Аппаратное обеспечение: В комплекте\n- Вес: 22.0 кг',
        specifications: {
            material: "Поперечная сосна",
            numberOfDrums: "5",
            includedCymbals: "2",
            hardware: "В комплекте",
            weight: "22.0 кг"
        }
    },
    {
        id: 2801321,
        type: 'audiointerfaces',
        name: 'Аудиоинтерфейс Behringer UMC22',
        presence: true,
        price: 123,
        image: audiointerfaces1,
        description: 'Аудиоинтерфейс Behringer UMC22 идеален для записи и воспроизведения звука с высоким качеством, подходит для домашней студии. \n\nХарактеристики:\n- Каналы: 2\n- Частота дискретизации: 48 kHz\n- Глубина бит: 24-бит\n- Подключение: USB\n- Вес: 0.5 кг',
        specifications: {
            channels: "2",
            sampleRate: "48 kHz",
            bitDepth: "24-bit",
            connectivity: "USB",
            weight: "0.5 кг"
        }
    },
    {
        id: 2801322,
        type: 'audiointerfaces',
        name: 'Аудиоинтерфейс Focusrite Scarlett 2i2',
        presence: true,
        price: 199,
        image: audiointerfaces2,
        description: 'Focusrite Scarlett 2i2 - это профессиональный аудиоинтерфейс с высококачественными преампами и отличной совместимостью. \n\nХарактеристики:\n- Каналы: 2\n- Частота дискретизации: 192 kHz\n- Глубина бит: 24-бит\n- Подключение: USB\n- Вес: 0.7 кг',
        specifications: {
            channels: "2",
            sampleRate: "192 kHz",
            bitDepth: "24-bit",
            connectivity: "USB",
            weight: "0.7 кг"
        }
    },
    {
        id: 2801323,
        type: 'audiointerfaces',
        name: 'Аудиоинтерфейс PreSonus AudioBox USB 96',
        presence: true,
        price: 149,
        image: audiointerfaces3,
        description: 'PreSonus AudioBox USB 96 - это универсальный аудиоинтерфейс, который предлагает отличное качество звука и простоту в использовании. \n\nХарактеристики:\n- Каналы: 2\n- Частота дискретизации: 96 kHz\n- Глубина бит: 24-бит\n- Подключение: USB\n- Вес: 1.0 кг',
        specifications: {
            channels: "2",
            sampleRate: "96 kHz",
            bitDepth: "24-bit",
            connectivity: "USB",
            weight: "1.0 кг"
        }
    },
    {
        id: 2801324,
        type: 'audiointerfaces',
        name: 'Аудиоинтерфейс Steinberg UR22C',
        presence: true,
        price: 249,
        image: audiointerfaces4,
        description: 'Steinberg UR22C - это надежный аудиоинтерфейс с высокой производительностью и поддержкой MIDI. \n\nХарактеристики:\n- Каналы: 2\n- Частота дискретизации: 192 kHz\n- Глубина бит: 24-бит\n- Подключение: USB-C\n- Вес: 0.9 кг',
        specifications: {
            channels: "2",
            sampleRate: "192 kHz",
            bitDepth: "24-bit",
            connectivity: "USB-C",
            weight: "0.9 кг"
        }
    },
    {
        id: 2801325,
        type: 'audiointerfaces',
        name: 'Аудиоинтерфейс MOTU M2',
        presence: true,
        price: 199,
        image: audiointerfaces5,
        description: 'MOTU M2 - это профессиональный аудиоинтерфейс с качественными преампами и отличным разрешением звука. \n\nХарактеристики:\n- Каналы: 2\n- Частота дискретизации: 192 kHz\n- Глубина бит: 32-бит\n- Подключение: USB-C\n- Вес: 1.0 кг',
        specifications: {
            channels: "2",
            sampleRate: "192 kHz",
            bitDepth: "32-bit",
            connectivity: "USB-C",
            weight: "1.0 кг"
        }
    },
    {
        id: 2901321,
        type: 'microphones',
        name: 'Микрофон Shure SM58',
        presence: true,
        price: 99,
        image: microphones1,
        description: 'Shure SM58 - это легендарный динамический микрофон, идеально подходящий для вокала на сцене и в студии. \n\nХарактеристики:\n- Тип: Динамический\n- Частотный диапазон: 50 - 15000 Гц\n- Импеданс: 150 Ом\n- Вес: 0.5 кг',
        specifications: {
            type: "Динамический",
            frequencyResponse: "50 - 15000 Гц",
            impedance: "150 Ом",
            weight: "0.5 кг"
        }
    },
    {
        id: 2901322,
        type: 'microphones',
        name: 'Микрофон Rode NT1-A',
        presence: true,
        price: 199,
        image: microphones2,
        description: 'Rode NT1-A - это конденсаторный микрофон с низким уровнем шума, идеальный для студийной записи. \n\nХарактеристики:\n- Тип: Конденсаторный\n- Частотный диапазон: 20 - 20000 Гц\n- Импеданс: 100 Ом\n- Вес: 0.3 кг',
        specifications: {
            type: "Конденсаторный",
            frequencyResponse: "20 - 20000 Гц",
            impedance: "100 Ом",
            weight: "0.3 кг"
        }
    },
    {
        id: 2901323,
        type: 'microphones',
        name: 'Микрофон Audio-Technica AT2020',
        presence: true,
        price: 149,
        image: microphones3,
        description: 'Audio-Technica AT2020 - это универсальный конденсаторный микрофон, который обеспечивает отличное качество звука для записи вокала и инструментов. \n\nХарактеристики:\n- Тип: Конденсаторный\n- Частотный диапазон: 20 - 20000 Гц\n- Импеданс: 100 Ом\n- Вес: 0.5 кг',
        specifications: {
            type: "Конденсаторный",
            frequencyResponse: "20 - 20000 Гц",
            impedance: "100 Ом",
            weight: "0.5 кг"
        }
    },
]