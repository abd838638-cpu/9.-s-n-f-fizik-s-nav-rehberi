import { SubBranch, Institution, PhysicalQuantity, QuizQuestion, ChecklistItem } from '../types/physics';

export const CURRICULUM_SCOPES = [
  { code: 'FİZ.9.1.1', title: 'Fizik Bilimi ve Özellikleri', sectionId: 'bolum-1' },
  { code: 'FİZ.9.1.2', title: 'Fiziğin Alt Dalları', sectionId: 'bolum-2' },
  { code: 'FİZ.9.1.4', title: 'Fizik ve Kariyer Olanakları', sectionId: 'bolum-3' },
  { code: 'FİZ.9.2.1', title: 'SI Birim Sistemi', sectionId: 'bolum-4' },
  { code: 'FİZ.9.2.2', title: 'Skaler ve Vektörel Büyüklükler', sectionId: 'bolum-5' },
  { code: 'FİZ.9.2.3', title: 'Aynı Doğrultudaki Vektörler', sectionId: 'bolum-6' },
];

export const SUB_BRANCHES: SubBranch[] = [
  {
    id: 'kati-hal',
    name: 'Katı Hâl Fiziği',
    curriculumCode: 'FİZ.9.1.2',
    description: 'Kristal yapılı maddeleri, yarı iletken maddeleri ve maddelerin elektriksel ve manyetik özelliklerini inceler.',
    keywords: ['Kristal yapılar', 'Yarı iletkenler', 'Katı maddeler'],
    examples: ['Bilgisayar işlemcileri ve elektronik çipler.'],
    icon: 'Cpu',
    color: '#0284c7', // Sky
    accentBg: 'bg-sky-50 border-sky-200 text-sky-800',
  },
  {
    id: 'termodinamik',
    name: 'Termodinamik',
    curriculumCode: 'FİZ.9.1.2',
    description: 'Isı, sıcaklık, genleşme, hâl değişimi, ısıl denge ve ısı aktarımı konularını inceler.',
    keywords: ['Isı', 'Sıcaklık', 'Genleşme', 'Hâl değişimi', 'Isıl denge'],
    examples: ['Buzun erimesi', 'suyun kaynaması ve buzdolabı.'],
    icon: 'Flame',
    color: '#ea580c', // Orange
    accentBg: 'bg-orange-50 border-orange-200 text-orange-800',
  },
  {
    id: 'elektromanyetizma',
    name: 'Elektromanyetizma',
    curriculumCode: 'FİZ.9.1.2',
    description: 'Elektrik yükleri, elektrik akımı ve manyetizma konularını inceler.',
    keywords: ['Elektrik yükü', 'Elektrik akımı', 'Manyetik alan', 'Mıknatıs'],
    examples: ['Elektrik motorları ve jeneratörler.'],
    icon: 'Zap',
    color: '#ca8a04', // Yellow/Amber
    accentBg: 'bg-amber-50 border-amber-200 text-amber-800',
  },
  {
    id: 'mekanik',
    name: 'Mekanik',
    curriculumCode: 'FİZ.9.1.2',
    description: 'Kuvvet, hareket, denge ve cisimlerin hareketleriyle ilgili konuları inceler.',
    keywords: ['Kuvvet', 'Hareket', 'Denge', 'Hız', 'İvme'],
    examples: ['Arabaların hareketi ve düşen cisimler.'],
    icon: 'Activity',
    color: '#2563eb', // Blue
    accentBg: 'bg-blue-50 border-blue-200 text-blue-800',
  },
  {
    id: 'optik',
    name: 'Optik',
    curriculumCode: 'FİZ.9.1.2',
    description: 'Işığın yapısı, yayılması, yansıması ve kırılması gibi ışık olaylarını inceler.',
    keywords: ['Işık', 'Yansıma', 'Kırılma', 'Ayna', 'Mercek'],
    examples: ['Gözlük', 'teleskop ve mikroskop.'],
    icon: 'Eye',
    color: '#059669', // Emerald
    accentBg: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  },
  {
    id: 'yuksek-enerji',
    name: 'Yüksek Enerji ve Plazma Fiziği',
    curriculumCode: 'FİZ.9.1.2',
    description: 'Yüksek enerjili parçacıkları ve maddenin plazma hâlini inceler.',
    keywords: ['Yüksek enerjili parçacıklar', 'Plazma', 'Parçacık hızlandırıcıları'],
    examples: ['Güneş', 'yıldızlar ve parçacık hızlandırıcıları.'],
    icon: 'Sparkles',
    color: '#7c3aed', // Purple
    accentBg: 'bg-purple-50 border-purple-200 text-purple-800',
  },
  {
    id: 'nukleer-fizik',
    name: 'Nükleer Fizik',
    curriculumCode: 'FİZ.9.1.2',
    description: 'Atom çekirdeğinin yapısını ve çekirdekte meydana gelen tepkimeleri inceler.',
    keywords: ['Atom çekirdeği', 'Proton', 'Nötron', 'Nükleer tepkime', 'Radyoaktivite'],
    examples: ['Nükleer enerji santralleri.'],
    icon: 'Radiation',
    color: '#dc2626', // Red
    accentBg: 'bg-red-50 border-red-200 text-red-800',
  },
  {
    id: 'atom-fizigi',
    name: 'Atom Fiziği',
    curriculumCode: 'FİZ.9.1.2',
    description: 'Atomun yapısını, elektron dizilimini ve atomun enerji seviyelerini inceler.',
    keywords: ['Atom', 'Elektron', 'Enerji seviyeleri', 'Elektron dizilimi'],
    examples: ['Atom spektrumları ve lazerler.'],
    icon: 'Atom',
    color: '#0d9488', // Teal
    accentBg: 'bg-teal-50 border-teal-200 text-teal-800',
  },
];

