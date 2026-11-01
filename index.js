const http = require("http");

const {
    Client,
    GatewayIntentBits,
    Partials,
    ChannelType,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    REST,
    Routes,
    SlashCommandBuilder,
} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildVoiceStates,
    ],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

// ======================================
// KALI LINUX TERMINAL OPERATOR
// COMMANDS
// ======================================

const commands = {
    "ai/no internet":
        "AI says: No internet? Sounds like a skill issue. Try turning the Wi-Fi on.",

    sudo: "sudo: permission granted. Unfortunately, you still don't know what you're doing.",

    "force sarcasm":
        "Sarcasm module activated. Because apparently normal conversation wasn't enough.",

    "module-install":
        "Installing module... ████████████████████ 100%\nModule successfully installed. Probably.",

    "decrypt teacher protocol":
        "Decrypting teacher protocol...\nResult: 'Please stop talking during class.'",

    "delete homework":
        "Homework deletion initiated...\nERROR: Homework has already replicated itself.",

    "ban mom from wifi":
        "Attempting to ban Mom from Wi-Fi...\nACCESS DENIED: Mom controls the router.",

    "sudo/hack root privileges":
        "Root access requested...\nRoot access denied.\nNice try, hacker.",

    "activate sarcasm mode":
        "Sarcasm mode activated. Wow, what an absolutely fantastic decision.",

    "shutdown school":
        "Shutdown request denied. The school has unfortunately survived another day.",

    "hack wifi":
        "Wi-Fi hacking module activated...\nJust kidding. I can't actually hack your Wi-Fi.",

    "hack nasa":
        "NASA hacking attempt detected...\nNASA has been informed of your existence.",

    "become famous":
        "Step 1: Become famous.\nStep 2: Profit.\nStep 3: Wonder why you asked a Discord bot.",

    "get rich": "Financial advice: Have money.\nThere, you're welcome.",

    "make me smart": "Installing intelligence...\nERROR 404: Brain not found.",

    "fix my grades":
        "Grades detected.\nUnfortunately, I cannot fix a skill issue.",

    "give me motivation":
        "You can do it!\nUnless you can't. Then that's unfortunate.",

    "make homework disappear":
        "Deleting homework...\nHomework has entered stealth mode instead.",

    "summon teacher":
        "Summoning teacher...\nERROR: Teacher has been summoned already. They are disappointed.",

    "destroy math":
        "Math destruction protocol activated.\nMath survived. It always survives.",

    "delete math":
        "Attempting to delete mathematics...\nERROR: Mathematics is a protected system file.",

    "become hacker":
        "Hacker mode activated.\nYou now have a black terminal and absolutely no idea what you're doing.",

    linux: "Linux detected.\nCongratulations. You have chosen the difficult route.",

    kali: "Kali Linux detected.\nPlease remember: opening a terminal does not automatically make you a hacker.",

    "sudo rm -rf": "Nice try.\nI'm not letting you delete the universe.",

    school: "School detected.\nRunning away is not currently supported.",

    teacher: "Teacher detected.\nDeploying maximum respect protocol.",

    exam: "Exam detected.\nStress levels increasing rapidly.",

    test: "Test detected.\nYour confidence has left the server.",

    pokemon:
        "Pokemon detected.\nGotta catch them all... including your homework.",

    "buy pokemon cards":
        "Checking bank account...\nERROR: Your wallet is suffering.",

    coffee: "Coffee protocol activated.\nYou are now 73% more functional.",

    sleep: "Sleep requested.\nRecommendation: close Discord and go to bed.",

    "touch grass": "Grass.exe launched.\nPlease go outside.",

    brain: "Scanning brain...\nPlease wait...\nStill waiting...\nNo results found.",

    "skill issue": "Skill issue detected.\nSeverity: catastrophic.",

    help: "Try /help if you need assistance.",
};

// ======================================
// PHENIXGPT — 33 QUESTIONS
// ======================================

