let cooldowns = {}

// Clases disponibles (100 personajes)
const classes = {}
const classNames = [
    'Mago', 'Guerrero', 'Paladín', 'Arquero', 'Asesino', 'Druida', 'Monje', 'Berserker', 'Nigromante', 'Hechicero',
    'Cazador', 'Bardo', 'Caballero', 'Samurái', 'Ninja', 'Brujo', 'Chamán', 'Vikingo', 'Gladiador', 'Alquimista',
    'Ilusionista', 'Clérigo', 'Explorador', 'Pirata', 'Espadachín', 'Guardián', 'Templario', 'Mercenario', 'Cruzado', 'Justiciero',
    'Místico', 'Forajido', 'Bestia', 'Centauro', 'Fénix', 'Ángel', 'Demonio', 'Hada', 'Medusa', 'Titán',
    'Minotauro', 'Elfo', 'Gnomo', 'Orco', 'Duende', 'Licántropo', 'Vampiro', 'Zombi', 'Espectro', 'Elemental',
    'Centinela', 'Sabio', 'Cyborg', 'Heraldo', 'Tritón', 'Sátiro', 'Reptiliano', 'Vidente', 'Sombra', 'Furioso',
    'Cazatesoros', 'Guardabosques', 'Justa', 'Alquimista Oscuro', 'Bruja', 'Druida Sombrío', 'Bestia Alfa', 'Troll', 'Cazador Nocturno', 'Cazador de Dragones',
    'Temible', 'Médico', 'Monje Shaolin', 'Bailarín Místico', 'Vampira', 'Gárgola', 'Demonio Menor', 'Héroe Caído', 'Hechicera', 'Ancestro',
    'Guardia Real', 'Sabio Anciano', 'Ladrón', 'Pícaro', 'Mecánico', 'Ingeniero', 'Sacerdote', 'Bestia Lunar', 'Centauro Sombrío', 'Sirena',
    'Ángel Caído', 'Héroe Legendario', 'Cazador Arcano', 'Demonio Supremo', 'Abominación', 'Sombra Eterna', 'Fénix Oscuro', 'Dragón Dorado', 'Guardia Sagrado', 'Dragón Plateado'
]
const classEmojis = [
    '🧙‍♂️','⚔️','🛡️','🏹','🗡️','🌿','🙏','🤬','☠️','🧙',
    '🏹','🎸','🤺','🥷','🥷','🧙‍♂️','🦅','🪓','🏛️','⚗️',
    '🎩','✝️','🧭','🏴‍☠️','⚔️','🛡️','⛨','🪙','✝️','⚖️',
    '🔮','🤠','🐾','🐎','🔥','👼','😈','🧚‍♀️','🐍','🗿',
    '🐂','🧝‍♂️','🧙‍♂️','👹','🧞','🐺','🧛','🧟','👻','🌪️',
    '🛡️','📜','🤖','📯','🌊','🐐','🦎','🔮','🌚','😡',
    '💰','🌲','🏆','⚗️','🧙‍♀️','🌑','🐺','👹','🌙','🐉',
    '😱','🩹','🧘','💃','🦇','🗿','👹','⚫','🧙‍♀️','👴',
    '👑','🎓','🦹','🦸','🔧','🛠️','⛪','🌙','🐎','🧜‍♀️',
    '😇','🏅','🏹','😈','👾','🌑','🔥','🐉','🛡️','🐉'
]
for (let i = 0; i < 100; i++) {
    classes[i+1] = {
        name: classNames[i] || `Clase${i+1}`,
        health: 75 + Math.floor(i*2 + Math.random()*10),
        damage: 30 + Math.floor(i*1.5 + Math.random()*10),
        defense: 10 + Math.floor(i*1.1 + Math.random()*6),
        emoji: classEmojis[i] || '🎭'
    }
}