export const CAREER_PROFESSIONS = [
  { profession: 'Fizik Öğretmeni', duty: 'Fizik dersi verir.' },
  { profession: 'Fizikçi', duty: 'Fiziksel olayları araştırır.' },
  { profession: 'Akademisyen', duty: 'Üniversitede eğitim ve araştırma yapar.' },
  { profession: 'Astronom', duty: 'Gök cisimlerini inceler.' },
  { profession: 'Medikal Fizik Uzmanı', duty: 'Tıp alanında fizik uygulamalarını kullanır.' },
  { profession: 'Araştırmacı', duty: 'Bilimsel araştırmalar yapar.' },
  { profession: 'Nükleer Enerji Uzmanı', duty: 'Nükleer enerji alanında çalışır.' },
];

export const INSTITUTIONS: Institution[] = [
  {
    code: 'TÜBİTAK',
    name: 'Türkiye Bilimsel ve Teknolojik Araştırma Kurumu',
    scope: 'Türkiye',
    description: 'Bilimsel ve teknolojik araştırmaları destekler.',
    logoText: 'TÜBİTAK',
    tag: 'Ulusal Araştırma ve Teşvik',
  },
  {
    code: 'ASELSAN',
    name: 'Askerî Elektronik Sanayi',
    scope: 'Türkiye',
    description: 'Savunma teknolojileri ve elektronik sistemler geliştirir.',
    logoText: 'ASELSAN',
    tag: 'Savunma ve Elektronik',
  },
  {
    code: 'TUSAŞ',
    name: 'Türk Havacılık ve Uzay Sanayii',
    scope: 'Türkiye',
    description: 'Havacılık ve uzay teknolojileri üzerine çalışır.',
    logoText: 'TUSAŞ',
    tag: 'Havacılık ve Uzay',
  },
  {
    code: 'TENMAK',
    name: 'Türkiye Enerji, Nükleer ve Maden Araştırma Kurumu',
    scope: 'Türkiye',
    description: 'Enerji, nükleer teknoloji ve maden araştırmaları yapar.',
    logoText: 'TENMAK',
    tag: 'Enerji ve Nükleer Teknoloji',
  },
  {
    code: 'TUA',
    name: 'Türkiye Uzay Ajansı (TUA)',
    scope: 'Türkiye',
    description: "Türkiye'nin uzay çalışmalarını ve projelerini yürütür.",
    logoText: 'TUA',
    tag: 'Uzay Ajansı',
  },
  {
    code: 'CERN',
    name: 'Avrupa Nükleer Araştırma Merkezi',
    scope: 'Uluslararası',
    description: 'Parçacık fiziği araştırmaları yapar.',
    logoText: 'CERN',
    tag: 'Parçacık Fiziği ve Hızlandırıcı',
  },
  {
    code: 'NASA',
    name: 'Ulusal Havacılık ve Uzay Dairesi',
    scope: 'Uluslararası',
    description: 'Uzay araştırmaları ve uzay teknolojileri üzerine çalışır.',
    logoText: 'NASA',
    tag: 'Uzay Görevleri ve Keşif',
  },
  {
    code: 'ESA',
    name: 'Avrupa Uzay Ajansı',
    scope: 'Uluslararası',
    description: 'Uzay araştırmaları ve uydu projeleri geliştirir.',
    logoText: 'ESA',
    tag: 'Avrupa Uzay ve Uydu',
  },
];