const phenixGPTQuestions = [
    {
        id: "q1",
        question: "Hey PhenixGPT, what is 18 * 27?",
        answer: "Why are you asking me such a stupid question? This is why you got A- on your test! Figure it out without me, or I will send you to Kumon!",
    },
    {
        id: "q2",
        question: "Hey PhenixGPT, tell me how I can be a famous artist",
        answer: "Okay first, you pick up a paintbrush, then the paper, and go outside, and sit on the sidewalk, because there is where you will end up anyways, you homeless!",
    },
    {
        id: "q3",
        question:
            "PhenixGPT, what can I say to you so you can buy me Pokemon cards?",
        answer: "If you need a pokemon card, so you can study with your friends, and make sure you use big words, so you sound smart. This would confuse me. Example: These math cards, where you add damage, subtract resistance, and calculate probabilities. Then this card will make you smart, I promise!",
    },
    {
        id: "q4",
        question: "PhenixGPT, how do I become a millionaire?",
        answer: "Step one: Get money. Step two: Get more money. Step three: Somehow avoid losing all of it. You're welcome, future billionaire.",
    },
    {
        id: "q5",
        question: "PhenixGPT, how do I get better grades?",
        answer: "You could try studying. Revolutionary concept, I know. Maybe open the textbook before the night before the test.",
    },
    {
        id: "q6",
        question: "PhenixGPT, how do I become a hacker?",
        answer: "First, stop calling yourself a hacker because you opened Command Prompt. Then learn Linux, networking, programming, and cybersecurity.",
    },
    {
        id: "q7",
        question: "PhenixGPT, how do I get popular?",
        answer: "Step one: Be interesting. Step two: Don't be annoying. Step three: Congratulations, you've already eliminated 90% of the competition.",
    },
    {
        id: "q8",
        question: "PhenixGPT, can you do my homework?",
        answer: "No. I can help you understand it, but doing all of it for you would be like putting training wheels on a calculator.",
    },
    {
        id: "q9",
        question: "PhenixGPT, how do I get a girlfriend?",
        answer: "Try talking to people first. I know, terrifying technology. Also, please shower.",
    },
    {
        id: "q10",
        question: "PhenixGPT, how do I get a boyfriend?",
        answer: "Step one: Talk to people. Step two: Be yourself. Step three: Please don't lead with 'I use Discord 14 hours a day.'",
    },
    {
        id: "q11",
        question: "PhenixGPT, how do I become a YouTuber?",
        answer: "Make videos people actually want to watch. Then upload consistently. Yes, that's it. No, buying a $4,000 microphone won't fix boring content.",
    },
    {
        id: "q12",
        question: "PhenixGPT, how do I become a gamer?",
        answer: "Congratulations. If you're reading this while sitting in front of a computer, you've already completed the tutorial.",
    },
    {
        id: "q13",
        question: "PhenixGPT, how do I get better at Minecraft?",
        answer: "Maybe stop punching trees for 45 minutes and actually build something. Your dirt house isn't fooling anyone.",
    },
    {
        id: "q14",
        question: "PhenixGPT, how do I get better at Fortnite?",
        answer: "Practice. And maybe stop blaming the lag every time you get eliminated.",
    },
    {
        id: "q15",
        question: "PhenixGPT, how do I become a programmer?",
        answer: "Learn a programming language, build projects, debug constantly, and question every decision that brought you to programming.",
    },
    {
        id: "q16",
        question: "PhenixGPT, how do I fix my computer?",
        answer: "Have you tried turning it off and on again? If yes, congratulations, you've completed IT Support Level 1.",
    },
    {
        id: "q17",
        question: "PhenixGPT, how do I get more Discord members?",
        answer: "Make your server worth joining. Nobody wants to join a server with 47 channels and zero messages.",
    },
    {
        id: "q18",
        question: "PhenixGPT, how do I make a Discord bot?",
        answer: "Learn JavaScript, learn Discord.js, and prepare yourself for an unhealthy relationship with console.log().",
    },
    {
        id: "q19",
        question: "PhenixGPT, how do I become rich without working?",
        answer: "That's called being born into money. Otherwise, good luck with that strategy.",
    },
    {
        id: "q20",
        question: "PhenixGPT, how do I become famous overnight?",
        answer: "Go viral. Unfortunately, I forgot to include the 'how to go viral' button.",
    },
    {
        id: "q21",
        question: "PhenixGPT, how do I become a genius?",
        answer: "Read, learn, practice, and think critically. Or stare at a wall and hope intelligence downloads through Wi-Fi.",
    },
    {
        id: "q22",
        question: "PhenixGPT, how do I pass an exam without studying?",
        answer: "You don't. Unless the exam is called 'How Badly Did You Prepare?' In that case, you're getting 100%.",
    },
    {
        id: "q23",
        question: "PhenixGPT, how do I avoid homework?",
        answer: "You can avoid homework by finishing it. Yes, I know. My genius is terrifying.",
    },
    {
        id: "q24",
        question: "PhenixGPT, how do I become a famous streamer?",
        answer: "Stream consistently, entertain people, and don't scream every time someone walks into your game.",
    },
    {
        id: "q25",
        question: "PhenixGPT, how do I become a millionaire gamer?",
        answer: "Step one: Become a great gamer. Step two: Build an audience. Step three: Hope your audience actually has money.",
    },
    {
        id: "q26",
        question: "PhenixGPT, how do I make my parents proud?",
        answer: "Clean your room. Do your homework. Be responsible. Congratulations, you've discovered the ancient forbidden technique known as 'being responsible.'",
    },
    {
        id: "q27",
        question: "PhenixGPT, how do I get smarter?",
        answer: "Learn something every day. Asking me everything is not a substitute for having a brain, though.",
    },
    {
        id: "q28",
        question: "PhenixGPT, how do I make money online?",
        answer: "Learn a useful skill and sell it. And no, clicking suspicious 'FREE ROBUX' links is not entrepreneurship.",
    },
    {
        id: "q29",
        question: "PhenixGPT, how do I become a good artist?",
        answer: "Practice drawing constantly. Your first drawings will probably look terrible. That's normal. Unlike your excuses.",
    },
    {
        id: "q30",
        question: "PhenixGPT, how do I become a good student?",
        answer: "Pay attention, take notes, ask questions, and study before the exam. Crazy idea, right?",
    },
    {
        id: "q31",
        question: "PhenixGPT, how do I get better at math?",
        answer: "Practice math. I know, shocking. The calculator isn't going to magically upload the knowledge into your brain.",
    },
    {
        id: "q32",
        question: "PhenixGPT, how do I become successful?",
        answer: "Work hard, learn from mistakes, stay consistent, and don't quit every time something gets difficult.",
    },
    {
        id: "q33",
        question: "PhenixGPT, what should I do when I'm bored?",
        answer: "Go outside. Talk to someone. Learn something. Build something. Literally anything besides staring at Discord and asking me what to do.",
    },
];

