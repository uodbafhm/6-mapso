import React, { useState } from 'react';
import { 
  Stethoscope, Baby, Syringe, Sparkles, Activity, Shield,
  MapPin, Phone, Mail, Clock, Moon, Sun, Menu, X, ChevronRight, Globe, ChevronDown, MessageCircle
} from 'lucide-react';

const translations: Record<string, any> = {
  FR: {
    nav: { home: "Accueil", services: "Services", appointment: "Rendez-vous", team: "Notre Équipe", contact: "Contact", subtitle: "Cabinet Dentaire" },
    hero: { title: "Cabinet Dentaire Bakraoui", subtitle: "Votre sourire, notre priorité.", desc: "Bienvenue sur le site officiel de notre cabinet dentaire. Notre équipe vous accueille avec professionnalisme et bienveillance pour des soins dentaires de qualité, accessibles à tous. Découvrez nos services, prenez rendez-vous en ligne et recevez nos meilleurs conseils pour votre santé bucco-dentaire.", cta: "Voir nos services" },
    services: { title: "Nos Services", subtitle: "Découvrez l'ensemble de nos prestations dentaires, pensées pour toute la famille." },
    servicesList: [
      { title: "Consultation & Diagnostic", desc: "Une évaluation complète de votre santé bucco-dentaire avec conseils adaptés à vos besoins." },
      { title: "Dentisterie pédiatrique", desc: "Soins dentaires dédiés aux enfants et adolescents, dans un environnement rassurant. Prévention, traitements précoces et suivi." },
      { title: "Chirurgie & Implantologie", desc: "Interventions chirurgicales, extractions complexes et pose d'implants dentaires pour remplacer durablement les dents manquantes." },
      { title: "Esthétique dentaire", desc: "Amélioration de l'apparence du sourire à travers des techniques modernes : blanchiment, facettes, recontouring dentaire." },
      { title: "Orthodontie", desc: "Correction des malpositions dentaires et des mâchoires à l'aide d'appareils fixes ou invisibles pour un alignement optimal." },
      { title: "Restauration dentaire", desc: "Restauration des dents absentes ou endommagées à l'aide de solutions fixes ou amovibles (couronnes, bridges, dentiers)." }
    ],
    appointment: { title: "Prendre Rendez-vous", subtitle: "Remplissez le formulaire ci-dessous et notre équipe vous contactera rapidement.", name: "Nom complet", email: "Email", phone: "Téléphone", slot: "-- Choisir un créneau --", morning: "Matin (09:00 - 13:00)", afternoon: "Après-midi (14:00 - 19:00)", message: "Message (optionnel)", submit: "Envoyer la demande" },
    team: { title: "Notre Équipe", subtitle: "Des professionnels passionnés, à votre écoute pour un accompagnement de qualité." },
    teamList: [
      { name: "Dr. Anouar", role: "Dentiste omnipraticien", desc: "Le Dr. Anouar, dentiste omnipraticien, assure des soins variés allant des traitements préventifs aux soins esthétiques et prothétiques. Il accorde une grande importance à l'écoute et au confort de ses patients tout en garantissant des soins de qualité." },
      { name: "Dr. Adil", role: "Chirurgien-Dentiste", desc: "Spécialisé en soins dentaires préventifs et esthétiques, le Dr. Adil accompagne chaque patient avec expertise et bienveillance. Il est reconnu pour sa précision et son approche humaine." }
    ],
    contact: { title: "Contact", subtitle: "Pour toute question ou information complémentaire, contactez-nous via le formulaire ou les coordonnées ci-dessous.", addressLabel: "Adresse :", address: "Avenue Hassan II, Casablanca", phoneLabel: "Téléphone :", whatsappLabel: "WhatsApp :", emailLabel: "Email :", hoursLabel: "Horaires :", hours1: "Lun - Ven : 09h00 - 19h00", hours2: "Samedi : 09h00 - 14h00", msgPlaceholder: "Votre message...", submit: "Envoyer", city: "Casablanca, Maroc" },
    footer: { rights: "Tous droits réservés." }
  },
  AR: {
    nav: { home: "الرئيسية", services: "خدماتنا", appointment: "موعد", team: "فريقنا", contact: "اتصل بنا", subtitle: "عيادة طب الأسنان" },
    hero: { title: "عيادة طب الأسنان البكراوي", subtitle: "ابتسامتك هي أولويتنا.", desc: "مرحباً بكم في الموقع الرسمي لعيادتنا. يستقبلكم فريقنا باحترافية وعناية لتقديم رعاية أسنان عالية الجودة ومتاحة للجميع. اكتشف خدماتنا، احجز موعدك عبر الإنترنت واحصل على أفضل النصائح لصحة فمك وأسنانك.", cta: "اكتشف خدماتنا" },
    services: { title: "خدماتنا", subtitle: "اكتشف جميع خدماتنا في طب الأسنان، المصممة لجميع أفراد الأسرة." },
    servicesList: [
      { title: "استشارة وتشخيص", desc: "تقييم شامل لصحة الفم والأسنان مع نصائح مخصصة لاحتياجاتك." },
      { title: "طب أسنان الأطفال", desc: "رعاية مخصصة للأطفال والمراهقين في بيئة مطمئنة. وقاية، علاجات مبكرة ومتابعة." },
      { title: "جراحة وزراعة الأسنان", desc: "تدخلات جراحية، قلع معقد وزراعة الأسنان لتعويض الأسنان المفقودة بشكل دائم." },
      { title: "تجميل الأسنان", desc: "تحسين مظهر الابتسامة من خلال تقنيات حديثة: تبييض، قشور، وإعادة تشكيل الأسنان." },
      { title: "تقويم الأسنان", desc: "تصحيح وضعية الأسنان والفكين باستخدام أجهزة ثابتة أو شفافة لمحاذاة مثالية." },
      { title: "ترميم الأسنان", desc: "ترميم الأسنان المفقودة أو التالفة باستخدام حلول ثابتة أو متحركة (تيجان، جسور، أطقم)." }
    ],
    appointment: { title: "احجز موعداً", subtitle: "املأ النموذج أدناه وسيقوم فريقنا بالاتصال بك في أقرب وقت.", name: "الاسم الكامل", email: "البريد الإلكتروني", phone: "رقم الهاتف", slot: "-- اختر فترة --", morning: "الصباح (09:00 - 13:00)", afternoon: "المساء (14:00 - 19:00)", message: "رسالة (اختياري)", submit: "إرسال الطلب" },
    team: { title: "فريقنا", subtitle: "محترفون شغوفون، في الاستماع لتقديم مرافقة عالية الجودة." },
    teamList: [
      { name: "د. أنوار", role: "طبيب أسنان عام", desc: "يقدم د. أنوار رعاية متنوعة تتراوح من العلاجات الوقائية إلى التجميلية والتعويضية. يولي أهمية كبيرة للاستماع لمرضاه وراحتهم مع ضمان رعاية عالية الجودة." },
      { name: "د. عادل", role: "جراح أسنان", desc: "متخصص في رعاية الأسنان الوقائية والتجميلية، يرافق د. عادل كل مريض بخبرة وعناية. معروف بدقته ونهجه الإنساني." }
    ],
    contact: { title: "اتصل بنا", subtitle: "لأي سؤال أو معلومات إضافية، اتصل بنا عبر النموذج أو المعلومات أدناه.", addressLabel: "العنوان :", address: "شارع الحسن الثاني، الدار البيضاء", phoneLabel: "الهاتف :", whatsappLabel: "واتساب :", emailLabel: "البريد :", hoursLabel: "أوقات العمل :", hours1: "الإثنين - الجمعة : 09:00 - 19:00", hours2: "السبت : 09:00 - 14:00", msgPlaceholder: "رسالتك...", submit: "إرسال", city: "الدار البيضاء، المغرب" },
    footer: { rights: "جميع الحقوق محفوظة." }
  },
  EN: {
    nav: { home: "Home", services: "Services", appointment: "Appointment", team: "Our Team", contact: "Contact", subtitle: "Dental Clinic" },
    hero: { title: "Bakraoui Dental Clinic", subtitle: "Your smile, our priority.", desc: "Welcome to the official website of our dental clinic. Our team welcomes you with professionalism and care for high-quality dental care, accessible to all. Discover our services, book an appointment online, and get our best advice for your oral health.", cta: "See our services" },
    services: { title: "Our Services", subtitle: "Discover all our dental services, designed for the whole family." },
    servicesList: [
      { title: "Consultation & Diagnosis", desc: "A complete assessment of your oral health with advice tailored to your needs." },
      { title: "Pediatric Dentistry", desc: "Dental care dedicated to children and teenagers, in a reassuring environment. Prevention, early treatments and follow-up." },
      { title: "Surgery & Implantology", desc: "Surgical interventions, complex extractions and placement of dental implants to permanently replace missing teeth." },
      { title: "Cosmetic Dentistry", desc: "Improving the appearance of the smile through modern techniques: whitening, veneers, dental recontouring." },
      { title: "Orthodontics", desc: "Correction of dental and jaw malpositions using fixed or invisible appliances for optimal alignment." },
      { title: "Dental Restoration", desc: "Restoration of missing or damaged teeth using fixed or removable solutions (crowns, bridges, dentures)." }
    ],
    appointment: { title: "Book an Appointment", subtitle: "Fill out the form below and our team will contact you shortly.", name: "Full Name", email: "Email", phone: "Phone", slot: "-- Choose a time slot --", morning: "Morning (09:00 - 13:00)", afternoon: "Afternoon (14:00 - 19:00)", message: "Message (optional)", submit: "Send request" },
    team: { title: "Our Team", subtitle: "Passionate professionals, listening to you for quality support." },
    teamList: [
      { name: "Dr. Anouar", role: "General Dentist", desc: "Dr. Anouar, a general dentist, provides various care ranging from preventive treatments to aesthetic and prosthetic care. He attaches great importance to listening to and comforting his patients while guaranteeing quality care." },
      { name: "Dr. Adil", role: "Dental Surgeon", desc: "Specialized in preventive and aesthetic dental care, Dr. Adil accompanies each patient with expertise and benevolence. He is recognized for his precision and human approach." }
    ],
    contact: { title: "Contact", subtitle: "For any questions or further information, contact us via the form or the details below.", addressLabel: "Address:", address: "Hassan II Avenue, Casablanca", phoneLabel: "Phone:", whatsappLabel: "WhatsApp:", emailLabel: "Email:", hoursLabel: "Hours:", hours1: "Mon - Fri: 09:00 - 19:00", hours2: "Saturday: 09:00 - 14:00", msgPlaceholder: "Your message...", submit: "Send", city: "Casablanca, Morocco" },
    footer: { rights: "All rights reserved." }
  },
  ES: {
    nav: { home: "Inicio", services: "Servicios", appointment: "Cita", team: "Equipo", contact: "Contacto", subtitle: "Clínica Dental" },
    hero: { title: "Clínica Dental Bakraoui", subtitle: "Tu sonrisa, nuestra prioridad.", desc: "Bienvenido al sitio web oficial de nuestra clínica dental. Nuestro equipo le da la bienvenida con profesionalismo y cuidado para una atención dental de alta calidad, accesible para todos. Descubra nuestros servicios, reserve una cita en línea y reciba nuestros mejores consejos para su salud bucal.", cta: "Ver nuestros servicios" },
    services: { title: "Nuestros Servicios", subtitle: "Descubra todos nuestros servicios dentales, diseñados para toda la familia." },
    servicesList: [
      { title: "Consulta y Diagnóstico", desc: "Una evaluación completa de su salud bucal con consejos adaptados a sus necesidades." },
      { title: "Odontología Pediátrica", desc: "Atención dental dedicada a niños y adolescentes, en un entorno tranquilizador. Prevención, tratamientos tempranos y seguimiento." },
      { title: "Cirugía e Implantología", desc: "Intervenciones quirúrgicas, extracciones complejas y colocación de implantes dentales para reemplazar permanentemente los dientes faltantes." },
      { title: "Estética Dental", desc: "Mejora de la apariencia de la sonrisa a través de técnicas modernas: blanqueamiento, carillas, recontorneado dental." },
      { title: "Ortodoncia", desc: "Corrección de malposiciones dentales y de la mandíbula mediante aparatos fijos o invisibles para una alineación óptima." },
      { title: "Restauración Dental", desc: "Restauración de dientes faltantes o dañados mediante soluciones fijas o removibles (coronas, puentes, dentaduras)." }
    ],
    appointment: { title: "Pedir una Cita", subtitle: "Complete el formulario a continuación y nuestro equipo se comunicará con usted en breve.", name: "Nombre completo", email: "Correo electrónico", phone: "Teléfono", slot: "-- Elija un horario --", morning: "Mañana (09:00 - 13:00)", afternoon: "Tarde (14:00 - 19:00)", message: "Mensaje (opcional)", submit: "Enviar solicitud" },
    team: { title: "Nuestro Equipo", subtitle: "Profesionales apasionados, escuchándole para un apoyo de calidad." },
    teamList: [
      { name: "Dr. Anouar", role: "Dentista General", desc: "El Dr. Anouar, dentista general, brinda diversos cuidados que van desde tratamientos preventivos hasta cuidados estéticos y protésicos. Da gran importancia a escuchar y reconfortar a sus pacientes mientras garantiza una atención de calidad." },
      { name: "Dr. Adil", role: "Cirujano Dental", desc: "Especializado en atención dental preventiva y estética, el Dr. Adil acompaña a cada paciente con experiencia y benevolencia. Es reconocido por su precisión y enfoque humano." }
    ],
    contact: { title: "Contacto", subtitle: "Para cualquier pregunta o información adicional, contáctenos a través del formulario o los detalles a continuación.", addressLabel: "Dirección:", address: "Avenida Hassan II, Casablanca", phoneLabel: "Teléfono:", whatsappLabel: "WhatsApp:", emailLabel: "Correo:", hoursLabel: "Horario:", hours1: "Lun - Vie: 09:00 - 19:00", hours2: "Sábado: 09:00 - 14:00", msgPlaceholder: "Tu mensaje...", submit: "Enviar", city: "Casablanca, Marruecos" },
    footer: { rights: "Todos los derechos reservados." }
  }
};

