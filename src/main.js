const el = id => document.getElementById(id);

const titleScreen = el('titleScreen');
const startBtn = el('startBtn');
const gameContainer = el('gameContainer');
const message = el('message');
const status = el('status');

const exploreBtn = el('exploreBtn');
const usePotBtn = el('usePotBtn');
const maxPotionsBtn = el('maxPotionsBtn');
const shopBtn = el('shopBtn');
const shop = el('shop');
const buyWeaponBtn = el('buyWeaponBtn');
const buyArmorBtn = el('buyArmorBtn');
const buyPotionBtn = el('buyPotionBtn');
const buyMaxPotionsBtn = el('buyMaxPotionsBtn');
const closeShopBtn = el('closeShopBtn');
const fightBossBtn = el('fightBossBtn');
const enemyStats = el('enemyStats');
const combatBtns = el('combatBtns');

const altarMenu = el('altarMenu');
const altarBtn = el('altarBtn');
const closeAltarBtn = el('closeAltarBtn');
const bonesText = el('bonesText');
const skullsText = el('skullsText');
const unclaimedBonesText = el('unclaimedBonesText');
const unclaimedSkullsText = el('unclaimedSkullsText');
const claimBonesBtn = el('claimBonesBtn');
const timerText = el('timerText');
const upgradeMenu = el('upgradeMenu');

const legendsBtn = el('legendsBtn');
const legendsMenu = el('legendsMenu');
const closeLegendsBtn = el('closeLegendsBtn');
const legendsText = el('legendsText');

const saveBtn = el('saveBtn');
const loadBtn = el('loadBtn');
const exportBtn = el('exportBtn');
const importBtn = el('importBtn');
const fileInput = el('fileInput');
const resetSaveBtn = el('resetSaveBtn');
const settingsMenu = el('settingsMenu');
const settingsBtn = el('settingsBtn');
const closeSettingsBtn = el('closeSettingsBtn');
const trackVolume = el('trackVolume');
const effectVolume = el('effectVolume');
const trackVolumeValue = el('trackVolumeValue');
const effectVolumeValue = el('effectVolumeValue');


