import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Services() {
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

  return (
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
  );
}