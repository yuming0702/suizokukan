import React, { useState, useEffect } from 'react';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  Clock, 
  Ticket, 
  Building2, 
  Car, 
  Calendar, 
  Store, 
  HelpCircle,
  GraduationCap,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Users
} from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?auto=format&fit=crop&q=80&w=2000",
      title: "海の仲間に会いに行こう！",
      subtitle: "クラゲの幻想的な世界"
    },
    {
      image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&q=80&w=2000",
      title: "神秘的な海の世界",
      subtitle: "イルカと触れ合える特別な体験"
    },
    {
      image: "https://images.unsplash.com/photo-1571160258893-6b4d2bf2c399?auto=format&fit=crop&q=80&w=2000",
      title: "クラゲファンタジー",
      subtitle: "幻想的な光の演出"
    },
    {
      image: "https://images.unsplash.com/photo-1580019542155-247062e19ce4?auto=format&fit=crop&q=80&w=2000",
      title: "海の生態系を体験",
      subtitle: "様々な魚たちとの出会い"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white">水族館公式ホームページです。</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-blue-900">水族館</h1>
              </div>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-blue-600" />
                <Instagram className="w-6 h-6 text-pink-600" />
                <Youtube className="w-6 h-6 text-red-600" />
                <Twitter className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span>文字サイズ</span>
                <button className="px-3 py-1 bg-gray-100 rounded">標準</button>
                <button className="px-3 py-1 bg-gray-100 rounded">拡大</button>
              </div>
              
              <div className="relative">
                <button className="flex items-center space-x-1 px-3 py-1 border rounded">
                  <span>Language</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Navigation */}
      <div className="border-t border-b bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-8 text-center">
            <NavItem icon={<Clock />} text="営業時間" />
            <NavItem icon={<Ticket />} text="チケット" />
            <NavItem icon={<Building2 />} text="館内案内" />
            <NavItem icon={<Car />} text="アクセス" />
            <NavItem icon={<Calendar />} text="イベント" />
            <NavItem icon={<Store />} text="お店・食事" />
            <NavItem icon={<HelpCircle />} text="よくある質問" />
            <NavItem icon={<GraduationCap />} text="学習・研究" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="absolute w-full h-full"
              style={{ left: `${index * 100}%` }}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent">
                  <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                    <div className="text-white">
                      <h2 className="text-6xl font-bold mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-2xl">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Info Card */}
        <div className="absolute right-8 bottom-8 bg-white/90 p-6 rounded-lg shadow-lg w-80 backdrop-blur-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">本日の営業時間</h3>
            <p className="text-3xl font-bold text-center text-blue-900">9:30~17:30</p>
            <p className="text-sm text-center text-gray-600 mt-1">入館は閉館時間の1時間前まで</p>
          </div>
          
          <button className="w-full bg-blue-900 text-white py-2 rounded mb-3 hover:bg-blue-800 transition-colors">
            本日のイベントを見る
          </button>
          
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Users className="w-5 h-5" />
            <span>混雑時はお知らせいたします</span>
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-3 gap-8">
          <FeaturedCard 
            image="https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae?auto=format&fit=crop&q=80&w=800"
            title="クラゲ展示"
            description="幻想的な光の中で優雅に泳ぐクラゲたち"
          />
          <FeaturedCard 
            image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800"
            title="イルカショー"
            description="毎日開催！迫力のパフォーマンス"
          />
          <FeaturedCard 
            image="https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?auto=format&fit=crop&q=80&w=800"
            title="タッチプール"
            description="海の生き物とふれあう特別な体験"
          />
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center py-4 hover:bg-white cursor-pointer transition-colors">
      <div className="text-blue-900 mb-2">{icon}</div>
      <span className="text-sm">{text}</span>
    </div>
  );
}

function FeaturedCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default App;