const gameData = {

_SOUND_EFFECTS: {
victory: {
bpm: 120,
notes: ["C4", "E4", "G4", "B4", "D5", "C5"]
},
levelUp: {
bpm: 60,
notes: ["G3", "D#4", "G4", "C5", "D#5", "G5"]
},
nextFloor: {
bpm: 40,
notes: ["A2", "E3", "A3", "E3"]
},
playerDeath: {
bpm: 80,
notes: ["C2", "G2", "C3", "G3", "C4", "C3", "G2", "C2"]
}
},

_DIALOGUE: {
startGame: [
"You wake up in a dark, unfamiliar place...<br>Unarmed and dressed in rags...<br>Decrepit skeletons scattered across the floor...<br>You must find a way out of this place...",
"Darkness surrounds you...<br>Clad in tattered rags, you shiver...<br>Bones litter the ground...<br>A desperate search for escape begins...",
"In the cold, black void you awaken...<br>Wearing only ragged clothes...<br>Skeletal remains scattered nearby...<br>You must flee this forsaken place...",
"You find yourself in inky shadows...<br>Dressed in mere scraps...<br>Grinning skulls stare back at you...<br>A desperate escape is your only hope...",
"The void stirs as you open your eyes...<br>Wrapped in tattered cloth...<br>A graveyard of bones surrounds you...<br>Find your way out or perish...",
"As darkness recedes, you awaken...<br>Clothed in frayed vestments...<br>A chilling sight greets you...<br>Fight for your escape...",
"Awakening in cold, unyielding darkness...<br>Clad in tattered garments...<br>A sea of bones surrounds you...<br>Escape or succumb to the shadows...",
"You emerge from slumber in a murky crypt...<br>Wearing threadbare rags...<br>Skeletal remnants scattered about...<br>Survive and flee this wretched place...",
"You awaken in the gloom, shivering...<br>Dressed in worn, ragged attire...<br>Surrounded by lifeless remains...<br>Seek a way out or perish...",
"Rising from the blackness, disoriented...<br>Clad in weathered rags...<br>Skulls and bones abound...<br>Desperation fuels your escape...",
"You find yourself in a cryptic chamber...<br>Garbed in tattered cloth...<br>Bones strewn about like macabre confetti...<br>Find the exit or join the fallen...",
"The darkness releases you, bleary-eyed...<br>Clothed in frayed remnants...<br>A graveyard of skeletons awaits...<br>Struggle for freedom or face oblivion...",
"You rouse from a restless sleep...<br>Wearing tattered scraps...<br>Surrounded by skeletal remnants...<br>Forge a path to freedom or perish...",
"In the shadows, you stir...<br>Dressed in worn, ragged clothes...<br>Death's evidence surrounds you...<br>Escape the darkness or be consumed...",
"You awaken amidst an ocean of darkness...<br>Clad in disheveled attire...<br>Lifeless bones scattered around...<br>Seek the light or dwell in darkness...",
"Eyes opening to a shroud of blackness...<br>Garbed in threadbare rags...<br>The crypt's chilling denizens surround you...<br>Fight to escape the abyss...",
],
loadGame: [
"As the shadows part, your memories resurface...<br>Once more, you stand amidst the darkness...",
"The veil of darkness lifts, revealing a familiar scene...<br>You return to the heart of the crypt...",
"The murky haze dissipates, and your journey resumes...<br>Darkness and secrets surround you once again...",
"A shroud of blackness retreats, and the crypt re-emerges...<br>Your quest continues, fraught with peril...",
"Emerging from the abyss, your senses return...<br>The crypt's mysteries await your exploration...",
"As the gloom recedes, your memories awaken...<br>The crypt's depths welcome you back...",
"The shadowy veil dissipates, and you stand ready...<br>Once more, the crypt beckons...",
"Darkness retreats, unveiling familiar surroundings...<br>Your journey in the crypt resumes...",
"The black fog clears, revealing the crypt's hidden paths...<br>Determination fuels your return...",
"Emerging from darkness, your purpose reignites...<br>The crypt's mysteries call out to you...",
"As darkness yields, your resolve strengthens...<br>The crypt awaits your return...",
"The shadows recede, revealing your path...<br>Once again, you venture into the unknown...",
"The veil of night lifts, and you resume your quest...<br>Within the crypt, secrets remain...",
"Darkness withdraws, your journey beckons...<br>The crypt's depths call to you...",
"As the gloom dissipates, your memories awaken...<br>Your path through the crypt unfolds...",
"The shadows vanish, your purpose renewed...<br>Into the crypt's depths, you plunge...",
"As the darkness wanes, you forge onward...<br>The crypt's mysteries await...",
"The black haze clears, and you step forward...<br>With determination, you navigate the crypt...",
"As the darkness recedes, your purpose rekindles...<br>The crypt's enigmas demand your attention...",
"Emerging from the void, your vision clears...<br>The crypt's labyrinthine paths call to you...",
"The shadows lift, and your resolve intensifies...<br>Once more, you brave the crypt's depths...",
"Darkness dissipates, revealing the crypt's secrets...<br>With determination, you continue your quest...",
"As the gloom clears, your journey resumes...<br>Plunging further into the crypt's mysteries...",
"As shadows disperse, your memory stirs...<br>Into the crypt's darkness, you venture once more...",
"The dark veil lifts, exposing a familiar world...<br>Returning to the crypt's enigmatic embrace...",
"Gloom recedes, and your path is revealed...<br>The crypt's depths beckon once again...",
"The black mist fades, unveiling the crypt's secrets...<br>Your journey through the darkness resumes...",
"Emerging from the void, your mind sharpens...<br>The crypt's challenges call to you...",
"As the darkness ebbs, your spirit reawakens...<br>You delve deeper into the crypt's mysteries...",
"The shadows retreat, disclosing your path...<br>Your exploration of the crypt continues...",
"Darkness vanishes, and the crypt reappears...<br>With renewed vigor, you pursue its secrets...",
"As the gloom clears, your journey unfolds...<br>The crypt's hidden paths entice you...",
"The dark haze dissipates, and your quest resumes...<br>Facing the crypt's enigmas with courage...",
"Emerging from the shadows, your focus sharpens...<br>The crypt's depths summon you...",
"As the darkness fades, your path reemerges...<br>Once again, you brave the crypt's labyrinth...",
"The veil of obscurity lifts, exposing the crypt...<br>With determination, you seek its hidden truths...",
"Shadows disperse, and your senses awaken...<br>The crypt's challenges demand your attention...",
"Darkness gives way, revealing your surroundings...<br>Into the crypt's depths, you forge ahead...",
],
defeatBoss: [
"The fallen foe crumbles to dust before your eyes...<br>A sense of triumph courses through your veins...",
"As the dark entity's final breath escapes its lips...<br>Victory and relief wash over you...",
"The malevolent being collapses, vanquished...<br>You stand victorious amidst the darkness...",
"The mighty adversary falls, defeated...<br>A triumphant roar escapes your lips...",
"The monstrous foe crumbles before you...<br>Your courage and skill rewarded...",
"As the fearsome beast lies vanquished...<br>You bask in the glory of your hard-won victory...",
"The tyrant's reign ends, defeated by your hand...<br>A surge of pride fills your heart...",
"The great enemy succumbs to your strength...<br>As it collapses, you feel your power swell...",
"With a final, crushing blow, the behemoth is vanquished...<br>Exhilaration surges through you...",
"The darkness recoils as the villainous foe is slain...<br>Victory is yours...",
"As your nemesis withers, defeated...<br>Your heart swells with pride...",
"The vanquished foe collapses in defeat...<br>A triumphant sense of accomplishment fills you...",
"The wicked oppressor falls, its reign of terror ended...<br>You bask in the glow of victory...",
"The dreadful beast falls, succumbing to your might...<br>Relief and satisfaction surge within you...",
"The fearsome creature lies slain at your feet...<br>A sense of accomplishment empowers you...",
"The defeated adversary crumbles away...<br>Revel in the hard-fought victory...",
"As the darkness retreats, the fallen foe withers...<br>You stand tall, triumphant...",
"The vanquished enemy's form dissolves...<br>You bask in the spoils of your conquest...",
"The formidable foe crumbles, defeated...<br>A wave of triumph washes over you...",
"The monstrous adversary yields, broken...<br>Exultation fills your heart...",
"The dark creature withers, vanquished...<br>Your victory resounds through the crypt...",
"The twisted enemy falls, overcome...<br>Success and pride fuel your spirit...",
"The towering menace collapses, beaten...<br>You stand tall in the face of victory...",
"As the fearsome oppressor succumbs...<br>Your strength and courage are celebrated...",
"The malevolent force is broken, defeated...<br>Victorious, you bask in the glow of triumph...",
"The wicked enemy falters, bested...<br>A swell of achievement invigorates you...",
"The vile creature lies vanquished...<br>You revel in the spoils of your hard-earned victory...",
"The dark nemesis is silenced, defeated...<br>Your heart swells with the joy of success...",
"The monstrous terror falls before you...<br>Victory's sweet taste engulfs you...",
"The sinister foe crumbles in defeat...<br>A sense of accomplishment fills your soul...",
"The fearsome enemy lies beaten...<br>Triumphant, you stand amidst the chaos...",
"The dark lord yields to your strength...<br>Victory and relief flood your senses...",
"The menacing adversary topples, vanquished...<br>You bask in the euphoria of conquest...",
],
enemyEncounter: [
"A chilling wind passes...<br>You sense a malevolent presence...<br>Your heartbeat quickens...",
"The shadows come alive...<br>A sinister figure emerges...<br>Its eyes burn with hatred...",
"An eerie silence fills the air...<br>Broken by the sound of labored breathing...<br>A monstrous creature stands before you...",
"A sudden chill seizes your spine...<br>An unseen threat lurks nearby...<br>Prepare for battle...",
"The darkness stirs, restless...<br>A malicious presence draws near...<br>Brace yourself...",
"The air thickens, malevolent...<br>A sinister foe emerges...<br>Steel your resolve...",
"Cold sweat trickles down your brow...<br>An evil adversary approaches...<br>Ready your defenses...",
"A heavy dread weighs upon you...<br>A wicked creature materializes...<br>Stand your ground...",
"The air crackles with malice...<br>A shadowy form takes shape...<br>Prepare for combat...",
"An oppressive gloom settles upon you...<br>An abhorrent being rises from the depths...<br>Face your fears...",
"The ground trembles beneath you...<br>A twisted creature bursts forth...<br>Confront the monstrosity...",
"A haunting whisper echoes...<br>An entity of pure hatred coalesces...<br>Defend yourself...",
"Your surroundings darken further...<br>An evil apparition looms before you...<br>Fight or perish...",
"An unsettling aura engulfs you...<br>A malevolent figure emerges...<br>Gather your courage...",
"The darkness pulses ominously...<br>A wicked entity appears...<br>Steady your nerves...",
"An icy shiver races down your spine...<br>A monstrous beast confronts you...<br>Face the challenge...",
"The shadows thicken, foreboding...<br>A vile creature reveals itself...<br>Prepare for the struggle...",
"A hushed terror fills the air...<br>A sinister presence approaches...<br>Stand firm...",
"An eerie calm descends...<br>A dark figure materializes...<br>Brace for impact...",
"The air hums with malevolence...<br>An evil foe steps forth...<br>Summon your strength...",
"A sudden silence chills the air...<br>A ghastly being emerges...<br>Resist its wickedness...",
"The atmosphere grows heavy with dread...<br>A malicious creature lunges...<br>Defy the darkness...",
"An unnerving hush blankets the area...<br>A sinister adversary takes shape...<br>Ready yourself for battle...",
"A palpable fear grips the air...<br>A twisted menace approaches...<br>Confront the terror...",
"The shadows grow restless...<br>An ominous being arises...<br>Prepare for the onslaught...",
"A cold sweat overtakes you...<br>A loathsome creature appears...<br>Gird yourself for combat...",
"The darkness trembles with menace...<br>A vile apparition materializes...<br>Face the nightmare...",
"A sinister chill envelops you...<br>A wretched foe looms...<br>Hold your ground...",
],
nothingFound: [
"The gloom conceals secrets yet to be discovered...<br>You find nothing...",
"You search high and low...<br>all you find is dust and cobwebs...",
"You scour the darkness, vigilant...<br>But your search yields nothing...",
"Your eyes dart through the shadows...<br>Yet there is nothing to be found...",
"The blackness hides its secrets well...<br>Your efforts are fruitless...",
"You probe the gloom, seeking answers...<br>But none are forthcoming...",
"The void whispers, taunting you...<br>But offers no rewards...",
"You sift through the shadows...<br>Only to be met with emptiness...",
"You probe the darkness, hopeful...<br>But your search proves fruitless...",
"Your investigation yields naught...<br>The darkness holds fast to its secrets...",
"You delve into the void...<br>But it offers no consolation...",
"Despite your efforts, nothing is revealed...<br>The enigmatic darkness mocks you...",
"You comb the darkness, ever vigilant...<br>But your search reveals nothing...",
"You seek treasures hidden in the gloom...<br>Yet all remains concealed...",
"The darkness whispers secrets...<br>But none are within your grasp...",
"You scour the shadows, undeterred...<br>But your efforts remain unrewarded...",
"You search the void with keen eyes...<br>But nothing of value emerges...",
"The blackness conceals its mysteries...<br>Your pursuit yields no results...",
"You delve into the shadows, seeking answers...<br>But the darkness remains enigmatic...",
"You examine every corner of the gloom...<br>Yet your efforts go unrequited...",
"Your gaze pierces the darkness...<br>But the void offers no respite...",
"You rummage through the shadows, determined...<br>But your search bears no fruit...",
"The darkness conceals its riches...<br>And yields nothing to your quest...",
"You tirelessly probe the gloom...<br>But it remains unyielding...",
],
healingShrine: [
"A skeletal figure emerges, its touch healing...<br>Surprisingly, a sense of comfort envelops you...",
"A bone shrine radiates an eerie light...<br>As it touches you, your wounds close...",
"An ancient healer, its body long decayed...<br>Yet its spirit remains, mending your injuries...",
"A chilling touch, yet strangely soothing...<br>The skeletal healer's work restores you...",
"The walls are lined with skulls...<br>Whispering incantations of healing and solace...",
"A spectral figure of bone and sinew...<br>Its touch restores your vitality...",
"Skeletal hands hover over your injuries...<br>Sealing your wounds with a spectral glow...",
"A bony visage imparts its healing energy...<br>Reviving your strength and determination...",
"The shrine of bone and darkness...<br>Somehow, it mends your wounds...",
"A skeletal healer, its intentions pure...<br>Its touch repairs your body and calms your mind...",
"An otherworldly light flickers within a ribcage...<br>Healing your body and invigorating your spirit...",
"A ghostly hand, its touch chilling yet healing...<br>Replenishing your energy...",
"In the depths, a macabre shrine...<br>Its strange power rejuvenates your spirit...",
"A ghastly figure of bone and shadow...<br>Its healing touch banishes your pain...",
"An eerie glow surrounds a skeletal healer...<br>Reviving your strength and resolve...",
"A gentle radiance emanates from the shadows...<br>As you approach, your wounds begin to heal...",
"An ethereal healer, bones aglow...<br>Its spectral touch restores your vitality...",
"A shrine of skulls, their eyes alight...<br>As they gaze upon you, your wounds fade...",
"A skeletal hand extends, its touch chilling...<br>Yet your body is mended, your spirit renewed...",
"An ancient healer of bone and shadow...<br>Its ghostly touch weaves your wounds closed...",
"The crypt's darkness parts, revealing a shrine...<br>Bones flicker with light, healing your injuries...",
"A spectral figure, its skeletal form radiant...<br>As it reaches for you, your pain dissipates...",
"A shrine of bones, their whispers soothing...<br>Your wounds close, the darkness receding...",
"A macabre shrine, its power undeniable...<br>As skeletal hands touch you, healing ensues...",
"A ghostly healer, its bones gleaming...<br>As it mends your injuries, your spirit soars...",
],
bossFound: [
"A suffocating aura of darkness envelops the room...<br>A powerful and malevolent being awaits...",
"A sinister, commanding presence looms before you...<br>The very air around you feels heavy with dread...",
"An oppressive atmosphere fills the room...<br>An unspeakable terror reveals itself...",
"An aura of malice pervades the chamber...<br>A formidable foe awaits...",
"The walls tremble with dread...<br>A monstrous terror stands before you...",
"An overwhelming darkness grips the room...<br>Ready yourself for the ultimate battle...",
"A chilling presence fills the air...<br>A titanic evil prepares to strike...",
"The atmosphere thickens with malice...<br>A daunting adversary emerges...",
"The shadows twist and coil...<br>Revealing a terrifying presence...",
"A sinister figure shrouded in darkness...<br>Stands as your next monumental challenge...",
"A chilling aura surrounds you...<br>An immense foe rises before you...",
"The very air trembles in fear...<br>As a monstrous enemy reveals itself...",
"The air crackles with dark energy...<br>A formidable presence stands before you...",
"An ominous aura fills the chamber...<br>A monstrous foe awaits your challenge...",
"The shadows pulse with dread...<br>A fearsome adversary emerges...",
"A tangible sense of evil permeates the room...<br>A colossal enemy confronts you...",
"The darkness thickens, revealing a terrifying foe...<br>Prepare for the ultimate struggle...",
"An air of menace fills the room...<br>A daunting presence awaits your challenge...",
"The ground shudders beneath your feet...<br>A colossal foe prepares for battle...",
"A palpable sense of dread grips the air...<br>As a formidable enemy rises...",
"A chilling energy radiates from the shadows...<br>A monstrous adversary stands before you...",
"An oppressive weight bears down upon you...<br>As a fearsome entity emerges...",
"A sinister laugh echoes through the chamber...<br>Revealing a horrifying foe...",
"A malevolent aura permeates the room...<br>An enormous enemy prepares to strike...",
"The darkness surges with malevolence...<br>A fearsome foe reveals itself...",
"An ominous presence casts a shadow over the room...<br>A powerful enemy awaits...",
"A paralyzing sense of dread envelops you...<br>As a terrifying creature emerges...",
"A dark energy courses through the chamber...<br>A formidable foe stands ready...",
"An overwhelming force of evil fills the room...<br>A monstrous adversary awaits...",
"A chilling wind sweeps through the chamber...<br>Signaling the arrival of a sinister foe...",
"The room seems to close in on you...<br>As a malevolent presence emerges...",
"A thunderous roar shakes the very walls...<br>A titanic enemy confronts you...",
],
approachBoss: [
"The ground trembles beneath your feet...<br>An unseen force draws you towards a daunting confrontation...",
"A sinister chill runs down your spine...<br>The path ahead leads to an inevitable clash...",
"Dark energy swirls around you, growing stronger...<br>A formidable adversary lies in wait...",
"A sinister force tugs at your soul...<br>Drawing you towards a fateful encounter...",
"A sense of foreboding darkens your path...<br>Guiding you to a terrible conflict...",
"As you advance, the air grows thick with tension...<br>A battle of epic proportions awaits...",
"The corridor narrows, the darkness thickens...<br>An adversary of great power lurks...",
"An ominous energy gathers, palpable...<br>A monstrous challenge lies ahead...",
"Dread seeps into your heart...<br>As a formidable enemy draws near...",
"The air crackles with anticipation...<br>As you inch closer to a great confrontation...",
"A dark presence looms ahead...<br>As you prepare for the ultimate challenge...",
"The shadows grow darker, colder...<br>An epic battle lies before you...",
"Your heart races as you advance...<br>Bracing yourself for the fearsome foe...",
"A cold shiver runs through your body...<br>You draw near to a fearsome adversary...",
"As you progress, the atmosphere grows heavier...<br>An epic confrontation looms...",
"The darkness deepens, an ominous presence awaits...<br>Steel yourself for a titanic clash...",
"Your heart pounds as the darkness intensifies...<br>A tremendous foe lies in wait...",
"A chill grips your soul as you press forward...<br>Brace for a harrowing battle...",
"The darkness pulsates, a sinister force beckons...<br>As you move closer to a dreadful confrontation...",
"An unnerving silence descends...<br>The path leads to an ominous showdown...",
"A growing sense of dread grips your heart...<br>As you inch closer to a monstrous foe...",
"The air feels heavy, burdened by evil...<br>A titanic enemy awaits your arrival...",
"A malignant energy builds as you advance...<br>Guiding you towards an epic struggle...",
"The shadows dance and twist around you...<br>A fearsome adversary lies ahead...",
"A sinister whisper echoes in your ears...<br>Leading you to a daunting encounter...",
"A foreboding aura envelops your path...<br>A powerful enemy draws near...",
"The temperature drops, a malevolent presence nears...<br>Prepare for a terrifying confrontation...",
"A sense of unease grows as you proceed...<br>An imminent clash with a dark force awaits...",
"A dark energy permeates the air...<br>As you approach a formidable challenge...",
"The atmosphere stifles, a dreadful presence nears...<br>Steel yourself for an epic encounter...",
"Your instincts scream danger...<br>As you move closer to a powerful adversary...",
"A sickening dread fills your stomach...<br>A malevolent presence lies ahead...",
"The walls close in, the shadows deepen...<br>A fearsome battle looms...",
],
shopEnter: [
"You enter a dimly lit room...<br>Weapons, armor and potions strewn about...<br>A skeleton greets you with an eerie stare...",
"A room of flickering shadows greets you...<br>Weapons and trinkets lie in wait...<br>A bony figure watches you, unblinking...",
"You stumble into a chamber of dim light...<br>Armaments and relics beckon...<br>An eerie skeletal sentinel observes your every move...",
"A murky room lies before you...<br>Amidst the gloom, equipment and potions are strewn...<br>A lifeless, bony guardian greets you with empty eyes...",
"You find yourself in a shadowy alcove...<br>Weapons, relics, and elixirs lay before you...<br>A skeletal merchant greets you, chillingly...",
"You step into a dim chamber...<br>Amidst the darkness, arms and artifacts tempt you...<br>A bony figure scrutinizes your every move...",
"An eerie room envelops you...<br>Cluttered with gear and potions...<br>A skeletal host watches, unblinking...",
"You discover a gloomy sanctuary...<br>Equipment and talismans scattered about...<br>A ghastly bone trader surveys your arrival...",
"You wander into a room bathed in shadows...<br>Surrounded by armaments and mystic items...<br>A spine-chilling skeletal figure awaits...",
"You stumble upon a cryptic chamber...<br>Weapons, armor, and charms beckon...<br>A hollow-eyed skeletal merchant greets you...",
"You enter a room shrouded in darkness...<br>Amidst the gloom, weapons and enchantments call...<br>A bony, spectral figure observes your presence...",
"A candlelit room lies before you...<br>Surrounded by weapons, potions, and relics...<br>An eerie, skeletal dealer awaits your patronage...",
"You step into a room bathed in faint light...<br>Armor, trinkets, and elixirs surround you...<br>A bony shopkeeper greets you with a hollow grin...",
"You venture into a dimly lit chamber...<br>Weapons, charms, and potions await your perusal...<br>An eerie skeletal figure regards you silently...",
"A mysterious room reveals itself...<br>Arms and enchanted items fill the shadows...<br>A skeletal merchant welcomes you with a hollow gaze...",
"You find a hidden chamber cloaked in darkness...<br>Amidst the gloom, gear and mystic trinkets beckon...<br>A bony figure watches, unsettlingly...",
"You uncover a room draped in shadows...<br>Weapons, relics, and potions lie in wait...<br>A ghostly skeletal trader stands sentinel...",
"You come across a shadowy enclave...<br>Armaments, talismans, and elixirs call to you...<br>A spine-chilling skeletal keeper greets you...",
"You happen upon a room dimly illuminated...<br>Surrounded by weapons, armor, and arcane items...<br>A spectral skeletal figure awaits your approach...",
"A room of hushed whispers greets you...<br>Cluttered with arms, enchantments, and potions...<br>An unsettling bony merchant observes your entry...",
"You enter a chamber of flickering light...<br>Amidst the darkness, relics and weapons tempt...<br>A chilling skeletal guardian stands watch...",
"You discover a hidden room bathed in shadows...<br>Armaments, potions, and artifacts surround you...<br>A ghastly skeletal figure regards your presence...",
"You stumble into a room of eerie silence...<br>Weapons, trinkets, and mystic items fill the space...<br>A bony, spectral merchant greets you...",
"An arcane chamber unfolds before you...<br>Surrounded by arms, relics, and potions...<br>A macabre skeletal figure silently awaits...",
"You make your way into a room cloaked in darkness...<br>Weapons, armor, and enchantments line the walls...<br>A hollow-eyed skeletal vendor watches your arrival...",
"A shadowy room reveals itself to you...<br>Amidst the gloom, gear and mystic trinkets call...<br>A bony figure stands guard, unnervingly...",
"You happen upon a chamber lit by flickering candles...<br>Weapons, potions, and relics fill the space...<br>An eerie, skeletal merchant welcomes your patronage...",
],
shopExit: [
"The skeleton bids you farewell with a chilling stare...<br>You step out into the darkness once again...",
"The bone-laden merchant gazes upon your departure...<br>The darkness swallows you whole once more...",
"With a silent nod from the skeletal shopkeeper...<br>You venture back into the unknown...",
"As the lifeless vendor's gaze lingers...<br>You leave behind the relative safety of the room...",
"As the skeletal merchant's gaze follows...<br>You step back into the cold embrace of the darkness...",
"The bony vendor watches your departure...<br>You brace yourself for the shadows that lie ahead...",
"With a chilling nod from the skeletal shopkeeper...<br>You venture forth, swallowed by darkness...",
"The lifeless guardian bids you farewell...<br>You stride back into the abyss...",
"As the bone-clad merchant's hollow gaze lingers...<br>You abandon the sanctuary for the darkness beyond...",
"With the skeletal vendor's unblinking stare upon you...<br>You re-enter the foreboding darkness...",
"The bony shopkeeper's gaze follows your exit...<br>Darkness once more engulfs you...",
"A silent farewell from the skeletal merchant...<br>You step into the cold, unyielding shadows...",
"The skeletal merchant watches as you depart...<br>The shadows envelop you once again...",
"With a hollow gaze, the bony shopkeeper bids adieu...<br>You leave the sanctuary for the uncertainty ahead...",
"The lifeless figure sees you off...<br>You venture forth, embraced by the darkness...",
"As the skeletal vendor's stare lingers...<br>You walk away, shrouded in darkness once more...",
"The bony figure nods farewell...<br>You step back into the gloom...",
"With the skeleton's hollow eyes upon you...<br>You exit, swallowed by the shadows...",
"A chilling glance from the bony merchant...<br>You leave the safety of the room for the darkness...",
"As the skeletal sentinel silently observes...<br>You plunge back into the murky depths...",
"The bone-clad vendor watches as you disappear...<br>Into the inky abyss...",
"The skeletal figure's gaze follows you...<br>As you step back into the unknown...",
"With the bony shopkeeper's farewell...<br>You return to the shadowy embrace...",
"The skeleton's unblinking stare watches you depart...<br>You leave the refuge for the darkness outside...",
"An eerie nod from the lifeless vendor...<br>You venture back into the shadows...",
"As the skeletal merchant's gaze lingers on your exit...<br>You re-enter the darkened realm...",
"With the bone-laden figure's eyes upon you...<br>You step forth, enshrouded in shadows once more...",
],
playerDeath: [
"As the darkness claims your life...<br>Your last breath escapes, cold and alone...<br>Yet a glimmer of hope remains...",
"Death's icy fingers claim your soul...<br>Lost within the shadows...<br>A distant spark refuses to let you go...",
"Your strength wanes, the darkness claims your life...<br>But a whisper in the void reminds you...<br>What is dead may never die...",
"Life slips away, consumed by the inky blackness...<br>Yet a distant voice echoes...<br>What is dead may never die...",
"As you falter, the shadows envelop your being...<br>Your spirit lingers, for what is dead may never die...<br>A faint light calls you back...",
"The cold void engulfs your soul, your body lifeless...<br>But you hear a faint murmur...<br>What is dead may never die...",
"As the shadows consume your life force...<br>Your breath falters, your strength wanes...<br>But a distant glimmer of hope calls you back...",
"Falling to the darkness, your spirit wavers...<br>Your last breath escapes, filled with sorrow...<br>Yet a faint light refuses to abandon you...",
"The darkness seizes your soul, your body limp...<br>But a soft voice whispers...<br>What is dead may never die...",
"The abyss claims you, your life fading...<br>Yet from the darkness, a faint glimmer beckons...",
"Shadows envelop your spirit, your body weak...<br>But deep within, an echo murmurs...<br>What is dead may never die...",
"As the void devours your essence...<br>Your pulse weakens, your breath stills...<br>But hope persists, a distant flicker...",
"Death's embrace tightens, stealing your life...<br>In the darkness, a voice whispers...<br>What is dead may never die...",
"The darkness swallows your vitality...<br>As your heartbeat slows, a distant light lingers...",
"As your spirit fractures, shadows close in...<br>Yet within the abyss, a spark refuses to fade...",
"The cold tendrils of death envelop you...<br>Your life fades, but a quiet voice whispers...<br>What is dead may never die...",
"Succumbing to the shadows, your body falters...<br>Yet a feeble light calls to you, unwilling to let go...",
"The void's grasp tightens, your life slipping away...<br>But deep in the darkness, a glint of hope remains...",
"Darkness consumes your being, your body numb...<br>Yet a whisper in the void reminds you...<br>What is dead may never die...",
"Death's shroud descends upon you...<br>Your life wanes, but a distant flicker holds on...",
"You are swallowed by the cold embrace of death...<br>But a faint voice echoes...<br>What is dead may never die...",
"The darkness engulfs you, your life force ebbing...<br>Yet a dim light fights to pull you back...",
"As your spirit is enveloped by shadows...<br>Your breath slows, but a distant beacon remains...",
"Fading into the abyss, your life slips away...<br>Yet a quiet voice reassures you...<br>What is dead may never die...",
],

levelUp: [
"With newfound strength coursing through your veins...<br>You feel invigorated, ready to face greater challenges...",
"As your power grows, the darkness seems less daunting...<br>Victory seems more certain with each step...",
"A surge of energy flows through you...<br>Empowering you to face the horrors that lie ahead...",
"As your power swells, the darkness falters...<br>You stand ready to confront even greater foes...",
"With each newfound strength, your determination soars...<br>The crypt's horrors seem less menacing...",
"A newfound vigor fills you...<br>Emboldened, you stride deeper into the abyss...",
"Your strength surges, fear wanes...<br>You stand prepared for whatever lies ahead...",
"Empowered by growth, the darkness seems less suffocating...<br>You face the unknown with unwavering resolve...",
"Embracing newfound power, the darkness quivers...<br>With each step, your courage grows...",
"As your strength blossoms, your fears wither...<br>The crypt's challenges seem less insurmountable...",
"A surge of might courses through your body...<br>Fortified, you face the crypt's terrors...",
"With each advancement, the shadows cower...<br>Confidence fills you as you confront the darkness...",
"Your power expands, the darkness retreats...<br>You march forward, ready for the trials ahead...",
"As your abilities flourish, the crypt's threats fade...<br>With steadfast resolve, you press on...",
"Newfound strength surges within you...<br>Undaunted, you navigate the crypt's perils...",
"Empowered by progress, fear loses its grip...<br>With newfound courage, you face the abyss...",
"As your might swells, the darkness recedes...<br>With renewed vigor, you press onward...",
"Your power blossoms, the shadows quail...<br>Armed with newfound strength, you face the challenges ahead...",
"A newfound energy invigorates you...<br>Emboldened, you delve deeper into the crypt...",
"With each surge of power, your confidence grows...<br>Unwavering, you march towards the unknown...",
"Your strength intensifies, the abyss seems less daunting...<br>With renewed courage, you confront the darkness...",
"As your abilities thrive, the shadows falter...<br>With newfound resilience, you forge ahead...",
"Newfound strength courses through you...<br>Undeterred, you face the crypt's horrors...",
"Your power swells, the darkness dims...<br>With unwavering determination, you embrace the challenges...",
"Empowered by your growth, the abyss loses its grip...<br>Fearless, you march forward...",
"As your might flourishes, the shadows retreat...<br>With steadfast courage, you traverse the crypt...",
"Newfound energy pulses within you...<br>With heightened resolve, you delve into the darkness...",
"Your power surges, the crypt's terrors abate...<br>With newfound fortitude, you press onward...",
"With each new strength, the shadows shrink...<br>Fearless, you journey deeper into the abyss...",
"As your abilities expand, the darkness loses its hold...<br>With renewed courage, you face the trials ahead...",
"A surge of power emboldens you...<br>With newfound determination, you confront the unknown...",
],
newFloor: [
"As you descend deeper into the crypt, the air grows colder...<br>Shadows dance on the walls, concealing secrets untold...",
"The chilling air grows heavier as you venture deeper...<br>Unseen whispers haunt the corridors...",
"You tread cautiously into the abyss, each step revealing more horrors...<br>The darkness holds its breath, waiting...",
"Descending further, the oppressive gloom threatens to consume you...<br>Yet you press on, determined to conquer the unknown...",
"Deeper still, you delve into the abyss...<br>With each step, the shadows grow more sinister...",
"You descend, the air thick with darkness...<br>Untold horrors lurk around every corner...",
"As you proceed downward, the crypt's secrets deepen...<br>A shroud of unease envelops you...",
"The crypt's depths beckon, cold and unyielding...<br>What awaits in the darkness remains a mystery...",
"With each level, the crypt's grip tightens...<br>Yet your resolve remains unshaken...",
"As you delve further, the darkness clings tighter...<br>Ever more ominous secrets lie in wait...",
"The crypt's labyrinth twists deeper...<br>Shrouded in shadows and secrets...",
"Each step into the abyss reveals greater terrors...<br>Darkness whispers, promising despair...",
"Descending deeper, the air grows more oppressive...<br>As the crypt's hidden horrors lie in wait...",
"The shadows thicken with each new level...<br>Chilling whispers echo through the crypt...",
"As you venture further, the darkness tightens its embrace...<br>Shadows dance with sinister intent...",
"Deeper into the crypt, the air becomes icy...<br>Whispers of unseen horrors fill the silence...",
"You delve into the abyss, the darkness intensifying...<br>The crypt's secrets remain shrouded...",
"With each descent, the crypt's chill deepens...<br>The weight of unseen dread looms...",
"Descending further, shadows coil around you...<br>Mysterious whispers haunt your every step...",
"As you probe the crypt's depths, the air thickens...<br>Hidden terrors lurk in the inky blackness...",
"The deeper you venture, the more the shadows stir...<br>Secrets locked away in the darkness beckon...",
"With each level, the crypt's embrace grows colder...<br>Whispers of despair echo through the gloom...",
"As you delve deeper, the darkness whispers...<br>The crypt's mysteries remain just out of reach...",
"The shadows grow denser as you journey further...<br>What lies in the darkness remains veiled...",
"Descending into the crypt, the air chills your bones...<br>Hidden secrets linger in the shadows...",
"Each step deeper into the abyss unveils new horrors...<br>The crypt's whispers grow ever more haunting...",
"As you proceed, the darkness envelops you...<br>The crypt's secrets whisper, drawing you in...",
"With each descent, the air grows colder still...<br>As the crypt's mysteries remain locked away...",
"Deeper still, the shadows envelop you...<br>As the crypt's untold secrets stir within the darkness...",
],
error: "An unexpected error occurred. Please try again.",
},

_ENEMIES: [
{ name: 'Goblin', difficulty: 'easy', maxHp: 25, attack: 7, gold: 5, exp: 4 },
{ name: 'Zombie', difficulty: 'easy', maxHp: 28, attack: 8, gold: 6, exp: 4 },
{ name: 'Mimic', difficulty: 'easy', maxHp: 30, attack: 9, gold: 8, exp: 5 },
{ name: 'Gnoll', difficulty: 'easy', maxHp: 26, attack: 7, gold: 6, exp: 4 },
{ name: 'Giant Rat', difficulty: 'easy', maxHp: 24, attack: 6, gold: 5, exp: 3 },
{ name: 'Orc', difficulty: 'easy', maxHp: 29, attack: 9, gold: 8, exp: 5 },
{ name: 'Kobold', difficulty: 'easy', maxHp: 27, attack: 8, gold: 6, exp: 4 },
{ name: 'Hobgoblin', difficulty: 'easy', maxHp: 32, attack: 10, gold: 9, exp: 5 },
{ name: 'Spiderling', difficulty: 'easy', maxHp: 22, attack: 6, gold: 4, exp: 3 },
{ name: 'Wolf', difficulty: 'easy', maxHp: 25, attack: 8, gold: 5, exp: 4 },
{ name: 'Mud Golem', difficulty: 'easy', maxHp: 24, attack: 6, gold: 6, exp: 3 },
{ name: 'Will-o-Wisp', difficulty: 'easy', maxHp: 20, attack: 5, gold: 4, exp: 3 },
{ name: 'Lesser Elemental', difficulty: 'easy', maxHp: 21, attack: 5, gold: 6, exp: 3 },
{ name: 'Slime', difficulty: 'easy', maxHp: 20, attack: 4, gold: 5, exp: 3 },
{ name: 'Dark Sprite', difficulty: 'easy', maxHp: 22, attack: 5, gold: 5, exp: 3 },
{ name: 'Living Armor', difficulty: 'easy', maxHp: 23, attack: 6, gold: 7, exp: 3 },
{ name: 'Gelatinous Cube', difficulty: 'easy', maxHp: 27, attack: 5, gold: 6, exp: 3 },
{ name: 'Necromancer Acolyte', difficulty: 'easy', maxHp: 25, attack: 7, gold: 8, exp: 4 },
{ name: 'Wyvern Hatchling', difficulty: 'easy', maxHp: 19, attack: 6, gold: 5, exp: 3 },
{ name: 'Imp', difficulty: 'medium', maxHp: 35, attack: 13, gold: 11, exp: 6 },
{ name: 'Wendigo', difficulty: 'medium', maxHp: 42, attack: 17, gold: 18, exp: 9 },
{ name: 'Kelpie', difficulty: 'medium', maxHp: 36, attack: 11, gold: 10, exp: 6 },
{ name: 'Dryad', difficulty: 'medium', maxHp: 37, attack: 12, gold: 11, exp: 6 },
{ name: 'Phantom', difficulty: 'medium', maxHp: 40, attack: 14, gold: 13, exp: 8 },
{ name: 'Harpy', difficulty: 'medium', maxHp: 36, attack: 12, gold: 10, exp: 6 },
{ name: 'Banshee', difficulty: 'medium', maxHp: 45, attack: 16, gold: 16, exp: 9 },
{ name: 'Djinn', difficulty: 'medium', maxHp: 46, attack: 15, gold: 12, exp: 7 },
{ name: 'Basilisk', difficulty: 'medium', maxHp: 34, attack: 10, gold: 13, exp: 6 },
{ name: 'Wererat', difficulty: 'medium', maxHp: 33, attack: 11, gold: 12, exp: 6 },
{ name: 'Ice Wraith', difficulty: 'medium', maxHp: 39, attack: 13, gold: 15, exp: 8 },
{ name: 'Succubus', difficulty: 'medium', maxHp: 37, attack: 12, gold: 14, exp: 7 },
{ name: 'Troll', difficulty: 'medium', maxHp: 44, attack: 16, gold: 16, exp: 10 },
{ name: 'Treant', difficulty: 'medium', maxHp: 38, attack: 14, gold: 14, exp: 7 },
{ name: 'Giant Spider', difficulty: 'medium', maxHp: 39, attack: 14, gold: 13, exp: 7 },
{ name: 'Centaur', difficulty: 'medium', maxHp: 41, attack: 16, gold: 16, exp: 9 },
{ name: 'Griffin', difficulty: 'medium', maxHp: 42, attack: 15, gold: 15, exp: 8 },
{ name: 'Necromancer', difficulty: 'hard', maxHp: 66, attack: 26, gold: 32, exp: 17 },
{ name: 'Ogre', difficulty: 'hard', maxHp: 62, attack: 22, gold: 24, exp: 12 },
{ name: 'Wraith', difficulty: 'hard', maxHp: 52, attack: 24, gold: 26, exp: 13 },
{ name: 'Cyclops', difficulty: 'hard', maxHp: 68, attack: 27, gold: 30, exp: 16 },
{ name: 'Shadow Fiend', difficulty: 'hard', maxHp: 58, attack: 23, gold: 25, exp: 13 },
{ name: 'Hellhound', difficulty: 'hard', maxHp: 64, attack: 29, gold: 33, exp: 17 },
{ name: 'Gargoyle', difficulty: 'hard', maxHp: 52, attack: 22, gold: 22, exp: 11 },
{ name: 'Lich', difficulty: 'hard', maxHp: 72, attack: 31, gold: 31, exp: 18 },
{ name: 'Minotaur', difficulty: 'hard', maxHp: 65, attack: 25, gold: 28, exp: 14 },
{ name: 'Earth Elemental', difficulty: 'hard', maxHp: 70, attack: 27, gold: 31, exp: 16 },
{ name: 'Air Elemental', difficulty: 'hard', maxHp: 55, attack: 26, gold: 29, exp: 15 },
{ name: 'Fire Elemental', difficulty: 'hard', maxHp: 60, attack: 28, gold: 32, exp: 16 },
{ name: 'Water Elemental', difficulty: 'hard', maxHp: 58, attack: 23, gold: 26, exp: 14 },
{ name: 'Vampire', difficulty: 'hard', maxHp: 63, attack: 30, gold: 33, exp: 18 },
{ name: 'Giant', difficulty: 'hard', maxHp: 69, attack: 29, gold: 35, exp: 19 },
{ name: 'Manticore', difficulty: 'hard', maxHp: 61, attack: 26, gold: 30, exp: 15 },
{ name: 'Chimera', difficulty: 'hard', maxHp: 66, attack: 28, gold: 36, exp: 19 },
],

_ENCOUNTERS: [
{ type: 'enemy', chance: 70 },
{ type: 'nothing', chance: 20 },
{ type: 'healing', chance: 10 },
{ type: 'boss', chance: 12 },
],

_BALANCE: {
_BASE_HP: 100, _BASE_ATTACK: 10, _BASE_MAX_EXP: 20, _BASE_POTIONS: 10,
_HP_BONUS: 30, _ATTACK_BONUS: 7, _MAX_EXP_MULTI: 1.4,
_WEAPON_BONUS: 8, _ARMOR_BONUS: 33, _POTION_HEAL: 50,
_FLOOR_SCALING: 0.13, _MINI_BOSS_SCALING: 1.3, _BOSS_SCALING: 1.7,
_MIN_HEAL: 20, _MAX_HEAL: 50,
_MIN_DAMAGE_MULTI: 0.6, _MAX_DAMAGE_MULTI: 1.4,
_BASE_WEAPON_COST: 70, _BASE_ARMOR_COST: 70, _POTION_COST: 15,
_BASE_BONE_INCOME: 5, _BASE_SKULL_INCOME: 1,
},

};