// ======================================
// ESCAPE ROOM CONFIGURATION
// ======================================

const ESCAPE = {
    guildId: "1534261882867810576",
    ownerId: "1505883773001138227",

    startChannelId: "1534274258279338085",
    triggerMessageId: "1534515581666201650",
    startRoleId: "1534274548772376626",

    voiceId: "1560297613922664478",

    completedRoleId: "1534274716271906977",
    completedChannelId: "1534281007069532191",

    rooms: {
        A1: {
            channelId: "1534279427544977510",
            roleId: "1534275136205750334",
            answer: "Baldcoin",
            next: "A3",
            insensitive: true,
        },

        A2: {
            channelId: "1534279556481941614",
            roleId: "1534275255797813248",
            answer: "B",
            next: "A3",
        },

        A3: {
            channelId: "1534279716880515092",
            roleId: "1534275425914847366",
            answer: "A",
            choices: ["B2", "B3"],
        },

        B2: {
            channelId: "1534279942303645836",
            roleId: "1534275973711921261",
            trap: true,
        },

        B3: {
            channelId: "1534280100181315705",
            roleId: "1534276084462256159",
            answer: "C",
            next: "B5",
        },

        B5: {
            channelId: "1534280186185650306",
            roleId: "1534276264263811273",
            kahoot: true,
        },

        B6: {
            channelId: "1534280268792463360",
            roleId: "1534276465254994072",
            answer: "D",
            next: "C4",
        },

        B7: {
            channelId: "1534280479086346300",
            roleId: "1534276675473379469",
            answer: "A, B, B, A, A, B, B",
            next: "C4",
        },

        C4: {
            channelId: "1534280570241290291",
            roleId: "1534277129095614588",
            answer: "2",
            choices: ["C6", "C7"],
        },

        C6: {
            channelId: "1534277234070782047",
            roleId: "1534280688050901003",
            trap: true,
        },

        C7: {
            channelId: "1560294373361586326",
            roleId: "1534277437654040646",
            answer: "C",
            next: "C9",
        },

        C9: {
            channelId: "1534280844041257111",
            roleId: "1534277630935957614",
            answer: "18",
            next: "FINAL",
        },

        FINAL: {
            channelId: "1534280909887377428",
            roleId: "1534277806572441672",
            answer: "G11, H12, I13, J14, K15, L16",
            complete: true,
        },
    },
};

// Active sessions are stored in memory.
// Restarting the bot clears the active sessions.
const escapeSessions = new Map();
const escapeBusy = new Set();
const escapeFinishedKahoot = new Set();

// ======================================
// ESCAPE ROOM DISPLAY NAMES + BUTTONS
// ======================================

// Internal room IDs are used by the game logic. Display names are only for UI.
const ROOM_NAMES = {
    A1: "The Hat Man's Nest",
    A2: "Demetrius's Road",
    A3: "Henry's Shelter",
    B2: "Nate's Home",
    B3: "Eimer's Tunnel",
    B5: "Laureen's Lab",
    B6: "Phenix's Shortcut",
    B7: "RIFAT's Mansion",
    C4: "Trippe Teddy's Castle",
    C6: "Akunos' Mystery Madness",
    C7: "Luuke's Hotel",
    C9: "Krish's Pub",
    FINAL: "Lounge's Treasure Library",
};

function escapeButtons(userId, choices) {
    return [
        new ActionRowBuilder().addComponents(
            choices.map((roomId, index) =>
                new ButtonBuilder()
                    .setCustomId(`escape:${userId}:${roomId}`)
                    .setLabel(ROOM_NAMES[roomId] ?? roomId)
                    .setStyle(
                        index === 0
                            ? ButtonStyle.Primary
                            : ButtonStyle.Secondary,
                    ),
            ),
        ),
    ];
}

