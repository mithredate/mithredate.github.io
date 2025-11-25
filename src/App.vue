<template>
  <FontArgon>
    <!-- Hero Section -->
    <section
        class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black flex justify-center items-start sm:items-center relative overflow-hidden pt-16 sm:pt-0">
      <!-- Animated background elements -->
      <div class="absolute inset-0 opacity-10">
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
              <div
                  class="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <img src="@/assets/profilepic.jpeg" :alt="content.hero.profileAlt"
                   class="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-2xl object-cover">
            </div>
          </div>

          <!-- Name and Title -->
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            {{ content.hero.name }}
          </h1>
          <h2 class="text-xl sm:text-2xl lg:text-3xl text-purple-200 mb-6 font-light">
            {{ content.hero.title }}
          </h2>

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
               class="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              {{ content.hero.ctaButtons.viewExperience }}
            </a>
            <a href="#contact"
               class="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105">
              {{ content.hero.ctaButtons.getInTouch }}
            </a>
          </div>

          <!-- Core Skills -->
          <div class="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl mx-auto">
            <span v-for="skill in coreCompetencies" :key="skill"
                  class="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{{ content.experience.title }}</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              {{ content.experience.subtitle }}
            </p>
          </div>

          <!-- Timeline -->
          <div class="relative">
            <!-- Timeline line -->
            <div
                class="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"></div>

            <!-- Experience Items -->
            <div v-for="(position, index) in positions" :key="position.title"
                 class="relative mb-12 md:mb-16">
              <!-- Timeline dot -->
              <div
                  class="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full border-4 border-white shadow-lg -top-2"></div>

              <!-- Content -->
              <div class="ml-12 md:ml-0 md:w-5/12" :class="index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'">
                <div
                    class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <!-- Header -->
                  <div class="flex items-start gap-4 mb-6">
                    <img :src="position.logo" :alt="`${position.company} Logo`"
                         class="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover shadow-md">
                    <div class="flex-1">
                      <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-1">{{ position.title }}</h3>
                      <p class="text-lg text-blue-600 font-semibold mb-1">{{ position.company }}</p>
                      <p class="text-sm text-gray-500">{{ position.dates }}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mentorship Section -->
    <section class="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Section Header -->
          <div class="mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{{ content.mentorship.title }}</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              {{ content.mentorship.subtitle }}
            </p>
          </div>

          <!-- Mentorship Card -->
          <div
              class="bg-white rounded-3xl shadow-xs p-8 sm:p-12 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              style="box-shadow: 0 25px 50px -12px rgba(225, 49, 108, 0.15);">
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
                   class="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xs"
                   style="background: linear-gradient(135deg, rgb(225, 49, 108), rgb(239, 68, 68)); box-shadow: 0 10px 25px rgba(225, 49, 108, 0.3);">
                  <span>{{ content.mentorship.ctaText }}</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>

              <!-- ADPList Impact Widget -->
              <div class="w-full md:w-auto flex justify-center md:justify-end">
                <div class="w-full max-w-sm md:max-w-xs rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <img alt="ADPList Impact"
                       class="w-full h-auto rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                       src="https://adplist-users-production.s3.us-east-1.amazonaws.com/3b611639b01fa697d1a33947b79c1229/swags/5c06e00a-1ac5-5dcc-946d-a1e0bc7bd514.webp">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-black">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">{{ content.contact.title }}</h2>
          <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {{ content.contact.subtitle }}
          </p>

          <!-- Social Links -->
          <div class="flex flex-wrap justify-center gap-6 mb-12">
            <a v-for="link in footerLinks" :key="link.name" :href="link.url" target="_blank"
               class="group bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
              <img :src="link.logo" :alt="`${link.name} Logo`"
                   class="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert group-hover:scale-110 transition-transform">
            </a>
          </div>
        </div>
      </div>
    </section>

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
  </FontArgon>
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
        "Domain-Driven Design (DDD)", "Test-Driven Development (TDD)",
        "Agile Software Development", "CQRS & Event Sourcing",
        "Microservices", "Kubernetes", "AWS", "Docker", "RESTful API",
        "PHP", "Symfony", "Laravel", "Javascript", "Typescript",
        "AI & Automation", "n8n", "Braze", "MarTech", "RabbitMQ"
      ],
      footerLinks: [
        {name: 'LinkedIn', url: 'https://www.linkedin.com/in/mhedayati', logo: linkedinLogo},
        {name: 'GitHub', url: 'https://github.com/mithredate', logo: githubLogo},
        {name: 'Email', url: 'mailto:mehrdad.hedayati@gmail.com', logo: emailLogo},
        {name: 'Telegram', url: 'https://t.me/mithredate', logo: telegramLogo},
        {name: 'X', url: 'https://x.com/mithredate', logo: xLogo},
      ],
      positions: [
        {
          title: 'Engineering Manager - AI & Automation<br/>Formerly, Senior Software Engineer (MarTech)',
          company: 'Roadsurfer GmbH, Munich - Remote',
          dates: '09/2025 - Now',
          logo: rsfLogo,
        },{
          title: 'Senior Software Engineer',
          company: 'Roadsurfer GmbH, Munich - Remote',
          dates: '02/2025 - 08/2025',
          logo: rsfLogo,
        },
        {
          title: 'Senior Software Engineer',
          company: 'Interaction Design Foundation, Dubai - Remote',
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
          company: 'Interaction Design Foundation, Dubai - Remote',
          dates: '01/2021 - 03/2023',
          logo: ixdfLogo,
        },
        {
          title: 'Software Development Technical Lead',
          company: 'Podro, Tehran - Hybrid',
          dates: '12/2019 - 12/2020',
          logo: podroLogo,
        },
        {
          title: 'Software Development Technical Lead',
          company: 'RDSysco, Isfahan - On Site',
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
