import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
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
  );
}