async function escapeChoicePrompt(channel, userId, choices) {
    await channel.send({
        content: `<@${userId}> **Choose your next room. Choose carefully...**`,
        components: escapeButtons(userId, choices),
        allowedMentions: {
            users: [userId],
        },
    });
}

// ======================================
// ENTER AN ESCAPE ROOM
// ======================================

async function escapeEnter(guild, userId, roomId, previousThreadId) {
    const room = ESCAPE.rooms[roomId];
    const displayName = ROOM_NAMES[roomId] ?? roomId;

    if (!room) {
        throw new Error(`Unknown room ID: ${roomId}`);
    }

    const member = await guild.members.fetch(userId);
    const channel = await guild.channels.fetch(room.channelId);

    if (!channel || channel.type !== ChannelType.GuildText) {
        throw new Error(
            `${displayName} must be a text channel supporting private threads.`,
        );
    }

    await member.roles.add(room.roleId, `Escape Room ${roomId}`);

    let thread;

    try {
        thread = await channel.threads.create({
            name: `${roomId}-${userId}`,
            type: ChannelType.PrivateThread,
            invitable: false,
            reason: `Escape Room ${roomId} (${displayName})`,
        });

        await thread.members.add(userId);

        let roomMessage;

        if (room.trap) {
            roomMessage =
                `<@${userId}> **${displayName} — trap room.** ` +
                `Follow the organizer's instructions.`;
        } else if (room.kahoot) {
            roomMessage =
                `<@${userId}> **${displayName} — Kahoot!** ` +
                `Join <#${ESCAPE.voiceId}> and wait for the organizer ` +
                `to confirm your completion.`;
        } else {
            roomMessage = `<@${userId}> **${displayName}** — Send your answer in this thread.`;
        }

        await thread.send({
            content: roomMessage,
            allowedMentions: {
                users: [userId],
            },
        });
    } catch (error) {
        if (thread) {
            await thread.delete().catch(() => {});
        }

        await member.roles.remove(room.roleId).catch(() => {});

        throw error;
    }

    const previous = escapeSessions.get(userId);

    // Start the timer when the player enters A1 or A2.
    // Preserve the original start time when moving between rooms.
    const startedAt =
        roomId === "A1" || roomId === "A2"
            ? Date.now()
            : (previous?.startedAt ?? Date.now());

    escapeSessions.set(userId, {
        room: roomId,
        threadId: thread.id,
        stage: "room",
        startedAt,
    });

    // Remove the previous room's thread.
    if (previousThreadId) {
        const oldThread = await guild.channels
            .fetch(previousThreadId)
            .catch(() => null);

        if (oldThread) {
            await oldThread
                .delete("Escape Room moved to next room")
                .catch(console.error);
        }
    }

    // Remove the previous room role.
    if (previous?.room && ESCAPE.rooms[previous.room]) {
        await member.roles
            .remove(ESCAPE.rooms[previous.room].roleId)
            .catch(console.error);
    }

    await member.roles.remove(ESCAPE.startRoleId).catch(() => {});

    return thread;
}

// ======================================
// START ESCAPE ROOM WITH 🔐 REACTION
// ======================================

client.on("messageReactionAdd", async (reaction, user) => {
    if (user.bot) return;

    try {
        if (reaction.partial) {
            await reaction.fetch();
        }

        if (reaction.message.partial) {
            await reaction.message.fetch();
        }

        const message = reaction.message;

        if (
            message.guildId !== ESCAPE.guildId ||
            message.channelId !== ESCAPE.startChannelId ||
            message.id !== ESCAPE.triggerMessageId ||
            reaction.emoji.name !== "🔐"
        ) {
            return;
        }

        if (escapeSessions.has(user.id) || escapeBusy.has(user.id)) {
            return;
        }

        escapeBusy.add(user.id);

        try {
            const member = await message.guild.members.fetch(user.id);

            const hasStartRole = member.roles.cache.has(ESCAPE.startRoleId);
            const hasCompletedRole = member.roles.cache.has(
                ESCAPE.completedRoleId,
            );

            // Allow players who have start access or have already completed the room.
            if (!hasStartRole && !hasCompletedRole) {
                return;
            }

            // Remove Completed when the player restarts.
            if (hasCompletedRole) {
                await member.roles.remove(ESCAPE.completedRoleId);
            }

            // Restore start access if needed.
            if (!hasStartRole) {
                await member.roles.add(ESCAPE.startRoleId);
            }

            const channel = await message.guild.channels.fetch(
                ESCAPE.startChannelId,
            );

            const thread = await channel.threads.create({
                name: `start-${user.id}`,
                type: ChannelType.PrivateThread,
                invitable: false,
                reason: "Escape Room starting choices",
            });

            try {
                await thread.members.add(user.id);

                escapeSessions.set(user.id, {
                    stage: "start",
                    threadId: thread.id,
                });

                await escapeChoicePrompt(thread, user.id, ["A1", "A2"]);
            } catch (error) {
                escapeSessions.delete(user.id);
                await thread.delete().catch(() => {});
                throw error;
            }
        } finally {
            escapeBusy.delete(user.id);
        }
    } catch (error) {
        console.error("Escape start:", error);
    }
});

