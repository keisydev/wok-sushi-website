//Imagens

//entradas
import gyoza from '../../assets/images/gyoza.jpg'
import misoshiro from '../../assets/images/misoshiro.jpg'
import harumaki from '../../assets/images/harumaki.jpg'
import sunomono from '../../assets/images/sunomono.jpg'
import tunaTataki from '../../assets/images/tunaTataki.jpg'
import karaage from '../../assets/images/karaage.jpg'

//sushis e sashimis
import combinado_premium from '../../assets/images/combinado_premium.jpg'
import combinado_SuperPremium from '../../assets/images/combinado_SuperPremium.jpg'
import nigiri_salmao  from '../../assets/images/nigiri_salmao.jpg'
import hothollSalmao  from '../../assets/images/hothollSalmao.jpg'
import urumaki  from '../../assets/images/urumaki.jpg'
import gunkan  from '../../assets/images/gunkan.jpg'

//pratos quentes
import noodlesCamarao from '../../assets/images/noodlesCamarao.jpg'
import udon from '../../assets/images/udon.jpg'
import tempura from '../../assets/images/tempura.jpg'
import yakitori from '../../assets/images/yakitori.jpg'
import katsu from '../../assets/images/katsu.jpg'
import teppanyaki from '../../assets/images/teppanyaki.jpg'

//sobremesas
import mochi from '../../assets/images/mochi.jpg'
import cheesecakeVerde from '../../assets/images/cheesecakeVerde.jpg'
import pudimManga from '../../assets/images/pudimManga.jpg'

//bebidas
import cha_lichia from '../../assets/images/cha_lichia.jpg'
import sucoRedFruit from '../../assets/images/sucoRedFruit.jpg'
import cola from '../../assets/images/cola.jpg'
import vinhoDaCasa from '../../assets/images/vinho.jpg'
import agua from '../../assets/images/agua.jpg'
import cervejaJaponesa from '../../assets/images/cerveja.jpg'


//takeaway
import box18 from '../../assets/images/box18.jpg'



