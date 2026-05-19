<template>
  <main>
    <!-- Hero Section -->
    <section aria-labelledby="hero-name"
        class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black flex justify-center items-start sm:items-center relative overflow-hidden pt-16 sm:pt-0">
      <!-- Animated background elements -->
      <div aria-hidden="true" class="absolute inset-0 opacity-10 pointer-events-none">
        <div
            class="absolute top-20 left-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
            class="absolute top-40 right-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div
            class="absolute -bottom-8 left-40 w-72 h-72 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Profile Image -->
          <div class="mb-8 flex justify-center">
            <div class="relative">
              <div aria-hidden="true"
                  class="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <img src="@/assets/profilepic.jpeg" :alt="content.hero.profileAlt"
                   width="160" height="160" fetchpriority="high"
                   class="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-2xl object-cover">
            </div>
          </div>

          <!-- Name and Title -->
          <h1 id="hero-name" class="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            {{ content.hero.name }}
          </h1>
          <p class="text-xl sm:text-2xl lg:text-3xl text-purple-200 mb-6 font-light">
            {{ content.hero.title }}
          </p>

          <!-- Tagline -->
          <p class="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {{ content.hero.tagline }}
          </p>

          <!-- Quick intro -->
          <p class="text-base text-gray-400 mb-8 max-w-xl mx-auto hidden sm:block">
            {{ content.hero.quickIntro }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#experience"
               class="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
              {{ content.hero.ctaButtons.viewExperience }}
            </a>
            <a href="#contact"
               class="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
              {{ content.hero.ctaButtons.getInTouch }}
            </a>
          </div>

          <!-- Core Skills -->
          <ul aria-label="Core competencies"
              class="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl mx-auto">
            <li v-for="skill in coreCompetencies" :key="skill"
                class="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors">
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div aria-hidden="true"
           class="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" aria-labelledby="experience-heading" class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 id="experience-heading" class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{{ content.experience.title }}</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              {{ content.experience.subtitle }}
            </p>
          </div>

          <!-- Timeline -->
          <ol class="relative list-none">
            <!-- Timeline line -->
            <div aria-hidden="true"
                class="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"></div>

            <!-- Experience Items -->
            <li v-for="(position, index) in positions" :key="position.title"
                 class="relative mb-12 md:mb-16">
              <!-- Timeline dot -->
              <div aria-hidden="true"
                  class="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full border-4 border-white shadow-lg -top-2"></div>

              <!-- Content -->
              <article class="ml-12 md:ml-0 md:w-5/12" :class="index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'">
                <div
                    class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <!-- Header -->
                  <div class="flex items-start gap-4 mb-6">
                    <img :src="position.logo" :alt="''" aria-hidden="true"
                         width="80" height="80" loading="lazy" decoding="async"
                         class="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover shadow-md">
                    <div class="flex-1">
                      <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-1">{{ position.title }}</h3>
                      <p class="text-lg text-blue-600 font-semibold mb-1">{{ position.company }}</p>
                      <p class="text-sm text-gray-500">
                        <time>{{ position.dates }}</time>
                      </p>
                    </div>
                  </div>

                </div>
              </article>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Mentorship Section -->
    <section id="mentorship" aria-labelledby="mentorship-heading"
             class="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Section Header -->
          <div class="mb-16">
            <h2 id="mentorship-heading" class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{{ content.mentorship.title }}</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              {{ content.mentorship.subtitle }}
            </p>
          </div>

          <!-- Mentorship Card -->
          <div class="bg-white rounded-3xl p-8 sm:p-12 hover:-translate-y-1 transition-transform duration-300 shadow-[0_25px_50px_-12px_rgba(225,49,108,0.15)]">
            <div class="flex flex-col-reverse md:flex-row items-start gap-8">
              <!-- Content -->
              <div class="flex-1 text-center md:text-left">
                <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{{ content.mentorship.adpTitle }}</h3>
                <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                  {{ content.mentorship.adpDescription }}
                </p>

                <!-- CTA Button -->
                <a href="https://adplist.org/mentors/mehrdad-hedayati"
                   target="_blank"
                   rel="noopener noreferrer"
                   :aria-label="`${content.mentorship.ctaText} on ADPList (opens in new tab)`"
                   class="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-semibold transition-transform duration-300 hover:scale-105 bg-[linear-gradient(135deg,rgb(225,49,108),rgb(239,68,68))] shadow-[0_10px_25px_rgba(225,49,108,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2">
                  <span>{{ content.mentorship.ctaText }}</span>
                  <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>

              <!-- ADPList Impact Widget -->
              <div class="w-full md:w-auto flex justify-center md:justify-end">
                <div class="w-full max-w-sm md:max-w-xs rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <img alt="ADPList mentorship impact stats"
                       loading="lazy" decoding="async"
                       class="w-full h-auto rounded-xl"
                       src="https://adplist-users-production.s3.us-east-1.amazonaws.com/3b611639b01fa697d1a33947b79c1229/swags/5c06e00a-1ac5-5dcc-946d-a1e0bc7bd514.webp">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" aria-labelledby="education-heading" class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 id="education-heading" class="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">Education</h2>
          <div class="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Bachelor of Science in Computer Software Engineering</h3>
            <p class="text-lg text-blue-600 font-semibold">University of Isfahan, Iran</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" aria-labelledby="contact-heading"
             class="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-black">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 id="contact-heading" class="text-4xl sm:text-5xl font-bold text-white mb-4">{{ content.contact.title }}</h2>
          <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {{ content.contact.subtitle }}
          </p>

          <!-- Social Links -->
          <ul aria-label="Social and contact links"
              class="flex flex-wrap justify-center gap-6 mb-12">
            <li v-for="link in footerLinks" :key="link.name">
              <a :href="link.url"
                 :target="link.external ? '_blank' : null"
                 :rel="link.external ? 'noopener noreferrer me' : null"
                 :aria-label="link.external ? `${link.name} (opens in new tab)` : link.name"
                 class="group inline-block bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
                <img :src="link.logo" alt="" aria-hidden="true"
                     width="40" height="40" loading="lazy" decoding="async"
                     class="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert group-hover:scale-110 transition-transform">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-slate-900 py-8 border-t border-white/10">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="text-gray-400 text-sm">
          © {{ new Date().getFullYear() }} {{ content.footer.copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import ixdfLogo from '@/assets/logos/ixdf.png'
import parslyLogo from '@/assets/logos/parsly.png'
import podroLogo from '@/assets/logos/podro.svg'
import rdsyscoLogo from '@/assets/logos/rdsysco.png'
import linkedinLogo from '@/assets/icons/linkedin.svg'
import githubLogo from '@/assets/icons/github.svg'
import emailLogo from '@/assets/icons/email.svg'
import telegramLogo from '@/assets/icons/telegram.svg'
import xLogo from '@/assets/icons/x.svg'
import rsfLogo from '@/assets/logos/roadsurfer.jpg'
import contentData from '@/content.json'

export default {
  data() {
    return {
      content: contentData,
      coreCompetencies: [
        "PHP", "TypeScript", "Kubernetes", "Microservices",
        "Domain-Driven Design (DDD)", "Test-Driven Development (TDD)",
        "AWS", "Symfony", "Laravel", "Docker",
        "CQRS", "Event Sourcing", "RabbitMQ", "Apache Kafka",
        "React", "Vue.js", "Tailwind CSS",
        "AI", "Automation", "n8n",
        "Java", "Kotlin", "Go",
        "Agile Software Development", "RESTful API", "GraphQL", "gRPC"
      ],
      footerLinks: [
        {name: 'LinkedIn', url: 'https://www.linkedin.com/in/mhedayati', logo: linkedinLogo, external: true},
        {name: 'GitHub', url: 'https://github.com/mithredate', logo: githubLogo, external: true},
        {name: 'Email', url: 'mailto:mehrdad.hedayati@gmail.com', logo: emailLogo, external: false},
        {name: 'Telegram', url: 'https://t.me/mithredate', logo: telegramLogo, external: true},
        {name: 'X', url: 'https://x.com/mithredate', logo: xLogo, external: true},
      ],
      positions: [
        {
          title: 'Software Engineering Team Lead | Automation and AI',
          company: 'Roadsurfer GmbH, Munich - Remote',
          dates: '10/2025 - Now',
          logo: rsfLogo,
        },{
          title: 'Senior Software Engineer',
          company: 'Roadsurfer GmbH, Munich - Remote',
          dates: '02/2025 - 09/2025',
          logo: rsfLogo,
        },
        {
          title: 'Senior Software Engineer',
          company: 'Interaction Design Foundation (IxDF), Dubai - Remote',
          dates: '12/2023 - 01/2025',
          logo: ixdfLogo,
        },
        {
          title: 'Full-stack Developer',
          company: 'Parsly, Stockholm - Remote',
          dates: '04/2023 - 11/2023',
          logo: parslyLogo,
        },
        {
          title: 'Senior Software Developer',
          company: 'Interaction Design Foundation (IxDF), Dubai - Remote',
          dates: '01/2021 - 03/2023',
          logo: ixdfLogo,
        },
        {
          title: 'Software Technical Lead',
          company: 'PodroCo, Tehran - Hybrid',
          dates: '12/2019 - 12/2020',
          logo: podroLogo,
        },
        {
          title: 'Lead Software Developer',
          company: 'RDSysCo, Isfahan - On Site',
          dates: '10/2016 - 11/2019',
          logo: rdsyscoLogo,
        }
      ]
    };
  }
}
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1e293b;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #8b5cf6, #ec4899);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #7c3aed, #db2777);
}
</style>