const createEnemyLegends = () => {
    const enemyStats = {};

    for (const enemy of gameData._ENEMIES) {
        enemyStats[enemy.name] = {
            _FIGHTS: { name: "Fights:", value: 0 },
			_DAMAGE_DEALT: { name: "Damage Dealt To:", value: 0 },
			_DAMAGE_TAKEN_FROM: { name: "Damage Taken From:", value: 0 },
			_KILLED: { name: "Killed:", value: 0 },
			_DEATHS_FROM: { name: "Deaths From:", value: 0 },
			_RUN_ATTEMPTS: { name: "Run Attempts:", value: 0 },
        };
    }

    return enemyStats;
};

const legendsTemplate = {
    "player Stats": {
		_TOTAL_EXPLORED: { name: "Amount Explored", value: 0 },
		_TOTAL_NOTHING_FOUND: { name: "Nothing Found:", value: 0 },
		_TOTAL_SHRINES_FOUND: { name: "Shrines Found:", value: 0 },
        _TOTAL_FLOORS_CLIMBED: { name: "Floors Climbed:", value: 0 },
        _TOTAL_LEVELS_GAINED: { name: "Levels Gained:", value: 0 },
        _TOTAL_EXP_GAINED: { name: "EXP Gained:", value: 0 },
        _TOTAL_GOLD_GAINED: { name: "Gold Gained:", value: 0 },
        _TOTAL_BONES_GAINED: { name: "Bones Gained:", value: 0 },
        _TOTAL_SKULLS_GAINED: { name: "Skulls Gained:", value: 0 },
        _TOTAL_HEALED: { name: "Health Restored:", value: 0 },
		_TOTAL_POTIONS_USED: { name: "Potions Used:", value: 0 },
        _PLAYER_DEATHS: { name: "Deaths:", value: 0 },
        _LEVELS_LOST: { name: "Levels Lost:", value: 0 },
        _EXP_LOST: { name: "EXP Lost:", value: 0 },
    },
    "Floor Boss Stats": {
        _FLOOR_BOSS_FIGHTS: { name: "Fights:", value: 0 },
        _FLOOR_BOSS_DAMAGE_DEALT: { name: "Damage Dealt To:", value: 0 },
        _FLOOR_BOSS_DAMAGE_TAKEN_FROM: { name: "Damage Taken From:", value: 0 },
        _FLOOR_BOSS_KILLED: { name: "Killed:", value: 0 },
        _FLOOR_BOSS_DEATHS_FROM: { name: "Deaths From:", value: 0 },
        _FLOOR_BOSS_RUN_ATTEMPTS: { name: "Run Attempts:", value: 0 },
    },
    "Overall Enemy Stats": {
        _ENEMY_FIGHTS: { name: "Fights:", value: 0 },
        _ENEMY_DAMAGE_DEALT: { name: "Damage Dealt To:", value: 0 },
        _ENEMY_DAMAGE_TAKEN_FROM: { name: "Damage Taken From:", value: 0 },
        _TOTAL_ENEMIES_KILLED: { name: "Enemies Killed:", value: 0 },
		_TOTAL_DEATHS_FROM: { name: "Deaths From:", value: 0 },
        _ENEMY_RUN_ATTEMPTS: { name: "Run Attempts:", value: 0 },
    },
	"Individual Enemy Stats": createEnemyLegends()
};