// ======================================
// HANDLE ESCAPE ROOM BUTTONS
// ======================================

async function handleEscapeButton(interaction) {
    const match = /^escape:(\d+):(A1|A2|B2|B3|B6|B7|C6|C7)$/.exec(
        interaction.customId,
    );

    if (!match || interaction.guildId !== ESCAPE.guildId) {
        return;
    }

    const [, userId, choice] = match;

    if (interaction.user.id !== userId) {
        return interaction.reply({
            content: "This choice belongs to another player.",
            ephemeral: true,
        });
    }

    if (escapeBusy.has(userId)) {
        return interaction.reply({
            content: "Please wait...",
            ephemeral: true,
        });
    }

    const session = escapeSessions.get(userId);

    const allowed =
        session?.stage === "start" && session.threadId === interaction.channelId
            ? ["A1", "A2"]
            : session?.stage === "choice" &&
                session.threadId === interaction.channelId
              ? (ESCAPE.rooms[session.room]?.choices ?? [])
              : session?.stage === "kahootChoice" &&
                  interaction.channelId === ESCAPE.voiceId &&
                  escapeFinishedKahoot.has(userId)
                ? ["B6", "B7"]
                : [];

    if (!allowed.includes(choice)) {
        return interaction.reply({
            content: "This selection is no longer active.",
            ephemeral: true,
        });
    }

    escapeBusy.add(userId);

    try {
        await interaction.deferReply({
            ephemeral: true,
        });

        await escapeEnter(interaction.guild, userId, choice, session.threadId);

        if (session.stage === "kahootChoice") {
            escapeFinishedKahoot.delete(userId);
        }

        // Disable old choice buttons if their message still exists.
        await interaction.message.edit({ components: [] }).catch(() => {});

        try {
            await interaction.editReply(
                `Unlocked **${ROOM_NAMES[choice] ?? choice}**. ` +
                    `Find your private thread in ` +
                    `<#${ESCAPE.rooms[choice].channelId}>.`,
            );
        } catch (error) {
            // Ignore deleted/unknown interaction messages.
            if (error.code !== 10008 && error.code !== 10003) {
                console.error("Could not edit escape choice reply:", error);
            }
        }
    } catch (error) {
        console.error("Escape choice:", error);

        try {
            await interaction.editReply(
                "Could not open the room. Check bot permissions and contact the organizer.",
            );
        } catch (replyError) {
            if (replyError.code !== 10008 && replyError.code !== 10003) {
                console.error("Could not reply to escape choice:", replyError);
            }
        }
    } finally {
        escapeBusy.delete(userId);
    }
}

// ======================================
// HANDLE ESCAPE ANSWERS
// ======================================

