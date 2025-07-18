import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [calculatorData, setCalculatorData] = useState({
    area: '',
    cameraType: '',
    rooms: '',
    additionalFeatures: []
  });

  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const calculateCost = () => {
    const basePrice = 15000;
    const area = parseInt(calculatorData.area) || 0;
    const rooms = parseInt(calculatorData.rooms) || 1;
    
    let cost = basePrice;
    cost += area * 300;
    cost += rooms * 5000;
    
    if (calculatorData.cameraType === 'premium') cost += 20000;
    if (calculatorData.cameraType === 'professional') cost += 40000;
    
    setEstimatedCost(cost);
  };

  const services = [
    {
      title: 'Видеонаблюдение',
      description: 'Установка современных камер с HD качеством и удаленным доступом',
      icon: 'Camera',
      features: ['4K качество', 'Ночная съемка', 'Облачное хранение'],
      price: 'от 25 000 ₽'
    },
    {
      title: 'Охранная сигнализация',
      description: 'Комплексная система защиты с датчиками движения и контроля доступа',
      icon: 'Shield',
      features: ['Датчики движения', 'Контроль доступа', 'SMS уведомления'],
      price: 'от 35 000 ₽'
    },
    {
      title: 'Система контроля доступа',
      description: 'Электронные замки и считыватели карт для безопасного входа',
      icon: 'Key',
      features: ['Карты доступа', 'Биометрия', 'Журнал событий'],
      price: 'от 45 000 ₽'
    },
    {
      title: 'Пожарная безопасность',
      description: 'Детекторы дыма и автоматическая система пожаротушения',
      icon: 'Flame',
      features: ['Детекторы дыма', 'Автотушение', 'Оповещение'],
      price: 'от 30 000 ₽'
    }
  ];

  const portfolio = [
    {
      title: 'Торговый центр "Галерея"',
      description: 'Комплексная система безопасности на 150 камер',
      image: 'img/d347abaf-07b2-4807-a9d3-8d61d959ca5e.jpg',
      category: 'Коммерческие объекты'
    },
    {
      title: 'Жилой комплекс "Премиум"',
      description: 'Система контроля доступа и видеонаблюдения',
      image: 'img/8736cfd2-941c-4f5e-bd85-fd284b336c7c.jpg',
      category: 'Жилые объекты'
    },
    {
      title: 'Офисный центр "Бизнес Плаза"',
      description: 'Интегрированная система безопасности и контроля',
      image: 'img/d60bb70f-a198-4a08-afc7-dcebf466885d.jpg',
      category: 'Офисные здания'
    }
  ];

  const blogPosts = [
    {
      title: 'Как выбрать систему видеонаблюдения в 2024 году',
      excerpt: 'Разбираем основные критерии выбора камер и систем записи',
      date: '15 июля 2024',
      readTime: '5 мин'
    },
    {
      title: 'Новые технологии в охранных системах',
      excerpt: 'ИИ-аналитика и распознавание лиц в современных системах',
      date: '10 июля 2024',
      readTime: '7 мин'
    },
    {
      title: 'Интеграция систем безопасности с умным домом',
      excerpt: 'Объединяем охранные системы с домашней автоматизацией',
      date: '5 июля 2024',
      readTime: '6 мин'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-security-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="h-8 w-8 text-security" />
              <h1 className="text-2xl font-bold text-security-blue">SecureGuard</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-security-blue hover:text-security transition-colors">Услуги</a>
              <a href="#portfolio" className="text-security-blue hover:text-security transition-colors">Портфолио</a>
              <a href="#about" className="text-security-blue hover:text-security transition-colors">О нас</a>
              <a href="#blog" className="text-security-blue hover:text-security transition-colors">Блог</a>
              <a href="#contact" className="text-security-blue hover:text-security transition-colors">Контакты</a>
            </nav>
            <Button className="bg-security hover:bg-security/90 text-white">
              Получить консультацию
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-security-blue to-security-blue/90 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Профессиональные системы безопасности
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Защитите свой дом, офис или бизнес с помощью современных технологий видеонаблюдения и охранных систем
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-security hover:bg-security/90 text-white">
                  <Icon name="Play" className="mr-2 h-5 w-5" />
                  Смотреть демо
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-security-blue">
                  Заказать звонок
                </Button>
              </div>
            </div>
            
            {/* Calculator */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-security-blue">Калькулятор стоимости</CardTitle>
                <CardDescription>Рассчитайте примерную стоимость установки системы безопасности</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="area">Площадь (м²)</Label>
                    <Input 
                      id="area"
                      type="number"
                      placeholder="100"
                      value={calculatorData.area}
                      onChange={(e) => setCalculatorData({...calculatorData, area: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="rooms">Количество комнат</Label>
                    <Input 
                      id="rooms"
                      type="number"
                      placeholder="3"
                      value={calculatorData.rooms}
                      onChange={(e) => setCalculatorData({...calculatorData, rooms: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <Label>Тип камер</Label>
                  <Select value={calculatorData.cameraType} onValueChange={(value) => setCalculatorData({...calculatorData, cameraType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Базовые (HD)</SelectItem>
                      <SelectItem value="premium">Премиум (4K)</SelectItem>
                      <SelectItem value="professional">Профессиональные</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button onClick={calculateCost} className="w-full bg-security hover:bg-security/90">
                  <Icon name="Calculator" className="mr-2 h-4 w-4" />
                  Рассчитать стоимость
                </Button>
                
                {estimatedCost && (
                  <div className="p-4 bg-security-light rounded-lg animate-fade-in">
                    <p className="text-sm text-security-blue">Примерная стоимость:</p>
                    <p className="text-2xl font-bold text-security">{estimatedCost.toLocaleString()} ₽</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-security-blue mb-4">Наши услуги</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Предлагаем полный спектр услуг по установке и обслуживанию систем безопасности
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-slide-up border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-security-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} className="h-8 w-8 text-security" />
                  </div>
                  <CardTitle className="text-security-blue">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" className="h-4 w-4 text-security mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-security">{service.price}</span>
                    <Button variant="outline" size="sm" className="border-security text-security hover:bg-security hover:text-white">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-security-blue mb-4">Портфолио</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Более 500 успешно реализованных проектов по всей России
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                  <h3 className="text-xl font-semibold text-security-blue mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="outline" className="border-security text-security hover:bg-security hover:text-white">
                    Подробнее о проекте
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-security-blue mb-6">О компании SecureGuard</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы - ведущая компания в сфере систем безопасности с 15-летним опытом работы. 
                Наша команда профессионалов обеспечивает комплексную защиту объектов любой сложности.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-security mb-2">15+</div>
                  <div className="text-sm text-gray-600">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-security mb-2">500+</div>
                  <div className="text-sm text-gray-600">проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-security mb-2">24/7</div>
                  <div className="text-sm text-gray-600">поддержка</div>
                </div>
              </div>
              <Button className="bg-security hover:bg-security/90 text-white">
                Узнать больше
              </Button>
            </div>
            <div className="animate-scale-in">
              <img 
                src="img/8736cfd2-941c-4f5e-bd85-fd284b336c7c.jpg" 
                alt="Наша команда"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-security-blue mb-4">Блог</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Последние новости и полезные статьи о системах безопасности
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-slide-up">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{post.readTime}</Badge>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="text-security-blue">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="border-security text-security hover:bg-security hover:text-white">
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-security-blue mb-4">Контакты</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами для получения консультации и расчета стоимости
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-security-light rounded-full flex items-center justify-center">
                  <Icon name="Phone" className="h-6 w-6 text-security" />
                </div>
                <div>
                  <h3 className="font-semibold text-security-blue">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-security-light rounded-full flex items-center justify-center">
                  <Icon name="Mail" className="h-6 w-6 text-security" />
                </div>
                <div>
                  <h3 className="font-semibold text-security-blue">Email</h3>
                  <p className="text-gray-600">info@secureguard.ru</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-security-light rounded-full flex items-center justify-center">
                  <Icon name="MapPin" className="h-6 w-6 text-security" />
                </div>
                <div>
                  <h3 className="font-semibold text-security-blue">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Тверская, 15</p>
                </div>
              </div>
            </div>
            
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-security-blue">Обратная связь</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами в течение часа</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@email.com" />
                </div>
                
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <textarea 
                    id="message"
                    className="w-full min-h-24 p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-security focus:border-transparent"
                    placeholder="Опишите ваши потребности..."
                  />
                </div>
                
                <Button className="w-full bg-security hover:bg-security/90 text-white">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-security-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Shield" className="h-6 w-6" />
                <span className="text-xl font-bold">SecureGuard</span>
              </div>
              <p className="text-white/80">
                Профессиональные системы безопасности для вашего спокойствия
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Видеонаблюдение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сигнализация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контроль доступа</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Пожарная безопасность</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p>+7 (495) 123-45-67</p>
                <p>info@secureguard.ru</p>
                <p>г. Москва, ул. Тверская, 15</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-white/20" />
          
          <div className="text-center text-white/60">
            <p>&copy; 2024 SecureGuard. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}