const defaultPlayerData = {
    exp: 0,
    hp: gameData._BALANCE._BASE_HP,
    gold: 0,
    wTier: 0,
    aTier: 0,
    pot: gameData._BALANCE._BASE_POTIONS,
    flr: 1,
    flrB: null,
    fndB: false,
    deadB: false,
    enmy: [],

    bones: 0,
    skulls: 0,

    unclaimedBones: 0,
    unclaimedSkulls: 0,

    timer: 0,
	lastTime: new Date().getTime(),

    Collecting: 1,
	Alchemy: 0,
    Armorer: 0,
    Wisdom: 0,
    Greed: 0,
	
	legends: legendsTemplate,
  };

let playerData = defaultPlayerData;


const logError = (func) => {
return function(...args) {
try {
return func.apply(this, args);
} catch (error) {
console.error(error);
ui._printMessage(gameData._DIALOGUE.error);
}
};
};

//utilities module
const utils = {
_clone(obj) {
return JSON.parse(JSON.stringify(obj));
},

_damage(attack) {
const minDamage = attack * gameData._BALANCE._MIN_DAMAGE_MULTI | 0;
const maxDamage = attack * gameData._BALANCE._MAX_DAMAGE_MULTI | 0;
return (Math.random() * (maxDamage - minDamage + 1) + minDamage) | 0;
},
};


// Player module
const player = {
    _calculateStats(exp) {
        let level = 1,
        totalExp = gameData._BALANCE._BASE_MAX_EXP,
        expRequiredForNextLevel = totalExp;

        while(exp >= expRequiredForNextLevel) {
            level++;
            totalExp += expRequiredForNextLevel;
            expRequiredForNextLevel = Math.floor(gameData._BALANCE._BASE_MAX_EXP * Math.pow(gameData._BALANCE._MAX_EXP_MULTI, level - 1));
        }
        const weaponAttack = (playerData.wTier * gameData._BALANCE._WEAPON_BONUS) * (playerData.Armorer == 0 ? 1 : 1 + playerData.Armorer / 100);
		const armorHp = (playerData.aTier * gameData._BALANCE._ARMOR_BONUS) * (playerData.Armorer == 0 ? 1 : 1 + playerData.Armorer / 100);
        return {
            level: level,
            maxHp: gameData._BALANCE._BASE_HP + (level - 1) * gameData._BALANCE._HP_BONUS + armorHp,
            attack: gameData._BALANCE._BASE_ATTACK + (level - 1) * gameData._BALANCE._ATTACK_BONUS + weaponAttack,
            maxExp: expRequiredForNextLevel,
        };
    },
    _prevMaxExp(level) {
        if(level <= 1) {
            return 0;
        }
        const previousLevel = level - 1;
        return Math.floor(gameData._BALANCE._BASE_MAX_EXP * Math.pow(gameData._BALANCE._MAX_EXP_MULTI, previousLevel - 1));
    },
    _updateHp(amount) {
        playerData.hp = Math.min(playerData.hp + amount, player._calculateStats(playerData.exp).maxHp);
        playerData.legends["player Stats"]._TOTAL_HEALED.value += amount;
    },
    _death() {
        const goldLoss = playerData.gold / 2 | 0;
        playerData.gold -= goldLoss;
        const playerDataBeforeDeath = player._calculateStats(playerData.exp);
		const oldExp = playerData.exp;
        if(playerDataBeforeDeath.level === 1) {
            playerData.exp = 0;
        } else {
            const newLevel = Math.max(playerDataBeforeDeath.level - 1, 1);
            const previousLevelMinExp = player._prevMaxExp(newLevel);
            playerData.exp = previousLevelMinExp;
			playerData.legends["player Stats"]._LEVELS_LOST.value++;
        }
		const expLost = oldExp - playerData.exp;
        playerData.flr = Math.max(playerData.flr - 1, 1);
        playerData.hp = player._calculateStats(playerData.exp).maxHp;

        enemyLogic._generateEnemies();
        playerData.fndB = false;
        playerData.deadB = false;
        saveGame();

        playerData.legends["player Stats"]._PLAYER_DEATHS.value++;
        
        playerData.legends["player Stats"]._EXP_LOST.value += expLost;

        ui._printMessage(ui._randomDialogue('playerDeath'), true);
        ui._printMessage(`You return to level ${player._calculateStats(playerData.exp).level}, floor ${playerData.flr} and have ${playerData.gold} gold left.`, true);
        playEffect(gameData._SOUND_EFFECTS.playerDeath);
    },
    _levelUp(previousPlayerData) {
		
    const currentPlayerData = player._calculateStats(playerData.exp);
    const levelsGained = currentPlayerData.level - previousPlayerData.level;
	playerData.legends["player Stats"]._TOTAL_LEVELS_GAINED.value += levelsGained;

    playerData.hp = currentPlayerData.maxHp;
    ui._printMessage(ui._randomDialogue('levelUp'), true);
    ui._printMessage(`Congratulations! You reached level ${currentPlayerData.level}!<br>Your max HP and attack have increased!`, true);
    playEffect(gameData._SOUND_EFFECTS.levelUp);
},
};