// 120 enemigos
const characters = []
const enemyNames = [
    'Murciélago','Rata Gigante','Lobo Sombra','Ent Maligno','Esqueleto','Momia','Orco','Orco Chamán','Dragón Joven','Dragón Anciano',
    'Araña Gigante','Serpiente Venenosa','Bandido','Hechicero Oscuro','Guardián de Piedra','Gólem de Hierro','Troll del Puente','Fantasma',
    'Vampiro','Hada Maligna','Bestia Salvaje','Guerrero Espectral','Licántropo','Elemental de Fuego','Sirena','Minotauro','Hombre Lobo','Duende',
    'Mantícora','Quimera','Hidra','Gárgola','Cíclope','Gusano Gigante','Cacique Orco','Chamán Troll','Bandido Montaraz','Cazador Corrupto',
    'Espectro de la Niebla','Tirano Espectral','Aullador','Demonio Infernal','Bruja del Pantano','Elemental de Tierra','Ángel Caído','Médico Oscuro',
    'Caballero Negro','Caballero de Plata','Bestia de Sombras','Leviatán','Kraken','Sirena Oscura','Halcón de Fuego','Fénix Menor','Naga','Hada de Luz',
    'Yeti','Lince','Raptor','Espía','Asesino','Súcubo','Íncubo','Carroñero','Aguijón Venenoso','Coloso','Tortuga Gigante','Simio de Hielo','Mono Sabio',
    'Bestia Lunar','Cazador de la Niebla','Minero Maldito','Sumo Sacerdote','Mago Prohibido','Caballero de la Muerte','Cazador de Dragones','Heraldo del Caos',
    'Serpiente Marina','Rey Rata','Rey Murciélago','Rey Esqueleto','Rey Momia','Rey Orco','Rey Troll','Reina Araña','Reina Sirena','Reina Dragón','Reina Gárgola',
    'Espectro Supremo','Lobo Alfa','Tigre Blanco','Oso Pardo','Águila Real','Elefante','Rinoceronte','Bufón','Demonio Menor','Demonio Mayor','Ángel Guerrero',
    'Ángel Sabio','Hada Dorada','Hada Verde','Fénix Oscuro','Fénix Dorado','Bestia Prohibida','Cíclope Tuerto','Serpiente de Dos Cabezas','Tritón','Hombre Pez',
    'Bestia de Fuego','Bestia de Agua','Bestia de Tierra','Bestia de Aire','Dragón Espectral','Dragón de Agua','Dragón de Tierra','Dragón de Aire'
]
const enemyEmojis = [
    '🦇','🐀','🐺','🌳','💀','🧟','👹','🧙‍♂️','🐲','🐉','🕷️','🐍','🦹','🧙','🪨','🤖','👹','👻','🧛','🧚‍♀️',
    '🐾','👤','🐺','🔥','🧜‍♀️','🐂','🐺','🧞','🦁','🐲','🐉','🗿','🦠','👑','🦅','🦉','🤺','🧙‍♀️','👺','👻','😈',
    '🧙‍♂️','🌱','👼','🦸','🛡️','🦑','🐍','🕊️','🐢','🐒','🐘','🦏','🐯','🦅','🧟','🦇','🐉','🗿','🌙','👹'
]
for (let i = 0; i < 120; i++) {
    characters.push({
        name: enemyNames[i % enemyNames.length],
        health: 30 + (i * 5),
        damage: 15 + (i * 2),
        emoji: enemyEmojis[i % enemyEmojis.length]
    })
}

// 1800 niveles
const MAX_LEVEL = 1800

// Generador de misiones dinámicas, 10 por nivel, únicas hasta terminar ciclo
function generateMissionsForLevel(level) {
    let arr = []
    for (let i = 0; i < 10; i++) {
        const idx1 = (level + i*7) % characters.length
        const idx2 = (level*3 + i*11) % characters.length
        arr.push({
            id: level * 100 + i + 1,
            name: `Desafío de nivel ${level} #${i+1}`,
            description: `Supera el desafío especial para tu nivel (${level}), intento #${i+1}`,
            difficulty: ['Fácil','Medio','Difícil','Extremo'][(i+Math.floor(level/50))%4],
            emoji: characters[idx1].emoji,
            enemies: [characters[idx1], characters[idx2]]
        })
    }
    return arr
}

// Opciones de combate
const combatActions = [
    { name: 'Atacar con fuego', multiplier: 1.2, emoji: '🔥' },
    { name: 'Ataque básico', multiplier: 1.0, emoji: '⚔️' },
    { name: 'Ataque poderoso', multiplier: 1.5, emoji: '💥' }
]

