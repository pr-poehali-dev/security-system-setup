import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

export default function Hero() {
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

  return (
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
  );
}