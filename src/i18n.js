import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        marketplace: "Marketplace",
        gameplay: "Gameplay",
        cities: "Our cities",
        routes: "Routes",
        contacts: "Contacts",
        whitepaper: "WhitePaper",
        more: "More",
        getApp: "Get App"
      },
      hero: {
        title: "dexGO",
        subtitle: "Earn by walking the real routes",
        download: "Download App"
      },
      whatIs: {
        title: "What is the dexGO",
        desc: "dexGO is a game created for healthy lifestyle growth, traveling and earning. It's easy: put on NFT sneakers and go on a journey through the routes of your own city, get money for this.",
        gameplayTitle: "Gameplay of the game dexGO - play and earn in the city of Kyiv"
      },
      routes: {
        title: "Go with us",
        subtitle: "Interesting routes and places in Kyiv",
        places: ["Khreshchatyk", "Golden Gate", "Arch of Freedom", "Andriivskyi Descent"],
        descTitle: "Travel through your own city",
        desc: "We have created special routes through major cities of Ukraine to make your walks even more interesting. Amazing places invisible to the public eye and wonderful places hidden in corners add mystery and unpredictability to the routes."
      },
      mission: {
        title: "Our mission",
        desc: "Attracting people to active lifestyle and traveling through their own city using the technologies of the future - augmented reality and blockchain. dexGO makes it possible to turn your steps into real money.",
        founder: "Oleksii Vynogradov",
        role: "Founder of dexGO"
      },
      features: {
        ar: {
          title: "Play game with augmented reality",
          desc: "Go on a journey between the real world and the virtual universe. Games, quests and tours of the city with augmented reality are waiting for you."
        },
        earn: {
          title: "Earn with dexGO",
          step1: "Go through the route and get a reward",
          step2: "Invite friends and earn on the referral system",
          step3: "Invest in NFT-assets of the game and increase your capital",
          cta: "Ready for adventure? Go with us"
        }
      },
      advantages: {
        title: "Our advantages",
        list: [
          { title: "New level of gameplay", desc: "Augmented reality creates a more realistic experience than just walking around. Interact with game objects and characters in real time and space." },
          { title: "Discovery of secret places", desc: "Players can explore new locations by following specially designed dexGO mystery routes. Ancient buildings and courtyards, estates, rare photo locations and much more in the game." },
          { title: "It's available to all of you", desc: "Due to the interesting gameplay, the game can attract millions of people to a healthy lifestyle and walking around their own city." },
          { title: "Opportunities to earn", desc: "Put on sneakers, go for a walk, complete an exciting route and get a well-deserved reward." }
        ]
      },
      sneakers: {
        title: "NFT sneakers",
        desc: "dexGO sneakers are unique NFTs, each of the five pairs has its own design. Sneakers are stored on the blockchain, which makes it possible to become the owner of rare copies NFTs.",
        details: "To walk the routes, you need to buy sneakers. In each pair, you can travel a limited number of kilometers non-stop, that is, without stopping to recharge. You can buy, sell, trade or rent their sneakers. Each new purchase increases the value of the NFT object by 0.2%. You can view the current value of NFT in the smart contract.",
        marketplace: "To the marketplace",
        types: [
          { name: "Space pioneers", dist: "10 km non-stop" },
          { name: "Trailblazer", dist: "12 km non-stop" },
          { name: "Top-tokers", dist: "15 km non-stop" },
          { name: "Cyber warriors", dist: "19 km non-stop" },
          { name: "Robots", dist: "25 km non-stop" }
        ]
      },
      roadmap: {
        title: "Roadmap",
        items: [
          { year: "2022 Q3 Q4", desc: "Smart contracts are launched. Integration with OpenBiSea NFT marketplace. Pre-sale of NFT sneakers worth $20,000. Release of a demo version of the game." },
          { year: "2023 Q1 Q2", desc: "Building new partnerships. Start marketing in social networks." },
          { year: "2023 Q3", desc: "dexGO closed beta test. Release of dexGO 1.0 with localization in the city of Kyiv." },
          { year: "2023 Q4", desc: "dexGO release with localization in the cities: Lviv, Odesa, Kharkiv, Dnipro. Expanding the network of partnerships." },
          { year: "2024 Q1", desc: "dexGO release with localization in Poland, France, UK and USA. Start of adaptation of brands in dexGO." }
        ]
      },
      team: {
        title: "Our team",
        subtitle: "from experienced developers to influential influencers",
        members: [
          { name: "Oleksii Vinogradov", role: "Founder", bio: "Serial entrepreneur and investor with twenty-five years of experience. Founder of CFC, Heartln Inc. President/Owner of IXC Softswitch.", linkedin: "https://www.linkedin.com/in/oleksiivinogradov/" },
          { name: "Oleg Bondar", role: "COO", bio: "Chief Executive Officer with 12+ years of experience in the position of CEO company for the development of retail stores of various world brands.", linkedin: "https://www.linkedin.com/in/oleg-bondar-820710246" },
          { name: "Eugene Luzgin", role: "Angel investor", bio: "Problem solver with diverse track record in software industry roles ranging from contributor to startup founder. Responsible for Investor's relationships.", linkedin: "https://www.linkedin.com/in/luzgin/" }
        ]
      },
      footer: {
        beta: "Get into the closed beta test",
        emailPlaceholder: "Write your e-mail",
        send: "Send",
        rights: "© dexGO, 2023"
      }
    }
  },
  ua: {
    translation: {
      nav: {
        marketplace: "Маркетплейс",
        gameplay: "Геймплей",
        cities: "Наші міста",
        routes: "Маршрути",
        contacts: "Контакти",
        whitepaper: "WhitePaper",
        more: "Ще",
        getApp: "Завантажити"
      },
      hero: {
        title: "Ходи і заробляй",
        subtitle: "Простий і легкий спосіб заробити крипту. dexGO - це NFT гра з доповненою реальністю.",
        download: "Завантажити додаток"
      },
      whatIs: {
        title: "Що таке dexGO",
        desc: "dexGO - це гра, створена для розвитку здорового способу життя, подорожей та заробітку. Все просто: одягай NFT кросівки і вирушай у подорож маршрутами свого міста, отримуй за це гроші."
      },
      mission: {
        title: "Наша місія",
        desc: "Залучення людей до активного способу життя та подорожей своїм містом за допомогою технологій майбутнього - доповненої реальності та блокчейну. dexGO дає можливість перетворити ваші кроки на реальні гроші.",
        founder: "Олексій Виноградов",
        role: "Засновник dexGO"
      },
      features: {
        ar: {
          title: "Грай з доповненою реальністю",
          desc: "Вирушай у подорож між реальним світом та віртуальним всесвітом. Ігри, квести та екскурсії містом з доповненою реальністю чекають на тебе."
        },
        earn: {
          title: "Заробляй з dexGO",
          step1: "Пройди маршрут та отримай винагороду",
          step2: "Запрошуй друзів та заробляй на реферальній системі",
          step3: "Інвестуй в NFT-активи гри та збільшуй свій капітал"
        }
      },
      advantages: {
        title: "Наші переваги",
        list: [
          { title: "Новий рівень геймплею", desc: "Доповнена реальність створює більш реалістичний досвід, ніж просто прогулянка. Взаємодій з ігровими об'єктами та персонажами в реальному часі та просторі." },
          { title: "Відкриття таємних місць", desc: "Гравці можуть досліджувати нові локації, слідуючи спеціально розробленими таємничими маршрутами dexGO. Старовинні будівлі та дворики, садиби, рідкісні фотолокації та багато іншого в грі." },
          { title: "Доступно кожному", desc: "Завдяки цікавому геймплею, гра може залучити мільйони людей до здорового способу життя та прогулянок своїм містом." },
          { title: "Можливості для заробітку", desc: "Одягай кросівки, йди на прогулянку, пройди захоплюючий маршрут та отримай заслужену винагороду." }
        ]
      },
      sneakers: {
        title: "NFT Кросівки",
        desc: "Кросівки dexGO - це унікальні NFT, кожна з п'яти пар має свій дизайн. Кросівки зберігаються в блокчейні.",
        types: ["Space pioneers", "Trailblazer", "Top-tokers", "Cyber warriors", "Robots"]
      },
      roadmap: {
        title: "Дорожня карта",
        y2022: "2022",
        y2023: "2023",
        y2024: "2024"
      },
      team: {
        title: "Наша команда"
      },
      footer: {
        beta: "Потрап на закритий бета-тест",
        emailPlaceholder: "Ваш e-mail",
        send: "Надіслати",
        rights: "© dexGO, 2023"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
