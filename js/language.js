// 多语言翻译对象 - 包含所有支持的语言及其对应的文本翻译
const translations = {
    // 英文翻译
    en: {
        // 页头部分
        'popular-games': 'Popular Games',
        'more-games': 'More Games',
        'fullscreen': 'Fullscreen',
        
        // 游戏信息部分
        'game-features': 'Game Features',
        'how-to-play': 'How to Play',
        'what-players-love': 'What Players Love',
        'faq': 'Frequently Asked Questions',
        
        // 游戏特点部分
        'feature-1': 'Stunning 3D graphics with realistic lighting effects',
        'feature-2': 'Advanced physics engine for authentic racing experience',
        'feature-3': 'Multiple game modes including Time Trial and Championship',
        'feature-4': 'Extensive vehicle customization options',
        'feature-5': 'Dynamic weather system affecting gameplay',
        'feature-6': 'Multiplayer racing with up to 8 players',
        
        // 游戏描述部分
        'about-game': 'Chicken Jockey Clicker is a unique idle game available only on AzGames.io. In Chicken Jockey Clicker, you control adorable chicken-riding jockeys and tap to earn coins. The world of Chicken Jockey Clicker is filled with upgrades, power-ups, and collectible skins. Whether you are a new player or a seasoned fan, Chicken Jockey Clicker offers endless fun and strategic depth. With regular updates, Chicken Jockey Clicker keeps players engaged and excited for new content. Join millions who enjoy Chicken Jockey Clicker every day and see why it's the top choice for idle game fans!',
        
        // 游戏操作指南部分
        'how-to-play-desc': 'Getting started with Chicken Jockey Clicker is easy! Simply click or tap your chicken jockey in Chicken Jockey Clicker to earn coins. Use your coins in Chicken Jockey Clicker to buy upgrades and unlock new features. The Chicken Jockey Clicker interface is user-friendly, making it simple for anyone to play Chicken Jockey Clicker on any device. Don't forget to check Chicken Jockey Clicker daily for special events and bonuses!',
        'how-to-play-1': 'Click/Tap: Earn coins in Chicken Jockey Clicker',
        'how-to-play-2': 'Upgrades Tab: Purchase improvements for your Chicken Jockey Clicker empire',
        'how-to-play-3': 'Achievements: Track your Chicken Jockey Clicker milestones',
        'how-to-play-4': 'Settings: Adjust sound and visual options in Chicken Jockey Clicker',
        'how-to-play-5': 'Prestige: Reset with bonuses (advanced Chicken Jockey Clicker feature)',
        
        // 游戏技巧部分
        'pro-tip-1': 'In Chicken Jockey Clicker, prioritize passive income upgrades early to build a solid foundation of automatic earnings',
        'pro-tip-2': 'Balance your Chicken Jockey Clicker investments between click power and idle generation for optimal results',
        'pro-tip-3': 'The most efficient Chicken Jockey Clicker strategy involves purchasing upgrades in order of cost-to-benefit ratio',
        'pro-tip-4': 'Don't overlook the power of prestige resets in Chicken Jockey Clicker - starting over with permanent multipliers makes future progress significantly faster',
        'pro-tip-5': 'For maximum efficiency in Chicken Jockey Clicker, check the game daily to collect login bonuses and limited-time events',
        'pro-tip-6': 'When you reach mid-game in Chicken Jockey Clicker, focus on unlocking special chicken jockey skins that provide unique bonuses',
        'pro-tip-7': 'Chicken Jockey Clicker rewards consistent play—log in every day to maximize your progress in Chicken Jockey Clicker',
        'pro-tip-8': 'Share your Chicken Jockey Clicker achievements with friends and compete for the top spot on the leaderboard',
        
        // 玩家评论部分
        'review-1': '"Chicken Jockey Clicker has the perfect balance of simplicity and depth. I find myself coming back to Chicken Jockey Clicker every day just to see my numbers go up!"',
        'review-2': '"What I love most about Chicken Jockey Clicker is how it respects my time. I can play Chicken Jockey Clicker for five minutes or five hours and always feel rewarded."',
        'review-3': '"The character designs in Chicken Jockey Clicker are so charming! Each chicken jockey skin in Chicken Jockey Clicker has its own personality, and collecting them all has become my obsession."',
        'review-4': '"Chicken Jockey Clicker's progression system is incredibly satisfying. That moment when you finally afford a major upgrade in Chicken Jockey Clicker gives you such a rush of accomplishment!"',
        'review-5': '"I appreciate how Chicken Jockey Clicker runs perfectly on my old phone - no lag or crashes. Chicken Jockey Clicker has become my go-to game during commutes."',
        
        // 最新更新部分
        'latest-updates': 'Latest Updates',
        'update-1': 'Added 5 new popular casual and puzzle games to the AzGames.io library for more fun and variety.',
        'update-2': 'Improved mobile performance for faster loading and smoother gameplay on smartphones and tablets.',
        'update-3': 'Upgraded community features: leaderboards and achievements are now available for all games.',
        'update-4': 'Enhanced platform security: all games are now verified with the latest safety checks to protect your data.',
        
        // FAQ部分
        'faq-1-q': 'Is Chicken Jockey Clicker free to play?',
        'faq-1-a': 'Yes, Chicken Jockey Clicker is completely free to play on AzGames.io! Enjoy Chicken Jockey Clicker anytime, anywhere.',
        'faq-2-q': 'Can I play Chicken Jockey Clicker with friends?',
        'faq-2-a': 'Yes, you can invite friends to play Chicken Jockey Clicker together and compete for high scores!',
        'faq-3-q': 'What are the system requirements for Chicken Jockey Clicker?',
        'faq-3-a': 'Chicken Jockey Clicker runs smoothly on most modern browsers. For the best Chicken Jockey Clicker experience, we recommend using Chrome or Firefox.',
        'faq-4-q': 'How do I save my progress in Chicken Jockey Clicker?',
        'faq-4-a': 'Your Chicken Jockey Clicker progress is automatically saved when you're logged in. Make sure to create an account to keep track of your Chicken Jockey Clicker achievements.',
        
        // 页脚部分
        'copyright': '© 2024 AzGames.io. All rights reserved.',
        'contact-us': 'Contact Us'
    },
    // 中文翻译
    zh: {
        // 页头部分
        'popular-games': '热门游戏',
        'more-games': '更多游戏',
        'fullscreen': '全屏',
        
        // 游戏信息部分
        'game-features': '游戏特色',
        'how-to-play': '如何玩',
        'what-players-love': '玩家喜爱',
        'faq': '常见问题',
        
        // 游戏特点部分
        'feature-1': '惊艳的3D光影特效',
        'feature-2': '真实赛车物理引擎',
        'feature-3': '多种模式：计时赛与锦标赛',
        'feature-4': '丰富的载具自定义',
        'feature-5': '动态天气影响玩法',
        'feature-6': '支持最多8人联机竞速',
        
        // 游戏描述部分
        'about-game': 'Chicken Jockey Clicker是一款独特的放置类游戏，在AzGames.io独家上线。你将操控可爱的骑鸡小人，不断点击赚取金币。游戏世界充满升级、道具和可收集皮肤，无论新手还是老玩家都能享受无尽乐趣和策略深度。定期更新让Chicken Jockey Clicker始终充满新鲜感，快来加入数百万玩家的行列吧！',
        
        // 游戏操作指南部分
        'how-to-play-desc': '开始玩Chicken Jockey Clicker非常简单！只需点击或轻触你的骑鸡小人即可赚取金币。用金币购买升级，解锁新功能。界面友好，任何设备都能轻松畅玩。记得每天上线领取活动奖励！',
        'how-to-play-1': '点击/轻触：赚取金币',
        'how-to-play-2': '升级标签：提升你的骑鸡帝国',
        'how-to-play-3': '成就：追踪你的游戏里程碑',
        'how-to-play-4': '设置：调整音效和画面',
        'how-to-play-5': '重生：重置并获得奖励（进阶玩法）',
        
        // 游戏技巧部分
        'pro-tip-1': '优先升级被动收入，打好自动赚钱基础',
        'pro-tip-2': '平衡点击收益和挂机收益，效果最佳',
        'pro-tip-3': '按性价比顺序购买升级，效率更高',
        'pro-tip-4': '别忽视重生功能，永久加成让进度飞快',
        'pro-tip-5': '每天上线领取奖励和限时活动',
        'pro-tip-6': '中后期解锁特殊皮肤，获得独特加成',
        'pro-tip-7': '坚持每日游玩，进度提升更快',
        'pro-tip-8': '与好友分享成就，争夺排行榜',
        
        // 玩家评论部分
        'review-1': '“Chicken Jockey Clicker简单又有深度，我每天都要上线看看进度！”',
        'review-2': '“最喜欢Chicken Jockey Clicker的一点是随时玩都很有收获。”',
        'review-3': '“角色皮肤超可爱，收集控的福音！”',
        'review-4': '“升级系统很有成就感，每次大升级都很激动！”',
        'review-5': '“在老手机上也能流畅运行，通勤路上必玩！”',
        
        // 最新更新部分
        'latest-updates': '最新更新',
        'update-1': '新增5款热门休闲与益智游戏，选择更多样。',
        'update-2': '移动端加载更快，操作更流畅。',
        'update-3': '社区功能升级，支持排行榜和成就系统。',
        'update-4': '平台安全升级，所有游戏均通过最新安全检测。',
        
        // FAQ部分
        'faq-1-q': 'Chicken Jockey Clicker是免费的吗？',
        'faq-1-a': '是的，Chicken Jockey Clicker在AzGames.io完全免费，随时畅玩！',
        'faq-2-q': '可以和朋友一起玩吗？',
        'faq-2-a': '可以，邀请朋友一起玩Chicken Jockey Clicker，争夺高分！',
        'faq-3-q': 'Chicken Jockey Clicker的系统要求？',
        'faq-3-a': '大多数现代浏览器都能流畅运行，推荐使用Chrome或Firefox。',
        'faq-4-q': '如何保存游戏进度？',
        'faq-4-a': '登录后进度会自动保存，注册账号还能同步成就。',
        
        // 页脚部分
        'copyright': '© 2024 AzGames.io. 保留所有权利。',
        'contact-us': '联系我们'
    },
    // 日文翻译
    ja: {
        // 页头部分
        'popular-games': '人気ゲーム',
        'more-games': 'もっとゲーム',
        'fullscreen': '全画面',
        
        // 游戏信息部分
        'game-features': 'ゲームの特徴',
        'how-to-play': '遊び方',
        'what-players-love': 'プレイヤーの声',
        'faq': 'よくある質問',
        
        // 游戏特点部分
        'feature-1': '美しい3Dライティング効果',
        'feature-2': '本格的な物理エンジン',
        'feature-3': 'タイムアタックやチャンピオンシップなど多彩なモード',
        'feature-4': '豊富なカスタマイズ',
        'feature-5': '天候が変化するダイナミックなゲームプレイ',
        'feature-6': '最大8人のマルチプレイ対応',
        
        // 游戏描述部分
        'about-game': 'Chicken Jockey ClickerはAzGames.io限定のユニークな放置ゲームです。かわいいチキンジョッキーを操作してコインを稼ぎ、アップグレードやスキンを集めましょう。初心者も上級者も楽しめる奥深い戦略性と無限のやり込み要素が魅力。定期アップデートで常に新鮮な体験を提供します。',
        
        // 游戏操作指南部分
        'how-to-play-desc': 'Chicken Jockey Clickerの始め方はとても簡単！チキンジョッキーをクリックまたはタップしてコインを獲得。コインでアップグレードや新機能を解放。直感的なUIでどのデバイスでも快適に遊べます。毎日ログインしてボーナスをゲットしよう！',
        'how-to-play-1': 'クリック/タップ：コインを獲得',
        'how-to-play-2': 'アップグレード：帝国を強化',
        'how-to-play-3': '実績：進捗を記録',
        'how-to-play-4': '設定：音や画面を調整',
        'how-to-play-5': 'プレステージ：リセットでボーナス獲得（上級者向け）',
        
        // 游戏技巧部分
        'pro-tip-1': 'まずは自動収入アップグレードを優先',
        'pro-tip-2': 'クリックと放置収入のバランスが大事',
        'pro-tip-3': 'コスパ順にアップグレードを購入',
        'pro-tip-4': 'プレステージで永久ボーナスを活用',
        'pro-tip-5': '毎日ログインしてボーナスやイベントを逃さない',
        'pro-tip-6': '中盤以降は特別なスキンを集めて強化',
        'pro-tip-7': '毎日遊ぶことで進行が加速',
        'pro-tip-8': '友達と実績を共有し、ランキングで競おう',
        
        // 玩家评论部分
        'review-1': '「Chicken Jockey Clickerはシンプルなのに奥深い。毎日進捗を見るのが楽しみ！」',
        'review-2': '「好きな時に遊べて、いつも達成感があるのが最高！」',
        'review-3': '「キャラクタースキンがとても可愛い！コレクションが楽しい」',
        'review-4': '「アップグレードの達成感が素晴らしい！」',
        'review-5': '「古いスマホでも快適に動作、通勤中の定番ゲームです」',
        
        // 最新更新部分
        'latest-updates': '最新アップデート',
        'update-1': '人気のカジュアル・パズルゲームを5本追加！',
        'update-2': 'モバイルの動作がさらに高速・快適に',
        'update-3': 'コミュニティ機能強化、ランキング・実績対応',
        'update-4': '全ゲームのセキュリティチェックを強化',
        
        // FAQ部分
        'faq-1-q': 'Chicken Jockey Clickerは無料ですか？',
        'faq-1-a': 'はい、AzGames.ioで完全無料で遊べます！',
        'faq-2-q': '友達と一緒に遊べますか？',
        'faq-2-a': 'はい、友達を招待して一緒に高得点を目指せます！',
        'faq-3-q': '必要な動作環境は？',
        'faq-3-a': 'ほとんどの最新ブラウザで快適に動作。ChromeやFirefox推奨。',
        'faq-4-q': '進行状況はどう保存されますか？',
        'faq-4-a': 'ログインすれば自動保存。アカウント登録で実績も管理できます。',
        
        // 页脚部分
        'copyright': '© 2024 AzGames.io. 全著作権所有。',
        'contact-us': 'お問い合わせ'
    },
    // 韩文翻译
    ko: {
        // 页头部分
        'popular-games': '인기 게임',
        'more-games': '더 많은 게임',
        'fullscreen': '전체 화면',
        
        // 游戏信息部分
        'game-features': '게임 특징',
        'how-to-play': '플레이 방법',
        'what-players-love': '플레이어 리뷰',
        'faq': '자주 묻는 질문',
        
        // 游戏特点部分
        'feature-1': '멋진 3D 조명 효과',
        'feature-2': '사실적인 레이싱 물리 엔진',
        'feature-3': '타임어택·챔피언십 등 다양한 모드',
        'feature-4': '다양한 차량 커스터마이즈',
        'feature-5': '동적으로 변하는 날씨 시스템',
        'feature-6': '최대 8인 멀티플레이 지원',
        
        // 游戏描述部分
        'about-game': 'Chicken Jockey Clicker는 AzGames.io에서만 즐길 수 있는 독특한 방치형 게임입니다. 귀여운 치킨 조키를 조작해 코인을 모으고, 업그레이드와 스킨을 수집하세요. 초보자도 고수도 모두 즐길 수 있는 깊이와 재미! 정기 업데이트로 항상 새로움을 제공합니다.',
        
        // 游戏操作指南部分
        'how-to-play-desc': 'Chicken Jockey Clicker는 시작이 매우 쉽습니다! 치킨 조키를 클릭하거나 터치해 코인을 얻고, 코인으로 업그레이드와 새로운 기능을 해금하세요. 직관적인 UI로 어떤 기기에서도 쉽게 플레이할 수 있습니다. 매일 접속해 보너스도 챙기세요!',
        'how-to-play-1': '클릭/터치: 코인 획득',
        'how-to-play-2': '업그레이드: 제국 강화',
        'how-to-play-3': '업적: 진행 상황 추적',
        'how-to-play-4': '설정: 사운드·화면 조정',
        'how-to-play-5': '프레스티지: 리셋 후 보너스 획득(고급 기능)',
        
        // 游戏技巧部分
        'pro-tip-1': '수동 수입 업그레이드를 우선하세요',
        'pro-tip-2': '클릭과 방치 수입의 균형이 중요',
        'pro-tip-3': '가성비 순서로 업그레이드 구매',
        'pro-tip-4': '프레스티지로 영구 보너스 활용',
        'pro-tip-5': '매일 로그인해 보너스와 이벤트 챙기기',
        'pro-tip-6': '중후반엔 특별 스킨을 모아 강화',
        'pro-tip-7': '매일 플레이하면 진행이 빨라짐',
        'pro-tip-8': '친구와 업적 공유, 랭킹 경쟁',
        
        // 玩家评论部分
        '"Chicken Jockey Clicker는 단순하면서도 깊이가 있어요. 매일 접속해 성장 확인!"',
        '"언제든 짧게 즐겨도 보상이 있어 좋아요!"',
        '"캐릭터 스킨이 너무 귀엽고, 모으는 재미가 쏠쏠해요"',
        '"업그레이드 달성의 쾌감이 최고!"',
        '"옛날 폰에서도 잘 돌아가서 출퇴근길에 꼭 해요"',
        
        // 最新更新部分
        'latest-updates': '최신 업데이트',
        'update-1': '인기 캐주얼·퍼즐 게임 5종 추가',
        'update-2': '모바일 성능 향상, 더 빠르고 부드럽게',
        'update-3': '커뮤니티 기능 강화, 랭킹·업적 지원',
        'update-4': '모든 게임 최신 보안 검사 완료',
        
        // FAQ部分
        'faq-1-q': 'Chicken Jockey Clicker는 무료인가요?',
        'faq-1-a': '네, AzGames.io에서 완전 무료로 즐길 수 있습니다!',
        'faq-2-q': '친구와 함께 플레이할 수 있나요?',
        'faq-2-a': '네, 친구를 초대해 함께 점수 경쟁이 가능합니다!',
        'faq-3-q': '시스템 요구 사항은?',
        'faq-3-a': '대부분의 최신 브라우저에서 원활하게 실행, Chrome·Firefox 추천',
        'faq-4-q': '진행 상황 저장 방법은?',
        'faq-4-a': '로그인 시 자동 저장, 계정 등록 시 업적 동기화 가능',
        
        // 页脚部分
        'copyright': '© 2024 AzGames.io. 모든 권리 보유.',
        'contact-us': '문의하기'
    },
    // 西班牙语翻译
    es: {
        // 页头部分
        'popular-games': 'Juegos Populares',
        'more-games': 'Más Juegos',
        'fullscreen': 'Pantalla Completa',
        
        // 游戏信息部分
        'game-features': 'Características del Juego',
        'how-to-play': 'Cómo Jugar',
        'what-players-love': 'Lo que Amamos',
        'faq': 'Preguntas Frecuentes',
        
        // 游戏特点部分
        'feature-1': 'Impresionantes efectos de luz 3D',
        'feature-2': 'Motor físico realista para carreras',
        'feature-3': 'Varios modos: Contrarreloj y Campeonato',
        'feature-4': 'Personalización avanzada de vehículos',
        'feature-5': 'Clima dinámico que afecta el juego',
        'feature-6': 'Multijugador hasta 8 personas',
        
        // 游戏描述部分
        'about-game': 'Chicken Jockey Clicker es un juego idle único disponible solo en AzGames.io. Controla simpáticos jinetes de pollo y gana monedas haciendo clic. El mundo de Chicken Jockey Clicker está lleno de mejoras, potenciadores y skins coleccionables. Tanto principiantes como expertos disfrutarán de diversión y estrategia sin fin. ¡Actualizaciones frecuentes mantienen el juego siempre fresco, únete a millones de jugadores ahora!',
        
        // 游戏操作指南部分
        'how-to-play-desc': '¡Empezar en Chicken Jockey Clicker es muy fácil! Haz clic o toca tu jinete para ganar monedas. Usa las monedas para comprar mejoras y desbloquear funciones. La interfaz es intuitiva y apta para cualquier dispositivo. ¡No olvides entrar cada día para eventos y recompensas!',
        'how-to-play-1': 'Clic/Tocar: Gana monedas',
        'how-to-play-2': 'Mejoras: Haz crecer tu imperio',
        'how-to-play-3': 'Logros: Sigue tu progreso',
        'how-to-play-4': 'Ajustes: Sonido y gráficos',
        'how-to-play-5': 'Prestigio: Reinicia y gana bonificaciones (avanzado)',
        
        // 游戏技巧部分
        'pro-tip-1': 'Prioriza mejoras de ingresos pasivos al principio',
        'pro-tip-2': 'Equilibra clics y generación automática para mejores resultados',
        'pro-tip-3': 'Compra mejoras según la mejor relación costo-beneficio',
        'pro-tip-4': 'No ignores el prestigio, los bonos permanentes aceleran el progreso',
        'pro-tip-5': 'Entra cada día para recompensas y eventos',
        'pro-tip-6': 'En el medio juego, desbloquea skins especiales para bonificaciones únicas',
        'pro-tip-7': 'Jugar a diario acelera tu progreso',
        'pro-tip-8': 'Comparte logros y compite en el ranking',
        
        // 玩家评论部分
        'review-1': '“Chicken Jockey Clicker combina sencillez y profundidad. ¡Vuelvo cada día para ver mi progreso!”',
        'review-2': '“Me encanta que siempre me recompensa, juegue poco o mucho.”',
        'review-3': '“¡Los skins de personajes son adorables, coleccionarlos es adictivo!”',
        'review-4': '“El sistema de mejoras es muy satisfactorio, cada avance se siente genial.”',
        'review-5': '“Funciona perfecto incluso en mi móvil viejo, es mi juego favorito en el transporte.”',
        
        // 最新更新部分
        'latest-updates': 'Últimas novedades',
        'update-1': 'Añadidos 5 nuevos juegos casuales y de puzzles.',
        'update-2': 'Mejoras en el rendimiento móvil: más rápido y fluido.',
        'update-3': 'Mejoras en la comunidad: ranking y logros disponibles.',
        'update-4': 'Seguridad reforzada: todos los juegos verificados.',
        
        // FAQ部分
        'faq-1-q': '¿Chicken Jockey Clicker es gratis?',
        'faq-1-a': '¡Sí, Chicken Jockey Clicker es totalmente gratis en AzGames.io!',
        'faq-2-q': '¿Puedo jugar con amigos?',
        'faq-2-a': '¡Sí, invita a tus amigos y compite por la mejor puntuación!',
        'faq-3-q': '¿Requisitos del sistema?',
        'faq-3-a': 'Funciona en la mayoría de navegadores modernos. Recomendado Chrome o Firefox.',
        'faq-4-q': '¿Cómo guardo mi progreso?',
        'faq-4-a': 'El progreso se guarda automáticamente al iniciar sesión. Regístrate para logros sincronizados.',
        
        // 页脚部分
        'copyright': '© 2024 AzGames.io. Todos los derechos reservados.',
        'contact-us': 'Contáctanos'
    }
};