// Enemy module
const enemyLogic = {
  _generateEnemies() {
    let selectedEnemies = new Set(),
    availableEnemies;
    playerData.flr === 1 ?
    Array(3).fill(null).forEach(() => selectedEnemies.add(enemyLogic._randomEnemy('easy').name)) : ['easy', 'medium', 'hard'].forEach(difficulty => selectedEnemies.add(enemyLogic._randomEnemy(difficulty).name));
    playerData.enmy = [...selectedEnemies];
    const floorBoss = gameData._ENEMIES
    .filter(enemy => playerData.enmy.includes(enemy.name))
    .map((_, index, availableEnemies) => availableEnemies[Math.random() * availableEnemies.length | 0])[0];
    playerData.flrB = floorBoss.name;
  },
  _scaleEnemy(enemyName, isFloorBoss = false) {
    const enemyTemplate = gameData._ENEMIES.find((enemy) => enemy.name === enemyName);
    const scalingFactor = 1 + (playerData.flr - 1) * gameData._BALANCE._FLOOR_SCALING;
    const scaledEnemy = utils._clone(enemyTemplate);
    scaledEnemy.maxHp = scaledEnemy.maxHp * scalingFactor | 0;
    scaledEnemy.attack = scaledEnemy.attack * scalingFactor | 0;
    scaledEnemy.gold = scaledEnemy.gold * scalingFactor | 0;
    scaledEnemy.exp = scaledEnemy.exp * scalingFactor | 0;
    scaledEnemy.hp = scaledEnemy.maxHp;
    if(isFloorBoss) {
      const bossScaling = gameData._BALANCE._BOSS_SCALING;
      scaledEnemy.isFloorBoss = true;
      scaledEnemy.maxHp = scaledEnemy.maxHp * bossScaling | 0;
      scaledEnemy.attack = scaledEnemy.attack * bossScaling | 0;
      scaledEnemy.gold = scaledEnemy.gold * bossScaling | 0;
      scaledEnemy.exp = scaledEnemy.exp * bossScaling | 0;
      scaledEnemy.hp = scaledEnemy.maxHp;
    }
    return scaledEnemy;
  },
  _randomEnemy(difficulty) {
    const filteredEnemies = gameData._ENEMIES.filter(enemy => !difficulty || enemy.difficulty === difficulty);
    const randomIndex = Math.random() * filteredEnemies.length | 0;
    const enemy = utils._clone(filteredEnemies[randomIndex]);
    enemy.hp = enemy.maxHp;
    return enemy;
  },

  _fight(enemyTemplate) {
    ui._setButtons(false, false);
    combatBtns.style.display = 'block';

    const enemy = utils._clone(enemyTemplate);
    ui._updateEnemyStats(enemy);
    const damageToPlayer = utils._damage(enemy.attack);

    const fightBtn = el('fightBtn');
    const runBtn = el('runBtn');
	
	playerData.legends["Overall Enemy Stats"]._ENEMY_FIGHTS.value++;
	playerData.legends["Individual Enemy Stats"][enemy.name]._FIGHTS.value++;
	if (enemy.isFloorBoss) {
		playerData.legends["Floor Boss Stats"]._FLOOR_BOSS_FIGHTS.value++;
	}
	
    fightBtn.onclick = () => {
      const currentplayerData = player._calculateStats(playerData.exp);
      const damageToEnemy = utils._damage(currentplayerData.attack);

      enemy.hp -= damageToEnemy;
      playerData.hp -= damageToPlayer;
      ui._updateEnemyStats(enemy);

      
      playerData.legends["Overall Enemy Stats"]._ENEMY_DAMAGE_DEALT.value += damageToEnemy;
      playerData.legends["Overall Enemy Stats"]._ENEMY_DAMAGE_TAKEN_FROM.value += damageToPlayer;

      if (enemy.isFloorBoss) {
		
        playerData.legends["Floor Boss Stats"]._FLOOR_BOSS_DAMAGE_DEALT.value += damageToEnemy;
        playerData.legends["Floor Boss Stats"]._FLOOR_BOSS_DAMAGE_TAKEN_FROM.value += damageToPlayer;
      }

      
      playerData.legends["Individual Enemy Stats"][enemy.name]._DAMAGE_DEALT.value += damageToEnemy;
      playerData.legends["Individual Enemy Stats"][enemy.name]._DAMAGE_TAKEN_FROM.value += damageToPlayer;

      if(playerData.hp <= 0) {
        ui._printMessage(`You dealt ${damageToEnemy} damage to the ${enemy.name}.<br>The ${enemy.name} defeated you.`);
        player._death();
        ui._resetUI();
        if (enemy.isFloorBoss) {
          playerData.legends["Floor Boss Stats"]._FLOOR_BOSS_DEATHS_FROM.value++;
        }
		playerData.legends["Overall Enemy Stats"]._DEATHS_FROM.value++;
        playerData.legends["Individual Enemy Stats"][enemy.name]._DEATHS_FROM.value++;
      } else if (enemy.hp <= 0) {
		const expGain = enemy.exp * (playerData.Wisdom == 0 ? 1 : 1 + playerData.Wisdom / 100);
		const goldGain = enemy.gold * (playerData.Greed == 0 ? 1 : 1 + playerData.Greed / 100);
        playerData.gold += enemy.gold;
        playerData.exp += enemy.exp;
        playerData.unclaimedBones += gameData._BALANCE._BASE_BONE_INCOME;
        playerData.legends["player Stats"]._TOTAL_GOLD_GAINED.value += enemy.gold;
        playerData.legends["player Stats"]._TOTAL_EXP_GAINED.value += enemy.exp;
        
        if (enemy.isFloorBoss) {
          playerData.unclaimedSkulls += gameData._BALANCE._BASE_SKULL_INCOME;
          
          playerData.legends["Floor Boss Stats"]._FLOOR_BOSS_KILLED.value++;
        }

        playerData.legends["Overall Enemy Stats"]._TOTAL_ENEMIES_KILLED.value++;
        playerData.legends["Individual Enemy Stats"][enemy.name]._KILLED.value++;

        ui._printMessage(`The ${enemy.name} dealt ${damageToPlayer} damage to you.<br>You dealt ${damageToEnemy} damage to the ${enemy.name} and defeated it!<br>You earned ${enemy.gold} gold and ${enemy.exp} exp!`);
        (playerData.exp >= currentplayerData.maxExp) ? player._levelUp(currentplayerData) : playEffect(gameData._SOUND_EFFECTS.victory);

        if (enemy.isFloorBoss) {
          playerData.deadB = true;
          ui._printMessage(ui._randomDialogue(`defeatBoss`), true);
        }
        ui._resetUI();
      } else {
        ui._printMessage(`You dealt ${damageToEnemy} damage to the ${enemy.name}.<br>The ${enemy.name} dealt ${damageToPlayer} damage to you.`);
      }
    }

    runBtn.onclick = () => {
      playerData.hp -= damageToPlayer;
	  
      playerData.legends["Overall Enemy Stats"]._ENEMY_DAMAGE_TAKEN_FROM.value += damageToPlayer;
      if (enemy.isFloorBoss) {
        playerData.legends["Floor Boss Stats"]._FLOOR_BOSS_DAMAGE_TAKEN_FROM.value += damageToPlayer;
      }
      playerData.legends["Individual Enemy Stats"][enemy.name]._DAMAGE_TAKEN_FROM.value += damageToPlayer;
	  
      if(playerData.hp <= 0) {
        ui._printMessage(`You fled from the ${enemy.name}.<br>But took ${damageToPlayer} damage while running away and were defeated.`);
        player._death();
        if (enemy.isFloorBoss) {
          playerData.legends["Floor Boss Stats"]._FLOOR_BOSS_DEATHS_FROM.value++;
        }
		playerData.legends["Overall Enemy Stats"]._TOTAL_DEATHS_FROM.value++;
        playerData.legends["Individual Enemy Stats"][enemy.name]._DEATHS_FROM.value++;
      } else {
        ui._printMessage(`You fled from the ${enemy.name}.<br>But took ${damageToPlayer} damage while running away.`);
        playerData.legends["Overall Enemy Stats"]._ENEMY_RUN_ATTEMPTS.value++;
        if (enemy.isFloorBoss) {
          playerData.legends["Floor Boss Stats"]._FLOOR_BOSS_RUN_ATTEMPTS.value++;
        }
        playerData.legends["Individual Enemy Stats"][enemy.name]._RUN_ATTEMPTS.value++;
      }
      ui._resetUI();
    };
  },
};



// UI module
const ui = {
_printMessage(text, append = false) {
ui._updatePlayerStats();
if(!text) return;
message.innerHTML = append ? message.innerHTML + text + '<br>' : text + '<br>';
},
_randomDialogue(scenario) {
return gameData._DIALOGUE[scenario][Math.floor(Math.random() * gameData._DIALOGUE[scenario].length)];
},
_updatePlayerStats() {
const currentplayerData = player._calculateStats(playerData.exp);
const hpPercentage = (playerData.hp / currentplayerData.maxHp) * 100;

const expRequiredForPreviousLevel = player._prevMaxExp(currentplayerData.level);
const expPercentage = ((playerData.exp - expRequiredForPreviousLevel) / (currentplayerData.maxExp - expRequiredForPreviousLevel)) * 100;

el('hpText').textContent = `${playerData.hp}/${currentplayerData.maxHp}`;
el('hpProgress').style.width = `${hpPercentage}%`;
el('hpProgress').style.backgroundColor = hpPercentage > 30 ? 'LimeGreen' : hpPercentage > 10 ? 'yellow' : 'red';

el('levelText').textContent = currentplayerData.level;
el('expText').textContent = `${playerData.exp}/${currentplayerData.maxExp}`;
el('expProgress').style.width = `${expPercentage}%`;

el('floorText').textContent = playerData.flr;
el('attackText').textContent = currentplayerData.attack;
el('goldText').textContent = playerData.gold;
el('potionsText').textContent = playerData.pot;
el('weaponTierText').textContent = playerData.wTier;
el('armorTierText').textContent = playerData.aTier;
},
_updateEnemyStats(enemy) {
if(enemy) {
el('enemyName').textContent = enemy.isFloorBoss ? `${enemy.name} (Floor Boss)` : enemy.name;
const enemyHpPercentage = (enemy.hp / enemy.maxHp) * 100;
el('enemyHpText').textContent = `${enemy.hp}/${enemy.maxHp}`;
el('enemyHpProgress').style.width = `${enemyHpPercentage}%`;
el('enemyAttack').innerHTML = `Attack: ${enemy.attack}`;
enemyStats.style.display = 'block';
} else {
enemyStats.style.display = 'none';
}
},
_setButtons(enable, visible, fightButtons) {
const display = visible ? 'inline' : 'none';
[exploreBtn, usePotBtn, maxPotionsBtn, fightBossBtn, shopBtn, altarBtn, settingsBtn, saveBtn, loadBtn, exportBtn, importBtn].forEach(btn => {
btn.style.display = display;
btn.disabled = !enable;
});
ui._updateBossButton();
},
_updateBossButton() {
(playerData.deadB) ? (fightBossBtn.textContent = 'Next Floor', fightBossBtn.onclick = nextFloor, fightBossBtn.disabled = !playerData.deadB) : (fightBossBtn.textContent = 'Fight Boss', fightBossBtn.onclick = fightFloorBoss, fightBossBtn.disabled = !playerData.fndB);
},
_resetUI() {
ui._setButtons(true, true);
ui._updateEnemyStats(null);
combatBtns.style.display = 'none';
},
};


// Encounters module
const encounter = {
enemy() {
ui._printMessage(ui._randomDialogue(`enemyEncounter`));
ui._printMessage(`What will you do?`, true);
const randomIndex = Math.random() * playerData.enmy.length | 0;
const enemyName = playerData.enmy[randomIndex];
const scaledEnemy = enemyLogic._scaleEnemy(enemyName);
enemyLogic._fight(scaledEnemy);
},
nothing() {
ui._printMessage(ui._randomDialogue(`nothingFound`));
playerData.legends["player Stats"]._TOTAL_NOTHING_FOUND.value++;
},
healing() {
const healingAmount = (Math.random() * (gameData._BALANCE._MAX_HEAL - gameData._BALANCE._MIN_HEAL) | 0) + gameData._BALANCE._MIN_HEAL;
player._updateHp(healingAmount);
ui._printMessage(ui._randomDialogue(`healingShrine`));
ui._printMessage(`You recovered ${healingAmount} HP!`, true);
playerData.legends["player Stats"]._TOTAL_SHRINES_FOUND.value++;
},
boss() {
playerData.fndB = true;
ui._printMessage(ui._randomDialogue(`bossFound`));
ui._printMessage(`You found the floor boss!`, true);
const floorBossCopy = enemyLogic._scaleEnemy(playerData.flrB, true);
ui._updateEnemyStats(floorBossCopy);
ui._updateBossButton();
},
};

// top level functions
const explore = logError(function() {
ui._updateEnemyStats(null);
playerData.legends["player Stats"]._TOTAL_EXPLORED.value++;

const validEncounters = gameData._ENCOUNTERS.filter(
(encounter) => encounter.type !== 'boss' || !playerData.fndB
);
const totalChance = validEncounters.reduce(
(acc, cur) => acc + cur.chance, 0
);
let randomChance = Math.random() * totalChance | 0;
let encounterType;

for(const encounter of validEncounters) {
if(randomChance < encounter.chance) {
encounterType = encounter.type;
break;
}
randomChance -= encounter.chance;
}

encounter[encounterType]();
});

const usePot = logError(function(max = false) {
const currentplayerData = player._calculateStats(playerData.exp);
let potionsUsed = 0;
let healthRestored = 0;

if(max) {
while(playerData.pot > 0 && playerData.hp < currentplayerData.maxHp) {
const healingAmount = max ? Math.min(gameData._BALANCE._POTION_HEAL, currentplayerData.maxHp - playerData.hp) : gameData._BALANCE._POTION_HEAL;
player._updateHp(healingAmount);
healthRestored += healingAmount;
playerData.pot--;
potionsUsed++;
}
} else {
if(playerData.pot > 0 && playerData.hp < currentplayerData.maxHp) {
const healingAmount = gameData._BALANCE._POTION_HEAL;
player._updateHp(healingAmount);
playerData.pot--;
potionsUsed = 1;
healthRestored = healingAmount;
}
}
if(potionsUsed > 0) {
ui._printMessage(`You used ${potionsUsed} potion(s) and recovered ${healthRestored} HP!`);
playerData.legends["player Stats"]._TOTAL_POTIONS_USED.value += potionsUsed;
} else if(playerData.hp >= currentplayerData.maxHp) {
ui._printMessage('Your HP is already full.');
} else {
ui._printMessage(`You don't have any potions left.`);
}
ui._updateEnemyStats(null);
});

const fightFloorBoss = logError(function() {
if(playerData.flrB) {
const floorBossCopy = enemyLogic._scaleEnemy(playerData.flrB, true);
ui._printMessage(ui._randomDialogue(`approachBoss`));
enemyLogic._fight(floorBossCopy);
} else {
ui._printMessage(`You haven't found the floor boss yet.`);
}
});

const nextFloor = logError(function() {
playerData.flr++;
playerData.flrB = null;
playerData.fndB = false;
playerData.deadB = false;
ui._printMessage(ui._randomDialogue('newFloor'));
ui._printMessage(`You've reached floor ${playerData.flr}!`, true);
playEffect(gameData._SOUND_EFFECTS.nextFloor);
enemyLogic._generateEnemies();
ui._updateEnemyStats(null);
ui._updateBossButton();
playerData.legends["player Stats"]._TOTAL_FLOORS_CLIMBED.value++;
});



// bone altar start
function toggleAltar() {
const isAltarOpen = altarMenu.style.display === 'block';
altarMenu.style.display = isAltarOpen ? 'none' : 'block';
gameContainer.style.display = isAltarOpen ? 'flex' : 'none';
if(!isAltarOpen) {
generateUpgradeMenu();
}

}

function updateAltarUI() {
unclaimedBonesText.innerText = playerData.unclaimedBones;
unclaimedSkullsText.innerText = playerData.unclaimedSkulls;
bonesText.innerText = playerData.bones;
skullsText.innerText = playerData.skulls;

}



function altarTimer() {
  const currentTime = new Date().getTime();
  const timeDifference = currentTime - playerData.lastTime;

  playerData.timer += timeDifference;

  if (playerData.timer >= 600000) {
    const boneIncome = Math.floor(playerData.timer / 600000) * (gameData._BALANCE._BASE_BONE_INCOME * playerData.Collecting);
    playerData.unclaimedBones += boneIncome;
	playerData.pot += playerData.Alchemy;
    playerData.timer %= 600000;
    updateAltarUI();
	ui._updatePlayerStats();
  }

  playerData.lastTime = currentTime;
  const remainingTime = 600 - Math.floor(playerData.timer / 1000) % 600;
  timerText.innerText = `${Math.floor(remainingTime / 60)}:${String(remainingTime % 60).padStart(2, '0')}`;
  updateAltarUI();

  setTimeout(altarTimer, 1000);
}

function altarClaim() {
	playerData.bones += playerData.unclaimedBones;
	playerData.skulls += playerData.unclaimedSkulls;
	playerData.legends["player Stats"]._TOTAL_BONES_GAINED.value += playerData.unclaimedBones;
	playerData.legends["player Stats"]._TOTAL_SKULLS_GAINED.value += playerData.unclaimedSkulls;
	
	playerData.unclaimedBones = 0;
	playerData.unclaimedSkulls = 0;
	
	updateAltarUI();
	generateUpgradeMenu();
}