export const FUNDAMENTAL_UNITS: PhysicalQuantity[] = [
  { name: 'Uzunluk', unit: 'Metre', symbol: 'm', type: 'Temel', category: 'Skaler' },
  { name: 'Kütle', unit: 'Kilogram', symbol: 'kg', type: 'Temel', category: 'Skaler' },
  { name: 'Zaman', unit: 'Saniye', symbol: 's', type: 'Temel', category: 'Skaler' },
  { name: 'Sıcaklık', unit: 'Kelvin', symbol: 'K', type: 'Temel', category: 'Skaler' },
  { name: 'Elektrik Akımı', unit: 'Amper', symbol: 'A', type: 'Temel', category: 'Skaler' },
  { name: 'Madde Miktarı', unit: 'Mol', symbol: 'mol', type: 'Temel', category: 'Skaler' },
  { name: 'Işık Şiddeti', unit: 'Kandela', symbol: 'cd', type: 'Temel', category: 'Skaler' },
];

export const DERIVED_UNITS: PhysicalQuantity[] = [
  { name: 'Alan', unit: 'Metrekare', symbol: 'm²', type: 'Türetilmiş', category: 'Skaler' },
  { name: 'Hacim', unit: 'Metreküp', symbol: 'm³', type: 'Türetilmiş', category: 'Skaler' },
  { name: 'Hız', unit: 'Metre/saniye', symbol: 'm/s', type: 'Türetilmiş', category: 'Vektörel' },
  { name: 'İvme', unit: 'Metre/saniye kare', symbol: 'm/s²', type: 'Türetilmiş', category: 'Vektörel' },
  { name: 'Kuvvet', unit: 'Newton', symbol: 'N', type: 'Türetilmiş', category: 'Vektörel' },
  { name: 'Enerji', unit: 'Joule', symbol: 'J', type: 'Türetilmiş', category: 'Skaler' },
  { name: 'İş', unit: 'Joule', symbol: 'J', type: 'Türetilmiş', category: 'Skaler' },
  { name: 'Basınç', unit: 'Pascal', symbol: 'Pa', type: 'Türetilmiş', category: 'Skaler' },
  { name: 'Yoğunluk', unit: 'Kilogram/metreküp', symbol: 'kg/m³', type: 'Türetilmiş', category: 'Skaler' },
  { name: 'Frekans', unit: 'Hertz', symbol: 'Hz', type: 'Türetilmiş', category: 'Skaler' },
];

export const SCALAR_EXAMPLES = [
  { name: 'Kütle', unit: 'kg' },
  { name: 'Zaman', unit: 's' },
  { name: 'Sıcaklık', unit: 'K' },
  { name: 'Enerji', unit: 'J' },
  { name: 'Sürat', unit: 'm/s' },
  { name: 'Alınan Yol', unit: 'm' },
  { name: 'Hacim', unit: 'm³' },
  { name: 'Yoğunluk', unit: 'kg/m³' },
];

export const VECTOR_EXAMPLES = [
  { name: 'Kuvvet', unit: 'N' },
  { name: 'Hız', unit: 'm/s' },
  { name: 'İvme', unit: 'm/s²' },
  { name: 'Yer Değiştirme', unit: 'm' },
  { name: 'Ağırlık', unit: 'N' },
];

export const INTERDISCIPLINARY_RELATIONS = [
  { field: 'Kimya', relation: 'Atom, molekül ve maddenin yapısı' },
  { field: 'Biyoloji', relation: 'Canlılardaki fiziksel olaylar' },
  { field: 'Matematik', relation: 'Fiziksel olayların hesaplanması' },
  { field: 'Astronomi', relation: 'Gezegenler, yıldızlar ve evren' },
  { field: 'Mühendislik', relation: 'Teknolojik sistemlerin geliştirilmesi' },
  { field: 'Coğrafya', relation: "Dünya'nın fiziksel özellikleri" },
];