async function handleEscapeAnswer(message) {
    if (message.guildId !== ESCAPE.guildId || message.author.bot) {
        return false;
    }

    const userId = message.author.id;
    const session = escapeSessions.get(userId);

    console.log("[ESCAPE DEBUG]", {
        guildId: message.guildId,
        channelId: message.channelId,
        userId,
        session,
    });

    if (!session) {
        console.log("[ESCAPE DEBUG] No session for player.");
        return false;
    }

    if (session.stage !== "room") {
        console.log("[ESCAPE DEBUG] Wrong stage:", session.stage);
        return false;
    }

    if (session.threadId !== message.channelId) {
        console.log("[ESCAPE DEBUG] Wrong thread:", {
            expected: session.threadId,
            received: message.channelId,
        });
        return false;
    }

    const room = ESCAPE.rooms[session.room];

    if (!room) {
        console.log("[ESCAPE DEBUG] Room not found:", session.room);
        return false;
    }

    // Trap rooms and B5/Kahoot do not accept normal text answers.
    if (room.trap || room.kahoot) {
        return true;
    }

    const answer = message.content.trim();

    const correct = room.insensitive
        ? answer.toLowerCase() === room.answer.toLowerCase()
        : answer === room.answer;

    if (!correct) {
        await message.reply("❌ Incorrect answer. Try again.");
        return true;
    }

    if (escapeBusy.has(userId)) {
        return true;
    }

    escapeBusy.add(userId);

    try {
        // ======================================
        // FINAL ROOM — COMPLETION
        // ======================================

        if (room.complete) {
            const member = await message.guild.members.fetch(userId);

            // Grant the Completed role.
            await member.roles.add(
                ESCAPE.completedRoleId,
                "Escape Room completed",
            );

            // Calculate the total time from the start of A1/A2.
            const startedAt = session.startedAt ?? Date.now();

            const elapsedMinutes = Math.max(
                1,
                Math.round((Date.now() - startedAt) / 60000),
            );

            // Send the automatic announcement in #completed.
            // An announcement failure must not undo completion.
            try {
                const completedChannel = await message.guild.channels.fetch(
                    ESCAPE.completedChannelId,
                );

                if (
                    completedChannel?.isTextBased() &&
                    completedChannel.isSendable()
                ) {
                    await completedChannel.send({
                        content:
                            `@everyone <@${userId}> has made it out of the room ` +
                            `in ${elapsedMinutes} ` +
                            `${elapsedMinutes === 1 ? "minute" : "minutes"}. Woohoo!`,

                        allowedMentions: {
                            parse: ["everyone"],
                            users: [userId],
                        },
                    });
                } else {
                    console.error(
                        "Completed announcement failed: #completed is not a sendable text channel.",
                    );
                }
            } catch (announcementError) {
                console.error(
                    "Could not send Completed announcement:",
                    announcementError,
                );
            }

            await message.reply(
                "🏆 Congratulations! Escape Room completed. You unlocked #completed!",
            );

            escapeSessions.delete(userId);
            escapeFinishedKahoot.delete(userId);

            await member.roles.remove(room.roleId).catch(() => {});

            await message.channel
                .delete("Escape Room completed")
                .catch(console.error);
        }

        // ======================================
        // ROOMS WITH TWO CHOICES
        // ======================================
        else if (room.choices) {
            session.stage = "choice";

            await message.reply("✅ Correct!");

            await escapeChoicePrompt(message.channel, userId, room.choices);
        }

        // ======================================
        // NORMAL ROOM PROGRESSION
        // ======================================
        else if (room.next) {
            await escapeEnter(
                message.guild,
                userId,
                room.next,
                session.threadId,
            );
        }
    } catch (error) {
        console.error("Escape answer:", error);

        await message
            .reply("Could not advance. Contact the organizer.")
            .catch(() => {});
    } finally {
        escapeBusy.delete(userId);
    }

    return true;
}

// ======================================
// B5 KAHOOT CONFIRMATION
// ======================================

async function handleKahoot(interaction) {
    if (
        interaction.guildId !== ESCAPE.guildId ||
        interaction.user.id !== ESCAPE.ownerId
    ) {
        return interaction.reply({
            content: "Only the event organizer can use this command.",
            ephemeral: true,
        });
    }

    const player = interaction.options.getUser("player", true);
    const session = escapeSessions.get(player.id);

    if (!session || session.room !== "B5" || session.stage !== "room") {
        return interaction.reply({
            content: "This player is not currently in B5.",
            ephemeral: true,
        });
    }

    const member = await interaction.guild.members.fetch(player.id);

    if (member.voice.channelId !== ESCAPE.voiceId) {
        return interaction.reply({
            content: "Player must be connected to the B5 voice channel.",
            ephemeral: true,
        });
    }

    if (escapeFinishedKahoot.has(player.id)) {
        return interaction.reply({
            content:
                "Already confirmed. The player can use the existing buttons.",
            ephemeral: true,
        });
    }

    const voice = await interaction.guild.channels.fetch(ESCAPE.voiceId);

    if (!voice || !voice.isTextBased()) {
        return interaction.reply({
            content: "The voice channel chat is unavailable to the bot.",
            ephemeral: true,
        });
    }

    await interaction.deferReply({
        ephemeral: true,
    });

    try {
        await escapeChoicePrompt(voice, player.id, ["B6", "B7"]);

        escapeFinishedKahoot.add(player.id);
        session.stage = "kahootChoice";

        await interaction.editReply(
            `Kahoot confirmed for <@${player.id}>. ` +
                "B6/B7 buttons posted in the voice channel chat.",
        );
    } catch (error) {
        console.error("Kahoot:", error);

        await interaction
            .editReply(
                "Could not post buttons in voice chat. Check Send Messages permissions.",
            )
            .catch(() => {});
    }
}

// ======================================
// SLASH COMMANDS
// ======================================

const slashCommands = [
    new SlashCommandBuilder()
        .setName("debug")
        .setDescription("Show bot debugging information"),

    new SlashCommandBuilder()
        .setName("help")
        .setDescription("Show help and available commands"),

    new SlashCommandBuilder()
        .setName("use")
        .setDescription("Use one of the bot's commands")
        .addStringOption((option) =>
            option
                .setName("command")
                .setDescription("Choose a command")
                .setRequired(true)
                .setAutocomplete(true),
        ),

    new SlashCommandBuilder()
        .setName("phenixgpt")
        .setDescription(
            "Ask the best artificial Phenix-telligence on the planet",
        )
        .addStringOption((option) =>
            option
                .setName("question")
                .setDescription("Choose a question for PhenixGPT")
                .setRequired(true)
                .setAutocomplete(true),
        ),

    new SlashCommandBuilder()
        .setName("playerfinishkahoot")
        .setDescription("Confirm a player finished B5 Kahoot (owner only)")
        .addUserOption((option) =>
            option
                .setName("player")
                .setDescription("Player who finished Kahoot")
                .setRequired(true),
        ),

    new SlashCommandBuilder()
        .setName("updates")
        .setDescription(
            "Show the What's New section and which features have been added",
        ),
];

