# ETH Ankara Web Sitesi — Araştırma Raporu

## İlham Kaynakları & Tasarım Analizi

### En İyi ETH Event Siteleri
- **ETHWarsaw:** Solarpunk estetik — şehir kültürü + iyimser fütürizm. Sıcak renkler, organik şekiller, mimari sertlik ile kontrast. Properly Studio tarafından tasarlandı.
- **ETHDenver 2026:** "BUIDL City" konsepti — dijital metropol markalaması, immersif deneyimler.
- **ETHGlobal:** Geliştirici topluluğu odaklı, temiz ve işlevsel.
- **Devcon:** Eğitim ekosistemi yaklaşımı, geniş builder topluluğu hedefi.

### Öne Çıkan Tasarım Trendleri (2025-2026)
- **Dark mode hakimiyeti** — sofistike ve yenilikçi his
- **Neon gradient'ler** — elektrik mavisi, lime yeşili, sıcak pembe koyu zemin üzerinde
- **Mikro etkileşimler** — hover efektleri, yükleme animasyonları, geçişler
- **Scrollytelling** — scroll ile hikaye anlatımı
- **Modüler düşünce** — her bölüm bir amaca hizmet eder

### ETH Ankara İçin Farklılaşma Stratejisi
Ankara'nın 3000 yıllık tarihi + Ethereum'un merkeziyetsiz geleceği. Antik Anadolu medeniyeti ile blockchain ekosistemi arasında bir portal hissi.

---

## Önerilen Teknoloji Stack'i

### Core
| Teknoloji | Versiyon | Neden |
|-----------|----------|-------|
| Next.js | 15+ | App Router, RSC, SSR desteği |
| React | 19+ | Concurrent features |
| TypeScript | 5.3+ | Strict mode zorunlu |
| pnpm | latest | Hızlı, disk-verimli |

### 3D & Görsel
| Teknoloji | Neden |
|-----------|-------|
| React Three Fiber | React-native 3D, declarative, SSR destekli |
| @react-three/drei | Helper bileşenler, LOD, effects |
| @react-three/postprocessing | Bloom, chromatic aberration |
| Custom GLSL shaders | Benzersiz görsel kimlik için |

### Animasyon
| Teknoloji | Kullanım Alanı |
|-----------|----------------|
| GSAP 3.12+ | Timeline, scroll animasyonları, 3D kontrol |
| @gsap/react | useGSAP hook — React entegrasyonu |
| Lenis | Smooth scroll (momentum-based) |
| ScrollTrigger | Scroll-linked animasyonlar |

### Neden Spline Değil?
- 2-3MB bundle boyutu
- Sınırlı özelleştirme
- Performans kontrolü zayıf
- Lisans bağımlılığı

### Neden Framer Motion Değil?
- GSAP tek başına yeterli — tutarlılık için tek animasyon kütüphanesi
- GSAP, Canvas/WebGL/Three.js animasyonlarını da kontrol edebilir
- ScrollTrigger entegrasyonu çok daha güçlü

---

## Performans Hedefleri

| Metrik | Hedef |
|--------|-------|
| First Contentful Paint | < 2.5s |
| Canvas Interactive | < 1.5s (FCP sonrası) |
| Animasyon FPS | 60fps minimum |
| JS Bundle | < 300KB gzipped (Three.js hariç) |
| 3D Model Dosyaları | < 2MB toplam |
| Lighthouse Performance | 90+ |

---

## Claude Code Yapılandırma Dosyaları (Oluşturulanlar)

### Ana Dosyalar
1. **CLAUDE.md** — Proje genel kuralları, mimari, tasarım sistemi, iş akışları
2. **.claude/settings.json** — İzin yapılandırması

### Kural Dosyaları (.claude/rules/)
3. **design-system.md** — Renkler, tipografi, spacing, grid, responsive kurallar
4. **animation-patterns.md** — GSAP pattern'leri, Lenis setup, performans kuralları
5. **threejs-standards.md** — R3F mimari, scene organizasyonu, shader workflow
6. **typescript-standards.md** — Strict mode, naming, import düzeni, hata yönetimi
7. **anti-vibe-coding.md** — Kasıtlı kod yazma kuralları, review checklist

### Komut Dosyaları (.claude/commands/)
8. **plan-feature.md** — Yeni özellik planlama workflow'u
9. **code-review.md** — Kod inceleme kontrol listesi

---

## Kurulum Adımları

```bash
# 1. Proje oluştur
npx create-next-app@latest eth-ankara --typescript --tailwind --app --src-dir

# 2. Bu dosyaları projeye kopyala
cp CLAUDE.md eth-ankara/
cp -r .claude eth-ankara/

# 3. Bağımlılıkları yükle
cd eth-ankara
pnpm add three @react-three/fiber @react-three/drei @react-three/postprocessing
pnpm add gsap @gsap/react lenis zustand
pnpm add -D @types/three r3f-perf glslify

# 4. Claude Code ile geliştirmeye başla
claude
```

## Kaynaklar
- ETHWarsaw Case Study: properly.studio/case-study/ethwarsaw
- Awwwards Three.js: awwwards.com/websites/three-js
- GSAP Showcase: madewithgsap.com
- R3F Docs: r3f.docs.pmnd.rs
- Lenis GitHub: github.com/darkroomengineering/lenis
- GSAP AI Skills: github.com/greensock/gsap-skills