export const menuItems = [
    //entradas
    {
        id: 'entrada1',
        category:'Entradas',
        name:'Gyoza de Frango',
        description:'5 pastéis japoneses recheados com frango e legumes, cozidos no vapor e selados na chapa.',
        price: '€6.50',
        image: gyoza,
    },
    {
        id: 'entrada2',
        category:'Entradas',
        name:'Misoshiro',
        description:'Feita com pasta de miso, dashi e um toque de tofu e cebolinha.',
        price: '€5.50',
        image: misoshiro,
    },
    {
        id: 'entrada3',
        category:'Entradas',
        name:'Harumaki',
        description:'4 rolinhos primavera fritos, recheados com vegetais.',
        price: '€4.30',
        image: harumaki,
    },
    {
        id: 'entrada4',
        category:'Entradas',
        name:'Sunomono',
        description:'Salada refrescante de pepino fatiado finamente, marinado em vinagre de arroz agridoce.',
        price: '€3.90',
        image: sunomono,
    },
    {
        id: 'entrada5',
        category:'Entradas',
        name:'Tuna Tataki',
        description:'6 fatias finas de atum e salmão frescos, levemente selados nas bordas, fatiados e servidos com molho ponzu (molho cítrico de soja) e cebolinha.',
        price: '€4.90',
        image: tunaTataki,
    },
    {
        id: 'entrada6',
        category:'Entradas',
        name:'Karaage',
        description:'Pedaços de coxa de frango marinados em shoyu, gengibre e alho, e fritos até ficarem crocantes e suculentos. Servido com limão.',
        price: '€5.30',
        image: karaage,
    },

    //sushi e sashimi
    {
    id: 'sushi1',
    category: 'Sushi & Sashimi',
    name: 'Combinado Premium',
    description: '20 peças da seleção especial do chef com os sushis e sashimis mais frescos do dia.',
    price: '€25.00',
    image: combinado_premium,
  },
  {
    id: 'sushi2',
    category: 'Sushi & Sashimi',
    name: 'Combinado Super Premium',
    description: '40 peças com a Seleção especial do chef com os sushis, sashimis, gunkans e nigiris mais frescos do dia.',
    price: '€25.00',
    image: combinado_SuperPremium,
  },
  {
    id: 'sushi3',
    category: 'Sushi & Sashimi',
    name: 'Nigiri de Salmão Maçaricado',
    description: 'Arroz de sushi com fatia de salmão fresco levemente maçaricado e um toque de molho teriyaki.',
    price: '€3.50', // Por peça
    image: nigiri_salmao,
  },
  {
    id: 'sushi4',
    category: 'Sushi & Sashimi',
    name: 'Hot Holl Salmão',
    description: '4 peças de salmão, cream cheese, cebolinha, frito e regado com molho tarê.',
    price: '€4.30', // Por peça
    image: hothollSalmao,
  },
  {
    id: 'sushi5',
    category: 'Sushi & Sashimi',
    name: 'Urumaki',
    description: '4 peças: arroz, kani, pepino, abacate.',
    price: '€3.20', // Por peça
    image: urumaki,
  },
  {
    id: 'sushi6',
    category: 'Sushi & Sashimi',
    name: 'Gunkan de Salmão',
    description: '4 peças: Salmão picado com cebolinha, cream cheese envolto por salmão braseado.',
    price: '€4.90', // Por peça
    image: gunkan,
  },

  //pratos quentes
  {
    id: 'pratoquente1',
    category: 'Pratos Quentes',
    name: 'Pad Thai de Camarão',
    description: 'Noodles de arroz salteados com camarões, ovo, brotos de feijão, amendoim e molho agridoce.',
    price: '€14.90',
    image: noodlesCamarao,
  },
  {
    id: 'pratoquente2',
    category: 'Pratos Quentes',
    name: 'Udon Clássico com Tempura de Camarão',
    description: 'Um reconfortante prato de macarrão Udon em caldo quente, servido com crocante tempura de camarão, ovo cozido, ovo poché, cebolinha fresca, algas e kamaboko.',
    price: '€13.50',
    image: udon,
  },
  {
    id: 'pratoquente3',
    category: 'Pratos Quentes',
    name:  'Tempura Misto',
    description: 'Vegetais e/ou frutos do mar (camarão é clássico) empanados em uma massa leve e crocante e fritos. Servido geralmente com um molho tentsuyu.',
    price: '€10.50',
    image: tempura,
  },
  {
    id: 'pratoquente4',
    category: 'Pratos Quentes',
    name:  'Yakitori',
    description: 'Espetinhos de frango e carne grelhados e regados com molho teriyaki.',
    price: '€10.50',
    image: yakitori,
  },
  {
    id: 'pratoquente5',
    category: 'Pratos Quentes',
    name:  'Katsu',
    description: 'Escalopes de carne frango (Chicken Katsu) empanados em panko (farinha de rosca) e fritos até ficarem crocantes. Servido com um molho agridoce e repolho fatiado.',
    price: '€9.90',
    image: katsu,
  },
  {
    id: 'pratoquente6',
    category: 'Pratos Quentes',
    name:  'Teppanyaki',
    description: 'Carnes (bife, frango), frutos do mar (camarão, vieiras) e vegetais grelhados na chapa.',
    price: '€15.90',
    image: teppanyaki,
  },

  //sobremesas
  {
    id: 'sobremesa1',
    category: 'Sobremesas',
    name: 'Mochi Trio',
    description: 'Três mochis artesanais com recheios sortidos (chá verde, morango e chocolate).',
    price: '€5.00',
    image: mochi,
  },
  {
    id: 'sobremesa2',
    category: 'Sobremesas',
    name: 'Cheesecake de Chá Verde',
    description: 'Um cheesecake cremoso com o sabor e a cor distintos do chá verde matcha.',
    price: '€5.90',
    image: cheesecakeVerde,
  },
  {
    id: 'sobremesa3',
    category: 'Sobremesas',
    name: 'Pudim de Manga',
    description: 'Uma sobremesa tropical, leve e refrescante, com a doçura da manga e a cremosidade do leite de coco.',
    price: '€5.30',
    image: pudimManga,
  },

  //bebidas
  {
    id: 'bebida1',
    category: 'Bebidas',
    name: 'Chá Gelado de Lichia',
    description: 'Chá refrescante com o exótico sabor da lichia.',
    price: '€3.00',
    image: cha_lichia,
  },
  {
    id: 'bebida2',
    category: 'Bebidas',
    name: 'Suco de Frutas Vermelhas',
    description: 'Morango, mirtilo, framboesa e uva.',
    price: '€3.90',
    image: sucoRedFruit,
  },
  {
    id: 'bebida3',
    category: 'Bebidas',
    name: 'Coca Cola',
    description: 'Um refrigerante com sabor incrível e refrescante.',
    price: '€2.20',
    image: cola,
  },
  {
    id: 'bebida4',
    category: 'Bebidas',
    name: 'Água',
    description: 'Uma garrafa de 45cl.',
    price: '€1.10',
    image: agua,
  },
  {
    id: 'bebida5',
    category: 'Bebidas',
    name: 'Vinho da Casa',
    description: 'Uma garafa com uvas selecionadas(750cl).',
    price: '€5.20',
    image: vinhoDaCasa,
  },
  {
    id: 'bebida6',
    category: 'Bebidas',
    name: 'Cerveja Japonesa',
    description: 'Feita atraves das receitas tradiconais japonesas.',
    price: '€3.15',
    image: cervejaJaponesa,
  },
  // Takeaway
  {
    id: 'takeaway1',
    category: 'Takeaway', 
    name: 'Box de Sushi Misto',
    description: '18 peças, ideal para levar! Variedade de nigiris, uramakis e hosomakis.',
    price: '€22.00',
    image: box18,
  },
  {
    id: 'takeaway2',
    category: 'Takeaway',
    name: 'Box Premium',
    description: '20 peças da seleção especial do chef com os sushis e sashimis mais frescos do dia.',
    price: '€25.00',
    image: combinado_premium,
  },

]