function generateUpgradeMenu() {
    upgradeMenu.innerHTML = '';
    const upgrades = ['Collecting', 'Alchemy', 'Armorer', 'Wisdom', 'Greed'];
    

    for (const upgrade of upgrades) {
		
		const upgradeDescriptions = {
        'Collecting': `+${playerData[upgrade] * gameData._BALANCE._BASE_BONE_INCOME} Bones/10 mins`,
        'Alchemy': `+${playerData[upgrade]} potion/10 mins`,
		'Armorer': `+${playerData[upgrade]}% equipment stats`,
        'Wisdom': `+${playerData[upgrade]}% exp gain`,
        'Greed': `+${playerData[upgrade]}% gold gain`
    };
		
        const upgradeContainer = document.createElement('div');
        upgradeContainer.className = 'upgrade-item';

        const upgradeTop = document.createElement('div');
        upgradeTop.className = 'upgrade-top';

        const upgradeName = document.createElement('div');
        upgradeName.className = 'upgrade-name';
        upgradeName.innerText = `${upgrade}: ${playerData[upgrade]}`;
        upgradeTop.appendChild(upgradeName);

        const upgradeButton = document.createElement('button');
        upgradeButton.innerText = 'Upgrade';
        upgradeButton.onclick = () => upgradeSkill(upgrade);

        const boneCost = getUpgradeCost(upgrade);
        const skullCost = getUpgradeSkullCost(upgrade);
        upgradeButton.disabled = playerData.bones < boneCost || playerData.skulls < skullCost;

        upgradeTop.appendChild(upgradeButton);
        upgradeContainer.appendChild(upgradeTop);

        const upgradeCost = document.createElement('div');
        upgradeCost.className = 'upgrade-cost';
        upgradeCost.innerText = `${skullCost} ` + skullCost > 1 ? `skulls` : `skull` + ` & ${boneCost} Bones`;
        upgradeContainer.appendChild(upgradeCost);

        const upgradeDescription = document.createElement('div');
        upgradeDescription.className = 'upgrade-description';
        upgradeDescription.innerText = upgradeDescriptions[upgrade];
        upgradeContainer.appendChild(upgradeDescription);

        upgradeMenu.appendChild(upgradeContainer);
    }
}


function getUpgradeCost(upgrade) {
    return 1000 * playerData[upgrade];
}

function getUpgradeSkullCost(upgrade) {
    return 1 + Math.floor(playerData[upgrade] / 10);
}

function upgradeSkill(upgrade) {
    const boneCost = getUpgradeCost(upgrade);
    const skullCost = getUpgradeSkullCost(upgrade);

    if (playerData.bones >= boneCost && playerData.skulls >= skullCost) {
        playerData.bones -= boneCost;
        playerData.skulls -= skullCost;
        playerData[upgrade]++;
        updateAltarUI();
        generateUpgradeMenu();
    }
}




// bone altar end



// start of legends
function toggleLegendsMenu() {
    const isLegendsMenuOpen = legendsMenu.style.display === 'block';
    legendsMenu.style.display = isLegendsMenuOpen ? 'none' : 'block';
    altarMenu.style.display = isLegendsMenuOpen ? 'block' : 'none';

    if (!isLegendsMenuOpen) {
        legendsText.innerHTML = generateLegendsHTML(playerData.legends);
    }
}



function generateLegendsHTML(legends) {
    let html = '';
    for (const [category, stats] of Object.entries(legends)) {
        html += `<div class="legend-title">
                    <span class="legend-name">${category}</span>
                 </div>`;
        if (category === 'Individual Enemy Stats') {
            for (const [enemyName, enemyStats] of Object.entries(stats)) {
                html += `<div class="legend-title">
                            <span class="legend-name">${enemyName}</span>
                         </div>`;
                for (const [statKey, stat] of Object.entries(enemyStats)) {
                    html += `<div class="legend-item">
                                <span class="legend-name">${stat.name}</span>
                                <span class="legend-value">${stat.value}</span>
                             </div>`;
                }
            }
        } else {
            for (const [key, legend] of Object.entries(stats)) {
                html += `<div class="legend-item">
                            <span class="legend-name">${legend.name}</span>
                            <span class="legend-value">${legend.value}</span>
                         </div>`;
            }
        }
    }
    return html;
}



//end of legends




const itemCost = (itemType, itemTier) => {
const costBase = itemType === 'weapon' ? gameData._BALANCE._BASE_WEAPON_COST : gameData._BALANCE._BASE_ARMOR_COST;
return itemTier * costBase + costBase;
},

updCost = () => {
const currentWeaponCost = itemCost('weapon', playerData.wTier);
const currentArmorCost = itemCost('armor', playerData.aTier);
const potionCost = gameData._BALANCE._POTION_COST;
const maxPotions = Math.floor(playerData.gold / potionCost);
const maxPotionCost = maxPotions * potionCost;

el('weaponCost').textContent = `${currentWeaponCost} gold`;
el('armorCost').textContent = `${currentArmorCost} gold`;
el('potionCost').textContent = `${potionCost} gold`;
el('maxPotionCost').textContent = `${maxPotionCost} gold`;
},

tglShop = () => {
const isShopOpen = shop.style.display === 'block';
if(isShopOpen) {
ui._printMessage(ui._randomDialogue('shopExit'));
ui._setButtons(true, true);
} else {
ui._printMessage(ui._randomDialogue('shopEnter'));
ui._setButtons(false, false);
updCost();
}
shop.style.display = isShopOpen ? 'none' : 'block';
ui._updateEnemyStats(null);
},

buyItem = logError(function(itemType) {
const itemTier = itemType === 'weapon' ? playerData.wTier : playerData.aTier;
const cost = itemCost(itemType, itemTier);

if(playerData.gold < cost) return ui._printMessage(`You don't have enough gold to upgrade your ${itemType}.`);
playerData.gold -= cost;
if(itemType === 'weapon') {
playerData.wTier++;
ui._printMessage(`You upgraded your weapon to Tier ${playerData.wTier}.`);
} else {
playerData.aTier++;
player._updateHp(gameData._BALANCE._ARMOR_BONUS);
ui._printMessage(`You upgraded your armor to Tier ${playerData.aTier}.`);
}
updCost();
}),

buyPots = logError(function(max = false) {
const potionCost = gameData._BALANCE._POTION_COST;
const maxPotions = Math.floor(playerData.gold / potionCost);
const totalCost = max ? maxPotions * potionCost : potionCost;
const boughtPotions = max ? maxPotions : 1;

if(playerData.gold >= totalCost && boughtPotions > 0) {
playerData.gold -= totalCost;
playerData.pot += boughtPotions;
ui._printMessage(`You bought ${boughtPotions} potion(s) for ${totalCost} gold.<br>You now have ${playerData.pot} potions.`);
updCost();
} else {
ui._printMessage(`You don't have enough gold to buy any potions.`);
}
});









// start of player save/load
const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, btoa(JSON.stringify(data)));
};

const loadFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(atob(data)) : null;
};

const saveGame = logError((auto = true) => {
  saveToLocalStorage('SerRat&ChatGPTsEndlessTextBasedRPG.save', validatePlayerData(playerData));
  if (auto) {
    console.log('autosave successful');
  } else {
    ui._printMessage('Game saved successfully!<br>Please note that clearing browser cache will wipe save data!');
  }
});

const loadGame = logError(() => {
  const loadedPlayer = loadFromLocalStorage('SerRat&ChatGPTsEndlessTextBasedRPG.save');
  if (loadedPlayer) {
    playerData = validatePlayerData(loadedPlayer);
    ui._printMessage('Game loaded successfully!');
    ui._printMessage(ui._randomDialogue('loadGame'), true);
    ui._updateEnemyStats(null);
  } else {
    ui._printMessage('No saved game data found.');
  }
});

const exportSave = logError(() => {
  const saveData = loadFromLocalStorage('SerRat&ChatGPTsEndlessTextBasedRPG.save');
  if (saveData) {
    const a = document.createElement('a');
    a.href = 'data:text/plain;charset=utf-8,' + btoa(JSON.stringify(saveData));
    a.download = 'descentIntoDarkness.save';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    ui._printMessage('Save file exported successfully!');
  } else {
    ui._printMessage('No saved game data found.');
  }
});

const importSave = logError((event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = event => {
      const loadedPlayer = JSON.parse(atob(event.target.result));
      saveToLocalStorage('SerRat&ChatGPTsEndlessTextBasedRPG.save', validatePlayerData(loadedPlayer));
      loadGame();
      ui._printMessage('Save file imported successfully!');
    };
    reader.readAsText(file);
  }
});

const triggerFileInput = () => {
  fileInput.click();
};

const resetSaveData = logError(() => {
  if (confirm('Are you sure you want to reset your save data? This action cannot be undone.')) {
    tglSet();
    localStorage.removeItem('SerRat&ChatGPTsEndlessTextBasedRPG.save');
    ui._printMessage('Save data reset successfully.');
    trackControl.stop();
    startGame();
  }
});

const validatePlayerData = (saveData) => {
  
  const oldToNewKeys = {
    weaponTier: 'wTier',
    armorTier: 'aTier',
    potions: 'pot',
    floor: 'flr',
    floorBoss: 'flrB',
    foundBoss: 'fndB',
    bossDead: 'deadB',
    enemiesOnFloor: 'enmy',
    selectedTrack: 'trk'
  };

  const filteredPlayerData = {};

  for (const key in defaultPlayerData) {
    const oldKey = Object.keys(oldToNewKeys).find(oldKey => oldToNewKeys[oldKey] === key);
    const useOldKey = oldKey && saveData.hasOwnProperty(oldKey) && saveData[oldKey] !== null;

    if ((saveData.hasOwnProperty(key) && saveData[key] != null) || useOldKey) {
      filteredPlayerData[key] = useOldKey ? saveData[oldKey] : saveData[key];
      if (useOldKey) console.warn(`Recovering save data: using old key ${oldKey}, updating to new key ${key}.`);
    } else {
      console.warn(`Recovering save data: missing or corrupt key ${key}, using default value.`);
      filteredPlayerData[key] = defaultPlayerData[key];
    }
  }

  const validEnemyNames = gameData._ENEMIES.map(enemy => enemy.name);
  if (filteredPlayerData.enmy) {
    const invalidEnemies = filteredPlayerData.enmy.filter(enemy => !validEnemyNames.includes(enemy));
    if (invalidEnemies.length) {
      console.error(`Recovering save data: invalid enemy type(s) found: ${invalidEnemies.join(', ')}. Rerolling enemies on floor and boss.`);
      enemyLogic._generateEnemies();
    }
  } else {
    console.error('Recovering save data: enemiesOnFloor is missing or invalid. Rerolling enemies on floor and boss.');
    enemyLogic._generateEnemies();
  }

  return filteredPlayerData;
};
//end of player save/load

// seed functions
function sfc32(a, b, c, d) {
return function() {
a >>>= 0;
b >>>= 0;
c >>>= 0;
d >>>= 0;
var t = (a + b) | 0;
a = b ^ b >>> 9;
b = c + (c << 3) | 0;
c = (c << 21 | c >>> 11);
d = d + 1 | 0;
t = t + d | 0;
c = c + t | 0;
return (t >>> 0) / 4294967296;
}
}

function xmur3(str) {
for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) {
h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
h = h << 13 | h >>> 19;
}
return function() {
h = Math.imul(h ^ h >>> 16, 2246822507);
h = Math.imul(h ^ h >>> 13, 3266489909);
return (h ^= h >>> 16) >>> 0;
}
}

let randomFunction = Math.random;

// important seed helper functions
function seedRNG(seed) {
const seedHasher = xmur3(seed);
randomFunction = sfc32(seedHasher(), seedHasher(), seedHasher(), seedHasher());
}

function choose(array) {
return array[Math.floor(rnd() * array.length)];
}

function rndInt(max) {
return Math.floor(rnd() * max);
}

function rndBetween(min, max) {
return rnd() * (max - min) + min;
}

function fill(count, fn) {
return new Array(count).fill(undefined).map((x, i) => fn(i));
}

function flip(trueChance = 0.5) {
return rnd() < trueChance;
}

function rnd() {
return randomFunction();
}
//end of important seed helper functions
//end seed functions

const scales = {
harmonicMinor: [0, 2, 3, 5, 7, 8, 11],
phrygianDominant: [0, 1, 4, 5, 7, 8, 10],
locrian: [0, 1, 3, 5, 6, 8, 10],
diminished: [0, 2, 3, 5, 6, 8, 9, 11]
};

const chordTypes = {
triad: [0, 2, 4],
};

function chooseRandomScale(currentScale) {
const scaleNames = Object.keys(scales);
if(currentScale === null) {
return scales[choose(scaleNames)];
}
let newScaleName;
do {
newScaleName = choose(scaleNames);
} while(scales[newScaleName] === currentScale);
return scales[newScaleName];
}

function modulate(key, scale) {
choose([
function() {
scale = chooseRandomScale(scale);
},
function() {
// Move around the cycle of fifths
if(Math.random() < 0.5) {
key = (key + 7) % 12;
} else {
key = (key + 5) % 12;
}
},
])();
return [key, scale];
}

const PatternSize = 64;


function getChord(context, rowIndex) {
const {
progression,
key,
scale
} = context;
const progIndex = Math.floor(rowIndex / 4);
const chordNumber = progression[progIndex];
return chordTypes.triad.map(noteIndex => key + scale[(chordNumber - 1 + noteIndex) % scale.length]);
}



function bass(context) {
return fill(PatternSize, i => {
const chord = getChord(context, i);
const palmMute = flip(0.5) ? 0.5 : 1;
return {
note: i % 2 === 1 ? 'cont' : chord[0] + (Math.floor(i / 2) % 2) * 12 - 12,
vel: palmMute,
fx: {
pulseWidth: 0
},
};
});
}

function bass2(context) {
return fill(PatternSize, i => {
const chord = getChord(context, i);
const noteOptions = [chord[0] - 4, chord[0] + 5, chord[0] - 12];
return {
note: i % 8 === 0 ? choose(noteOptions) : 'cont',
vel: 2,
fx: {
pulseWidth: rnd()
}
};
});
}


