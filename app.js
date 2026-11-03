/* ===== VelvetVault App Logic + Multi-Language Support ===== */
const STORAGE_KEY = 'velvetvault_media';
const LANG_KEY = 'velvetvault_lang';
const ADMIN_PASSWORD = 'velvet2026';

// ---------- Translations (UI strings) ----------
// Language names in the selector are always shown in English
const TRANSLATIONS = {
  en: {
    nav_home: "Home",
    nav_gallery: "Gallery",
    nav_videos: "Videos",
    nav_admin: "Admin",
    hero_title: "Welcome to <span>VelvetVault</span>",
    hero_subtitle: "Exclusive photos & videos of the hottest adult stars. Fresh content uploaded daily by our team.",
    hero_btn: "Explore Now",
    stat_photos: "Photos",
    stat_videos: "Videos",
    stat_new: "New Content",
    gallery_title: "Photo Gallery",
    gallery_subtitle: "Hot & nude shots of your favorite performers",
    filter_all: "All",
    filter_blonde: "Blonde",
    filter_brunette: "Brunette",
    filter_latina: "Latina",
    filter_asian: "Asian",
    filter_ebony: "Ebony",
    filter_other: "Other",
    videos_title: "Latest Videos",
    videos_subtitle: "Full-length scenes and exclusive clips",
    footer_copy: "© 2026 VelvetVault. All rights reserved. 18+ only.",
    footer_note: "This is a demo site. Replace sample media with your own content via the Admin panel.",
    admin_label: "Admin",
    login_subtitle: "Enter admin password to continue",
    password_placeholder: "Password",
    login_btn: "Login",
    login_hint: "Default password: <code>velvet2026</code>",
    login_error: "Incorrect password",
    view_site: "View Site",
    logout: "Logout",
    content_manager: "Content Manager",
    content_manager_desc: "Upload photos and videos. Everything you add becomes visible to all visitors instantly.",
    upload_new: "Upload New Content",
    label_title: "Title *",
    label_performer: "Performer / Star",
    label_category: "Category",
    label_type: "Type *",
    label_file: "Media File *",
    label_desc: "Description (optional)",
    ph_title: "e.g. Riley Reid – Bedroom Session",
    ph_performer: "e.g. Riley Reid",
    ph_desc: "Short description...",
    drop_text: "Click or drag photo / video here",
    drop_hint: "Images (JPG, PNG, WEBP) or Videos (MP4, WEBM)",
    upload_btn: "Upload & Publish",
    published_content: "Published Content",
    stat_photos_lower: "photos",
    stat_videos_lower: "videos",
    type_photo: "Photo",
    type_video: "Video",
    empty_photos: "No photos yet. Admin can upload some!",
    empty_videos: "No videos yet. Admin can upload some!",
    empty_admin: "No content yet. Upload your first photo or video above!",
    upload_success: "Uploaded successfully! It is now visible on the public site.",
    delete_confirm: "Delete this item permanently?",
    badge_photo: "Photo",
    badge_video: "Video"
  },
  es: {
    nav_home: "Inicio",
    nav_gallery: "Galería",
    nav_videos: "Vídeos",
    nav_admin: "Admin",
    hero_title: "Bienvenido a <span>VelvetVault</span>",
    hero_subtitle: "Fotos y vídeos exclusivos de las estrellas adultas más calientes. Contenido fresco subido diariamente por nuestro equipo.",
    hero_btn: "Explorar ahora",
    stat_photos: "Fotos",
    stat_videos: "Vídeos",
    stat_new: "Nuevo contenido",
    gallery_title: "Galería de fotos",
    gallery_subtitle: "Fotos calientes y desnudos de tus artistas favoritas",
    filter_all: "Todos",
    filter_blonde: "Rubia",
    filter_brunette: "Morena",
    filter_latina: "Latina",
    filter_asian: "Asiática",
    filter_ebony: "Ebony",
    filter_other: "Otro",
    videos_title: "Últimos vídeos",
    videos_subtitle: "Escenas completas y clips exclusivos",
    footer_copy: "© 2026 VelvetVault. Todos los derechos reservados. Solo +18.",
    footer_note: "Este es un sitio demo. Reemplaza el contenido de muestra desde el panel de Admin.",
    admin_label: "Admin",
    login_subtitle: "Introduce la contraseña de administrador",
    password_placeholder: "Contraseña",
    login_btn: "Iniciar sesión",
    login_hint: "Contraseña por defecto: <code>velvet2026</code>",
    login_error: "Contraseña incorrecta",
    view_site: "Ver sitio",
    logout: "Cerrar sesión",
    content_manager: "Gestor de contenido",
    content_manager_desc: "Sube fotos y vídeos. Todo lo que añadas será visible al instante para todos los visitantes.",
    upload_new: "Subir nuevo contenido",
    label_title: "Título *",
    label_performer: "Intérprete / Estrella",
    label_category: "Categoría",
    label_type: "Tipo *",
    label_file: "Archivo multimedia *",
    label_desc: "Descripción (opcional)",
    ph_title: "ej. Riley Reid – Sesión en el dormitorio",
    ph_performer: "ej. Riley Reid",
    ph_desc: "Descripción corta...",
    drop_text: "Haz clic o arrastra foto / vídeo aquí",
    drop_hint: "Imágenes (JPG, PNG, WEBP) o Vídeos (MP4, WEBM)",
    upload_btn: "Subir y publicar",
    published_content: "Contenido publicado",
    stat_photos_lower: "fotos",
    stat_videos_lower: "vídeos",
    type_photo: "Foto",
    type_video: "Vídeo",
    empty_photos: "Aún no hay fotos. ¡El admin puede subir algunas!",
    empty_videos: "Aún no hay vídeos. ¡El admin puede subir algunos!",
    empty_admin: "Aún no hay contenido. ¡Sube tu primera foto o vídeo arriba!",
    upload_success: "¡Subido con éxito! Ahora es visible en el sitio público.",
    delete_confirm: "¿Eliminar este elemento permanentemente?",
    badge_photo: "Foto",
    badge_video: "Vídeo"
  },
  pt: {
    nav_home: "Início",
    nav_gallery: "Galeria",
    nav_videos: "Vídeos",
    nav_admin: "Admin",
    hero_title: "Bem-vindo ao <span>VelvetVault</span>",
    hero_subtitle: "Fotos e vídeos exclusivos das estrelas adultas mais quentes. Conteúdo novo enviado diariamente pela nossa equipe.",
    hero_btn: "Explorar agora",
    stat_photos: "Fotos",
    stat_videos: "Vídeos",
    stat_new: "Novo conteúdo",
    gallery_title: "Galeria de fotos",
    gallery_subtitle: "Fotos quentes e nudes das suas performers favoritas",
    filter_all: "Todos",
    filter_blonde: "Loira",
    filter_brunette: "Morena",
    filter_latina: "Latina",
    filter_asian: "Asiática",
    filter_ebony: "Ebony",
    filter_other: "Outro",
    videos_title: "Últimos vídeos",
    videos_subtitle: "Cenas completas e clips exclusivos",
    footer_copy: "© 2026 VelvetVault. Todos os direitos reservados. Apenas +18.",
    footer_note: "Este é um site demo. Substitua o conteúdo de amostra pelo painel Admin.",
    admin_label: "Admin",
    login_subtitle: "Digite a senha de administrador",
    password_placeholder: "Senha",
    login_btn: "Entrar",
    login_hint: "Senha padrão: <code>velvet2026</code>",
    login_error: "Senha incorreta",
    view_site: "Ver site",
    logout: "Sair",
    content_manager: "Gerenciador de conteúdo",
    content_manager_desc: "Envie fotos e vídeos. Tudo o que você adicionar fica visível instantaneamente para todos os visitantes.",
    upload_new: "Enviar novo conteúdo",
    label_title: "Título *",
    label_performer: "Performer / Estrela",
    label_category: "Categoria",
    label_type: "Tipo *",
    label_file: "Arquivo de mídia *",
    label_desc: "Descrição (opcional)",
    ph_title: "ex. Riley Reid – Sessão no quarto",
    ph_performer: "ex. Riley Reid",
    ph_desc: "Descrição curta...",
    drop_text: "Clique ou arraste foto / vídeo aqui",
    drop_hint: "Imagens (JPG, PNG, WEBP) ou Vídeos (MP4, WEBM)",
    upload_btn: "Enviar e publicar",
    published_content: "Conteúdo publicado",
    stat_photos_lower: "fotos",
    stat_videos_lower: "vídeos",
    type_photo: "Foto",
    type_video: "Vídeo",
    empty_photos: "Ainda não há fotos. O admin pode enviar algumas!",
    empty_videos: "Ainda não há vídeos. O admin pode enviar alguns!",
    empty_admin: "Ainda não há conteúdo. Envie sua primeira foto ou vídeo acima!",
    upload_success: "Enviado com sucesso! Agora está visível no site público.",
    delete_confirm: "Excluir este item permanentemente?",
    badge_photo: "Foto",
    badge_video: "Vídeo"
  },
  fr: {
    nav_home: "Accueil",
    nav_gallery: "Galerie",
    nav_videos: "Vidéos",
    nav_admin: "Admin",
    hero_title: "Bienvenue sur <span>VelvetVault</span>",
    hero_subtitle: "Photos et vidéos exclusives des stars adultes les plus chaudes. Contenu frais ajouté chaque jour par notre équipe.",
    hero_btn: "Explorer maintenant",
    stat_photos: "Photos",
    stat_videos: "Vidéos",
    stat_new: "Nouveau contenu",
    gallery_title: "Galerie photo",
    gallery_subtitle: "Photos sexy et nues de vos actrices préférées",
    filter_all: "Tout",
    filter_blonde: "Blonde",
    filter_brunette: "Brune",
    filter_latina: "Latine",
    filter_asian: "Asiatique",
    filter_ebony: "Ebony",
    filter_other: "Autre",
    videos_title: "Dernières vidéos",
    videos_subtitle: "Scènes complètes et clips exclusifs",
    footer_copy: "© 2026 VelvetVault. Tous droits réservés. 18+ uniquement.",
    footer_note: "Ceci est un site de démo. Remplacez le contenu d'exemple via le panneau Admin.",
    admin_label: "Admin",
    login_subtitle: "Entrez le mot de passe administrateur",
    password_placeholder: "Mot de passe",
    login_btn: "Connexion",
    login_hint: "Mot de passe par défaut : <code>velvet2026</code>",
    login_error: "Mot de passe incorrect",
    view_site: "Voir le site",
    logout: "Déconnexion",
    content_manager: "Gestionnaire de contenu",
    content_manager_desc: "Téléversez photos et vidéos. Tout ce que vous ajoutez devient immédiatement visible pour tous les visiteurs.",
    upload_new: "Ajouter du contenu",
    label_title: "Titre *",
    label_performer: "Interprète / Star",
    label_category: "Catégorie",
    label_type: "Type *",
    label_file: "Fichier média *",
    label_desc: "Description (optionnel)",
    ph_title: "ex. Riley Reid – Session chambre",
    ph_performer: "ex. Riley Reid",
    ph_desc: "Courte description...",
    drop_text: "Cliquez ou glissez photo / vidéo ici",
    drop_hint: "Images (JPG, PNG, WEBP) ou Vidéos (MP4, WEBM)",
    upload_btn: "Téléverser et publier",
    published_content: "Contenu publié",
    stat_photos_lower: "photos",
    stat_videos_lower: "vidéos",
    type_photo: "Photo",
    type_video: "Vidéo",
    empty_photos: "Pas encore de photos. L'admin peut en ajouter !",
    empty_videos: "Pas encore de vidéos. L'admin peut en ajouter !",
    empty_admin: "Pas encore de contenu. Ajoutez votre première photo ou vidéo ci-dessus !",
    upload_success: "Téléversé avec succès ! C'est maintenant visible sur le site public.",
    delete_confirm: "Supprimer cet élément définitivement ?",
    badge_photo: "Photo",
    badge_video: "Vidéo"
  },
  de: {
    nav_home: "Startseite",
    nav_gallery: "Galerie",
    nav_videos: "Videos",
    nav_admin: "Admin",
    hero_title: "Willkommen bei <span>VelvetVault</span>",
    hero_subtitle: "Exklusive Fotos & Videos der heißesten Adult-Stars. Täglich frischer Content von unserem Team.",
    hero_btn: "Jetzt entdecken",
    stat_photos: "Fotos",
    stat_videos: "Videos",
    stat_new: "Neuer Content",
    gallery_title: "Fotogalerie",
    gallery_subtitle: "Heiße & nackte Shots deiner Lieblingsdarstellerinnen",
    filter_all: "Alle",
    filter_blonde: "Blond",
    filter_brunette: "Brünett",
    filter_latina: "Latina",
    filter_asian: "Asiatisch",
    filter_ebony: "Ebony",
    filter_other: "Andere",
    videos_title: "Neueste Videos",
    videos_subtitle: "Vollständige Szenen und exklusive Clips",
    footer_copy: "© 2026 VelvetVault. Alle Rechte vorbehalten. Nur 18+.",
    footer_note: "Dies ist eine Demo-Seite. Ersetze den Beispiel-Content über das Admin-Panel.",
    admin_label: "Admin",
    login_subtitle: "Admin-Passwort eingeben",
    password_placeholder: "Passwort",
    login_btn: "Anmelden",
    login_hint: "Standard-Passwort: <code>velvet2026</code>",
    login_error: "Falsches Passwort",
    view_site: "Seite ansehen",
    logout: "Abmelden",
    content_manager: "Content-Manager",
    content_manager_desc: "Lade Fotos und Videos hoch. Alles was du hinzufügst ist sofort für alle Besucher sichtbar.",
    upload_new: "Neuen Content hochladen",
    label_title: "Titel *",
    label_performer: "Darstellerin / Star",
    label_category: "Kategorie",
    label_type: "Typ *",
    label_file: "Mediendatei *",
    label_desc: "Beschreibung (optional)",
    ph_title: "z.B. Riley Reid – Schlafzimmer-Session",
    ph_performer: "z.B. Riley Reid",
    ph_desc: "Kurze Beschreibung...",
    drop_text: "Klicken oder Foto / Video hierher ziehen",
    drop_hint: "Bilder (JPG, PNG, WEBP) oder Videos (MP4, WEBM)",
    upload_btn: "Hochladen & Veröffentlichen",
    published_content: "Veröffentlichter Content",
    stat_photos_lower: "Fotos",
    stat_videos_lower: "Videos",
    type_photo: "Foto",
    type_video: "Video",
    empty_photos: "Noch keine Fotos. Admin kann welche hochladen!",
    empty_videos: "Noch keine Videos. Admin kann welche hochladen!",
    empty_admin: "Noch kein Content. Lade dein erstes Foto oder Video oben hoch!",
    upload_success: "Erfolgreich hochgeladen! Es ist jetzt auf der öffentlichen Seite sichtbar.",
    delete_confirm: "Dieses Element dauerhaft löschen?",
    badge_photo: "Foto",
    badge_video: "Video"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_gallery: "المعرض",
    nav_videos: "الفيديوهات",
    nav_admin: "المسؤول",
    hero_title: "مرحباً بك في <span>VelvetVault</span>",
    hero_subtitle: "صور وفيديوهات حصرية لأجمل نجوم البالغين. محتوى جديد يُرفع يومياً من فريقنا.",
    hero_btn: "استكشف الآن",
    stat_photos: "صور",
    stat_videos: "فيديوهات",
    stat_new: "محتوى جديد",
    gallery_title: "معرض الصور",
    gallery_subtitle: "صور ساخنة وعارية لمؤدياتك المفضلات",
    filter_all: "الكل",
    filter_blonde: "شقراء",
    filter_brunette: "سمراء",
    filter_latina: "لاتينية",
    filter_asian: "آسيوية",
    filter_ebony: "إيبوني",
    filter_other: "أخرى",
    videos_title: "أحدث الفيديوهات",
    videos_subtitle: "مشاهد كاملة ومقاطع حصرية",
    footer_copy: "© 2026 VelvetVault. جميع الحقوق محفوظة. +18 فقط.",
    footer_note: "هذا موقع تجريبي. استبدل المحتوى النموذجي من لوحة المسؤول.",
    admin_label: "المسؤول",
    login_subtitle: "أدخل كلمة مرور المسؤول للمتابعة",
    password_placeholder: "كلمة المرور",
    login_btn: "تسجيل الدخول",
    login_hint: "كلمة المرور الافتراضية: <code>velvet2026</code>",
    login_error: "كلمة مرور غير صحيحة",
    view_site: "عرض الموقع",
    logout: "تسجيل الخروج",
    content_manager: "مدير المحتوى",
    content_manager_desc: "ارفع صوراً وفيديوهات. كل ما تضيفه يصبح مرئياً فوراً لجميع الزوار.",
    upload_new: "رفع محتوى جديد",
    label_title: "العنوان *",
    label_performer: "المؤدية / النجمة",
    label_category: "الفئة",
    label_type: "النوع *",
    label_file: "ملف الوسائط *",
    label_desc: "الوصف (اختياري)",
    ph_title: "مثال: رايلي ريد – جلسة غرفة النوم",
    ph_performer: "مثال: رايلي ريد",
    ph_desc: "وصف قصير...",
    drop_text: "انقر أو اسحب صورة / فيديو هنا",
    drop_hint: "صور (JPG, PNG, WEBP) أو فيديوهات (MP4, WEBM)",
    upload_btn: "رفع ونشر",
    published_content: "المحتوى المنشور",
    stat_photos_lower: "صور",
    stat_videos_lower: "فيديوهات",
    type_photo: "صورة",
    type_video: "فيديو",
    empty_photos: "لا توجد صور بعد. يمكن للمسؤول رفع بعضها!",
    empty_videos: "لا توجد فيديوهات بعد. يمكن للمسؤول رفع بعضها!",
    empty_admin: "لا يوجد محتوى بعد. ارفع أول صورة أو فيديو أعلاه!",
    upload_success: "تم الرفع بنجاح! أصبح مرئياً الآن على الموقع العام.",
    delete_confirm: "حذف هذا العنصر نهائياً؟",
    badge_photo: "صورة",
    badge_video: "فيديو"
  },
  hi: {
    nav_home: "होम",
    nav_gallery: "गैलरी",
    nav_videos: "वीडियो",
    nav_admin: "एडमिन",
    hero_title: "<span>VelvetVault</span> में आपका स्वागत है",
    hero_subtitle: "सबसे हॉट एडल्ट स्टार्स की एक्सक्लूसिव फोटो और वीडियो। हमारी टीम द्वारा रोज़ नया कंटेंट।",
    hero_btn: "अभी एक्सप्लोर करें",
    stat_photos: "फोटो",
    stat_videos: "वीडियो",
    stat_new: "नया कंटेंट",
    gallery_title: "फोटो गैलरी",
    gallery_subtitle: "आपकी पसंदीदा परफॉर्मर्स की हॉट और न्यूड शॉट्स",
    filter_all: "सभी",
    filter_blonde: "ब्लॉन्ड",
    filter_brunette: "ब्रुनेट",
    filter_latina: "लैटिना",
    filter_asian: "एशियन",
    filter_ebony: "एबोनी",
    filter_other: "अन्य",
    videos_title: "नवीनतम वीडियो",
    videos_subtitle: "फुल-लेंथ सीन और एक्सक्लूसिव क्लिप्स",
    footer_copy: "© 2026 VelvetVault. सर्वाधिकार सुरक्षित। केवल 18+।",
    footer_note: "यह एक डेमो साइट है। एडमिन पैनल से सैंपल कंटेंट बदलें।",
    admin_label: "एडमिन",
    login_subtitle: "जारी रखने के लिए एडमिन पासवर्ड डालें",
    password_placeholder: "पासवर्ड",
    login_btn: "लॉगिन",
    login_hint: "डिफ़ॉल्ट पासवर्ड: <code>velvet2026</code>",
    login_error: "गलत पासवर्ड",
    view_site: "साइट देखें",
    logout: "लॉगआउट",
    content_manager: "कंटेंट मैनेजर",
    content_manager_desc: "फोटो और वीडियो अपलोड करें। जो भी आप जोड़ेंगे वह तुरंत सभी विज़िटर्स को दिखेगा।",
    upload_new: "नया कंटेंट अपलोड करें",
    label_title: "टाइटल *",
    label_performer: "परफॉर्मर / स्टार",
    label_category: "कैटेगरी",
    label_type: "टाइप *",
    label_file: "मीडिया फ़ाइल *",
    label_desc: "विवरण (वैकल्पिक)",
    ph_title: "उदा. राइली रीड – बेडरूम सेशन",
    ph_performer: "उदा. राइली रीड",
    ph_desc: "संक्षिप्त विवरण...",
    drop_text: "क्लिक करें या फोटो / वीडियो यहाँ खींचें",
    drop_hint: "इमेज (JPG, PNG, WEBP) या वीडियो (MP4, WEBM)",
    upload_btn: "अपलोड और पब्लिश करें",
    published_content: "पब्लिश किया गया कंटेंट",
    stat_photos_lower: "फोटो",
    stat_videos_lower: "वीडियो",
    type_photo: "फोटो",
    type_video: "वीडियो",
    empty_photos: "अभी कोई फोटो नहीं। एडमिन अपलोड कर सकते हैं!",
    empty_videos: "अभी कोई वीडियो नहीं। एडमिन अपलोड कर सकते हैं!",
    empty_admin: "अभी कोई कंटेंट नहीं। ऊपर अपना पहला फोटो या वीडियो अपलोड करें!",
    upload_success: "सफलतापूर्वक अपलोड हो गया! अब यह पब्लिक साइट पर दिख रहा है।",
    delete_confirm: "इस आइटम को स्थायी रूप से डिलीट करें?",
    badge_photo: "फोटो",
    badge_video: "वीडियो"
  },
  it: {
    nav_home: "Home",
    nav_gallery: "Galleria",
    nav_videos: "Video",
    nav_admin: "Admin",
    hero_title: "Benvenuto su <span>VelvetVault</span>",
    hero_subtitle: "Foto e video esclusivi delle star adult più calde. Contenuti freschi caricati ogni giorno dal nostro team.",
    hero_btn: "Esplora ora",
    stat_photos: "Foto",
    stat_videos: "Video",
    stat_new: "Nuovi contenuti",
    gallery_title: "Galleria foto",
    gallery_subtitle: "Scatti hot e nudi delle tue performer preferite",
    filter_all: "Tutti",
    filter_blonde: "Bionda",
    filter_brunette: "Bruna",
    filter_latina: "Latina",
    filter_asian: "Asiatica",
    filter_ebony: "Ebony",
    filter_other: "Altro",
    videos_title: "Ultimi video",
    videos_subtitle: "Scene complete e clip esclusive",
    footer_copy: "© 2026 VelvetVault. Tutti i diritti riservati. Solo 18+.",
    footer_note: "Questo è un sito demo. Sostituisci i contenuti di esempio dal pannello Admin.",
    admin_label: "Admin",
    login_subtitle: "Inserisci la password admin per continuare",
    password_placeholder: "Password",
    login_btn: "Accedi",
    login_hint: "Password predefinita: <code>velvet2026</code>",
    login_error: "Password errata",
    view_site: "Vedi sito",
    logout: "Esci",
    content_manager: "Gestore contenuti",
    content_manager_desc: "Carica foto e video. Tutto ciò che aggiungi diventa subito visibile a tutti i visitatori.",
    upload_new: "Carica nuovo contenuto",
    label_title: "Titolo *",
    label_performer: "Performer / Star",
    label_category: "Categoria",
    label_type: "Tipo *",
    label_file: "File media *",
    label_desc: "Descrizione (opzionale)",
    ph_title: "es. Riley Reid – Sessione in camera",
    ph_performer: "es. Riley Reid",
    ph_desc: "Breve descrizione...",
    drop_text: "Clicca o trascina foto / video qui",
    drop_hint: "Immagini (JPG, PNG, WEBP) o Video (MP4, WEBM)",
    upload_btn: "Carica e pubblica",
    published_content: "Contenuti pubblicati",
    stat_photos_lower: "foto",
    stat_videos_lower: "video",
    type_photo: "Foto",
    type_video: "Video",
    empty_photos: "Nessuna foto ancora. L'admin può caricarne!",
    empty_videos: "Nessun video ancora. L'admin può caricarne!",
    empty_admin: "Nessun contenuto ancora. Carica la tua prima foto o video sopra!",
    upload_success: "Caricato con successo! Ora è visibile sul sito pubblico.",
    delete_confirm: "Eliminare questo elemento definitivamente?",
    badge_photo: "Foto",
    badge_video: "Video"
  },
  ru: {
    nav_home: "Главная",
    nav_gallery: "Галерея",
    nav_videos: "Видео",
    nav_admin: "Админ",
    hero_title: "Добро пожаловать в <span>VelvetVault</span>",
    hero_subtitle: "Эксклюзивные фото и видео самых горячих взрослых звёзд. Свежий контент каждый день от нашей команды.",
    hero_btn: "Смотреть сейчас",
    stat_photos: "Фото",
    stat_videos: "Видео",
    stat_new: "Новый контент",
    gallery_title: "Фотогалерея",
    gallery_subtitle: "Горячие и обнажённые кадры ваших любимых исполнительниц",
    filter_all: "Все",
    filter_blonde: "Блондинка",
    filter_brunette: "Брюнетка",
    filter_latina: "Латина",
    filter_asian: "Азиатка",
    filter_ebony: "Эбони",
    filter_other: "Другое",
    videos_title: "Последние видео",
    videos_subtitle: "Полные сцены и эксклюзивные клипы",
    footer_copy: "© 2026 VelvetVault. Все права защищены. Только 18+.",
    footer_note: "Это демо-сайт. Замените примерный контент через панель Админа.",
    admin_label: "Админ",
    login_subtitle: "Введите пароль администратора",
    password_placeholder: "Пароль",
    login_btn: "Войти",
    login_hint: "Пароль по умолчанию: <code>velvet2026</code>",
    login_error: "Неверный пароль",
    view_site: "Смотреть сайт",
    logout: "Выйти",
    content_manager: "Менеджер контента",
    content_manager_desc: "Загружайте фото и видео. Всё, что вы добавите, сразу станет видно всем посетителям.",
    upload_new: "Загрузить новый контент",
    label_title: "Название *",
    label_performer: "Исполнительница / Звезда",
    label_category: "Категория",
    label_type: "Тип *",
    label_file: "Медиафайл *",
    label_desc: "Описание (необязательно)",
    ph_title: "напр. Райли Рид – Сессия в спальне",
    ph_performer: "напр. Райли Рид",
    ph_desc: "Краткое описание...",
    drop_text: "Нажмите или перетащите фото / видео сюда",
    drop_hint: "Изображения (JPG, PNG, WEBP) или Видео (MP4, WEBM)",
    upload_btn: "Загрузить и опубликовать",
    published_content: "Опубликованный контент",
    stat_photos_lower: "фото",
    stat_videos_lower: "видео",
    type_photo: "Фото",
    type_video: "Видео",
    empty_photos: "Пока нет фото. Админ может загрузить!",
    empty_videos: "Пока нет видео. Админ может загрузить!",
    empty_admin: "Пока нет контента. Загрузите первое фото или видео выше!",
    upload_success: "Успешно загружено! Теперь видно на публичном сайте.",
    delete_confirm: "Удалить этот элемент навсегда?",
    badge_photo: "Фото",
    badge_video: "Видео"
  },
  zh: {
    nav_home: "首页",
    nav_gallery: "图库",
    nav_videos: "视频",
    nav_admin: "管理",
    hero_title: "欢迎来到 <span>VelvetVault</span>",
    hero_subtitle: "最热成人明星的独家照片和视频。我们的团队每天上传新鲜内容。",
    hero_btn: "立即探索",
    stat_photos: "照片",
    stat_videos: "视频",
    stat_new: "新内容",
    gallery_title: "照片图库",
    gallery_subtitle: "你最喜欢的演员的火辣裸照",
    filter_all: "全部",
    filter_blonde: "金发",
    filter_brunette: "棕发",
    filter_latina: "拉丁",
    filter_asian: "亚洲",
    filter_ebony: "黑人",
    filter_other: "其他",
    videos_title: "最新视频",
    videos_subtitle: "完整场景和独家片段",
    footer_copy: "© 2026 VelvetVault。保留所有权利。仅限18+。",
    footer_note: "这是一个演示网站。通过管理面板替换示例内容。",
    admin_label: "管理",
    login_subtitle: "输入管理员密码继续",
    password_placeholder: "密码",
    login_btn: "登录",
    login_hint: "默认密码：<code>velvet2026</code>",
    login_error: "密码错误",
    view_site: "查看网站",
    logout: "退出",
    content_manager: "内容管理",
    content_manager_desc: "上传照片和视频。你添加的所有内容都会立即对所有访客可见。",
    upload_new: "上传新内容",
    label_title: "标题 *",
    label_performer: "演员 / 明星",
    label_category: "分类",
    label_type: "类型 *",
    label_file: "媒体文件 *",
    label_desc: "描述（可选）",
    ph_title: "例如：Riley Reid – 卧室写真",
    ph_performer: "例如：Riley Reid",
    ph_desc: "简短描述...",
    drop_text: "点击或拖拽照片/视频到这里",
    drop_hint: "图片 (JPG, PNG, WEBP) 或 视频 (MP4, WEBM)",
    upload_btn: "上传并发布",
    published_content: "已发布内容",
    stat_photos_lower: "照片",
    stat_videos_lower: "视频",
    type_photo: "照片",
    type_video: "视频",
    empty_photos: "还没有照片。管理员可以上传！",
    empty_videos: "还没有视频。管理员可以上传！",
    empty_admin: "还没有内容。请在上方上传你的第一张照片或视频！",
    upload_success: "上传成功！现在已在公开网站上可见。",
    delete_confirm: "永久删除此项目？",
    badge_photo: "照片",
    badge_video: "视频"
  },
  ja: {
    nav_home: "ホーム",
    nav_gallery: "ギャラリー",
    nav_videos: "動画",
    nav_admin: "管理",
    hero_title: "<span>VelvetVault</span> へようこそ",
    hero_subtitle: "最もホットなアダルトスターの限定写真＆動画。チームが毎日新鮮なコンテンツをアップロード。",
    hero_btn: "今すぐ探索",
    stat_photos: "写真",
    stat_videos: "動画",
    stat_new: "新着",
    gallery_title: "フォトギャラリー",
    gallery_subtitle: "お気に入りパフォーマーのホット＆ヌードショット",
    filter_all: "すべて",
    filter_blonde: "ブロンド",
    filter_brunette: "ブルネット",
    filter_latina: "ラティーナ",
    filter_asian: "アジア",
    filter_ebony: "エボニー",
    filter_other: "その他",
    videos_title: "最新動画",
    videos_subtitle: "フルシーンと限定クリップ",
    footer_copy: "© 2026 VelvetVault. 全著作権所有。18歳以上のみ。",
    footer_note: "これはデモサイトです。管理パネルからサンプルコンテンツを置き換えてください。",
    admin_label: "管理",
    login_subtitle: "続行するには管理者パスワードを入力",
    password_placeholder: "パスワード",
    login_btn: "ログイン",
    login_hint: "デフォルトパスワード: <code>velvet2026</code>",
    login_error: "パスワードが正しくありません",
    view_site: "サイトを見る",
    logout: "ログアウト",
    content_manager: "コンテンツ管理",
    content_manager_desc: "写真と動画をアップロード。追加したものはすぐに全訪問者に表示されます。",
    upload_new: "新しいコンテンツをアップロード",
    label_title: "タイトル *",
    label_performer: "パフォーマー / スター",
    label_category: "カテゴリー",
    label_type: "タイプ *",
    label_file: "メディアファイル *",
    label_desc: "説明（任意）",
    ph_title: "例: Riley Reid – ベッドルームセッション",
    ph_performer: "例: Riley Reid",
    ph_desc: "短い説明...",
    drop_text: "クリックまたは写真/動画をここにドラッグ",
    drop_hint: "画像 (JPG, PNG, WEBP) または 動画 (MP4, WEBM)",
    upload_btn: "アップロードして公開",
    published_content: "公開済みコンテンツ",
    stat_photos_lower: "写真",
    stat_videos_lower: "動画",
    type_photo: "写真",
    type_video: "動画",
    empty_photos: "まだ写真がありません。管理者がアップロードできます！",
    empty_videos: "まだ動画がありません。管理者がアップロードできます！",
    empty_admin: "まだコンテンツがありません。上で最初の写真または動画をアップロードしてください！",
    upload_success: "アップロード成功！公開サイトに表示されています。",
    delete_confirm: "このアイテムを完全に削除しますか？",
    badge_photo: "写真",
    badge_video: "動画"
  },
  ko: {
    nav_home: "홈",
    nav_gallery: "갤러리",
    nav_videos: "비디오",
    nav_admin: "관리자",
    hero_title: "<span>VelvetVault</span>에 오신 것을 환영합니다",
    hero_subtitle: "가장 핫한 성인 스타들의 독점 사진 & 비디오. 우리 팀이 매일 신선한 콘텐츠를 업로드합니다.",
    hero_btn: "지금 탐색하기",
    stat_photos: "사진",
    stat_videos: "비디오",
    stat_new: "새 콘텐츠",
    gallery_title: "사진 갤러리",
    gallery_subtitle: "좋아하는 출연자들의 핫하고 누드 샷",
    filter_all: "전체",
    filter_blonde: "블론드",
    filter_brunette: "브루넷",
    filter_latina: "라티나",
    filter_asian: "아시아",
    filter_ebony: "에보니",
    filter_other: "기타",
    videos_title: "최신 비디오",
    videos_subtitle: "풀 길이 장면과 독점 클립",
    footer_copy: "© 2026 VelvetVault. 모든 권리 보유. 18세 이상만.",
    footer_note: "이것은 데모 사이트입니다. 관리자 패널에서 샘플 콘텐츠를 교체하세요.",
    admin_label: "관리자",
    login_subtitle: "계속하려면 관리자 비밀번호를 입력하세요",
    password_placeholder: "비밀번호",
    login_btn: "로그인",
    login_hint: "기본 비밀번호: <code>velvet2026</code>",
    login_error: "잘못된 비밀번호",
    view_site: "사이트 보기",
    logout: "로그아웃",
    content_manager: "콘텐츠 관리자",
    content_manager_desc: "사진과 비디오를 업로드하세요. 추가한 모든 것이 즉시 모든 방문자에게 보입니다.",
    upload_new: "새 콘텐츠 업로드",
    label_title: "제목 *",
    label_performer: "출연자 / 스타",
    label_category: "카테고리",
    label_type: "유형 *",
    label_file: "미디어 파일 *",
    label_desc: "설명 (선택)",
    ph_title: "예: Riley Reid – 침실 세션",
    ph_performer: "예: Riley Reid",
    ph_desc: "짧은 설명...",
    drop_text: "클릭하거나 사진/비디오를 여기로 드래그",
    drop_hint: "이미지 (JPG, PNG, WEBP) 또는 비디오 (MP4, WEBM)",
    upload_btn: "업로드 및 게시",
    published_content: "게시된 콘텐츠",
    stat_photos_lower: "사진",
    stat_videos_lower: "비디오",
    type_photo: "사진",
    type_video: "비디오",
    empty_photos: "아직 사진이 없습니다. 관리자가 업로드할 수 있습니다!",
    empty_videos: "아직 비디오가 없습니다. 관리자가 업로드할 수 있습니다!",
    empty_admin: "아직 콘텐츠가 없습니다. 위에서 첫 사진이나 비디오를 업로드하세요!",
    upload_success: "업로드 성공! 이제 공개 사이트에 보입니다.",
    delete_confirm: "이 항목을 영구적으로 삭제하시겠습니까?",
    badge_photo: "사진",
    badge_video: "비디오"
  },
  tr: {
    nav_home: "Ana Sayfa",
    nav_gallery: "Galeri",
    nav_videos: "Videolar",
    nav_admin: "Yönetici",
    hero_title: "<span>VelvetVault</span>'a Hoş Geldiniz",
    hero_subtitle: "En ateşli yetişkin yıldızların özel fotoğrafları ve videoları. Ekibimiz her gün taze içerik yüklüyor.",
    hero_btn: "Şimdi Keşfet",
    stat_photos: "Fotoğraflar",
    stat_videos: "Videolar",
    stat_new: "Yeni İçerik",
    gallery_title: "Fotoğraf Galerisi",
    gallery_subtitle: "Favori performansçılarınızın ateşli ve çıplak çekimleri",
    filter_all: "Tümü",
    filter_blonde: "Sarışın",
    filter_brunette: "Esmer",
    filter_latina: "Latin",
    filter_asian: "Asyalı",
    filter_ebony: "Ebony",
    filter_other: "Diğer",
    videos_title: "Son Videolar",
    videos_subtitle: "Tam uzunlukta sahneler ve özel klipler",
    footer_copy: "© 2026 VelvetVault. Tüm hakları saklıdır. Sadece 18+.",
    footer_note: "Bu bir demo sitedir. Örnek içeriği Yönetici panelinden değiştirin.",
    admin_label: "Yönetici",
    login_subtitle: "Devam etmek için yönetici şifresini girin",
    password_placeholder: "Şifre",
    login_btn: "Giriş Yap",
    login_hint: "Varsayılan şifre: <code>velvet2026</code>",
    login_error: "Yanlış şifre",
    view_site: "Siteyi Gör",
    logout: "Çıkış Yap",
    content_manager: "İçerik Yöneticisi",
    content_manager_desc: "Fotoğraf ve video yükleyin. Eklediğiniz her şey anında tüm ziyaretçilere görünür olur.",
    upload_new: "Yeni İçerik Yükle",
    label_title: "Başlık *",
    label_performer: "Performansçı / Yıldız",
    label_category: "Kategori",
    label_type: "Tür *",
    label_file: "Medya Dosyası *",
    label_desc: "Açıklama (isteğe bağlı)",
    ph_title: "örn. Riley Reid – Yatak Odası Seansı",
    ph_performer: "örn. Riley Reid",
    ph_desc: "Kısa açıklama...",
    drop_text: "Tıklayın veya fotoğraf / video buraya sürükleyin",
    drop_hint: "Görseller (JPG, PNG, WEBP) veya Videolar (MP4, WEBM)",
    upload_btn: "Yükle ve Yayınla",
    published_content: "Yayınlanan İçerik",
    stat_photos_lower: "fotoğraf",
    stat_videos_lower: "video",
    type_photo: "Fotoğraf",
    type_video: "Video",
    empty_photos: "Henüz fotoğraf yok. Yönetici yükleyebilir!",
    empty_videos: "Henüz video yok. Yönetici yükleyebilir!",
    empty_admin: "Henüz içerik yok. Yukarıdan ilk fotoğraf veya videonuzu yükleyin!",
    upload_success: "Başarıyla yüklendi! Artık herkese açık sitede görünüyor.",
    delete_confirm: "Bu öğeyi kalıcı olarak silmek istiyor musunuz?",
    badge_photo: "Fotoğraf",
    badge_video: "Video"
  },
  nl: {
    nav_home: "Home",
    nav_gallery: "Galerij",
    nav_videos: "Video's",
    nav_admin: "Admin",
    hero_title: "Welkom bij <span>VelvetVault</span>",
    hero_subtitle: "Exclusieve foto's & video's van de heetste adult sterren. Dagelijks verse content van ons team.",
    hero_btn: "Nu verkennen",
    stat_photos: "Foto's",
    stat_videos: "Video's",
    stat_new: "Nieuwe content",
    gallery_title: "Fotogalerij",
    gallery_subtitle: "Hete & naakte shots van je favoriete performers",
    filter_all: "Alles",
    filter_blonde: "Blond",
    filter_brunette: "Brunette",
    filter_latina: "Latina",
    filter_asian: "Aziatisch",
    filter_ebony: "Ebony",
    filter_other: "Overig",
    videos_title: "Laatste video's",
    videos_subtitle: "Volledige scènes en exclusieve clips",
    footer_copy: "© 2026 VelvetVault. Alle rechten voorbehouden. Alleen 18+.",
    footer_note: "Dit is een demosite. Vervang de voorbeeldcontent via het Admin-paneel.",
    admin_label: "Admin",
    login_subtitle: "Voer het admin-wachtwoord in om door te gaan",
    password_placeholder: "Wachtwoord",
    login_btn: "Inloggen",
    login_hint: "Standaardwachtwoord: <code>velvet2026</code>",
    login_error: "Onjuist wachtwoord",
    view_site: "Bekijk site",
    logout: "Uitloggen",
    content_manager: "Contentbeheer",
    content_manager_desc: "Upload foto's en video's. Alles wat je toevoegt is meteen zichtbaar voor alle bezoekers.",
    upload_new: "Nieuwe content uploaden",
    label_title: "Titel *",
    label_performer: "Performer / Ster",
    label_category: "Categorie",
    label_type: "Type *",
    label_file: "Mediabestand *",
    label_desc: "Beschrijving (optioneel)",
    ph_title: "bijv. Riley Reid – Slaapkamersessie",
    ph_performer: "bijv. Riley Reid",
    ph_desc: "Korte beschrijving...",
    drop_text: "Klik of sleep foto / video hierheen",
    drop_hint: "Afbeeldingen (JPG, PNG, WEBP) of Video's (MP4, WEBM)",
    upload_btn: "Uploaden & publiceren",
    published_content: "Gepubliceerde content",
    stat_photos_lower: "foto's",
    stat_videos_lower: "video's",
    type_photo: "Foto",
    type_video: "Video",
    empty_photos: "Nog geen foto's. Admin kan er uploaden!",
    empty_videos: "Nog geen video's. Admin kan er uploaden!",
    empty_admin: "Nog geen content. Upload hierboven je eerste foto of video!",
    upload_success: "Succesvol geüpload! Het is nu zichtbaar op de openbare site.",
    delete_confirm: "Dit item permanent verwijderen?",
    badge_photo: "Foto",
    badge_video: "Video"
  },
  pl: {
    nav_home: "Strona główna",
    nav_gallery: "Galeria",
    nav_videos: "Filmy",
    nav_admin: "Admin",
    hero_title: "Witaj w <span>VelvetVault</span>",
    hero_subtitle: "Ekskluzywne zdjęcia i filmy najgorętszych gwiazd adult. Świeże treści codziennie od naszego zespołu.",
    hero_btn: "Odkryj teraz",
    stat_photos: "Zdjęcia",
    stat_videos: "Filmy",
    stat_new: "Nowe treści",
    gallery_title: "Galeria zdjęć",
    gallery_subtitle: "Gorące i nagie ujęcia twoich ulubionych wykonawczyń",
    filter_all: "Wszystkie",
    filter_blonde: "Blondynka",
    filter_brunette: "Brunetka",
    filter_latina: "Latynoska",
    filter_asian: "Azjatka",
    filter_ebony: "Ebony",
    filter_other: "Inne",
    videos_title: "Najnowsze filmy",
    videos_subtitle: "Pełne sceny i ekskluzywne klipy",
    footer_copy: "© 2026 VelvetVault. Wszelkie prawa zastrzeżone. Tylko 18+.",
    footer_note: "To strona demo. Zastąp przykładowe treści w panelu Admina.",
    admin_label: "Admin",
    login_subtitle: "Wprowadź hasło administratora, aby kontynuować",
    password_placeholder: "Hasło",
    login_btn: "Zaloguj się",
    login_hint: "Domyślne hasło: <code>velvet2026</code>",
    login_error: "Nieprawidłowe hasło",
    view_site: "Zobacz stronę",
    logout: "Wyloguj",
    content_manager: "Menedżer treści",
    content_manager_desc: "Prześlij zdjęcia i filmy. Wszystko, co dodasz, będzie natychmiast widoczne dla wszystkich odwiedzających.",
    upload_new: "Prześlij nową treść",
    label_title: "Tytuł *",
    label_performer: "Wykonawczyni / Gwiazda",
    label_category: "Kategoria",
    label_type: "Typ *",
    label_file: "Plik mediów *",
    label_desc: "Opis (opcjonalnie)",
    ph_title: "np. Riley Reid – Sesja w sypialni",
    ph_performer: "np. Riley Reid",
    ph_desc: "Krótki opis...",
    drop_text: "Kliknij lub przeciągnij zdjęcie / film tutaj",
    drop_hint: "Obrazy (JPG, PNG, WEBP) lub Filmy (MP4, WEBM)",
    upload_btn: "Prześlij i opublikuj",
    published_content: "Opublikowane treści",
    stat_photos_lower: "zdjęć",
    stat_videos_lower: "filmów",
    type_photo: "Zdjęcie",
    type_video: "Film",
    empty_photos: "Brak zdjęć. Admin może je dodać!",
    empty_videos: "Brak filmów. Admin może je dodać!",
    empty_admin: "Brak treści. Prześlij pierwsze zdjęcie lub film powyżej!",
    upload_success: "Przesłano pomyślnie! Jest teraz widoczne na stronie publicznej.",
    delete_confirm: "Usunąć ten element na stałe?",
    badge_photo: "Zdjęcie",
    badge_video: "Film"
  }
};

