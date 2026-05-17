import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Sparkles, 
  Cat, 
  Car, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Info, 
  Zap, 
  Star,
  Quote,
  Shield,
  Smile,
  Instagram
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Assets (generated from tool)
// NOTE: I'm using placeholder references that match the generated paths from the previous step.
const CUTE_CAT = "/src/assets/images/cute_cat_sticker_png_1779042792658.png";
const SILLY_SNAKE = "/src/assets/images/silly_snake_sticker_png_1779042808050.png";
const CONNECTION_HEART = "/src/assets/images/indopak_heart_png_1779042822950.png";

const MEOW_SOUND = "https://cdn.pixabay.com/audio/2022/03/24/audio_34d1b8236d.mp3";

const playMeow = () => {
  const audio = new Audio(MEOW_SOUND);
  audio.volume = 0.3;
  audio.play().catch(() => {});
};

const triggerConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#FFB6C1', '#D8BFD8', '#E0B0FF']
  });
};

// --- Particles ---
const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: '110%', 
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: '-10%', 
            opacity: [0, 0.5, 0],
            rotate: 360
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            delay: Math.random() * 20,
            ease: "linear"
          }}
          className="absolute"
        >
          {i % 2 === 0 ? (
            <Heart className="text-primary/30 fill-primary/10" size={Math.random() * 20 + 10} />
          ) : (
            <Sparkles className="text-accent/30" size={Math.random() * 20 + 5} />
          )}
        </motion.div>
      ))}
    </div>
  );
};

