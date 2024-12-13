# Blog Projesi

Next.js ve Express.js kullanılarak geliştirilmiş bir blog projesidir.

## Kurulum

### Backend
`.env` dosyasına aşağıdaki bilgileri ekleyin:
- `JWT_SECRET`: Kendi belirlediğiniz bir JWT secret değeri
- `MONGODB_URL`: MongoDB bağlantı URL'iniz

Backend'i başlatmak için şu adımları izleyin:
1. `npm install`
2. `nodemon index.js`

### Frontend
Frontend'i başlatmak için şu adımları izleyin:
1. `npm install`
2. `npm run dev`

## Kullanılan Teknolojiler

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)

## Özellikler

- Kullanıcı kayıt ve giriş (Test için yazılmıştır; dilerseniz devre dışı bırakabilirsiniz)
- Menü düzenleme
- Yazıları düzenleme ve ekleme
- Footer ayarları
- Kategori işlemleri

## Eklenmesi Planlanan Özellikler

- Sayfa ekleme, silme ve düzenleme
- Resim yükleme desteği (Şu an tüm yazılar için standart bir resim kullanılmaktadır)

---

Proje hakkında geri bildirimleriniz ve önerileriniz için katkıda bulunabilirsiniz!