// ---------- Sample data ----------
const SAMPLE_MEDIA = [
  {
    id: 's1',
    title: 'Riley Reid – Soft Morning Light',
    performer: 'Riley Reid',
    category: 'brunette',
    type: 'photo',
    desc: 'Natural light, sheer lingerie, pure sensuality.',
    src: createPlaceholder('Riley Reid', '#be185d', '#9d174d'),
    createdAt: Date.now() - 86400000 * 2
  },
  {
    id: 's2',
    title: 'Lana Rhoades – Mirror Session',
    performer: 'Lana Rhoades',
    category: 'brunette',
    type: 'photo',
    desc: 'Full frontal, confident pose in front of the mirror.',
    src: createPlaceholder('Lana Rhoades', '#7c3aed', '#5b21b6'),
    createdAt: Date.now() - 86400000 * 3
  },
  {
    id: 's3',
    title: 'Abella Danger – Outdoor Tease',
    performer: 'Abella Danger',
    category: 'brunette',
    type: 'photo',
    desc: 'Sun-kissed skin, barely-there bikini.',
    src: createPlaceholder('Abella Danger', '#db2777', '#9d174d'),
    createdAt: Date.now() - 86400000 * 4
  },
  {
    id: 's4',
    title: 'Mia Malkova – Yoga Stretch',
    performer: 'Mia Malkova',
    category: 'blonde',
    type: 'photo',
    desc: 'Flexible blonde in studio lighting.',
    src: createPlaceholder('Mia Malkova', '#ea580c', '#c2410c'),
    createdAt: Date.now() - 86400000 * 5
  },
  {
    id: 's5',
    title: 'Angela White – Classic Curves',
    performer: 'Angela White',
    category: 'brunette',
    type: 'photo',
    desc: 'Voluptuous beauty in elegant black lingerie.',
    src: createPlaceholder('Angela White', '#b45309', '#92400e'),
    createdAt: Date.now() - 86400000 * 6
  },
  {
    id: 's6',
    title: 'Eva Lovia – Bedroom Eyes',
    performer: 'Eva Lovia',
    category: 'brunette',
    type: 'photo',
    desc: 'Intimate close-ups and soft focus.',
    src: createPlaceholder('Eva Lovia', '#be123c', '#9f1239'),
    createdAt: Date.now() - 86400000 * 7
  },
  {
    id: 's7',
    title: 'Nicole Aniston – Golden Hour',
    performer: 'Nicole Aniston',
    category: 'blonde',
    type: 'photo',
    desc: 'Blonde bombshell bathed in warm light.',
    src: createPlaceholder('Nicole Aniston', '#d97706', '#b45309'),
    createdAt: Date.now() - 86400000 * 8
  },
  {
    id: 's8',
    title: 'Riley Reid & Friends – Pool Party',
    performer: 'Riley Reid',
    category: 'brunette',
    type: 'video',
    desc: 'Wet, playful, and very naughty pool scenes.',
    src: createPlaceholder('Riley Reid Video', '#7e22ce', '#6b21a8', true),
    createdAt: Date.now() - 86400000 * 1
  },
  {
    id: 's9',
    title: 'Lana Rhoades – Intense Scene',
    performer: 'Lana Rhoades',
    category: 'brunette',
    type: 'video',
    desc: 'High-energy performance, multiple positions.',
    src: createPlaceholder('Lana Rhoades Video', '#9333ea', '#7e22ce', true),
    createdAt: Date.now() - 86400000 * 2
  },
  {
    id: 's10',
    title: 'Mia Khalifa – Classic Hit',
    performer: 'Mia Khalifa',
    category: 'brunette',
    type: 'video',
    desc: 'One of the most watched scenes of all time.',
    src: createPlaceholder('Mia Khalifa Video', '#c026d3', '#a21caf', true),
    createdAt: Date.now() - 86400000 * 9
  }
];

