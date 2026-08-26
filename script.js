// ============================================
// 🎀 CONFIG BLOCK — Birthday + Proposal Wish Card
// Sob details ekhane change koro, code er baki part
// touch korar dorkar nai.
// ============================================

const CONFIG = {

  // ---------- Screen 1: Envelope ----------
  senderName: "Zehaan",              // Kar theke pathano hocche
  recipientName: "EMA",          // Kake pathano hocche

  // ---------- Screen 2: Birthday Wish ----------
  birthdayHeading: "Happy Birthday, EME!🥳🎂",
  birthdayMessage:
    "Tumar prottekta din hok fuler moto sundor. Onek onek shuvo kamona roilo tomar jonno! 💕",
  showConfettiOnBirthday: true,

  // ---------- Screen 3: The Question ----------
  questionText: "Will you marry me?🥺💍",
  // Alternative options: "Do you love me?" — jeta client confirm korbe

  yesButtonText: "Yes 💖",
  noButtonText: "No",

  // ---------- Screen 4: "No" Button Behavior ----------
  noButtonBehavior: {
    dodgeOnHover: true,        // hover korle sore jabe
    shrinkEachClick: true,     // click korle choto hobe
    growYesButton: true,       // Yes button boro hote thakbe
    teleportAfterAttempts: 4,  // koybar try korar por random position e teleport
    disableAfterAttempts: 6,   // koybar por completely disable/hide hobe
    guiltMessages: [
      "Are you sure? 🥺",
      "Really? 😢",
      "Try again? 🙈",
      "Think twice𓍢ִ໋🌷͙֒",
      "Please? 🙏",
    ],
  },

  // ---------- Screen 5: Celebration ----------
  celebrationHeading: "Yay! 🎉",
  celebrationMessage: "You just made me the happiest person alive! I love you, EMA! 💕",
  showConfettiOnCelebration: true,
  showPhoto: false,            // true korle couple/photo dekhabe
  photoUrl: "",                // photo URL ekhane deo (showPhoto true thakle)

  // ---------- Theme ----------
  theme: {
    primaryColor: "#ff4d6d",     // hot pink — buttons, accents
    backgroundColor: "#ffe4ec",  // blush pink background
    gradientEnd: "#fff0f5",      // background gradient end
    fontHeading: "'Great Vibes', cursive",  // romantic script font
    fontBody: "'Poppins', sans-serif",
    heartFloatAnimation: true,   // background e floating hearts
    confettiColors: ["#ff4d6d", "#ff8fa3", "#ffffff", "#ffb3c6"],
  },

  // ---------- Optional: Background Music ----------
  backgroundMusic: {
    enabled: false,
    musicUrl: "",   // mp3 link
  },
};