/**
 * 更新网站语言函数
 * 根据选择的语言代码更新页面上所有带有data-i18n属性的元素文本
 * @param {string} lang - 语言代码（en, zh, ja, ko, es）
 */
function updateLanguage(lang) {
    // 查找所有带有data-i18n属性的元素，并更新其文本内容
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n'); // 获取翻译键名
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key]; // 设置对应语言的文本
        }
    });
    
    // 更新HTML文档的lang属性，有助于屏幕阅读器和搜索引擎识别页面语言
    document.documentElement.lang = lang;
    
    // 更新语言按钮的激活状态，高亮显示当前选中的语言
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active'); // 移除所有按钮的激活状态
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active'); // 为当前语言按钮添加激活状态
        }
    });
    
    // 将用户语言偏好保存到本地存储，下次访问时自动应用
    localStorage.setItem('preferred-language', lang);
}

// 初始化语言设置
// 在DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 为页面元素添加data-i18n属性，标记需要翻译的文本
    document.querySelector('.game-links h2').setAttribute('data-i18n', 'popular-games');
    document.querySelector('.mini-games h2').setAttribute('data-i18n', 'more-games');
    document.querySelector('.fullscreen-btn').setAttribute('data-i18n', 'fullscreen');
    document.querySelector('.game-features h3').setAttribute('data-i18n', 'game-features');
    document.querySelector('.how-to-play h3').setAttribute('data-i18n', 'how-to-play');
    document.querySelector('.player-reviews h3').setAttribute('data-i18n', 'what-players-love');
    document.querySelector('.faq h3').setAttribute('data-i18n', 'faq');
    
    // 为所有语言按钮添加点击事件监听器
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang'); // 获取按钮的语言代码
            updateLanguage(lang); // 更新网站语言
        });
    });
    
    // 加载用户偏好语言或默认使用英语
    // 从本地存储中获取之前保存的语言偏好，如果没有则默认为英语
    const preferredLang = localStorage.getItem('preferred-language') || 'en';
    updateLanguage(preferredLang); // 应用语言设置
}); 