'use client';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background Images and Effects */}
      <div className="absolute inset-0">
        {/* Main dark background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />

        {/* Character background image with proper overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/2735304412/3760793697.jpeg')`
          }}
        />

        {/* Dark overlay to maintain readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/60" />

        {/* Particle effects */}
        <div className="absolute inset-0 particle-bg opacity-20" />
      </div>

      {/* Character Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://ext.same-assets.com/2735304412/1384391254.webp"
          alt="Character Left"
          className="absolute left-0 top-1/4 h-96 object-contain opacity-40"
        />
        <img
          src="https://ext.same-assets.com/2735304412/3941354637.webp"
          alt="Character Right"
          className="absolute right-0 top-1/3 h-80 object-contain opacity-50"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center">
          <img
            src="https://ext.same-assets.com/2735304412/3974215076.svg"
            alt="HoYoVerse"
            className="h-8 brightness-110"
          />
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg border border-orange-400">
          ➤ Official Website
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
        {/* Main Title */}
        <div className="mb-12">
          <h1 className="title-font text-6xl md:text-8xl lg:text-9xl font-black leading-tight">
            <div className="transform -rotate-2 mb-2">
              <span className="text-transparent bg-gradient-to-r from-orange-300 via-orange-400 to-yellow-300 bg-clip-text glow-text">
                Flickers of a
              </span>
            </div>
            <div className="transform rotate-1">
              <span className="text-transparent bg-gradient-to-r from-orange-300 via-orange-400 to-yellow-300 bg-clip-text glow-text">
                Spacetime Warp
              </span>
            </div>
          </h1>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* PC Download Button */}
          <div className="relative">
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-orange-400 hover:border-orange-300">
              <div className="flex flex-col items-center">
                <span className="text-lg">Download PC</span>
                <span className="text-xs opacity-90 font-normal">Free to Play</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Play Button */}
          <div className="mx-4">
            <button className="group w-20 h-20 bg-gradient-to-b from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-2xl border-4 border-orange-300">
              <svg className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>

          {/* Mobile Download Button */}
          <div className="relative">
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-orange-400 hover:border-orange-300">
              <div className="flex flex-col items-center">
                <span className="text-lg">Download for</span>
                <span className="text-xs opacity-90 font-normal">Other Platforms</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Additional Character Image */}
        <div className="absolute right-8 bottom-0 hidden xl:block pointer-events-none">
          <img
            src="https://ext.same-assets.com/2735304412/69816306.webp"
            alt="Character Feature"
            className="h-[500px] object-contain opacity-80 drop-shadow-2xl"
          />
        </div>
      </main>

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-800/95 backdrop-blur-md border-t border-slate-600/50 p-4 z-50">
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
          <p className="text-gray-200 text-sm">
            This website uses cookies to enhance your browsing experience.{' '}
            <a href="#" className="text-orange-400 hover:text-orange-300 underline transition-colors">Learn more</a>
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
