let cooldowns = {}

// Clases disponibles
const classes = {
    1: { name: 'Mago', health: 80, damage: 35, defense: 10, emoji: '🧙‍♂️' },
    2: { name: 'Guerrero', health: 120, damage: 25, defense: 20, emoji: '⚔️' },
    3: { name: 'Paladín', health: 100, damage: 30, defense: 15, emoji: '🛡️' },
    4: { name: 'Arquero', health: 85, damage: 32, defense: 12, emoji: '🏹' },
    5: { name: 'Asesino', health: 70, damage: 40, defense: 6, emoji: '🗡️' },
    6: { name: 'Druida', health: 90, damage: 28, defense: 14, emoji: '🌿' },
    7: { name: 'Monje', health: 95, damage: 27, defense: 18, emoji: '🙏' },
    8: { name: 'Berserker', health: 130, damage: 38, defense: 8, emoji: '🤬' },
    9: { name: 'Nigromante', health: 75, damage: 36, defense: 11, emoji: '☠️' },
    10: { name: 'Hechicero', health: 78, damage: 33, defense: 13, emoji: '🧙' },
    11: { name: 'Cazador', health: 90, damage: 32, defense: 10, emoji: '🏹' },
    12: { name: 'Bardo', health: 85, damage: 25, defense: 15, emoji: '🎸' },
    13: { name: 'Caballero', health: 110, damage: 28, defense: 22, emoji: '🤺' },
    14: { name: 'Samurái', health: 100, damage: 33, defense: 16, emoji: '🥷' },
    15: { name: 'Ninja', health: 75, damage: 39, defense: 8, emoji: '🥷' },
    16: { name: 'Brujo', health: 80, damage: 37, defense: 10, emoji: '🧙‍♂️' },
    17: { name: 'Chamán', health: 92, damage: 29, defense: 15, emoji: '🦅' },
    18: { name: 'Vikingo', health: 120, damage: 35, defense: 14, emoji: '🪓' },
    19: { name: 'Gladiador', health: 115, damage: 31, defense: 17, emoji: '🏛️' },
    20: { name: 'Alquimista', health: 82, damage: 30, defense: 12, emoji: '⚗️' },
    21: { name: 'Ilusionista', health: 70, damage: 38, defense: 11, emoji: '🎩' },
    22: { name: 'Clérigo', health: 105, damage: 26, defense: 20, emoji: '✝️' },
    23: { name: 'Explorador', health: 88, damage: 31, defense: 13, emoji: '🧭' },
    24: { name: 'Pirata', health: 95, damage: 33, defense: 12, emoji: '🏴‍☠️' },
    25: { name: 'Espadachín', health: 100, damage: 34, defense: 15, emoji: '⚔️' },
    26: { name: 'Guardián', health: 125, damage: 27, defense: 23, emoji: '🛡️' },
    27: { name: 'Templario', health: 110, damage: 29, defense: 21, emoji: '⛨' },
    28: { name: 'Mercenario', health: 98, damage: 37, defense: 11, emoji: '🪙' },
    29: { name: 'Cruzado', health: 112, damage: 28, defense: 19, emoji: '✝️' },
    30: { name: 'Justiciero', health: 90, damage: 36, defense: 14, emoji: '⚖️' },
    31: { name: 'Místico', health: 80, damage: 34, defense: 13, emoji: '🔮' },
    32: { name: 'Forajido', health: 85, damage: 35, defense: 10, emoji: '🤠' },
    33: { name: 'Bestia', health: 140, damage: 28, defense: 5, emoji: '🐾' },
    34: { name: 'Centauro', health: 120, damage: 31, defense: 16, emoji: '🐎' },
    35: { name: 'Fénix', health: 95, damage: 36, defense: 12, emoji: '🔥' },
    36: { name: 'Ángel', health: 98, damage: 32, defense: 17, emoji: '👼' },
    37: { name: 'Demonio', health: 105, damage: 39, defense: 9, emoji: '😈' },
    38: { name: 'Hada', health: 70, damage: 31, defense: 14, emoji: '🧚‍♀️' },
    39: { name: 'Medusa', health: 92, damage: 37, defense: 13, emoji: '🐍' },
    40: { name: 'Titán', health: 150, damage: 30, defense: 18, emoji: '🗿' },
    41: { name: 'Minotauro', health: 135, damage: 33, defense: 12, emoji: '🐂' },
    42: { name: 'Elfo', health: 88, damage: 32, defense: 16, emoji: '🧝‍♂️' },
    43: { name: 'Gnomo', health: 72, damage: 27, defense: 18, emoji: '🧙‍♂️' },
    44: { name: 'Orco', health: 120, damage: 36, defense: 8, emoji: '👹' },
    45: { name: 'Duende', health: 80, damage: 33, defense: 13, emoji: '🧞' },
    46: { name: 'Licántropo', health: 110, damage: 38, defense: 10, emoji: '🐺' },
    47: { name: 'Vampiro', health: 100, damage: 37, defense: 11, emoji: '🧛' },
    48: { name: 'Zombi', health: 130, damage: 28, defense: 9, emoji: '🧟' },
    49: { name: 'Espectro', health: 85, damage: 35, defense: 10, emoji: '👻' },
    50: { name: 'Elemental', health: 90, damage: 40, defense: 12, emoji: '🌪️' }
}