function powerChord(rootNote) {
return [rootNote, rootNote + 7];
}

function riff(context) {
const octave = choose([0, 12, 24]);
const pattern = [];
for(let i = 0; i < PatternSize; i++) {
const chord = getChord(context, i);
const rootNote = chord[0] + octave;
const powerChordNotes = powerChord(rootNote);
const usePowerChord = flip(0.7);
const palmMute = flip(0.5) ? 0.5 : 1;
const chromaticRun = flip(0.25);
const chromaticOffset = chromaticRun ? rndInt(4) - 2 : 0;
pattern.push({
note: usePowerChord ? choose(powerChordNotes) + chromaticOffset : rootNote + chromaticOffset,
vel: palmMute,
fx: {
glide: flip(0.25) ? rndBetween(0.1, 0.7) : 0,
},
});
}
return pattern;
}

function aggressiveRiff(context) {
const octave = choose([0, 12, 24]);
const pattern = [];
for(let i = 0; i < PatternSize; i++) {
const chord = getChord(context, i);
const rootNote = chord[0] + octave;
const powerChordNotes = powerChord(rootNote);
const usePowerChord = flip(0.9);
const palmMute = flip(0.7) ? 0.5 : 1;
const chromaticRun = flip(0.3);
const chromaticOffset = chromaticRun ? rndInt(4) - 2 : 0;
pattern.push({
note: usePowerChord ? choose(powerChordNotes) + chromaticOffset : rootNote + chromaticOffset,
vel: palmMute,
fx: {
glide: flip(0.2) ? rndBetween(0.1, 0.7) : 0,
},
});
}
return pattern;
}

function tremoloRiff(context) {
const octave = choose([0, 12, 24]);
const pattern = [];
for(let i = 0; i < PatternSize; i++) {
const chord = getChord(context, i);
const rootNote = chord[0] + octave;
const powerChordNotes = powerChord(rootNote);
const usePowerChord = flip(0.9);
const chromaticRun = flip(0.5);
const chromaticOffset = chromaticRun ? rndInt(4) - 2 : 0;
const intervalJump = flip(0.3) ? rndInt(5) - 2 : 0;

pattern.push({
note: usePowerChord ? choose(powerChordNotes) + chromaticOffset : rootNote + chromaticOffset + intervalJump,
vel: 1,
len: 1,
fx: {
glide: flip(0.3) ? rndBetween(0.1, 0.7) : 0,
},
});
}
return pattern;
}

function epicMetalSolo(context) {
const octave = choose([0, 12, 24]);
const pattern = [];
for(let i = 0; i < PatternSize; i++) {
const chord = getChord(context, i);
const rootNote = chord[0] + octave;
const powerChordNotes = powerChord(rootNote);
const usePowerChord = flip(0.9);
const palmMute = flip(0.5) ? 0.5 : 1;
const chromaticRun = flip(0.5);
const chromaticOffset = chromaticRun ? rndInt(4) - 2 : 0;
const fastNotes = flip(0.8);
const noteLength = fastNotes ? 1 : 2;
const pinchHarmonic = flip(0.2);
const tapping = flip(0.15);
const sweepPicking = flip(0.1);
const legato = flip(0.3);

const fxOptions = {
pinchHarmonic: pinchHarmonic ? rndBetween(0.5, 1) : 0,
tapping: tapping ? rndBetween(0.5, 1) : 0,
sweepPicking: sweepPicking ? rndBetween(0.5, 1) : 0,
legato: legato ? rndBetween(0.5, 1) : 0,
glide: flip(0.3) ? rndBetween(0.1, 0.7) : 0,
};

pattern.push({
note: usePowerChord ? choose(powerChordNotes) + chromaticOffset : rootNote + chromaticOffset,
vel: palmMute,
len: noteLength,
fx: fxOptions,
});
}
return pattern;
}

function gallopRhythm(context) {
const octave = choose([0, 12, 24]);
const pattern = [];
for(let i = 0; i < PatternSize; i++) {
const chord = getChord(context, i);
const rootNote = chord[0] + octave;
const powerChordNotes = powerChord(rootNote);
const usePowerChord = flip(0.9);
const palmMute = flip(0.5) ? 0.5 : 1;
const noteLength = i % 4 === 0 ? 2 : 1;
const intervalJump = flip(0.2) ? rndInt(4) - 2 : 0;

pattern.push({
note: usePowerChord ? choose(powerChordNotes) + intervalJump : rootNote + intervalJump,
vel: palmMute,
len: noteLength,
fx: {
glide: flip(0.3) ? rndBetween(0.1, 0.7) : 0,
},
});
}
return pattern;
}

function chuggingRhythm(context) {
const octave = choose([0, 12, 24]);
const pattern = [];
for(let i = 0; i < PatternSize; i++) {
const chord = getChord(context, i);
const rootNote = chord[0] + octave;
const powerChordNotes = powerChord(rootNote);
const chug = i % 2 === 0 && flip(0.9);
const noteLength = chug ? 1 : 2;
const intervalJump = flip(0.15) ? rndInt(4) - 2 : 0;

pattern.push({
note: chug ? choose(powerChordNotes) + intervalJump : rootNote + intervalJump,
vel: chug ? 0.5 : 1,
len: noteLength,
fx: {
glide: flip(0.3) ? rndBetween(0.1, 0.7) : 0,
},
});
}
return pattern;
}

function alternatePicking(context) {
const octave = choose([0, 12, 24]);
const pattern = [];
for(let i = 0; i < PatternSize; i++) {
const chord = getChord(context, i);
const rootNote = chord[0] + octave;
const powerChordNotes = powerChord(rootNote);
const usePowerChord = flip(0.7);
const chromaticRun = flip(0.2);
const chromaticOffset = chromaticRun ? rndInt(4) - 2 : 0;

pattern.push({
note: usePowerChord ? choose(powerChordNotes) + chromaticOffset : rootNote + chromaticOffset,
vel: 1,
fx: {
alternatePicking: flip(0.8) ? rndBetween(0.5, 1) : 0,
},
});
}
return pattern;
}

function sweepArpeggios(context) {
const octave = choose([0, 12, 24]);
const pattern = [];
for(let i = 0; i < PatternSize; i++) {
const chord = getChord(context, i);
const rootNote = chord[0] + octave;
const powerChordNotes = powerChord(rootNote);
const usePowerChord = flip(0.9);

pattern.push({
note: usePowerChord ? choose(powerChordNotes) : rootNote,
vel: 1,
fx: {
sweepArpeggio: flip(0.5) ? rndBetween(0.5, 1) : 0,
},
});
}
return pattern;
}

function harmonics(context) {
const octave = choose([0, 12, 24]);
const pattern = [];
for(let i = 0; i < PatternSize; i++) {
const chord = getChord(context, i);
const rootNote = chord[0] + octave;
const powerChordNotes = powerChord(rootNote);
const usePowerChord = flip(0.7);

pattern.push({
note: usePowerChord ? choose(powerChordNotes) : rootNote,
vel: 1,
fx: {
harmonic: flip(0.2) ? rndBetween(0.5, 1) : 0,
},
});
}
return pattern;
}

function sliding(context) {
const octave = choose([0, 12, 24]);
const pattern = [];
for(let i = 0; i < PatternSize; i++) {
const chord = getChord(context, i);
const rootNote = chord[0] + octave;
const powerChordNotes = powerChord(rootNote);
const usePowerChord = flip(0.7);

pattern.push({
note: usePowerChord ? choose(powerChordNotes) : rootNote,
vel: 1,
fx: {
sliding: flip(0.4) ? rndBetween(0.5, 1) : 0,
},
});
}
return pattern;
}

function dimebagWhammy(context) {
const octave = choose([0, 12, 24]);
const pattern = [];
for(let i = 0; i < PatternSize; i++) {
const chord = getChord(context, i);
const rootNote = chord[0] + octave;
const powerChordNotes = powerChord(rootNote);
const usePowerChord = flip(0.7);

pattern.push({
note: usePowerChord ? choose(powerChordNotes) : rootNote,
vel: 1,
fx: {
dimebagWhammy: flip(0.15) ? rndBetween(0.5, 1) : 0,
},
});
}
return pattern;
}

function emptyNote() {
return fill(PatternSize, _ => ({
note: '---'
}));
}

function emptyDrum() {
return fill(PatternSize, _ => ({
drum: '---'
}));
}


function metalDrum() {
return fill(PatternSize, i => ({
drum: i % 8 === 0 ? 'KCK' : i % 8 === 4 ? 'SNR' : (i % 2 === 0 && flip(0.8)) ? 'KCK' : flip(0.3) ? choose(['KCK', 'SNR']) : 'NSS',
vel: 0.6 + 0.2 * (1 - (i % 2)),
doubleBass: i % 4 === 2 ? 'KCK' : '---',
}));
}

function aggressiveMetalDrum() {
return fill(PatternSize, i => ({
drum: i % 8 === 0 ? 'KCK' : i % 8 === 4 ? 'SNR' : (i % 2 === 0 && flip(0.85)) ? 'KCK' : flip(0.35) ? choose(['KCK', 'SNR', 'CYM']) : 'NSS',
vel: 0.6 + 0.2 * (1 - (i % 2)),
doubleBass: i % 2 === 0 || flip(0.6) ? 'KCK' : '---',
fill: i % 16 === 15 ? choose(['SDR', 'CYM', 'FTM']) : '---',
}));
}

function blastBeatDrum() {
return fill(PatternSize, i => ({
drum: i % 2 === 0 ? 'KCK' : 'SNR',
vel: 0.6 + 0.2 * (1 - (i % 2)),
doubleBass: '---',
}));
}

function breakdownDrum() {
return fill(PatternSize, i => ({
drum: i % 8 === 0 ? 'KCK' : i % 8 === 4 ? 'SNR' : (i % 4 === 0 && flip(0.4)) ? 'CYM' : (i % 4 === 2 && flip(0.3)) ? 'FTM' : 'NSS',
vel: 0.6 + 0.2 * (1 - (i % 2)),
doubleBass: i % 8 === 0 ? 'KCK' : '---',
}));
}

const progressions = [
[1, 1, 6, 6, 4, 4, 5, 5, 3, 3, 4, 4, 5, 5, 6, 6],
[1, 1, 6, 6, 4, 4, 5, 5, 1, 1, 6, 6, 3, 3, 5, 5],
[4, 4, 5, 5, 1, 1, 1, 1, 5, 5, 6, 6, 1, 1, 1, 1],
[1, 1, 6, 6, 2, 2, 5, 5, 1, 1, 6, 6, 2, 2, 5, 5],
[5, 5, 1, 1, 6, 6, 4, 4, 5, 5, 1, 1, 6, 6, 4, 4],
[1, 1, 4, 4, 5, 5, 1, 1, 6, 6, 4, 4, 5, 5, 1, 1],
[5, 5, 4, 4, 1, 1, 1, 1, 5, 5, 6, 6, 1, 1, 1, 1],
[5, 5, 6, 6, 2, 2, 4, 4, 5, 5, 6, 6, 2, 2, 4, 4],
[6, 6, 1, 1, 4, 4, 3, 3, 6, 6, 1, 1, 4, 4, 3, 3],
[4, 4, 1, 1, 5, 5, 6, 6, 4, 4, 1, 1, 5, 5, 6, 6],
[6, 6, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 5, 5, 5, 5],
[1, 1, 1, 1, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5],
[6, 6, 6, 6, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 5, 5],
[1, 1, 4, 4, 6, 6, 5, 5, 1, 1, 4, 4, 6, 6, 5, 5],
[1, 1, 6, 6, 4, 4, 5, 5, 1, 1, 6, 6, 4, 4, 5, 5],
[1, 1, 6, 6, 5, 5, 4, 4, 1, 1, 6, 6, 5, 5, 4, 4],
[1, 1, 4, 4, 6, 6, 2, 2, 1, 1, 4, 4, 6, 6, 2, 2]
];

function bpmClock() {
let intervalHandle = {
bpmClock: 0
};
let fN = 0;

function set(bpm, frameFunction) {
window.clearInterval(intervalHandle.bpmClock);
intervalHandle.bpmClock = window.setInterval(() => frameFunction(fN++), (60000 / bpm) / 4);
}

function stop() {
window.clearInterval(intervalHandle.bpmClock);
}
return {
set,
stop
}
}

function mutateState(state) {
state.songIndex++;
if(state.songIndex % 8 === 0) {
state.bpm = rndInt(40) + 110;
}
if(state.songIndex % 4 === 0) {
[state.key, state.scale] = modulate(state.key, state.scale);
}
if(state.songIndex % 2 === 0) {
state.progression = choose(progressions);
}
state.seedCode = hex(rndInt(255)) + hex(rndInt(255)) + hex(rndInt(255)) + hex(rndInt(255));
seedRNG(state.seedCode);

}

let trackControl;

function genTrack() {
const seedOrSave = Math.random().toString();
const state = createInitialState(seedOrSave);

let patterns = [
[],
[],
[],
[],
[]
];

const clock = bpmClock();

const ctx = new(window.AudioContext || window.webkitAudioContext)();
const au = Audio(ctx);

const synths = [
au.SquareSynth(),
au.SquareSynth(-0.5),
au.SquareSynth(),
au.SquareSynth(0.5),
au.DrumSynth()
];

function newPatterns() {
seedRNG(state.seedCode);
patterns = [
choose([bass, bass2, emptyNote])(state),
rnd() < 0.80 ? choose([riff, aggressiveRiff, tremoloRiff, gallopRhythm, chuggingRhythm, alternatePicking, sweepArpeggios, harmonics, sliding, dimebagWhammy, aggressiveRiff, riff])(state) : emptyNote(),
rnd() < 0.80 ? choose([riff, aggressiveRiff, tremoloRiff, gallopRhythm, chuggingRhythm, alternatePicking, sweepArpeggios, harmonics, sliding, dimebagWhammy, aggressiveRiff, riff])(state) : epicMetalSolo(state),
choose([emptyNote, riff, emptyNote, tremoloRiff, emptyNote, aggressiveRiff, emptyNote, harmonics, emptyNote, sliding])(state),
rnd() < 0.90 ? choose([metalDrum, aggressiveMetalDrum, breakdownDrum, metalDrum, aggressiveMetalDrum, breakdownDrum, metalDrum, aggressiveMetalDrum, blastBeatDrum, breakdownDrum, metalDrum, aggressiveMetalDrum, breakdownDrum, metalDrum, aggressiveMetalDrum, breakdownDrum])(state) : emptyNote(),
];
}

function frame(f) {
const positionInPattern = f % PatternSize;
if(f % 128 === 0 && f !== 0) {
mutateState(state);
newPatterns();
clock.set(state.bpm, frame);

console.log(patterns);
console.log(state);
console.log(save(state));
}
synths[0].play(patterns[0][positionInPattern]);
synths[1].play(patterns[1][positionInPattern]);
synths[2].play(patterns[2][positionInPattern]);
synths[3].play(patterns[3][positionInPattern]);
synths[4].play(patterns[4][positionInPattern]);
}

function stop() {
synths.forEach(synth => synth.stop());
clock.stop();
ctx.close();
return;
}

function changeVolume(volume) {
au.setVolume(volume);
}

newPatterns();
clock.set(state.bpm, frame);

console.log(patterns);
console.log(state);
console.log(save(state));

return {
stop,
changeVolume
}
}

