import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = '918320023540' // India country code (91) + phone number
  const message = 'Hi! I would like to learn more about your services.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 left-4 sm:bottom-24 sm:left-6 z-50 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-3 sm:p-4 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group animate-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
      style={{ animationDuration: '2s' }}
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform" />
      <span className="hidden md:block absolute left-full ml-3 sm:ml-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl pointer-events-none">
        Chat with us on WhatsApp
      </span>
      <span className="absolute top-0 right-0 flex h-2.5 w-2.5 sm:h-3 sm:w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-green-300"></span>
      </span>
    </button>
  );
};