const Navbar = ({ darkMode, toggleDarkMode, language, setLanguage, t }: { darkMode: boolean, toggleDarkMode: () => void, language: string, setLanguage: (lang: string) => void, t: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const languages = ['FR', 'EN', 'ES', 'AR'];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm dark:border-b dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src="https://cdn-icons-png.flaticon.com/512/2818/2818366.png" alt="Logo Cabinet Bakraoui" className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#22366b] dark:text-white leading-none transition-colors duration-300">MAPSO</span>
                <span className="text-[10px] font-medium text-[#007c91] uppercase tracking-wider">{t.nav.subtitle}</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="relative text-sm font-medium text-[#22366b] dark:text-gray-300 hover:text-[#007c91] dark:hover:text-white transition-colors group">
              {t.nav.home}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007c91] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="relative text-sm font-medium text-[#22366b] dark:text-gray-300 hover:text-[#007c91] dark:hover:text-white transition-colors group">
              {t.nav.services}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007c91] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#rendez-vous" className="relative text-sm font-medium text-[#22366b] dark:text-gray-300 hover:text-[#007c91] dark:hover:text-white transition-colors group">
              {t.nav.appointment}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007c91] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#equipe" className="relative text-sm font-medium text-[#22366b] dark:text-gray-300 hover:text-[#007c91] dark:hover:text-white transition-colors group">
              {t.nav.team}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007c91] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative text-sm font-medium text-[#22366b] dark:text-gray-300 hover:text-[#007c91] dark:hover:text-white transition-colors group">
              {t.nav.contact}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007c91] transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <div className="flex items-center space-x-4 border-l border-gray-200 dark:border-gray-700 pl-4">
              <div className="relative">
                <button 
                  onClick={() => setLangOpen(!langOpen)} 
                  className="flex items-center space-x-1 text-[#22366b] dark:text-gray-300 hover:text-[#007c91] dark:hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{language}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {langOpen && (
                  <div className="absolute top-full right-0 mt-4 w-24 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden py-1">
                    {languages.map(l => (
                      <button
                        key={l}
                        onClick={() => { setLanguage(l); setLangOpen(false); }}
                        className={`block w-full text-left px-4 py-2 text-sm transition-colors ${language === l ? 'bg-[#f4f9ff] dark:bg-gray-700 text-[#007c91] dark:text-white font-bold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={toggleDarkMode} className="text-[#22366b] dark:text-gray-300 hover:text-[#007c91] dark:hover:text-yellow-400 hover:rotate-12 transition-all duration-300">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={() => setLangOpen(!langOpen)} 
                className="flex items-center space-x-1 text-[#22366b] dark:text-gray-300 hover:text-[#007c91] dark:hover:text-white transition-colors"
              >
                <span className="text-sm font-medium">{language}</span>
              </button>
              
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 w-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden py-1">
                  {languages.map(l => (
                    <button
                      key={l}
                      onClick={() => { setLanguage(l); setLangOpen(false); }}
                      className={`block w-full text-center px-4 py-2 text-sm transition-colors ${language === l ? 'bg-[#f4f9ff] dark:bg-gray-700 text-[#007c91] dark:text-white font-bold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={toggleDarkMode} className="text-[#22366b] dark:text-gray-300 hover:text-[#007c91] dark:hover:text-yellow-400 transition-colors">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#accueil" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-[#007c91] dark:hover:text-white transition-colors">{t.nav.home}</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-[#007c91] dark:hover:text-white transition-colors">{t.nav.services}</a>
            <a href="#rendez-vous" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-[#007c91] dark:hover:text-white transition-colors">{t.nav.appointment}</a>
            <a href="#equipe" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-[#007c91] dark:hover:text-white transition-colors">{t.nav.team}</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-[#007c91] dark:hover:text-white transition-colors">{t.nav.contact}</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ t }: { t: any }) => {
  return (
    <section id="accueil" className="bg-gradient-to-b from-[#f4f9ff] to-white dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#22366b] dark:text-white mb-6 leading-tight transition-colors duration-300">
              {t.hero.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-[#007c91] font-medium mb-6">
              {t.hero.subtitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed transition-colors duration-300">
              {t.hero.desc}
            </p>
            <a href="#services" className="inline-flex items-center px-8 py-4 bg-[#2b74e2] bg-gradient-to-r from-[#008b9c] to-[#2b74e2] text-white font-medium rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#2b74e2]/30 hover:shadow-[#2b74e2]/50 hover:-translate-y-1 hover:scale-105 group">
              {t.hero.cta}
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
          </div>
          <div className="relative lg:ml-auto group">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Accueil Cabinet Dentaire" 
              className="relative rounded-2xl shadow-[0_0_60px_-15px_rgba(0,191,255,0.5)] object-cover h-[400px] lg:h-[500px] w-full max-w-lg mx-auto border-4 border-white dark:border-gray-800 transition-all duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    icon: <Stethoscope className="w-8 h-8 text-[#007c91]" />,
    title: "Consultation & Diagnostic",
    description: "Une évaluation complète de votre santé bucco-dentaire avec conseils adaptés à vos besoins."
  },
  {
    icon: <Baby className="w-8 h-8 text-[#007c91]" />,
    title: "Dentisterie pédiatrique",
    description: "Soins dentaires dédiés aux enfants et adolescents, dans un environnement rassurant. Prévention, traitements précoces et suivi."
  },
  {
    icon: <Syringe className="w-8 h-8 text-[#007c91]" />,
    title: "Chirurgie & Implantologie",
    description: "Interventions chirurgicales, extractions complexes et pose d'implants dentaires pour remplacer durablement les dents manquantes."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#007c91]" />,
    title: "Esthétique dentaire",
    description: "Amélioration de l'apparence du sourire à travers des techniques modernes : blanchiment, facettes, recontouring dentaire."
  },
  {
    icon: <Activity className="w-8 h-8 text-[#007c91]" />,
    title: "Orthodontie",
    description: "Correction des malpositions dentaires et des mâchoires à l'aide d'appareils fixes ou invisibles pour un alignement optimal."
  },
  {
    icon: <Shield className="w-8 h-8 text-[#007c91]" />,
    title: "Restauration dentaire",
    description: "Restauration des dents absentes ou endommagées à l'aide de solutions fixes ou amovibles (couronnes, bridges, dentiers)."
  }
];

const Services = ({ t }: { t: any }) => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#22366b] dark:text-white inline-block relative transition-colors duration-300">
            {t.services.title}
            <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-[#cce0ff] dark:bg-[#007c91]/30 rounded-full transition-colors duration-300"></div>
          </h2>
          <p className="mt-8 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto transition-colors duration-300">
            {t.services.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.servicesList.map((service: any, index: number) => {
            const icons = [
              <Stethoscope className="w-8 h-8 text-[#007c91] group-hover:text-white transition-colors duration-300" />,
              <Baby className="w-8 h-8 text-[#007c91] group-hover:text-white transition-colors duration-300" />,
              <Syringe className="w-8 h-8 text-[#007c91] group-hover:text-white transition-colors duration-300" />,
              <Sparkles className="w-8 h-8 text-[#007c91] group-hover:text-white transition-colors duration-300" />,
              <Activity className="w-8 h-8 text-[#007c91] group-hover:text-white transition-colors duration-300" />,
              <Shield className="w-8 h-8 text-[#007c91] group-hover:text-white transition-colors duration-300" />
            ];
            return (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:shadow-[#008b9c]/10 dark:hover:shadow-[#008b9c]/20 hover:border-[#cce0ff] dark:hover:border-[#007c91] transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                <div className="w-16 h-16 bg-[#f4f9ff] dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#008b9c] group-hover:to-[#2b74e2] group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-bold text-[#22366b] dark:text-white mb-4 group-hover:text-[#007c91] dark:group-hover:text-[#007c91] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Appointment = ({ t }: { t: any }) => {
  return (
    <section id="rendez-vous" className="py-24 bg-[#f4f9ff]/50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#22366b] dark:text-white inline-block relative transition-colors duration-300">
            {t.appointment.title}
            <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-[#cce0ff] dark:bg-[#007c91]/30 rounded-full transition-colors duration-300"></div>
          </h2>
          <p className="mt-8 text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">
            {t.appointment.subtitle}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-[2rem] shadow-xl shadow-[#22366b]/5 dark:shadow-black/20 border border-white dark:border-gray-700 transition-colors duration-300">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input type="text" placeholder={t.appointment.name} className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 dark:text-white rounded-xl border-transparent focus:bg-white dark:focus:bg-gray-900 focus:border-[#007c91] focus:ring-2 focus:ring-[#007c91]/20 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500" />
              </div>
              <div>
                <input type="email" placeholder={t.appointment.email} className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 dark:text-white rounded-xl border-transparent focus:bg-white dark:focus:bg-gray-900 focus:border-[#007c91] focus:ring-2 focus:ring-[#007c91]/20 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500" />
              </div>
            </div>
            <div>
              <input type="tel" placeholder={t.appointment.phone} className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 dark:text-white rounded-xl border-transparent focus:bg-white dark:focus:bg-gray-900 focus:border-[#007c91] focus:ring-2 focus:ring-[#007c91]/20 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input type="date" className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 dark:text-white rounded-xl border-transparent focus:bg-white dark:focus:bg-gray-900 focus:border-[#007c91] focus:ring-2 focus:ring-[#007c91]/20 outline-none transition-all text-gray-500 dark:text-gray-400" />
              </div>
              <div>
                <select className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 dark:text-white rounded-xl border-transparent focus:bg-white dark:focus:bg-gray-900 focus:border-[#007c91] focus:ring-2 focus:ring-[#007c91]/20 outline-none transition-all text-gray-500 dark:text-gray-400 appearance-none">
                  <option value="">{t.appointment.slot}</option>
                  <option value="matin">{t.appointment.morning}</option>
                  <option value="apres-midi">{t.appointment.afternoon}</option>
                </select>
              </div>
            </div>
            <div>
              <textarea rows={4} placeholder={t.appointment.message} className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 dark:text-white rounded-xl border-transparent focus:bg-white dark:focus:bg-gray-900 focus:border-[#007c91] focus:ring-2 focus:ring-[#007c91]/20 outline-none transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500"></textarea>
            </div>
            <div className="text-center pt-4">
              <button type="submit" className="px-10 py-4 bg-gradient-to-r from-[#008b9c] to-[#2b74e2] text-white font-medium rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#2b74e2]/30 hover:shadow-[#2b74e2]/50 hover:-translate-y-1 hover:scale-105 w-full md:w-auto">
                {t.appointment.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Team = ({ t }: { t: any }) => {
  return (
    <section id="equipe" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#22366b] dark:text-white inline-block relative transition-colors duration-300">
            {t.team.title}
            <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-[#cce0ff] dark:bg-[#007c91]/30 rounded-full transition-colors duration-300"></div>
          </h2>
          <p className="mt-8 text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">
            {t.team.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {t.teamList.map((member: any, index: number) => {
            const images = [
              "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              "https://images.pexels.com/photos/6812559/pexels-photo-6812559.jpeg?_gl=1*11zdtx0*_ga*MTI5MzU4OTI2OC4xNzY4MTQzMzQ4*_ga_8JE65Q40S6*czE3NzIwNTQ3MjAkbzEyJGcxJHQxNzcyMDU0NzUzJGoyNyRsMCRoMA.."
            ];
            return (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-[2rem] shadow-lg shadow-gray-100/50 dark:shadow-black/30 border border-gray-50 dark:border-gray-700 text-center flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#008b9c]/10 dark:hover:shadow-[#008b9c]/20 transition-all duration-300 group cursor-pointer">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border-4 border-[#f4f9ff] dark:border-gray-800 shadow-inner group-hover:border-[#007c91] dark:group-hover:border-[#007c91] transition-colors duration-300">
                  <img src={images[index]} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#22366b] dark:text-white mb-2 group-hover:text-[#007c91] dark:group-hover:text-[#007c91] transition-colors duration-300">{member.name}</h3>
                <p className="text-[#007c91] font-medium mb-6">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">{member.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ t }: { t: any }) => {
  return (
    <section id="contact" className="py-24 bg-[#f4f9ff]/50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#22366b] dark:text-white inline-block relative transition-colors duration-300">
            {t.contact.title}
            <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-[#cce0ff] dark:bg-[#007c91]/30 rounded-full transition-colors duration-300"></div>
          </h2>
          <p className="mt-8 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto transition-colors duration-300">
            {t.contact.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-10">
            <div className="flex items-start space-x-6 group cursor-pointer">
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-[#007c91] group-hover:bg-[#007c91] group-hover:text-white transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 rtl:ml-6">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300">
                <h4 className="text-lg font-bold text-[#22366b] dark:text-white mb-2 group-hover:text-[#007c91] dark:group-hover:text-[#007c91] transition-colors">{t.contact.addressLabel}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">{t.contact.address}</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group cursor-pointer">
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-[#007c91] group-hover:bg-[#007c91] group-hover:text-white transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 rtl:ml-6">
                <Phone className="w-6 h-6" />
              </div>
              <div className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300">
                <h4 className="text-lg font-bold text-[#22366b] dark:text-white mb-2 group-hover:text-[#007c91] dark:group-hover:text-[#007c91] transition-colors">{t.contact.phoneLabel}</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300" dir="ltr">+212 5 00 00 00 00</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group cursor-pointer">
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-[#007c91] group-hover:bg-[#007c91] group-hover:text-white transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 rtl:ml-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300">
                <h4 className="text-lg font-bold text-[#22366b] dark:text-white mb-2 group-hover:text-[#007c91] dark:group-hover:text-[#007c91] transition-colors">{t.contact.whatsappLabel}</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300" dir="ltr">+212 6 00 00 00 00</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group cursor-pointer">
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-[#007c91] group-hover:bg-[#007c91] group-hover:text-white transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 rtl:ml-6">
                <Mail className="w-6 h-6" />
              </div>
              <div className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300">
                <h4 className="text-lg font-bold text-[#22366b] dark:text-white mb-2 group-hover:text-[#007c91] dark:group-hover:text-[#007c91] transition-colors">{t.contact.emailLabel}</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Mapso@smma.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group cursor-pointer">
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-[#007c91] group-hover:bg-[#007c91] group-hover:text-white transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 rtl:ml-6">
                <Clock className="w-6 h-6" />
              </div>
              <div className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300">
                <h4 className="text-lg font-bold text-[#22366b] dark:text-white mb-2 group-hover:text-[#007c91] dark:group-hover:text-[#007c91] transition-colors">{t.contact.hoursLabel}</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{t.contact.hours1}</p>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{t.contact.hours2}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-[2rem] shadow-xl shadow-[#22366b]/5 dark:shadow-black/20 border border-white dark:border-gray-700 transition-colors duration-300">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder={t.appointment.name} className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 dark:text-white rounded-xl border-transparent focus:bg-white dark:focus:bg-gray-900 focus:border-[#007c91] focus:ring-2 focus:ring-[#007c91]/20 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500" />
              </div>
              <div>
                <input type="email" placeholder={t.appointment.email} className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 dark:text-white rounded-xl border-transparent focus:bg-white dark:focus:bg-gray-900 focus:border-[#007c91] focus:ring-2 focus:ring-[#007c91]/20 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500" />
              </div>
              <div>
                <textarea rows={5} placeholder={t.contact.msgPlaceholder} className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-900 dark:text-white rounded-xl border-transparent focus:bg-white dark:focus:bg-gray-900 focus:border-[#007c91] focus:ring-2 focus:ring-[#007c91]/20 outline-none transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-[#008b9c] to-[#2b74e2] text-white font-medium rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#2b74e2]/30 hover:shadow-[#2b74e2]/50 hover:-translate-y-1 hover:scale-[1.02]">
                  {t.contact.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-[2rem] overflow-hidden relative shadow-inner transition-colors duration-300">
          <iframe
            src="https://maps.google.com/maps?q=Casablanca&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ t }: { t: any }) => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center space-x-3 mb-8">
          <img src="https://cdn-icons-png.flaticon.com/512/2818/2818366.png" alt="Logo MAPSO" className="w-8 h-8 opacity-90" />
          <h3 className="text-2xl font-bold text-[#22366b] dark:text-white transition-colors duration-300">MAPSO</h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
          <div className="flex items-center text-gray-600 dark:text-gray-400 transition-colors duration-300">
            <MapPin className="w-4 h-4 mr-2 text-[#007c91] rtl:ml-2 rtl:mr-0" />
            <span className="text-sm">{t.contact.address}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400 transition-colors duration-300">
            <Phone className="w-4 h-4 mr-2 text-[#007c91] rtl:ml-2 rtl:mr-0" />
            <span className="text-sm" dir="ltr">+212 5 00 00 00 00</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400 transition-colors duration-300">
            <MessageCircle className="w-4 h-4 mr-2 text-[#007c91] rtl:ml-2 rtl:mr-0" />
            <span className="text-sm" dir="ltr">+212 6 00 00 00 00</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400 transition-colors duration-300">
            <Mail className="w-4 h-4 mr-2 text-[#007c91] rtl:ml-2 rtl:mr-0" />
            <span className="text-sm">Mapso@smma.com</span>
          </div>
        </div>
        <p className="text-gray-400 dark:text-gray-500 text-sm transition-colors duration-300">
          © {new Date().getFullYear()} MAPSO. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('FR');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const t = translations[language] || translations['FR'];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 selection:bg-[#cce0ff] dark:selection:bg-[#007c91] selection:text-[#22366b] dark:selection:text-white transition-colors duration-300" dir={language === 'AR' ? 'rtl' : 'ltr'}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} language={language} setLanguage={setLanguage} t={t} />
      <main>
        <Hero t={t} />
        <Services t={t} />
        <Appointment t={t} />
        <Team t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