function playEffect(effect) {
const clock = bpmClock();
const ctx = new(window.AudioContext || window.webkitAudioContext)();
const au = Audio(ctx);
au.setVolume(settings.effectVolume);

const synths = [
au.SquareSynth(),
au.SquareSynth(-0.5),
au.SquareSynth(0.5)
];

function noteToMidi(note) {
const octave = parseInt(note.slice(-1));
const pitchClass = note.slice(0, -1);
const pitchClassToNumber = {
"C": 0,
"C#": 1,
"D": 2,
"D#": 3,
"E": 4,
"F": 5,
"F#": 6,
"G": 7,
"G#": 8,
"A": 9,
"A#": 10,
"B": 11
};
return 12 * octave + pitchClassToNumber[pitchClass];
}

const pattern = effect.notes.map(note => ({
note: note === "---" ? "---" : noteToMidi(note)
}));

function frame(f) {
const positionInPattern = f % pattern.length;
if(f === pattern.length) {
synths.forEach(synth => synth.stop());
setTimeout(() => {
ctx.close();
clock.stop();
}, 60 / effect.bpm * 1000);
return;
}
au.setVolume(settings.effectVolume);
synths.forEach((synth, i) => {
synth.play(pattern[positionInPattern]);
});
}
clock.set(effect.bpm, frame);
}


// start of save/load
function hex(v) {
return Math.floor(v).toString(16).toUpperCase().padStart(2, '0');
}

function unhex(v) {
return parseInt(v, 16);
}

function save(state) {
const nonRandomElements = [
state.key,
Object.keys(scales).indexOf(Object.keys(scales).find(key => scales[key] === state.scale)),
progressions.indexOf(state.progression),
state.bpm,
state.songIndex % 256
];
const saveCode = "0x" + nonRandomElements.map(hex).join("") + state.seedCode;
return saveCode;
}

function restore(code) {
const codeString = code.slice(2);
const key = unhex(codeString.slice(0, 2));
const scale = scales[Object.keys(scales)[unhex(codeString.slice(2, 4))]];
const progression = progressions[unhex(codeString.slice(4, 6))];
const bpm = unhex(codeString.slice(6, 8));
const songIndex = unhex(codeString.slice(8, 10));
const seedCode = codeString.slice(10);
return {
bpm,
key,
progression,
scale,
seedCode,
songIndex
};
}

function createInitialState(seedOrSave) {
if(seedOrSave.startsWith("0x")) {
return restore(seedOrSave);
} else {
const seed = (seedOrSave && seedOrSave.length > 0) ? seedOrSave : "" + rnd();
seedRNG(seed);

return {
key: rndInt(12),
scale: chooseRandomScale(),
progression: progressions[rndInt(12)],
bpm: rndInt(40) + 110,
seedCode: createSeedCode(),
songIndex: 0
};
}
}

function createSeedCode() {
return hex(rndInt(255)) + hex(rndInt(255)) + hex(rndInt(255)) + hex(rndInt(255));
}
// end of save/load

//beginning of audio
const A3Frequency = 440;
const A0Frequency = A3Frequency / 8;

function Audio(ctx) {
const globalGain = gainNode();
globalGain.connect(ctx.destination);

function setVolume(value) {
globalGain.gain.setValueAtTime(value, ctx.currentTime);
}

function oscillatorNode(type, freq = 440) {
const node = ctx.createOscillator();
node.type = type;
node.frequency.value = freq;
return node;
}

function waveShaperNode(curve) {
const node = ctx.createWaveShaper();
node.curve = new Float32Array(curve);
return node;
}

function gainNode(gainAmount = 0) {
const node = ctx.createGain();
node.gain.value = gainAmount;
return node;
}

function stereoPannerNode(pan) {
if(ctx.createStereoPanner) {
const node = ctx.createStereoPanner();
node.pan.value = pan;
return node;
} else {
const node = ctx.createPanner();
node.panningModel = "equalpower";
node.setPosition(pan, 0, 0.5);
node.pan = node.positionX;
return node;
}
}

function SquareSynth(pan = 0) {
const set = (a, v) => {
a.cancelScheduledValues(ctx.currentTime);
a.setValueAtTime(v, ctx.currentTime);
};
const towards = (a, v, t) => {
a.setTargetAtTime(t, ctx.currentTime, t)
};
const slide = (a, v, t) => {
a.cancelScheduledValues(ctx.currentTime);
a.setTargetAtTime(v, ctx.currentTime, t)
};

const wavetableTrigger = oscillatorNode("sawtooth"),
pulseWavetable = waveShaperNode(new Float32Array(256).fill(-1, 0, 128).fill(1, 128, 256)),
alwaysOneWavetable = waveShaperNode(new Float32Array(2).fill(1, 0, 2)),
wavetableOffsetGain = gainNode(),
pulseOutputGain = gainNode(),
outputPanner = stereoPannerNode(pan);
wavetableTrigger.start();
wavetableTrigger.connect(pulseWavetable);
wavetableTrigger.connect(alwaysOneWavetable);
alwaysOneWavetable.connect(wavetableOffsetGain);
wavetableOffsetGain.connect(pulseWavetable);
pulseWavetable.connect(pulseOutputGain);
pulseOutputGain.connect(outputPanner);
outputPanner.connect(globalGain);

const freq = wavetableTrigger.frequency,
width = wavetableOffsetGain.gain,
gain = pulseOutputGain.gain;

const decay = 0.04,
sustain = 0.7,
release = 0.01,
level = 0.1;

function noteOn(note, glide = 0) {
const glideTime = glide / 10;
slide(freq, A0Frequency * 2 ** (note / 12), glideTime);
set(gain, level);
towards(gain, level * sustain, decay);
}

function noteOff() {
slide(gain, 0, release);
}

function play(note) {
if(note.note === "---") {
noteOff();
} else if(note.note === 'cont') {
// do nothing
} else {
noteOn(note.note, note.fx ? note.fx.glide : undefined);
}
set(width, note.fx ? (note.fx.pulseWidth || 0.0) : 0.0);
}

function stop() {
const releaseTime = 0.01;
gain.cancelScheduledValues(ctx.currentTime);
gain.setTargetAtTime(0, ctx.currentTime, releaseTime);
setTimeout(() => {
outputPanner.disconnect();
}, releaseTime * 1000);
}
return {
play,
stop
}
}

function DrumSynth() {
const toneOscillator = oscillatorNode("square", 55),
toneGain = gainNode(),
noiseWavetableTrigger = oscillatorNode("sawtooth", 20),
noiseWavetable = waveShaperNode(fill(1024, x => rnd() * 2 - 1)),
noiseGain = gainNode(),
noisePan = stereoPannerNode(0);

toneOscillator.start();
noiseWavetableTrigger.start();

toneOscillator.connect(toneGain);
toneGain.connect(globalGain);

noiseWavetableTrigger.connect(noiseWavetable);
noiseWavetable.connect(noiseGain);
noiseGain.connect(noisePan);
noisePan.connect(globalGain);

function play(slot) {
const vel = slot.vel ? slot.vel : 1;
if(slot.drum === 'KCK') {
toneOscillator.detune.cancelScheduledValues(ctx.currentTime);
toneOscillator.detune.setValueAtTime(3000, ctx.currentTime);
toneOscillator.detune.setTargetAtTime(0, ctx.currentTime, 0.07);
toneGain.gain.cancelScheduledValues(ctx.currentTime);
toneGain.gain.setValueAtTime(0.2 * vel, ctx.currentTime);
toneGain.gain.setValueCurveAtTime(new Float32Array([0.2 * vel, 0.2 * vel, 0.13 * vel, 0.05 * vel, 0.0]), ctx.currentTime, 0.10);
} else if(slot.drum === 'NSS') {
noiseGain.gain.cancelScheduledValues(ctx.currentTime);
noiseGain.gain.setValueAtTime(0.1 * vel, ctx.currentTime);
noiseGain.gain.setValueCurveAtTime(new Float32Array([0.1 * vel, 0.04 * vel, 0.0]), ctx.currentTime, 0.08);

if("pan" in noisePan) {
noisePan.pan.cancelScheduledValues(ctx.currentTime);
noisePan.pan.setValueAtTime(rnd() * 0.4 - 0.2, ctx.currentTime);
}
} else if(slot.drum === 'SNR') {
toneOscillator.detune.cancelScheduledValues(ctx.currentTime);
toneOscillator.detune.setValueAtTime(2400, ctx.currentTime);
toneOscillator.detune.setTargetAtTime(600, ctx.currentTime, 0.04);
toneGain.gain.cancelScheduledValues(ctx.currentTime);
toneGain.gain.setValueAtTime(0.15 * vel, ctx.currentTime);
toneGain.gain.setValueCurveAtTime(new Float32Array([0.2 * vel, 0.2 * vel, 0.13 * vel, 0.05 * vel, 0.0]), ctx.currentTime, 0.10);

noiseGain.gain.cancelScheduledValues(ctx.currentTime);
noiseGain.gain.setValueAtTime(0.2 * vel, ctx.currentTime);
noiseGain.gain.setValueCurveAtTime(new Float32Array([0.2 * vel, 0.15 * vel, 0.0]), ctx.currentTime, 0.15);
}
}

function stop() {
const releaseTime = 0.01;

toneGain.gain.cancelScheduledValues(ctx.currentTime);
toneGain.gain.setTargetAtTime(0, ctx.currentTime, releaseTime);
setTimeout(() => {
toneGain.disconnect();
}, releaseTime * 1000);
noiseGain.gain.cancelScheduledValues(ctx.currentTime);
noiseGain.gain.setTargetAtTime(0, ctx.currentTime, releaseTime);
setTimeout(() => {
noiseGain.disconnect();
}, releaseTime * 1000);
}
return {
play,
stop,
}
}
return {
SquareSynth,
DrumSynth,
setVolume
}
}
//end of audio

//start of settings
let settings = {
trackVolume: 0.5,
effectVolume: 0.5
};

function tglSet() {
const isSettingsOpen = settingsMenu.style.display === 'block';
settingsMenu.style.display = isSettingsOpen ? 'none' : 'block';
gameContainer.style.display = isSettingsOpen ? 'flex' : 'none';
}

function updateVolume(volumeType, volume) {
settings[volumeType] = parseFloat(volume.target.value) / 100;

updateSliderValues();
saveSettings();
}

function setSliderPositions() {
trackVolume.value = settings.trackVolume * 100;
effectVolume.value = settings.effectVolume * 100;
}

function updateSliderValues() {
trackVolumeValue.textContent = `${trackVolume.value}%`;
effectVolumeValue.textContent = `${effectVolume.value}%`;
}

function saveSettings() {
localStorage.setItem('SerRat&ChatGPTsEndlessTextBasedRPG.settings', JSON.stringify(settings));
}

function loadSettings() {
const storedSettings = localStorage.getItem('SerRat&ChatGPTsEndlessTextBasedRPG.settings');
if(storedSettings) {
settings = JSON.parse(storedSettings);
}
setSliderPositions();
updateSliderValues();
}
//end of settings

function startGame() {
titleScreen.style.display = 'none';
gameContainer.style.display = 'flex';
loadSettings();
trackControl = genTrack();
trackControl.changeVolume(settings.trackVolume);

if(localStorage.getItem('SerRat&ChatGPTsEndlessTextBasedRPG.save') != null) {
loadGame();
ui._updateBossButton();
} else {
playerData = defaultPlayerData;

enemyLogic._generateEnemies();
ui._updateEnemyStats(null);
ui._printMessage(ui._randomDialogue('startGame'), true);
}

altarTimer();
}

startBtn.onclick = startGame;
exploreBtn.onclick = explore;
usePotBtn.onclick = () => {
usePot();
};
maxPotionsBtn.onclick = () => {
usePot(true);
};
shopBtn.onclick = tglShop;
closeShopBtn.onclick = tglShop;
buyWeaponBtn.onclick = () => {
buyItem('weapon')
};
buyArmorBtn.onclick = () => {
buyItem('armor')
};
buyPotionBtn.onclick = () => {
buyPots();
};
buyMaxPotionsBtn.onclick = () => {
buyPots(true);
};
fightBossBtn.onclick = fightFloorBoss;
altarBtn.onclick = toggleAltar;
closeAltarBtn.onclick = toggleAltar;
claimBonesBtn.onclick = altarClaim;

legendsBtn.onclick = toggleLegendsMenu;
closeLegendsBtn.onclick = toggleLegendsMenu;

saveBtn.onclick = () => {
saveGame(false);
};
loadBtn.onclick = loadGame;
exportBtn.onclick = exportSave;
importBtn.onclick = triggerFileInput;
fileInput.onchange = importSave;
resetSaveBtn.onclick = resetSaveData;

settingsBtn.onclick = tglSet;
closeSettingsBtn.onclick = tglSet;
trackVolume.oninput = (event) => {
updateVolume('trackVolume', event);
if(trackControl) {
trackControl.changeVolume(settings.trackVolume);
}
};
effectVolume.oninput = (event) => updateVolume('effectVolume', event);