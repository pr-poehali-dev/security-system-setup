import { Button } from '@/components/ui/button';

export default function About() {
  return (
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
  );
}