function createPlaceholder(name, color1, color2, isVideo = false) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1}"/>
          <stop offset="100%" style="stop-color:${color2}"/>
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#g)"/>
      <circle cx="300" cy="320" r="90" fill="rgba(255,255,255,0.15)"/>
      <text x="300" y="340" font-family="Arial,sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">${initials}</text>
      <text x="300" y="480" font-family="Arial,sans-serif" font-size="28" font-weight="600" fill="white" text-anchor="middle">${name}</text>
      <text x="300" y="530" font-family="Arial,sans-serif" font-size="18" fill="rgba(255,255,255,0.7)" text-anchor="middle">${isVideo ? '▶ VIDEO' : 'PHOTO'}</text>
      <text x="300" y="720" font-family="Arial,sans-serif" font-size="14" fill="rgba(255,255,255,0.5)" text-anchor="middle">VelvetVault Sample</text>
    </svg>
  `;
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}

// ---------- Language system ----------
function getCurrentLang() {
  return localStorage.getItem(LANG_KEY) || 'en';
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  const t = TRANSLATIONS[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  document.querySelectorAll('#langSelect, #langSelectLogin').forEach(sel => {
    if (sel) sel.value = lang;
  });

  if (document.getElementById('photoGrid')) {
    renderPublicSite();
  }
  if (document.getElementById('adminGrid') && document.getElementById('adminDashboard') && !document.getElementById('adminDashboard').classList.contains('hidden')) {
    renderAdminGrid();
  }
}

function t(key) {
  const lang = getCurrentLang();
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.en[key] || key;
}

// ---------- Storage helpers ----------
function getMedia() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      return [...SAMPLE_MEDIA];
    }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_MEDIA));
  return [...SAMPLE_MEDIA];
}

function saveMedia(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function addMedia(item) {
  const list = getMedia();
  list.unshift(item);
  saveMedia(list);
  return list;
}

function deleteMedia(id) {
  let list = getMedia();
  list = list.filter(m => m.id !== id);
  saveMedia(list);
  return list;
}

// ---------- Public site rendering ----------
function renderPublicSite() {
  const media = getMedia();
  const photos = media.filter(m => m.type === 'photo');
  const videos = media.filter(m => m.type === 'video');

  const photoCountEl = document.getElementById('photoCount');
  const videoCountEl = document.getElementById('videoCount');
  if (photoCountEl) photoCountEl.textContent = photos.length;
  if (videoCountEl) videoCountEl.textContent = videos.length;

  const photoGrid = document.getElementById('photoGrid');
  if (photoGrid) {
    if (photos.length === 0) {
      photoGrid.innerHTML = `<div class="empty-state"><p>${t('empty_photos')}</p></div>`;
    } else {
      photoGrid.innerHTML = photos.map(item => createCardHTML(item)).join('');
    }
  }

  const videoGrid = document.getElementById('videoGrid');
  if (videoGrid) {
    if (videos.length === 0) {
      videoGrid.innerHTML = `<div class="empty-state"><p>${t('empty_videos')}</p></div>`;
    } else {
      videoGrid.innerHTML = videos.map(item => createCardHTML(item)).join('');
    }
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const cards = photoGrid ? photoGrid.querySelectorAll('.media-card') : [];
      cards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
      });
    };
  });

  setupLightbox();
}

function createCardHTML(item) {
  const isVideo = item.type === 'video';
  const badgeText = isVideo ? t('badge_video') : t('badge_photo');
  const badgeClass = isVideo ? 'media-badge video' : 'media-badge';
  
  const mediaTag = isVideo
    ? `<video src="${item.src}" muted loop playsinline></video>`
    : `<img src="${item.src}" alt="${escapeHtml(item.title)}" loading="lazy" />`;

  return `
    <div class="media-card" data-id="${item.id}" data-category="${item.category}" data-type="${item.type}">
      <div class="media-thumb">
        ${mediaTag}
        <span class="${badgeClass}">${badgeText}</span>
      </div>
      <div class="media-info">
        <div class="media-title">${escapeHtml(item.title)}</div>
        <div class="media-meta">${escapeHtml(item.performer || 'Unknown')} · ${item.category}</div>
      </div>
    </div>
  `;
}

function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightboxContent');
  const closeBtn = document.getElementById('lightboxClose');

  if (!lightbox) return;

  document.addEventListener('click', function handler(e) {
    const card = e.target.closest('.media-card');
    if (!card || card.closest('#adminGrid')) return;

    const id = card.dataset.id;
    const media = getMedia().find(m => m.id === id);
    if (!media) return;

    if (media.type === 'video') {
      content.innerHTML = `<video src="${media.src}" controls autoplay style="max-width:90vw;max-height:85vh;border-radius:12px;"></video>`;
    } else {
      content.innerHTML = `<img src="${media.src}" alt="${escapeHtml(media.title)}" style="max-width:90vw;max-height:85vh;border-radius:12px;" />`;
    }
    lightbox.classList.add('active');
  });

  if (closeBtn) {
    closeBtn.onclick = () => {
      lightbox.classList.remove('active');
      content.innerHTML = '';
    };
  }

  lightbox.onclick = (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      content.innerHTML = '';
    }
  };
}

// ---------- Admin functions ----------
function initAdmin() {
  const loginScreen = document.getElementById('loginScreen');
  const dashboard = document.getElementById('adminDashboard');
  const loginForm = document.getElementById('loginForm');
  const logoutBtn = document.getElementById('logoutBtn');

  if (sessionStorage.getItem('velvet_admin') === 'true') {
    showDashboard();
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const pass = document.getElementById('adminPassword').value;
      if (pass === ADMIN_PASSWORD) {
        sessionStorage.setItem('velvet_admin', 'true');
        showDashboard();
      } else {
        const err = document.getElementById('loginError');
        if (err) err.classList.remove('hidden');
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('velvet_admin');
      location.reload();
    });
  }

  function showDashboard() {
    if (loginScreen) loginScreen.classList.add('hidden');
    if (dashboard) dashboard.classList.remove('hidden');
    renderAdminGrid();
    setupUploadForm();
    setLanguage(getCurrentLang());
  }
}

function renderAdminGrid() {
  const media = getMedia();
  const grid = document.getElementById('adminGrid');
  const photoCount = media.filter(m => m.type === 'photo').length;
  const videoCount = media.filter(m => m.type === 'video').length;

  const apc = document.getElementById('adminPhotoCount');
  const avc = document.getElementById('adminVideoCount');
  if (apc) apc.textContent = photoCount;
  if (avc) avc.textContent = videoCount;

  if (!grid) return;

  if (media.length === 0) {
    grid.innerHTML = `<div class="empty-state"><p>${t('empty_admin')}</p></div>`;
    return;
  }

  grid.innerHTML = media.map(item => {
    const isVideo = item.type === 'video';
    const badgeText = isVideo ? t('badge_video') : t('badge_photo');
    const mediaTag = isVideo
      ? `<video src="${item.src}" muted></video>`
      : `<img src="${item.src}" alt="${escapeHtml(item.title)}" />`;

    return `
      <div class="media-card admin-card" data-id="${item.id}">
        <button class="delete-btn" title="Delete" data-id="${item.id}">×</button>
        <div class="media-thumb">
          ${mediaTag}
          <span class="media-badge ${isVideo ? 'video' : ''}">${badgeText}</span>
        </div>
        <div class="media-info">
          <div class="media-title">${escapeHtml(item.title)}</div>
          <div class="media-meta">${escapeHtml(item.performer || '')} · ${item.category}</div>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      if (confirm(t('delete_confirm'))) {
        deleteMedia(id);
        renderAdminGrid();
      }
    });
  });
}

