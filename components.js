
function Header() {
    return (
        <header className="bg-blue-600 text-white py-6">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold">Школа танцев "Ритм"</h1>
                <p className="mt-2 text-lg">Танцуй с нами, живи в ритме!</p>
            </div>
        </header>
    );
}

function StudioInfo() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">О нашей студии</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Школа танцев "Ритм" — это место, где каждый найдет свой стиль. Мы предлагаем занятия для детей, подростков и взрослых.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gray-100 rounded-lg">
                        <h3 className="text-xl font-semibold">Современные танцы</h3>
                        <p>Хип-хоп, джаз-фанк, контемпорари для всех возрастов.</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg">
                        <h3 className="text-xl font-semibold">Бальные танцы</h3>
                        <p>Вальс, танго, фокстрот для взрослых и пар.</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg">
                        <h3 className="text-xl font-semibold">Детские группы</h3>
                        <p>Ритмика и хореография для детей от 4 лет.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Trainers() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Наши тренеры</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-lg shadow">
                        <h3 className="text-xl font-semibold">Анна Иванова</h3>
                        <p className="text-gray-600">Специалист по современным танцам, чемпион России по хип-хопу 2023.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <h3 className="text-xl font-semibold">Михаил Петров</h3>
                        <p className="text-gray-600">Мастер бальных танцев, судья международных соревнований.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Gallery() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Галерея</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                        <img
                            key={i}
                            src={`https://via.placeholder.com/300?text=Танцы${i+1}`}
                            alt={`Галерея ${i+1}`}
                            className="w-full h-48 object-cover rounded-lg gallery-img"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Registration() {
    const [form, setForm] = React.useState({ name: '', email: '', phone: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        alert('Заявка отправлена!');
        setForm({ name: '', email: '', phone: '' });
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Запишитесь на занятие</h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label className="block text-gray-700">ФИО</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Почта</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Телефон</label>
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                        Отправить
                    </button>
                </form>
            </div>
        </section>
    );
}

function Schedule() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">График работы</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-xl font-semibold">Общие занятия</h3>
                        <p>Пн-Пт: 10:00–20:00<br />Сб-Вс: 12:00–18:00</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Индивидуальные занятия</h3>
                        <p>По предварительной записи<br />Ежедневно: 9:00–22:00</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Payment() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Оплата занятий</h2>
                <p className="text-lg text-gray-700 mb-6 text-center">
                    Выберите удобный вариант оплаты за урок.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                        Оплатить разовое занятие
                    </button>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                        Купить абонемент
                    </button>
                </div>
            </div>
        </section>
    );
}

function News() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Новости</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-100 rounded-lg">
                        <h3 className="text-xl font-semibold">Мастер-класс по хип-хопу</h3>
                        <p className="text-gray-600">15 мая 2025 — не пропустите!</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg">
                        <h3 className="text-xl font-semibold">Открытие нового зала</h3>
                        <p className="text-gray-600">1 июня 2025 — ждем вас!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="bg-blue-600 text-white py-6">
            <div className="container mx-auto text-center">
                <p>© 2025 Школа танцев "Ритм". Все права защищены.</p>
                <p>Контакты: +7 (999) 123-45-67 | info@ritm.dance</p>
            </div>
        </footer>
    );
}

function App() {
    return (
        <div>
            <Header />
            <StudioInfo />
            <Trainers />
            <Gallery />
            <Registration />
            <Schedule />
            <Payment />
            <News />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
