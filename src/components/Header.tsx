import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
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
  );
}