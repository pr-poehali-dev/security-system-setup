import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Blog() {
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
  );
}