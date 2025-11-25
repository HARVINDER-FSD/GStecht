export const AnimatedGradientMesh = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 animate-gradient-shift" />
      <div 
        className="absolute inset-0 bg-gradient-to-tl from-cyan-400 via-blue-500 to-indigo-600 animate-gradient-shift-reverse" 
        style={{ animationDelay: '1s' }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 animate-gradient-shift" 
        style={{ animationDelay: '2s' }}
      />
    </div>
  );
};
