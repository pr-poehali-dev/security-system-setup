import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Portfolio() {
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

  return (
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
  );
}