import { useState } from 'react';
import { Heart, Sparkles, Gift, Cake, X } from 'lucide-react';
import BirthdayCake from './BirthdayCake';

function App() {
  const [currentPhoto, setCurrentPhoto] = useState<string | null>(null);
  const [showPhoto, setShowPhoto] = useState(false);
  const [girlfriendImage, setGirlfriendImage] = useState<string>('');
  const [imageError, setImageError] = useState(false);

  const photos = [
    'https://i.postimg.cc/gJ5dzYdD/Whats-App-Image-2026-02-24-at-3-21-16-PM-(2).jpg',
    'https://i.postimg.cc/SsQ7Shdw/Whats-App-Image-2026-02-24-at-3-21-16-PM-(1).jpg',
    'https://i.postimg.cc/w3Y1B5HG/Whats-App-Image-2026-02-24-at-3-21-20-PM.jpg',
    'https://i.postimg.cc/3xZs8m9C/Whats-App-Image-2026-02-24-at-3-21-16-PM.jpg',
    'https://i.postimg.cc/4dqkksRQ/Whats-App-Image-2026-02-24-at-3-21-21-PM.jpg',
    'https://i.postimg.cc/FFV74BB7/Whats-App-Image-2026-02-24-at-3-21-22-PM-(2).jpg',
    'https://i.postimg.cc/NfPGGq7q/Whats-App-Image-2026-02-24-at-3-21-15-PM.jpg',
    'https://i.postimg.cc/Gt5jg5FB/Whats-App-Image-2026-02-24-at-3-21-25-PM.jpg',
    'https://i.postimg.cc/qq5GD5sN/Whats-App-Image-2026-02-24-at-3-21-24-PM-(2).jpg',
    'https://i.postimg.cc/BbHzrFgs/Whats-App-Image-2026-02-24-at-3-21-15-PM-(1).jpg',




  ];

  const sweetMessages = [
"तिमीलाई हेर्दा मेरो मुटु छिटो धड्किन्छ",
"तिमी मेरो जीवनको सबैभन्दा राम्रो कुरा हौ",
"तिमी सँग बिताएको हरेक पल मेरो लागि अनमोल छ",
"तिमी मेरो जीवनको सबैभन्दा उज्यालो तारा हौ",
"तिमी सँग बिताएको हरेक पल मेरो लागि एक सपना जस्तो छ",
"तिमी मेरो जीवनको सबैभन्दा ठूलो उपहार हौ",
"तिमीलाई माया गर्न पाउँदा म आफैलाई भाग्यमानी महसुस गर्छु",
  ];

  const handlePhotoClick = () => {
    setImageError(false);
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    setCurrentPhoto(randomPhoto);
    setShowPhoto(true);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setGirlfriendImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div 
      className="min-h-screen py-6 sm:py-12 px-3 sm:px-4 relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1920&q=80&brightness=1.2)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-rose-100/40 to-pink-200/40 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Love from Kunaal - Right Corner */}
        <div className="fixed top-4 sm:top-8 right-4 sm:right-8 z-20 flex items-center gap-1">
          <p className="text-sm sm:text-base font-italic text-black font-semibold drop-shadow-lg" style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            borderRight: '2px solid black',
            animation: 'typewriterKunaal 2.5s steps(16, end) infinite, blinkKunaal 0.6s infinite',
          }}>
            Love from Kunaal
          </p>
          <span className="inline-block text-base" style={{
            animation: 'heartbeat 1.2s infinite',
          }}>💕</span>
        </div>
        
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="flex justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <Heart className="w-8 sm:w-12 h-8 sm:h-12 text-pink-500 animate-pulse" fill="currentColor" />
            <Cake className="w-8 sm:w-12 h-8 sm:h-12 text-rose-500 animate-bounce" />
            <Heart className="w-8 sm:w-12 h-8 sm:h-12 text-pink-500 animate-pulse" fill="currentColor" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black mb-2 sm:mb-4">
            Happy Birthday,
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black mb-2 sm:mb-4">
            जन्मदिनको धेरै शुभकामना लादे 🎉
          </h1>

          <div className="flex justify-center gap-1 sm:gap-2 mb-6 sm:mb-8 flex-wrap">
            <Sparkles className="w-4 sm:w-6 h-4 sm:h-6 text-rose-400" />
            <p className="text-sm sm:text-lg md:text-2xl text-green-900 font-medium">
              To the most amazing person in my life
            </p>
            <Sparkles className="w-4 sm:w-6 h-4 sm:h-6 text-rose-400" />
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          {girlfriendImage ? (
            <div className="relative inline-block w-full">
              <div className="flex justify-center">
                <div className="relative">
                  {/* left animated cake - hidden on small screens */}
                  <div className="hidden md:block absolute -left-24 lg:-left-32 top-1/2 transform -translate-y-1/2 z-10">
                    <BirthdayCake />
                  </div>
                  {/* right animated cake - hidden on small screens */}
                  <div className="hidden md:block absolute -right-24 lg:-right-32 top-1/2 transform -translate-y-1/2 z-10">
                    <BirthdayCake />
                  </div>

                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl blur opacity-75 animate-pulse"></div>
                  <img
                    src={girlfriendImage}
                    alt="My Beautiful Girlfriend"
                    className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <button
                onClick={() => setGirlfriendImage('')}
                className="mt-3 sm:mt-4 block mx-auto text-rose-600 hover:text-rose-800 font-semibold transition-colors text-sm sm:text-base"
              >
                Change Image
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <label className="relative cursor-pointer group">
                <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-white/50 backdrop-blur-sm border-4 border-dashed border-pink-400 rounded-3xl flex items-center justify-center hover:bg-white/70 transition-all duration-300 group-hover:border-pink-500">
                  <div className="text-center px-2">
                    <Heart className="w-8 sm:w-12 h-8 sm:h-12 text-pink-500 mx-auto mb-2 group-hover:scale-110 transition-transform" fill="currentColor" />
                    <p className="text-pink-600 font-semibold text-xs sm:text-base">माया, एउटा फोटो हाल न</p>
                    <p className="text-pink-500 text-xs sm:text-sm">i love you so much</p>
                  </div>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          )}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 mb-6 sm:mb-8 border-4 border-pink-300">
          <div className="prose prose-sm sm:prose md:prose-lg max-w-none text-center">
            <p className="text-gray-800 text-sm sm:text-base md:text-xl leading-relaxed mb-4 sm:mb-6">
               Kallu, on this special day, I want you to know how much you mean to me.
              You've brought so much joy, laughter, and love into my life.
              Every day with you feels like a dream come true.
            </p>

            <p className="text-gray-800 text-sm sm:text-base md:text-xl leading-relaxed mb-4 sm:mb-6">
              Your smile lights up my world, your laughter is my favorite melody,
              and your love is the greatest gift I could ever receive.
              I'm so grateful for every moment we share together.
            </p>

            <p className="text-gray-800 text-sm sm:text-base md:text-xl leading-relaxed">
              Here's to celebrating you today and always.
              May this year bring you all the happiness, success, and love that you deserve.
              I love you more than words can express!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-8">
          {sweetMessages.map((message, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl p-4 sm:p-6 shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <Heart className="w-5 sm:w-6 h-5 sm:h-6 text-white flex-shrink-0 mt-0.5 sm:mt-1" fill="currentColor" />
                <p className="text-white font-medium text-sm sm:text-lg">{message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <button
            onClick={handlePhotoClick}
            className="group relative inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-sm sm:text-base md:text-xl px-6 sm:px-12 py-3 sm:py-5 rounded-full shadow-2xl transform hover:scale-110 hover:shadow-pink-300/50 transition-all duration-300"
          >
            <Gift className="w-5 sm:w-7 h-5 sm:h-7 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Click Here for a Surprise!</span>
            <span className="sm:hidden">Surprise!</span>
            <Sparkles className="w-5 sm:w-7 h-5 sm:h-7 group-hover:rotate-12 transition-transform" />
          </button>
        </div>

        {showPhoto && currentPhoto && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50 animate-fade-in overflow-y-auto">
            <div className="relative w-full max-w-xs sm:max-w-2xl my-4 sm:my-8">
              <button
                onClick={() => setShowPhoto(false)}
                className="absolute -top-8 sm:-top-10 right-0 text-white hover:text-pink-300 text-lg sm:text-xl font-bold transition-colors z-10"
              >
                <X className="w-6 sm:w-8 h-6 sm:h-8" />
              </button>
              <div className="bg-white rounded-3xl p-3 sm:p-6 shadow-2xl transform animate-scale-in hover:shadow-pink-300/50 transition-shadow">
                {imageError ? (
                  <p className="text-center text-red-500 font-semibold text-sm sm:text-lg">
                    Unable to load image. Please try again.
                  </p>
                ) : (
                  <div className="flex justify-center">
                    <img
                      src={currentPhoto}
                      alt="Surprise"
                      onError={() => setImageError(true)}
                      className="max-w-full max-h-72 sm:max-h-96 object-contain rounded-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <p className="text-center text-rose-600 font-semibold text-xs sm:text-lg mt-3 sm:mt-4">
                  Just like this beautiful moment, you make everything better!
                </p>
              </div>
              <div className="text-center mt-3 sm:mt-6">
                <button
                  onClick={handlePhotoClick}
                  className="bg-white/90 hover:bg-white text-pink-600 hover:text-rose-600 font-bold py-2 px-4 sm:px-6 text-sm sm:text-base rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  See Another One
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm px-4 sm:px-8 py-2 sm:py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300">
            <Heart className="w-4 sm:w-6 h-4 sm:h-6 text-rose-500 animate-pulse" fill="currentColor" />
            <p className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
              Forever Yours
            </p>
            <Heart className="w-4 sm:w-6 h-4 sm:h-6 text-rose-500 animate-pulse" fill="currentColor" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          10%, 30% {
            transform: scale(0.9);
          }
          20% {
            transform: scale(1.1);
          }
          40%, 100% {
            transform: scale(1);
          }
        }

        @keyframes typewriterKunaal {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blinkKunaal {
          0%, 49% {
            border-right-color: black;
          }
          50%, 100% {
            border-right-color: transparent;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;