// Personajes (enemigos) disponibles
const characters = [
    { name: 'Murciélago', health: 30, damage: 12, emoji: '🦇' },
    { name: 'Rata Gigante', health: 35, damage: 14, emoji: '🐀' },
    { name: 'Lobo Sombra', health: 50, damage: 18, emoji: '🐺' },
    { name: 'Ent Maligno', health: 60, damage: 20, emoji: '🌳' },
    { name: 'Esqueleto', health: 60, damage: 20, emoji: '💀' },
    { name: 'Momia', health: 65, damage: 22, emoji: '🧟' },
    { name: 'Orco', health: 70, damage: 25, emoji: '👾' },
    { name: 'Orco Chamán', health: 75, damage: 28, emoji: '🧙‍♂️' },
    { name: 'Dragón Joven', health: 90, damage: 30, emoji: '🐲' },
    { name: 'Dragón Anciano', health: 120, damage: 40, emoji: '🐉' },
    { name: 'Araña Gigante', health: 45, damage: 22, emoji: '🕷️' },
    { name: 'Serpiente Venenosa', health: 40, damage: 25, emoji: '🐍' },
    { name: 'Bandido', health: 55, damage: 19, emoji: '🦹' },
    { name: 'Hechicero Oscuro', health: 70, damage: 27, emoji: '🧙' },
    { name: 'Guardián de Piedra', health: 80, damage: 23, emoji: '🪨' },
    { name: 'Gólem de Hierro', health: 100, damage: 28, emoji: '🤖' },
    { name: 'Troll del Puente', health: 110, damage: 30, emoji: '👹' },
    { name: 'Fantasma', health: 50, damage: 18, emoji: '👻' },
    { name: 'Vampiro', health: 75, damage: 32, emoji: '🧛' },
    { name: 'Hada Maligna', health: 40, damage: 21, emoji: '🧚‍♀️' },
    { name: 'Bestia Salvaje', health: 60, damage: 22, emoji: '🐾' },
    { name: 'Guerrero Espectral', health: 95, damage: 35, emoji: '👤' },
    { name: 'Licántropo', health: 105, damage: 36, emoji: '🐺' },
    { name: 'Elemental de Fuego', health: 80, damage: 34, emoji: '🔥' },
    { name: 'Sirena', health: 60, damage: 24, emoji: '🧜‍♀️' }
]