function setupUploadForm() {
  const form = document.getElementById('uploadForm');
  const fileInput = document.getElementById('mediaFile');
  const fileDrop = document.getElementById('fileDrop');
  const preview = document.getElementById('filePreview');

  if (!form || !fileInput) return;

  ['dragenter', 'dragover'].forEach(evt => {
    fileDrop.addEventListener(evt, (e) => {
      e.preventDefault();
      fileDrop.classList.add('dragover');
    });
  });
  ['dragleave', 'drop'].forEach(evt => {
    fileDrop.addEventListener(evt, (e) => {
      e.preventDefault();
      fileDrop.classList.remove('dragover');
    });
  });

  fileDrop.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;
    if (files.length) {
      fileInput.files = files;
      showFilePreview(files[0]);
    }
  });

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length) {
      showFilePreview(fileInput.files[0]);
    }
  });

  function showFilePreview(file) {
    preview.classList.remove('hidden');
    const isVideo = file.type.startsWith('video/');
    const url = URL.createObjectURL(file);
    preview.innerHTML = `
      ${isVideo ? `<video src="${url}" style="width:80px;height:80px;object-fit:cover;border-radius:6px;"></video>` 
                : `<img src="${url}" style="width:80px;height:80px;object-fit:cover;border-radius:6px;" />`}
      <div>
        <strong>${file.name}</strong><br>
        <small>${(file.size / 1024 / 1024).toFixed(2)} MB · ${file.type}</small>
      </div>
    `;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('mediaTitle').value.trim();
    const performer = document.getElementById('mediaPerformer').value.trim();
    const category = document.getElementById('mediaCategory').value;
    const type = document.getElementById('mediaType').value;
    const desc = document.getElementById('mediaDesc').value.trim();
    const file = fileInput.files[0];

    if (!file) {
      alert('Please select a file');
      return;
    }

    const reader = new FileReader();
    reader.onload = function(ev) {
      const newItem = {
        id: 'u_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
        title,
        performer,
        category,
        type,
        desc,
        src: ev.target.result,
        createdAt: Date.now()
      };

      addMedia(newItem);
      renderAdminGrid();

      form.reset();
      preview.classList.add('hidden');
      preview.innerHTML = '';

      alert(t('upload_success'));
    };
    reader.readAsDataURL(file);
  });
}

// ---------- Utils ----------
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[m]);
}

// ---------- Boot ----------
document.addEventListener('DOMContentLoaded', () => {
  const langSelects = document.querySelectorAll('#langSelect, #langSelectLogin');
  langSelects.forEach(sel => {
    if (sel) {
      sel.value = getCurrentLang();
      sel.addEventListener('change', () => {
        setLanguage(sel.value);
      });
    }
  });

  setLanguage(getCurrentLang());

  if (document.getElementById('photoGrid') || document.getElementById('videoGrid')) {
    renderPublicSite();
  }
});