// --- Hero Section ---
const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative mb-8"
      >
        <motion.img 
          src={CUTE_CAT} 
          alt="Cute Cat" 
          className="w-48 h-48 md:w-64 md:h-64 object-contain float-animation"
          onMouseEnter={playMeow}
        />
        <motion.div 
          className="absolute -top-4 -right-4 bg-primary text-black px-4 py-1 rounded-full font-display text-sm font-bold rotate-12 box-glow whitespace-nowrap"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Meow Meow!
        </motion.div>
      </motion.div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="font-display text-5xl md:text-8xl font-black mb-4 tracking-tighter text-glow"
      >
        For Kainat, <br />
        <span className="text-primary">the smartest dumb babe alive.</span>
      </motion.h1>

      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-sans text-lg md:text-2xl text-secondary max-w-2xl mb-12"
      >
        Made with chaos, meow meows, vroom vrooms, and too much affection by your <span className="text-primary font-bold italic">Hani</span>.
      </motion.p>

      <div className="flex flex-wrap gap-4 justify-center">
        {[
          { label: "Meow Meow", icon: <Cat size={18} />, action: playMeow },
          { label: "Vroom Vroom", icon: <Car size={18} />, action: triggerConfetti },
          { label: "Cry Here Babe", icon: <Smile size={18} />, action: () => alert("Oops, tissue stock empty, use Hani's shoulder instead. 🥺") }
        ].map((btn, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={btn.action}
            className="flex items-center gap-2 bg-black/50 backdrop-blur-md border border-primary/30 px-6 py-3 rounded-2xl font-display font-medium hover:bg-primary hover:text-black transition-all cursor-pointer box-glow"
          >
            {btn.icon} {btn.label}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

// --- About Section ---
const AboutKainat = () => {
  const cards = [
    { title: "Seeker of Knowledge", text: "She asks questions nobody else thinks about. Curiosity is her superpower.", icon: <Info className="text-primary" /> },
    { title: "Pure Heart", text: "She gives people chances to become better. Truly one of the kindest souls.", icon: <Heart className="text-pink-400" /> },
    { title: "Certified Emotional Support", text: "A danger to herself, but a savior for others. A literal babe.", icon: <Star className="text-yellow-400" /> },
    { title: "Smartest Dumb Babe", text: "Dangerous level of IQ, but sometimes doesn't know where her phone is while holding it.", icon: <Zap className="text-accent" /> },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">Why She's Special ✨</h2>
        <p className="text-secondary font-sans italic text-xl">"A soft soul with a fierce mind."</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-zinc-900/50 backdrop-blur-lg p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-all box-glow"
          >
            <div className="bg-black/50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
              {card.icon}
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">{card.title}</h3>
            <p className="text-zinc-400 leading-relaxed font-sans">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- Chaos Section ---
const ChaosSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,182,193,0.3),transparent)]" />
      </div>

      <motion.div 
        animate={{ x: [-1000, 1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap mb-12 opacity-50"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="font-display text-2xl font-bold text-primary italic">MEOW MEOW VROOM VROOM CHAOS DUMB BABE 🐈🏎️🐍</span>
        ))}
      </motion.div>

      <div className="flex flex-col items-center gap-12 relative z-10 px-6">
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          {[
            "emotionally unstable but cute",
            "professional overthinker",
            "Iran vs US vs Israel news watcher at 3am",
            "powered by chai and chaos",
            "100% babe energy",
            "certified cat person",
            "vroom vroom enthusiast",
            "Hani's personal headache"
          ].map((tag, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
              className="px-6 py-2 bg-zinc-900 rounded-full border border-primary/20 text-sm font-display uppercase tracking-widest text-primary/80"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <motion.img 
          src={SILLY_SNAKE} 
          alt="Silly Snake" 
          className="w-32 h-32 md:w-48 md:h-48 float-animation"
          style={{ animationDelay: '1s' }}
        />

        <div className="text-center font-script text-4xl md:text-6xl text-primary/40 select-none">
          "2 Men Meme Enjoyer"
        </div>
      </div>
    </section>
  );
};

// --- Indo-Pak Section ---
const IndoPakConnection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.5 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="mb-12 inline-block relative"
        >
          <img src={CONNECTION_HEART} alt="Bond" className="w-64 h-64 mx-auto opacity-80" />
          <motion.div 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"
          />
        </motion.div>

        <h2 className="font-display text-4xl md:text-7xl font-black mb-8 leading-tight">
          Borders exist. <br />
          <span className="text-primary italic">Connection doesn't.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-left">
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-primary/10 backdrop-blur-md">
            <h4 className="text-primary font-bold mb-4 flex items-center gap-2 justify-center">
              🇮🇳 India
            </h4>
            <p className="text-zinc-400">Sent a chaotic, emotional idiot named Hani who won't stop caring.</p>
          </div>
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-primary/10 backdrop-blur-md">
            <h4 className="text-primary font-bold mb-4 flex items-center gap-2 justify-center">
              🇵🇰 Pakistan
            </h4>
            <p className="text-zinc-400">Sent a brilliant, kind-hearted babe named Kainat who rules his peace.</p>
          </div>
        </div>

        <motion.p 
          className="mt-16 font-script text-3xl md:text-5xl text-secondary"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          Two souls, unlimited meow meows.
        </motion.p>
      </div>
    </section>
  );
};

// --- Why Love Section ---
const WhyLove = () => {
  return (
    <section className="py-32 px-6 bg-zinc-950/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-3 bg-primary/20 rounded-2xl mb-6">
            <Heart className="text-primary fill-primary" size={32} />
          </div>
          <h2 className="font-display text-5xl font-black mb-2">Why I Adore You</h2>
          <p className="text-secondary italic">The things you don't even realize you do...</p>
        </motion.div>

        <div className="space-y-6">
          {[
            "Because she never stops learning.",
            "Because she wants to understand everything.",
            "Because she believes people can change.",
            "Because she’s kind even after being hurt.",
            "Because she’s genuinely a good person.",
            "Because she makes life softer."
          ].map((reason, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 bg-zinc-900/30 rounded-2xl border-l-4 border-primary/50 hover:bg-zinc-900/50 transition-all font-sans text-xl"
            >
              <div className="text-primary shrink-0 mt-1"><Quote size={20} /></div>
              {reason}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Proud Section ---
const ProudSection = () => {
  return (
    <section className="py-40 px-6 relative bg-primary/5">
      <div className="max-w-4xl mx-auto text-center border-2 border-primary/20 p-12 md:p-24 rounded-[3rem] bg-black/60 relative overflow-hidden box-glow">
        <motion.div 
          className="absolute -top-10 -right-10 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles size={200} />
        </motion.div>

        <motion.div
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
        >
          <h2 className="font-display text-5xl md:text-7xl font-black mb-12">One Day, <br /> <span className="text-primary italic">You'll Be Proud.</span></h2>
        </motion.div>
        
        <div className="space-y-8 font-sans text-xl text-zinc-300">
          <p className="leading-relaxed">
            Hani may joke around and act like a chaotic 2-men-meme enjoyer, but his heart is real. 
          </p>
          <p className="font-bold text-white text-2xl uppercase tracking-tighter">
            "Your Hani is trying his best."
          </p>
          <p className="italic opacity-80">
            From India to Pakistan, I’ll always cheer for you. Even Kohinoor isn’t as precious as your smile.
          </p>
          <p className="font-display font-medium text-primary text-2xl uppercase tracking-tighter mt-8">
            Hani exists to annoy you and protect you.
          </p>
        </div>

        <div className="mt-16 pt-12 border-t border-primary/10">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="font-script text-4xl text-primary mb-2"
          >
            Mohan (Hani)
          </motion.div>
          <p className="text-xs uppercase tracking-widest text-zinc-500">Your Personal Indian Idiot</p>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer className="py-20 px-6 text-center border-t border-white/5 bg-black">
      <motion.div
         animate={{ y: [0, -10, 0] }}
         transition={{ repeat: Infinity, duration: 3 }}
         className="mb-8"
      >
        <Cat className="mx-auto text-primary" size={48} />
      </motion.div>

      <div className="flex justify-center gap-8 mb-12">
        <motion.button 
          whileHover={{ scale: 1.2, rotate: 15 }}
          className="p-4 bg-zinc-900 rounded-2xl hover:text-primary transition-all cursor-not-allowed"
          title="WhatsApp (Fake)"
        >
          <MessageCircle />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.2, rotate: -15 }}
          className="p-4 bg-zinc-900 rounded-2xl hover:text-primary transition-all cursor-not-allowed"
          title="Mail (Fake)"
        >
          <Mail />
        </motion.button>
        <motion.a 
          href="https://instagram.com" 
          target="_blank"
          whileHover={{ scale: 1.2 }}
          className="p-4 bg-zinc-900 rounded-2xl hover:text-primary transition-all"
        >
          <Instagram />
        </motion.a>
      </div>

      <div className="max-w-xl mx-auto space-y-4 px-4">
        <p className="text-zinc-500 font-sans text-sm tracking-wide">
          Made under extreme emotional damage. Powered by cats and attachment issues.
        </p>
        <p className="font-display text-primary font-bold">
          © Hani Industries 2024. No snakes were emotionally harmed.
        </p>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
          >
            <Heart size={14} className="text-primary fill-primary" />
          </motion.div>
        ))}
      </div>
    </footer>
  );
};

// --- App Root ---
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black meow-cursor">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-6xl mb-6"
            >
              🐈✨
            </motion.div>
            <h1 className="font-display text-3xl font-bold tracking-widest uppercase">
              Preparing Chaotic Vibes...
            </h1>
            <div className="w-48 h-1 bg-zinc-900 rounded-full mt-4 overflow-hidden">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-primary"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ParticleBackground />

      <main className="relative z-10">
        <Hero />
        <AboutKainat />
        <ChaosSection />
        <IndoPakConnection />
        <WhyLove />
        <ProudSection />
        <Footer />
      </main>

      {/* Hidden Easter Egg */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.1 }}
        className="fixed bottom-4 left-4 text-[10px] uppercase tracking-widest text-white pointer-events-auto cursor-pointer"
        onClick={() => alert("Secret Message: You are Hani's favorite person in the whole universe. Now go drink some water.")}
      >
        Hani was here
      </motion.div>
    </div>
  );
}
