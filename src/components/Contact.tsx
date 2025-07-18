import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Contact() {
  return (
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
  );
}