// Misiones disponibles (30 misiones, cada una con 2 enemigos aleatorios)
const missions = [
    {
        id: 1,
        name: 'Cueva Sombría',
        description: 'Explora las profundidades de una cueva misteriosa',
        difficulty: 'Fácil',
        emoji: '🕳️',
        enemies: [characters[0], characters[1]]
    },
    {
        id: 2,
        name: 'Bosque Encantado',
        description: 'Aventúrate en el bosque donde habitan criaturas mágicas',
        difficulty: 'Medio',
        emoji: '🌲',
        enemies: [characters[2], characters[3]]
    },
    {
        id: 3,
        name: 'Ruinas Ancestrales',
        description: 'Descubre los secretos de una civilización perdida',
        difficulty: 'Medio',
        emoji: '🏛️',
        enemies: [characters[4], characters[5]]
    },
    {
        id: 4,
        name: 'Fortaleza Orca',
        description: 'Infiltra la fortaleza de los orcos guerreros',
        difficulty: 'Difícil',
        emoji: '🏰',
        enemies: [characters[6], characters[7]]
    },
    {
        id: 5,
        name: 'Guarida del Dragón',
        description: 'Enfrenta al legendario dragón en su guarida',
        difficulty: 'Extremo',
        emoji: '🐉',
        enemies: [characters[8], characters[9]]
    },
    {
        id: 6,
        name: 'Pantano Venenoso',
        description: 'Sobrevive a las criaturas del pantano tóxico',
        difficulty: 'Medio',
        emoji: '🐸',
        enemies: [characters[10], characters[11]]
    },
    {
        id: 7,
        name: 'Cueva de Bandidos',
        description: 'Recupera el botín robado de los bandidos',
        difficulty: 'Fácil',
        emoji: '💰',
        enemies: [characters[12], characters[0]]
    },
    {
        id: 8,
        name: 'Torre del Hechicero',
        description: 'Desafía al hechicero oscuro en su torre',
        difficulty: 'Difícil',
        emoji: '🏯',
        enemies: [characters[13], characters[2]]
    },
    {
        id: 9,
        name: 'Valle de los Guardianes',
        description: 'Lucha contra los guardianes de piedra',
        difficulty: 'Medio',
        emoji: '🏞️',
        enemies: [characters[14], characters[15]]
    },
    {
        id: 10,
        name: 'El Puente Maldito',
        description: 'Cruza el puente custodiado por un troll peligroso',
        difficulty: 'Medio',
        emoji: '🌉',
        enemies: [characters[16], characters[12]]
    },
    {
        id: 11,
        name: 'Bosque Embrujado',
        description: 'Enfréntate a los fantasmas que vagan por el bosque',
        difficulty: 'Fácil',
        emoji: '🌳',
        enemies: [characters[17], characters[0]]
    },
    {
        id: 12,
        name: 'Castillo de Vampiros',
        description: 'Derrota al vampiro y sus secuaces',
        difficulty: 'Difícil',
        emoji: '🏰',
        enemies: [characters[18], characters[5]]
    },
    {
        id: 13,
        name: 'Praderas Malditas',
        description: 'Sobrevive a las hadas malignas de las praderas',
        difficulty: 'Fácil',
        emoji: '🌾',
        enemies: [characters[19], characters[1]]
    },
    {
        id: 14,
        name: 'Cañón Salvaje',
        description: 'Vence a la bestia salvaje que controla el cañón',
        difficulty: 'Medio',
        emoji: '⛰️',
        enemies: [characters[20], characters[8]]
    },
    {
        id: 15,
        name: 'Guarida Espectral',
        description: 'Enfrenta a los guerreros espectrales',
        difficulty: 'Difícil',
        emoji: '👻',
        enemies: [characters[21], characters[17]]
    },
    {
        id: 16,
        name: 'Montaña Licántropa',
        description: 'Explora las montañas plagadas de licántropos',
        difficulty: 'Extremo',
        emoji: '🏔️',
        enemies: [characters[22], characters[12]]
    },
    {
        id: 17,
        name: 'Templo de Fuego',
        description: 'Enfrenta elementales de fuego en el antiguo templo',
        difficulty: 'Difícil',
        emoji: '🔥',
        enemies: [characters[23], characters[13]]
    },
    {
        id: 18,
        name: 'Cascada Encantada',
        description: 'Explora la cascada custodiada por sirenas',
        difficulty: 'Medio',
        emoji: '💦',
        enemies: [characters[24], characters[19]]
    },
    {
        id: 19,
        name: 'Isla Pirata',
        description: 'Derrota a los piratas y recupera el tesoro perdido',
        difficulty: 'Medio',
        emoji: '🏝️',
        enemies: [characters[12], characters[14]]
    },
    {
        id: 20,
        name: 'Bosque del Olvido',
        description: 'Sobrevive a las criaturas que hacen olvidar a los viajeros',
        difficulty: 'Difícil',
        emoji: '🌌',
        enemies: [characters[11], characters[17]]
    },
    {
        id: 21,
        name: 'Desierto Abrasador',
        description: 'Resiste al calor y a los monstruos del desierto',
        difficulty: 'Difícil',
        emoji: '🏜️',
        enemies: [characters[23], characters[16]]
    },
    {
        id: 22,
        name: 'Cementerio Maldito',
        description: 'Enfrenta a los muertos vivientes',
        difficulty: 'Medio',
        emoji: '⚰️',
        enemies: [characters[4], characters[21]]
    },
    {
        id: 23,
        name: 'Ruinas Submarinas',
        description: 'Descubre secretos bajo el agua',
        difficulty: 'Extremo',
        emoji: '🌊',
        enemies: [characters[24], characters[9]]
    },
    {
        id: 24,
        name: 'Aldea Fantasma',
        description: 'Investiga la desaparición de los aldeanos',
        difficulty: 'Fácil',
        emoji: '🏚️',
        enemies: [characters[17], characters[0]]
    },
    {
        id: 25,
        name: 'Pico Nevado',
        description: 'Sobrevive al frío y a los enemigos en la cima',
        difficulty: 'Difícil',
        emoji: '🏔️',
        enemies: [characters[15], characters[22]]
    },
    {
        id: 26,
        name: 'Foso de Lava',
        description: 'Derrota a los seres de fuego en el foso',
        difficulty: 'Extremo',
        emoji: '🌋',
        enemies: [characters[23], characters[13]]
    },
    {
        id: 27,
        name: 'Prisión Abandonada',
        description: 'Libera las almas atrapadas en la prisión',
        difficulty: 'Medio',
        emoji: '🏢',
        enemies: [characters[21], characters[5]]
    },
    {
        id: 28,
        name: 'Templo Prohibido',
        description: 'Descifra el misterio del templo prohibido',
        difficulty: 'Difícil',
        emoji: '🏛️',
        enemies: [characters[14], characters[18]]
    },
    {
        id: 29,
        name: 'Jardín del Edén Oscuro',
        description: 'Lucha contra las criaturas del jardín maldito',
        difficulty: 'Medio',
        emoji: '🌺',
        enemies: [characters[19], characters[20]]
    },
    {
        id: 30,
        name: 'La Gran Batalla Final',
        description: 'Haz frente a los peores enemigos del reino',
        difficulty: 'Extremo',
        emoji: '⚔️',
        enemies: [characters[9], characters[22]]
    }
]

