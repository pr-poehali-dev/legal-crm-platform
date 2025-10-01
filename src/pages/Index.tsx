import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Scale" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">LexPro</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
            <a href="#ai" className="text-sm font-medium hover:text-primary transition-colors">AI-ассистент</a>
            <a href="#crm" className="text-sm font-medium hover:text-primary transition-colors">CRM</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>Войти</Button>
        </div>
      </header>

      <section className="py-20 lg:py-32 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4" variant="secondary">Юридическая платформа нового поколения</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight">
                Автоматизация юридических процессов с AI
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Профессиональная CRM-система и AI-ассистент для юристов, юридических отделов и компаний. 
                Решения для B2B, B2C и B2G сегментов.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8">
                  Начать работу
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Демо
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">10К+</div>
                  <div className="text-sm text-muted-foreground">Пользователей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Компаний</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="/img/cf650333-d764-42cc-ad9f-3acb3d2aa586.jpg" 
                alt="LexPro Platform" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Возможности платформы</Badge>
            <h2 className="text-4xl font-bold mb-4 text-primary">Всё необходимое для юридической работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексное решение для автоматизации юридических процессов и управления делами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-scale border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Brain" className="text-primary" size={24} />
                </div>
                <CardTitle>AI-ассистент</CardTitle>
                <CardDescription>
                  Поиск правовых норм, судебной практики и анализ документов с помощью искусственного интеллекта
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Briefcase" className="text-primary" size={24} />
                </div>
                <CardTitle>CRM-система</CardTitle>
                <CardDescription>
                  Управление клиентами, делами, документами и задачами в единой системе
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" className="text-primary" size={24} />
                </div>
                <CardTitle>Документооборот</CardTitle>
                <CardDescription>
                  Создание, хранение и управление юридическими документами с электронной подписью
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Search" className="text-primary" size={24} />
                </div>
                <CardTitle>База судпрактики</CardTitle>
                <CardDescription>
                  Доступ к актуальной судебной практике с интеллектуальным поиском и аналитикой
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <CardTitle>B2B / B2C / B2G</CardTitle>
                <CardDescription>
                  Решения для бизнеса, частных клиентов и государственных организаций
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-primary" size={24} />
                </div>
                <CardTitle>Безопасность</CardTitle>
                <CardDescription>
                  Защита данных на уровне банковских систем с соответствием стандартам безопасности
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="ai" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">AI-ассистент</Badge>
              <h2 className="text-4xl font-bold mb-6 text-primary">Искусственный интеллект для юристов</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Автоматизируйте рутинные задачи и получайте быстрые ответы на правовые вопросы
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Поиск правовых норм</h3>
                    <p className="text-muted-foreground">Мгновенный поиск по законодательству с учетом контекста вашего дела</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Анализ документов</h3>
                    <p className="text-muted-foreground">Автоматический анализ договоров, исков и других документов</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Резюмирование судпрактики</h3>
                    <p className="text-muted-foreground">Получайте краткие выжимки из релевантных судебных решений</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                <div className="flex items-start gap-3">
                  <Icon name="User" className="text-muted-foreground" size={20} />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Вопрос</p>
                    <p className="font-medium">Какая судебная практика по делам о защите прав потребителей в части возврата товара надлежащего качества?</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start gap-3">
                  <Icon name="Bot" className="text-primary" size={20} />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">AI-ассистент</p>
                    <p className="font-medium mb-3">Найдено 47 релевантных решений. Основные выводы:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <Icon name="Dot" size={20} />
                        <span>Возврат товара надлежащего качества регулируется ст. 25 Закона о защите прав потребителей</span>
                      </li>
                      <li className="flex gap-2">
                        <Icon name="Dot" size={20} />
                        <span>В 89% случаев суды встают на сторону потребителя при соблюдении 14-дневного срока</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="crm" className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-lg shadow-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold">Дело №2024-123</p>
                    <p className="text-sm text-muted-foreground">ООО "Альфа" vs ООО "Бета"</p>
                  </div>
                  <Badge variant="secondary">В работе</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold">Дело №2024-087</p>
                    <p className="text-sm text-muted-foreground">Иванов И.И. - Банк</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Завершено</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold">Дело №2024-156</p>
                    <p className="text-sm text-muted-foreground">Консультация по договору</p>
                  </div>
                  <Badge variant="outline">Ожидание</Badge>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4" variant="secondary">CRM-система</Badge>
              <h2 className="text-4xl font-bold mb-6 text-primary">Управление делами и клиентами</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Все дела, клиенты, документы и задачи в одной удобной системе
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Calendar" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Управление сроками</h3>
                    <p className="text-muted-foreground">Контроль процессуальных сроков и автоматические напоминания</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">База клиентов</h3>
                    <p className="text-muted-foreground">Полная история взаимодействия с каждым клиентом</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="BarChart" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Аналитика и отчеты</h3>
                    <p className="text-muted-foreground">Статистика по делам, клиентам и финансам</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Тарифы</Badge>
            <h2 className="text-4xl font-bold mb-4 text-primary">Выберите подходящий план</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Гибкие тарифы для юристов, компаний и государственных организаций
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl">B2C</CardTitle>
                <CardDescription>Для частных юристов</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₽4,990</span>
                  <span className="text-muted-foreground">/месяц</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>До 50 дел в месяц</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>AI-ассистент (500 запросов)</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>База судпрактики</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Документооборот</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Поддержка 24/7</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary hover-scale relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold">
                Популярный
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">B2B</CardTitle>
                <CardDescription>Для юридических компаний</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₽19,990</span>
                  <span className="text-muted-foreground">/месяц</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Неограниченное кол-во дел</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>AI-ассистент (безлимит)</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Расширенная судпрактика</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>До 10 пользователей</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Персональный менеджер</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>API интеграции</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl">B2G</CardTitle>
                <CardDescription>Для гос. организаций</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">По запросу</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Все возможности B2B</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Неограниченные пользователи</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Отдельный сервер</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Кастомизация под задачи</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Обучение сотрудников</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                    <span>Соответствие ГОСТ</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Связаться с нами</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary text-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать работу?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к сотням юристов и компаний, которые уже используют LexPro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10">
              Связаться с нами
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 pt-16 border-t border-white/20">
            <div>
              <Icon name="Mail" className="mx-auto mb-3" size={24} />
              <p className="font-semibold mb-1">Email</p>
              <p className="opacity-80">info@lexpro.ru</p>
            </div>
            <div>
              <Icon name="Phone" className="mx-auto mb-3" size={24} />
              <p className="font-semibold mb-1">Телефон</p>
              <p className="opacity-80">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="MapPin" className="mx-auto mb-3" size={24} />
              <p className="font-semibold mb-1">Офис</p>
              <p className="opacity-80">Москва, Пресненская наб., 10</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-gray-200 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Scale" className="text-primary" size={24} />
              <span className="font-bold text-primary">LexPro</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 LexPro. Все права защищены.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