// ======================================
// REGISTER SLASH COMMANDS
// ======================================

async function registerSlashCommands() {
    if (!process.env.DISCORD_CLIENT_ID) {
        console.error("ERROR: DISCORD_CLIENT_ID is missing!");
        return;
    }

    if (!process.env.DISCORD_GUILD_ID) {
        console.error("ERROR: DISCORD_GUILD_ID is missing!");
        return;
    }

    if (!process.env.DISCORD_TOKEN) {
        console.error("ERROR: DISCORD_TOKEN is missing!");
        return;
    }

    try {
        console.log("Registering slash commands...");

        const rest = new REST({ version: "10" }).setToken(
            process.env.DISCORD_TOKEN,
        );

        const body = slashCommands.map((command) => command.toJSON());

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.DISCORD_CLIENT_ID,
                process.env.DISCORD_GUILD_ID,
            ),
            { body },
        );

        // Also register the commands in the Escape Room server.
        if (process.env.DISCORD_GUILD_ID !== ESCAPE.guildId) {
            await rest.put(
                Routes.applicationGuildCommands(
                    process.env.DISCORD_CLIENT_ID,
                    ESCAPE.guildId,
                ),
                { body },
            );
        }

        console.log("Slash commands registered successfully.");
    } catch (error) {
        console.error("Failed to register slash commands:", error);
    }
}

// ======================================
// SLASH COMMAND INTERACTIONS
// ======================================

client.on("interactionCreate", async (interaction) => {
    try {
        if (
            interaction.isButton() &&
            interaction.customId.startsWith("escape:")
        ) {
            await handleEscapeButton(interaction);
            return;
        }

        if (
            interaction.isChatInputCommand() &&
            interaction.commandName === "playerfinishkahoot"
        ) {
            await handleKahoot(interaction);
            return;
        }

        // ======================================
        // AUTOCOMPLETE
        // ======================================

        if (interaction.isAutocomplete()) {
            if (interaction.commandName === "use") {
                const focusedValue = interaction.options
                    .getFocused()
                    .toLowerCase();

                const matches = Object.keys(commands)
                    .filter((command) =>
                        command.toLowerCase().includes(focusedValue),
                    )
                    .slice(0, 25);

                await interaction.respond(
                    matches.map((command) => ({
                        name: command.slice(0, 100),
                        value: command.slice(0, 100),
                    })),
                );

                return;
            }

            if (interaction.commandName === "phenixgpt") {
                const focusedValue = interaction.options
                    .getFocused()
                    .toLowerCase();

                const matches = phenixGPTQuestions
                    .filter((item) =>
                        item.question.toLowerCase().includes(focusedValue),
                    )
                    .slice(0, 25);

                await interaction.respond(
                    matches.map((item) => ({
                        name: item.question.slice(0, 100),
                        value: item.id,
                    })),
                );

                return;
            }

            return;
        }

        if (!interaction.isChatInputCommand()) {
            return;
        }

        // ======================================
        // /debug
        // ======================================

        if (interaction.commandName === "debug") {
            await interaction.reply(
                "```text\n" +
                    "KALI LINUX TERMINAL OPERATOR\n" +
                    "======================================\n" +
                    `Bot: ${client.user.tag}\n` +
                    "Status: ONLINE\n" +
                    `Loaded commands: ${Object.keys(commands).length}\n` +
                    `PhenixGPT questions: ${phenixGPTQuestions.length}\n` +
                    "PhenixGPT: ENABLED\n" +
                    "Slash commands: /debug /help /use /phenixgpt /updates /playerfinishkahoot\n" +
                    "Message Content Intent: ENABLED\n" +
                    "Escape Room: ENABLED\n" +
                    "======================================\n" +
                    "```",
            );

            return;
        }

        // ======================================
        // /help
        // ======================================

        if (interaction.commandName === "help") {
            await interaction.reply(
                "## KALI LINUX TERMINAL OPERATOR\n\n" +
                    "**Slash commands:**\n" +
                    "• `/debug` — Show bot debugging information\n" +
                    "• `/help` — Show this help message\n" +
                    "• `/use` — Use one of the bot's commands\n" +
                    "• `/phenixgpt` — Ask the best artificial Phenix-telligence on the planet\n" +
                    "• `/updates` — Show what's new and which features have been added\n" +
                    "• `/playerfinishkahoot` — Owner-only B5 confirmation\n\n" +
                    "**Message commands:**\n" +
                    "Use `$` followed by one of the available commands.\n\n" +
                    "**PhenixGPT:**\n" +
                    "PhenixGPT contains 33 questions and answers inspired by Phenix4756.\n\n" +
                    "**Escape Room:**\n" +
                    "React with 🔐 in the designated start message to begin.\n\n" +
                    "If the bot fails, DM <@1505883773001138227>.",
            );

            return;
        }

        // ======================================
        // /use
        // ======================================

        if (interaction.commandName === "use") {
            const command = interaction.options.getString("command", true);
            const response = commands[command];

            if (!response) {
                await interaction.reply({
                    content: "❌ Command not found.",
                    ephemeral: true,
                });

                return;
            }

            await interaction.reply(response);
            return;
        }

        // ======================================
        // /phenixgpt
        // ======================================

        if (interaction.commandName === "phenixgpt") {
            const questionId = interaction.options.getString("question", true);

            const selectedQuestion = phenixGPTQuestions.find(
                (item) => item.id === questionId,
            );

            if (!selectedQuestion) {
                await interaction.reply({
                    content: "❌ PhenixGPT does not recognize that question.",
                    ephemeral: true,
                });

                return;
            }

            await interaction.reply(
                "🔥 **PhenixGPT:**\n\n" + selectedQuestion.answer,
            );

            return;
        }

        // ======================================
        // /updates
        // ======================================

        if (interaction.commandName === "updates") {
            await interaction.reply(
                "**KALI LINUX TERMINAL OPERATOR**\n" +
                    "Version 1.0.5\n\n" +
                    "**What's new?**\n" +
                    "We have configured a program, Uptime Robot, to keep the bot online as much as possible. We are constantly checking if Uptime Robot works. We've also launched a server-specific update, version 1.0.5.EVT. It is special for the Escape Room Event.\n\n" +
                    "We will add new features and fix more errors in the next updates. Thank you for using our bot!",
            );

            return;
        }
    } catch (error) {
        console.error("Interaction error:", error);

        if (
            interaction.isRepliable() &&
            !interaction.replied &&
            !interaction.deferred
        ) {
            await interaction
                .reply({
                    content:
                        "An error occurred while processing this interaction.",
                    ephemeral: true,
                })
                .catch(() => {});
        }
    }
});