export const EXAM_CRITICAL_POINTS = [
  'Fizik, madde ve enerji arasındaki etkileşimleri inceler.',
  'Tümevarım, özelden genele akıl yürütmedir.',
  'Tümdengelim, genelden özele akıl yürütmedir.',
  'Fizik biliminin sekiz temel alt dalı vardır.',
  'Isı ve sıcaklık → Termodinamik.',
  'Kuvvet ve hareket → Mekanik.',
  'Işık ve yansıma → Optik.',
  'Elektrik ve manyetizma → Elektromanyetizma.',
  'Atom çekirdeği → Nükleer Fizik.',
  'Elektron dizilimi → Atom Fiziği.',
  'Kristal ve yarı iletken → Katı Hâl Fiziği.',
  'Plazma ve yüksek enerjili parçacıklar → Yüksek Enerji ve Plazma Fiziği.',
  'SI sisteminde yedi temel büyüklük vardır.',
  'Kütlenin birimi kilogramdır (kg).',
  'Uzunluğun birimi metredir (m).',
  'Zamanın birimi saniyedir (s).',
  'Kuvvetin birimi Newton\'dur (N).',
  'Enerjinin birimi Joule\'dür (J).',
  'Skaler büyüklüklerde yön yoktur.',
  'Vektörel büyüklüklerde büyüklük ve yön vardır.',
  'Sürat skalerdir, hız vektöreldir.',
  'Aynı yönlü vektörler toplanır.',
  'Zıt yönlü vektörler çıkarılır.',
  'Eşit ve zıt yönlü vektörlerin bileşkesi sıfırdır.',
];

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: 'c1', text: 'Fizik biliminin tanımını yapabiliyorum.', curriculum: 'FİZ.9.1.1' },
  { id: 'c2', text: 'Tümevarım ve tümdengelim arasındaki farkı biliyorum.', curriculum: 'FİZ.9.1.1' },
  { id: 'c3', text: 'Fiziğin sekiz alt dalını ve inceledikleri konuları biliyorum.', curriculum: 'FİZ.9.1.2' },
  { id: 'c4', text: 'Fizikle ilgili kurumları ve çalışma alanlarını tanıyorum.', curriculum: 'FİZ.9.1.4' },
  { id: 'c5', text: 'Yedi temel büyüklüğü ve SI birimlerini biliyorum.', curriculum: 'FİZ.9.2.1' },
  { id: 'c6', text: 'Temel ve türetilmiş büyüklükleri ayırt edebiliyorum.', curriculum: 'FİZ.9.2.1' },
  { id: 'c7', text: 'Skaler ve vektörel büyüklükleri ayırt edebiliyorum.', curriculum: 'FİZ.9.2.2' },
  { id: 'c8', text: 'Sürat ve hız arasındaki farkı biliyorum.', curriculum: 'FİZ.9.2.2' },
  { id: 'c9', text: 'Aynı yönlü vektörleri toplayabiliyorum.', curriculum: 'FİZ.9.2.3' },
  { id: 'c10', text: 'Zıt yönlü vektörleri çıkarabiliyorum.', curriculum: 'FİZ.9.2.3' },
  { id: 'c11', text: 'Bileşke vektörün yönünü bulabiliyorum.', curriculum: 'FİZ.9.2.3' },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    curriculum: 'FİZ.9.1.1',
    question: '"Demir ısıtılınca genleşir, bakır ısıtılınca genleşir, alüminyum ısıtılınca genleşir. O hâlde metaller ısıtılınca genleşir." şeklinde yapılan akıl yürütme türü nedir?',
    options: ['Tümdengelimsel Akıl Yürütme', 'Tümevarımsal Akıl Yürütme', 'Analojik Akıl Yürütme', 'Diyalektik Akıl Yürütme'],
    correctAnswer: 1,
    explanation: 'Özel durumlardan genel bir kurala varıldığı için bu "Tümevarımsal Akıl Yürütme"dir (Özelden genele).',
  },
  {
    id: 2,
    curriculum: 'FİZ.9.1.2',
    question: 'Bilgisayar işlemcileri, çipler ve kristal yapılı yarı iletken maddelerin özelliklerini inceleyen fizik alt dalı hangisidir?',
    options: ['Katı Hâl Fiziği', 'Atom Fiziği', 'Nükleer Fizik', 'Mekanik'],
    correctAnswer: 0,
    explanation: 'Katı Hâl Fiziği: Kristal yapılı maddeleri, yarı iletkenleri ve katı maddelerin elektriksel/manyetik özelliklerini inceler.',
  },
  {
    id: 3,
    curriculum: 'FİZ.9.1.2',
    question: 'Atom çekirdeğinin yapısını, radyoaktiviteyi ve nükleer tepkimeleri inceleyen fizik alt dalı hangisidir?',
    options: ['Atom Fiziği', 'Nükleer Fizik', 'Termodinamik', 'Optik'],
    correctAnswer: 1,
    explanation: 'DİKKAT! Atom Fiziği elektron dizilimi ve atom ile ilgilenirken, Nükleer Fizik atom çekirdeği ile ilgilenir.',
  },
  {
    id: 4,
    curriculum: 'FİZ.9.1.4',
    question: 'Avrupa Nükleer Araştırma Merkezi olan ve parçacık fiziği araştırmaları yapan uluslararası kurum hangisidir?',
    options: ['NASA', 'ESA', 'CERN', 'TENMAK'],
    correctAnswer: 2,
    explanation: 'CERN: Avrupa Nükleer Araştırma Merkezi olup parçacık fiziği araştırmaları ve parçacık hızlandırıcıları ile bilinir.',
  },
  {
    id: 5,
    curriculum: 'FİZ.9.2.1',
    question: 'SI Birim Sisteminde "Sıcaklık" birimi aşağıdakilerden hangisidir?',
    options: ['Santigrat (°C)', 'Fahrenheit (°F)', 'Kelvin (K)', 'Kalori (cal)'],
    correctAnswer: 2,
    explanation: 'SI sisteminde temel sıcaklık birimi Kelvin\'dir (K). Sınavda en sık sorulan temel birimlerden biridir.',
  },
  {
    id: 6,
    curriculum: 'FİZ.9.2.1',
    question: 'Aşağıdaki fiziksel büyüklüklerden hangisi "Temel Büyüklük" değildir (Türetilmiştir)?',
    options: ['Kütle', 'Zaman', 'Uzunluk', 'Kuvvet'],
    correctAnswer: 3,
    explanation: 'Kütle (kg), Zaman (s) ve Uzunluk (m) temel büyüklüktür. Kuvvet (N) ise türetilmiş büyüklüktür.',
  },
  {
    id: 7,
    curriculum: 'FİZ.9.2.2',
    question: '"Doğu yönünde 60 km/h" ifadesi hangi kavramı belirtir?',
    options: ['Sürat', 'Hız', 'İvme', 'Alınan Yol'],
    correctAnswer: 1,
    explanation: 'Sürat yalnızca sayısal büyüklüktür (skaler). Doğu yönü belirtildiği için birim zamandaki yer değiştirme olan "Hız"dır (vektörel).',
  },
  {
    id: 8,
    curriculum: 'FİZ.9.2.2',
    question: 'Aşağıdakilerden hangisi Vektörel bir büyüklüktür?',
    options: ['Sıcaklık', 'Kütle', 'İvme', 'Enerji'],
    correctAnswer: 2,
    explanation: 'İvme (m/s²) hem büyüklüğü hem yönü olan vektörel bir büyüklüktür. Sıcaklık, kütle ve enerji skalerdir.',
  },
  {
    id: 9,
    curriculum: 'FİZ.9.2.3',
    question: 'Aynı doğrultuda F₁ = 12 N (Doğu) ve F₂ = 7 N (Batı) kuvvetlerinin bileşkesi nedir?',
    options: ['19 N Doğu', '5 N Doğu', '5 N Batı', '0 N'],
    correctAnswer: 1,
    explanation: 'Zıt yönlü vektörler çıkarılır: R = 12 - 7 = 5 N. Bileşke vektörün yönü büyük vektörün yönü olan Doğu\'dur.',
  },
  {
    id: 10,
    curriculum: 'FİZ.9.2.3',
    question: 'F₁ = 10 N (Doğu) ve F₂ = 10 N (Batı) kuvvetlerinin bileşkesi için hangisi doğrudur?',
    options: ['20 N Doğu', '10 N Batı', '0 N (Birbirini dengeler)', '5 N Doğu'],
    correctAnswer: 2,
    explanation: 'Eşit büyüklükte ve zıt yönlü vektörler birbirini dengeler: R = 10 - 10 = 0 N.',
  },
];