// Opciones de combate
const combatActions = [
    { name: 'Atacar con fuego', multiplier: 1.2, emoji: '🔥' },
    { name: 'Ataque básico', multiplier: 1.0, emoji: '⚔️' },
    { name: 'Ataque poderoso', multiplier: 1.5, emoji: '💥' }
]

let handler = async (m, { conn, args, command }) => {
    let user = global.db.data.users[m.sender];
    if (!user) return;

    // Inicializar datos del juego si no existen
    if (!user.rpg) {
        user.rpg = {
            class: null,
            level: 1,
            exp: 0,
            maxHealth: 100,
            currentHealth: 100,
            damage: 20,
            defense: 10,
            coins: 100,
            iron: 0,
            gold: 0,
            emerald: 0,
            coal: 0,
            stone: 0,
            lastMission: 0,
            inCombat: false,
            enemy: null,
            selectedMission: null,
            selectingClass: false // Nueva variable para controlar el estado
        }
    }

    let img = 'https://github.com/Fer280809/Asta_bot/blob/main/tmp/imajen-bosque.jpeg'

    switch (command) {
        case 'comenzar':
            if (user.rpg.class) {
                return conn.reply(m.chat, `${classes[user.rpg.class].emoji} Ya has comenzado tu aventura como ${classes[user.rpg.class].name}. Usa *!mision* para continuar.`, m);
            }

            // Marcar que el usuario está seleccionando clase
            user.rpg.selectingClass = true;

            let classSelection = `🏰 *¡Bienvenido a Reinos de Sombras!* 🏰\n\n` +
                `✨ *Elige tu clase de aventurero:* ✨\n\n` +
                `1️⃣ ${classes[1].emoji} *${classes[1].name}*\n` +
                `   ❤️ Vida: ${classes[1].health} | ⚔️ Daño: ${classes[1].damage} | 🛡️ Defensa: ${classes[1].defense}\n\n` +
                `2️⃣ ${classes[2].emoji} *${classes[2].name}*\n` +
                `   ❤️ Vida: ${classes[2].health} | ⚔️ Daño: ${classes[2].damage} | 🛡️ Defensa: ${classes[2].defense}\n\n` +
                `3️⃣ ${classes[3].emoji} *${classes[3].name}*\n` +
                `   ❤️ Vida: ${classes[3].health} | ⚔️ Daño: ${classes[3].damage} | 🛡️ Defensa: ${classes[3].defense}\n\n` +
                `📝 *Escribe el número de tu elección (1, 2 o 3)*`;

            await conn.sendFile(m.chat, img, 'rpg.jpg', classSelection, fkontak);
            await m.react('🏰');
            break;

        case 'menumision':
            if (!user.rpg.class) {
                return conn.reply(m.chat, '❌ Primero debes usar *!comenzar* para seleccionar tu clase.', m);
            }

            let missionMenu = `🗺️ *MISIONES DISPONIBLES* 🗺️\n\n`;
            
            missions.forEach((mission, index) => {
                let difficultyColor = '';
                switch(mission.difficulty) {
                    case 'Fácil': difficultyColor = '🟢'; break;
                    case 'Medio': difficultyColor = '🟡'; break;
                    case 'Difícil': difficultyColor = '🟠'; break;
                    case 'Extremo': difficultyColor = '🔴'; break;
                }
                
                missionMenu += `${mission.id}️⃣ ${mission.emoji} *${mission.name}*\n` +
                    `   ${mission.description}\n` +
                    `   ${difficultyColor} Dificultad: ${mission.difficulty}\n\n`;
            });

            missionMenu += `📝 *Escribe el número de la misión que deseas realizar*\n` +
                `💡 *Usa !estado para ver tu información actual*\n\n` +
                `📜 *COMANDOS DISPONIBLES:*\n` +
                `🏰 *!comenzar* - Inicia el juego y selecciona clase\n` +
                `📊 *!estado* - Muestra tu información y recursos\n` +
                `🗺️ *!menumision* - Muestra este menú de misiones\n` +
                `⚔️ *!mision* - Acceso rápido al menú de misiones\n` +
                `❓ *!ayuda* - Muestra este menú (igual que menumision)\n\n` +
                `💡 *Durante el combate usa números 1, 2 o 3 para atacar*\n` +
                `🎯 *En este menú usa números 1-30 para seleccionar misión*`;

            await conn.sendFile(m.chat, img, 'missions.jpg', missionMenu, fkontak);
            await m.react('🗺️');
            break;

        case 'mision':
            // Redirigir al menú de misiones
            return handler(m, { conn, args, command: 'menumision' });

        case 'estado':
            if (!user.rpg.class) {
                return conn.reply(m.chat, '❌ Primero debes usar *!comenzar* para seleccionar tu clase.', m);
            }

            let selectedClassInfo = classes[user.rpg.class];
            let statusMsg = `📊 *ESTADO DEL AVENTURERO* 📊\n\n` +
                `${selectedClassInfo.emoji} *Clase:* ${selectedClassInfo.name}\n` +
                `🆙 *Nivel:* ${user.rpg.level}\n` +
                `✨ *Experiencia:* ${user.rpg.exp}\n` +
                `❤️ *Vida:* ${user.rpg.currentHealth}/${user.rpg.maxHealth}\n` +
                `⚔️ *Daño:* ${user.rpg.damage}\n` +
                `🛡️ *Defensa:* ${user.rpg.defense}\n` +
                `💰 *Monedas:* ${user.rpg.coins}\n\n` +
                `🎒 *RECURSOS:*\n` +
                `🔩 *Hierro:* ${user.rpg.iron}\n` +
                `🥇 *Oro:* ${user.rpg.gold}\n` +
                `💎 *Esmeraldas:* ${user.rpg.emerald}\n` +
                `⚫ *Carbón:* ${user.rpg.coal}\n` +
                `🪨 *Piedra:* ${user.rpg.stone}`;

            await conn.reply(m.chat, statusMsg, m);
            await m.react('📊');
            break;

        case 'ayuda':
            // Redirigir al menú de misiones
            return handler(m, { conn, args, command: 'menumision' });

        default:
            // SELECCIÓN DE CLASE
            if (['1','2','3'].includes(command)) {
                if (user.rpg.selectingClass && !user.rpg.class) {
                    let selectedClass = classes[parseInt(command)];
                    user.rpg.class = parseInt(command);
                    user.rpg.maxHealth = selectedClass.health;
                    user.rpg.currentHealth = selectedClass.health;
                    user.rpg.damage = selectedClass.damage;
                    user.rpg.defense = selectedClass.defense;
                    user.rpg.selectingClass = false; // Ya no está seleccionando clase

                    let welcome = `⚡ *¡Clase seleccionada!* ⚡\n\n` +
                        `${selectedClass.emoji} *Ahora eres un ${selectedClass.name}*\n\n` +
                        `📊 *Tus estadísticas:*\n` +
                        `❤️ Vida: ${selectedClass.health}/${selectedClass.health}\n` +
                        `⚔️ Daño: ${selectedClass.damage}\n` +
                        `🛡️ Defensa: ${selectedClass.defense}\n` +
                        `💰 Monedas: ${user.rpg.coins}\n\n` +
                        `🗡️ *¡Tu aventura comienza ahora!*\n` +
                        `Usa *!mision* para emprender tu primera misión`;

                    await conn.reply(m.chat, welcome, m);
                    await m.react('⚡');
                    break;
                }
            }

            // ACCIONES DE COMBATE
            if (['1','2','3'].includes(command)) {
                if (user.rpg.inCombat && user.rpg.class) {
                    let actionIndex = parseInt(command) - 1;
                    let action = combatActions[actionIndex];
                    let enemy = user.rpg.enemy;

                    // Calcular daño del jugador
                    let playerDamage = Math.floor(user.rpg.damage * action.multiplier);
                    enemy.health -= playerDamage;

                    let battleResult = `${action.emoji} *${action.name}*\n\n` +
                        `💥 *Infliges ${playerDamage} de daño*\n`;

                    if (enemy.health <= 0) {
                        // Victoria
                        let missionBonus = 1;
                        if (user.rpg.selectedMission) {
                            switch(user.rpg.selectedMission.difficulty) {
                                case 'Fácil': missionBonus = 1; break;
                                case 'Medio': missionBonus = 1.3; break;
                                case 'Difícil': missionBonus = 1.6; break;
                                case 'Extremo': missionBonus = 2; break;
                            }
                        }

                        let expGain = Math.floor((Math.random() * 50 + 20 + (user.rpg.level * 5)) * missionBonus);
                        let coinGain = Math.floor((pickRandom([20, 5, 7, 8, 88, 40, 50, 70, 90, 100]) + (user.rpg.level * 2)) * missionBonus);
                        let emeraldGain = user.rpg.level >= 3 ? pickRandom([0, 0, 0, 1, 2]) : 0;
                        let ironGain = Math.floor((pickRandom([1, 2, 3, 4, 5]) + Math.floor(user.rpg.level / 2)) * missionBonus);
                        let goldGain = Math.floor((pickRandom([0, 1, 2, 3]) + Math.floor(user.rpg.level / 3)) * missionBonus);
                        let coalGain = Math.floor((pickRandom([2, 3, 4, 5, 6]) + Math.floor(user.rpg.level / 2)) * missionBonus);
                        let stoneGain = Math.floor((pickRandom([3, 4, 5, 6, 7]) + user.rpg.level) * missionBonus);

                        // Subir de nivel
                        user.rpg.exp += expGain;
                        if (user.rpg.exp >= (user.rpg.level * 100)) {
                            user.rpg.level++;
                            user.rpg.maxHealth += 10;
                            user.rpg.damage += 2;
                            user.rpg.defense += 1;
                            battleResult += `🆙 *¡SUBISTE DE NIVEL!* Ahora eres nivel ${user.rpg.level}\n`;
                        }

                        let missionName = user.rpg.selectedMission ? user.rpg.selectedMission.name : 'Misión';
                        let difficultyBonus = user.rpg.selectedMission ? `\n🎖️ *Bonus ${user.rpg.selectedMission.difficulty}*: +${Math.floor((missionBonus - 1) * 100)}%` : '';

                        battleResult += `✅ *¡VICTORIA EN ${missionName.toUpperCase()}!* Has derrotado al ${user.rpg.enemy.name}${difficultyBonus}\n\n` +
                            `🎁 *RECOMPENSAS:*\n` +
                            `┏━━━━━━━━━━━━━┓\n` +
                            `┃ ✨ *Exp*: +${expGain}\n` +
                            `┃ 💰 *Monedas*: +${coinGain}\n` +
                            `┃ 🔩 *Hierro*: +${ironGain}\n` +
                            `┃ 🥇 *Oro*: +${goldGain}\n` +
                            `┃ 💎 *Esmeraldas*: +${emeraldGain}\n` +
                            `┃ ⚫ *Carbón*: +${coalGain}\n` +
                            `┃ 🪨 *Piedra*: +${stoneGain}\n` +
                            `┗━━━━━━━━━━━━━┛`;

                        // Aplicar recompensas
                        user.rpg.coins += coinGain;
                        user.rpg.iron += ironGain;
                        user.rpg.gold += goldGain;
                        user.rpg.emerald += emeraldGain;
                        user.rpg.coal += coalGain;
                        user.rpg.stone += stoneGain;
                        user.rpg.lastMission = new Date() * 1;
                        user.rpg.inCombat = false;
                        user.rpg.enemy = null;
                        user.rpg.selectedMission = null;

                        await m.react('🏆');
                    } else {
                        // El enemigo ataca
                        let enemyDamage = Math.max(1, enemy.damage - user.rpg.defense);
                        user.rpg.currentHealth -= enemyDamage;

                        battleResult += `${enemy.emoji} *El ${enemy.name} contraataca*\n` +
                            `💔 *Recibes ${enemyDamage} de daño*\n\n` +
                            `❤️ *Tu vida: ${user.rpg.currentHealth}/${user.rpg.maxHealth}*\n` +
                            `🩸 *Vida del enemigo: ${enemy.health}*\n\n`;

                        if (user.rpg.currentHealth <= 0) {
                            // Derrota
                            let coinLoss = Math.min(30, user.rpg.coins);
                            let resourceLoss = 1;

                            battleResult += `💀 *¡HAS MUERTO!*\n\n` +
                                `💸 *Pierdes ${coinLoss} monedas*\n` +
                                `📉 *Pierdes 1 de cada recurso*\n` +
                                `❤️ *Tu salud será restaurada automáticamente*`;

                            user.rpg.coins = Math.max(0, user.rpg.coins - coinLoss);
                            user.rpg.iron = Math.max(0, user.rpg.iron - resourceLoss);
                            user.rpg.gold = Math.max(0, user.rpg.gold - resourceLoss);
                            user.rpg.coal = Math.max(0, user.rpg.coal - resourceLoss);
                            user.rpg.stone = Math.max(0, user.rpg.stone - resourceLoss);
                            user.rpg.currentHealth = user.rpg.maxHealth;
                            user.rpg.inCombat = false;
                            user.rpg.enemy = null;
                            user.rpg.selectedMission = null;
                            user.rpg.lastMission = new Date() * 1;

                            await m.react('💀');
                        } else {
                            battleResult += `🎯 *¿Qué deseas hacer?*\n` +
                                `1️⃣ ${combatActions[0].emoji} ${combatActions[0].name}\n` +
                                `2️⃣ ${combatActions[1].emoji} ${combatActions[1].name}\n` +
                                `3️⃣ ${combatActions[2].emoji} ${combatActions[2].name}`;
                            
                            await m.react('⚔️');
                        }
                    }

                    await conn.reply(m.chat, battleResult, m);
                    break;
                }
            }

            // SELECCIÓN DE MISIONES (ahora hasta la misión 30)
            if (!user.rpg.inCombat && user.rpg.class && !user.rpg.selectingClass) {
                let missionId = parseInt(command);
                let selectedMission = missions.find(m => m.id === missionId);
                
                if (!selectedMission) {
                    return; // Ignora si no es una misión válida
                }

                if (user.rpg.currentHealth <= 0) {
                    return conn.reply(m.chat, '💀 Estás muerto. Espera un momento para que tu salud se regenere automáticamente.', m);
                }

                let time = user.rpg.lastMission + 300000; // 5 minutos de cooldown
                if (new Date() - user.rpg.lastMission < 300000) {
                    return conn.reply(m.chat, `⏰ Debes esperar ${msToTime(time - new Date())} para tu próxima misión.`, m);
                }

                // Seleccionar enemigo aleatorio de la misión
                let enemy = selectedMission.enemies[Math.floor(Math.random() * selectedMission.enemies.length)];
                user.rpg.enemy = { ...enemy };
                user.rpg.selectedMission = selectedMission;
                user.rpg.inCombat = true;

                let combatMsg = `⚔️ *¡MISIÓN INICIADA!* ${selectedMission.emoji}\n\n` +
                    `🗺️ *Misión:* ${selectedMission.name}\n` +
                    `📜 *${selectedMission.description}*\n\n` +
                    `${enemy.emoji} *Te has encontrado con un ${enemy.name}*\n\n` +
                    `🩸 *Vida del enemigo:* ${enemy.health}\n` +
                    `⚔️ *Daño del enemigo:* ${enemy.damage}\n\n` +
                    `🎯 *¿Qué deseas hacer?*\n\n` +
                    `1️⃣ ${combatActions[0].emoji} ${combatActions[0].name}\n` +
                    `2️⃣ ${combatActions[1].emoji} ${combatActions[1].name}\n` +
                    `3️⃣ ${combatActions[2].emoji} ${combatActions[2].name}\n\n` +
                    `💡 *Escribe el número de tu acción*`;

                await conn.sendFile(m.chat, img, 'combat.jpg', combatMsg, fkontak);
                await m.react('⚔️');
            }
            break;
    }
}

handler.help = ['comenzar', 'menumision', 'mision', 'estado', 'ayuda'];
handler.tags = ['rpg'];
handler.command = ['comenzar', 'menumision', 'mision', 'estado', 'ayuda', 
    ...Array.from({length: 30}, (_, i) => (i+1).toString())
];
handler.register = true;
handler.group = true;

export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    return minutes + ' m y ' + seconds + ' s ';
}