let handler = async (m, { conn, args, command }) => {
    let user = global.db.data.users[m.sender];
    if (!user) return;

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
            selectingClass: false,
            completedMissions: {}
        };
    }

    let img = 'https://github.com/Fer280809/Asta_bot/blob/main/tmp/imajen-bosque.jpeg'

    switch (command) {
        case 'comenzar':
            if (user.rpg.class) {
                return conn.reply(m.chat, `${classes[user.rpg.class].emoji} Ya has comenzado tu aventura como ${classes[user.rpg.class].name}. Usa *!mision* para continuar.`, m);
            }
            user.rpg.selectingClass = true;

            let classSelection = `🏰 *¡Bienvenido a Reinos de Sombras!* 🏰\n\n✨ *Elige tu clase de aventurero (1-100):* ✨\n\n`;
            for (let i = 1; i <= 100; i++) {
                classSelection += `${i}️⃣ ${classes[i].emoji} *${classes[i].name}*\n   ❤️ Vida: ${classes[i].health} | ⚔️ Daño: ${classes[i].damage} | 🛡️ Defensa: ${classes[i].defense}\n\n`;
            }
            classSelection += `📝 *Escribe el número de tu elección (1-100)*`;

            await conn.sendFile(m.chat, img, 'rpg.jpg', classSelection, fkontak);
            await m.react('🏰');
            break;

        case 'menumision':
        case 'mision': {
            if (!user.rpg.class) {
                return conn.reply(m.chat, '❌ Primero debes usar *!comenzar* para seleccionar tu clase.', m);
            }
            let level = user.rpg.level;
            if (!user.rpg.completedMissions[level]) user.rpg.completedMissions[level] = [];
            let allMissions = generateMissionsForLevel(level);
            let availableMissions = allMissions.filter(mis => !user.rpg.completedMissions[level].includes(mis.id));
            if (availableMissions.length === 0) {
                // Si ya completó todas, subir nivel y reiniciar ciclo para ese nivel
                if (level < MAX_LEVEL) {
                    user.rpg.level++;
                    user.rpg.completedMissions[user.rpg.level] = [];
                    await conn.reply(m.chat, `¡Has completado todas las misiones de nivel ${level}! Subes a nivel ${user.rpg.level} y tienes nuevas misiones. Usa *!mision* de nuevo.`, m);
                } else {
                    user.rpg.completedMissions = {};
                    user.rpg.level = 1;
                    await conn.reply(m.chat, `¡Completaste el ciclo de misiones! Todo se reinicia y puedes volver a jugar desde el nivel 1.`, m);
                }
                return;
            }
            let missionMenu = `🗺️ *MISIONES DISPONIBLES NIVEL ${level}* 🗺️\n\n`;
            availableMissions.forEach((mission) => {
                let difficultyColor = {Fácil:'🟢',Medio:'🟡',Difícil:'🟠',Extremo:'🔴'}[mission.difficulty];
                missionMenu += `${mission.id}️⃣ ${mission.emoji} *${mission.name}*\n   ${mission.description}\n   ${difficultyColor} Dificultad: ${mission.difficulty}\n\n`;
            });
            missionMenu += `📝 *Escribe el número de la misión que deseas realizar*\n💡 *Usa !estado para ver tu información actual*`;
            await conn.sendFile(m.chat, img, 'missions.jpg', missionMenu, fkontak);
            await m.react('🗺️');
            break;
        }

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

        case 'rendirse':
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
                selectingClass: false,
                completedMissions: {}
            }
            await conn.reply(m.chat, `🎲 Has reiniciado tu aventura. Usa *!comenzar* para elegir personaje y nivel de nuevo.`, m)
            await m.react('🔄')
            break;

        default:
            // SELECCIÓN DE CLASE
            if (!isNaN(command) && user.rpg.selectingClass && !user.rpg.class && Number(command) >= 1 && Number(command) <= 100) {
                let selectedClass = classes[parseInt(command)];
                user.rpg.class = parseInt(command);
                user.rpg.maxHealth = selectedClass.health;
                user.rpg.currentHealth = selectedClass.health;
                user.rpg.damage = selectedClass.damage;
                user.rpg.defense = selectedClass.defense;
                user.rpg.selectingClass = false;

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

            // SELECCIÓN DE MISIONES
            if (!user.rpg.inCombat && user.rpg.class && !user.rpg.selectingClass && !isNaN(command)) {
                let level = user.rpg.level;
                let allMissions = generateMissionsForLevel(level);
                let selectedMission = allMissions.find(m => m.id === parseInt(command));
                if (!selectedMission) return;
                if (!user.rpg.completedMissions[level]) user.rpg.completedMissions[level] = [];
                if (user.rpg.completedMissions[level].includes(selectedMission.id)) return;
                if (user.rpg.currentHealth <= 0) {
                    return conn.reply(m.chat, '💀 Estás muerto. Espera un momento para que tu salud se regenere automáticamente.', m);
                }
                let time = user.rpg.lastMission + 300000;
                if (new Date() - user.rpg.lastMission < 300000) {
                    return conn.reply(m.chat, `⏰ Debes esperar ${msToTime(time - new Date())} para tu próxima misión.`, m);
                }
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

            // Combate
            if (['1','2','3'].includes(command)) {
                if (user.rpg.inCombat && user.rpg.class) {
                    let actionIndex = parseInt(command) - 1;
                    let action = combatActions[actionIndex];
                    let enemy = user.rpg.enemy;
                    let playerDamage = Math.floor(user.rpg.damage * action.multiplier);
                    enemy.health -= playerDamage;
                    let battleResult = `${action.emoji} *${action.name}*\n\n` +
                        `💥 *Infliges ${playerDamage} de daño*\n`;
                    if (enemy.health <= 0) {
                        let selectedMission = user.rpg.selectedMission;
                        let missionBonus = 1;
                        switch(selectedMission.difficulty) {
                            case 'Fácil': missionBonus = 1; break;
                            case 'Medio': missionBonus = 1.3; break;
                            case 'Difícil': missionBonus = 1.6; break;
                            case 'Extremo': missionBonus = 2; break;
                        }
                        let expGain = Math.floor((Math.random() * 50 + 20 + (user.rpg.level * 5)) * missionBonus);
                        let coinGain = Math.floor((pickRandom([20, 5, 7, 8, 88, 40, 50, 70, 90, 100]) + (user.rpg.level * 2)) * missionBonus);
                        user.rpg.exp += expGain;
                        if (user.rpg.exp >= (user.rpg.level * 100)) {
                            user.rpg.level++;
                            user.rpg.maxHealth += 10;
                            user.rpg.damage += 2;
                            user.rpg.defense += 1;
                            battleResult += `🆙 *¡SUBISTE DE NIVEL!* Ahora eres nivel ${user.rpg.level}\n`;
                        }
                        // Marcar misión como completada
                        let level = user.rpg.level;
                        if (!user.rpg.completedMissions[level]) user.rpg.completedMissions[level] = [];
                        user.rpg.completedMissions[level].push(selectedMission.id);

                        battleResult += `✅ *¡VICTORIA EN ${selectedMission.name.toUpperCase()}!* Has derrotado al ${user.rpg.enemy.name}\n\n` +
                            `🎁 *RECOMPENSAS:*\n` +
                            `┏━━━━━━━━━━━━━┓\n` +
                            `┃ ✨ *Exp*: +${expGain}\n` +
                            `┃ 💰 *Monedas*: +${coinGain}\n` +
                            `┗━━━━━━━━━━━━━┛`;

                        user.rpg.coins += coinGain;
                        user.rpg.lastMission = new Date() * 1;
                        user.rpg.inCombat = false;
                        user.rpg.enemy = null;
                        user.rpg.selectedMission = null;

                        await m.react('🏆');
                    } else {
                        let enemyDamage = Math.max(1, enemy.damage - user.rpg.defense);
                        user.rpg.currentHealth -= enemyDamage;

                        battleResult += `${enemy.emoji} *El ${enemy.name} contraataca*\n` +
                            `💔 *Recibes ${enemyDamage} de daño*\n\n` +
                            `❤️ *Tu vida: ${user.rpg.currentHealth}/${user.rpg.maxHealth}*\n` +
                            `🩸 *Vida del enemigo: ${enemy.health}*\n\n`;

                        if (user.rpg.currentHealth <= 0) {
                            let coinLoss = Math.min(30, user.rpg.coins);

                            battleResult += `💀 *¡HAS MUERTO!*\n\n` +
                                `💸 *Pierdes ${coinLoss} monedas*\n` +
                                `❤️ *Tu salud será restaurada automáticamente*`;

                            user.rpg.coins = Math.max(0, user.rpg.coins - coinLoss);
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
            break;
    }
}

handler.help = ['comenzar', 'menumision', 'mision', 'estado', 'rendirse'];
handler.tags = ['rpg'];
handler.command = ['comenzar', 'menumision', 'mision', 'estado', 'rendirse', ...Array.from({length: 20000}, (_, i) => (i+1).toString())];
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