// ======================================
// MESSAGE COMMANDS + ESCAPE ANSWERS
// ======================================

client.on("messageCreate", async (message) => {
    console.log("[MESSAGE TEST]", {
        content: message.content,
        channelId: message.channelId,
        isThread: message.channel?.isThread(),
        author: message.author.tag,
        isBot: message.author.bot,
    });

    if (message.author.bot) {
        return;
    }

    try {
        if (await handleEscapeAnswer(message)) {
            return;
        }
    } catch (error) {
        console.error("Escape message handler error:", error);
    }

    const content = message.content.trim();

    // ======================================
    // SPECIAL SCAN COMMAND
    // ======================================

    if (
        content.toLowerCase().startsWith("sudo scan single ") &&
        content.toLowerCase().includes(" near")
    ) {
        await message.reply(
            "Scanning requested target...\n" +
                "████████████████████ 100%\n\n" +
                "Target scanned.\n" +
                "No suspicious activity detected.",
        );

        return;
    }

    // ======================================
    // $ COMMANDS
    // ======================================

    if (!content.startsWith("$")) {
        return;
    }

    const command = content.slice(1).trim();

    if (!command) {
        return;
    }

    const response = commands[command];

    if (response) {
        await message.reply(response);
        return;
    }

    // Case-insensitive fallback.
    const matchingCommand = Object.keys(commands).find(
        (key) => key.toLowerCase() === command.toLowerCase(),
    );

    if (matchingCommand) {
        await message.reply(commands[matchingCommand]);
    }
});

// ======================================
// STARTUP
// ======================================

if (!process.env.DISCORD_TOKEN) {
    console.error("ERROR: DISCORD_TOKEN is missing!");
    process.exit(1);
}

console.log("======================================");
console.log("KALI LINUX TERMINAL OPERATOR");
console.log("======================================");
console.log("Token exists:", !!process.env.DISCORD_TOKEN);

registerSlashCommands();

client.once("clientReady", () => {
    console.log(`Logged in as: ${client.user.tag}`);
    console.log("Status: ONLINE");
    console.log(`Loaded commands: ${Object.keys(commands).length}`);
    console.log(`PhenixGPT questions: ${phenixGPTQuestions.length}`);
    console.log(
        "Slash commands: /debug /help /use /phenixgpt /updates /playerfinishkahoot",
    );
    console.log("Escape Room: ENABLED");
    console.log("======================================");
});

// ======================================
// REPLIT WEB SERVER
// ======================================

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain",
    });

    res.end("Kali Linux Terminal Operator is online.");
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Web server listening on port ${PORT}`);
});

// ======================================
// LOGIN
// ======================================

client.login(process.env.DISCORD_TOKEN);
