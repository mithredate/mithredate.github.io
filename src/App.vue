<template>
  <FontArgon>
    <!-- Hero Section -->
    <section class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black flex justify-center items-start sm:items-center relative overflow-hidden pt-16 sm:pt-0">
      <!-- Animated background elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div class="absolute top-40 right-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-40 w-72 h-72 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Profile Image -->
          <div class="mb-8 flex justify-center">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <img src="@/assets/profilepic.jpeg" alt="Mehrdad Hedayati" 
                   class="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-2xl object-cover">
            </div>
          </div>
          
          <!-- Name and Title -->
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Mehrdad Hedayati
          </h1>
          <h2 class="text-xl sm:text-2xl lg:text-3xl text-purple-200 mb-6 font-light">
            Senior Fullstack Developer
          </h2>
          
          <!-- Tagline -->
          <p class="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Over 10 years crafting exceptional digital experiences with clean, maintainable code and innovative solutions.
          </p>
          
          <!-- Quick intro -->
          <p class="text-base text-gray-400 mb-8 max-w-xl mx-auto">
            Coffee enthusiast ☕ • Anime lover 🎌 • Sushi connoisseur 🍣 • River walker 🌊 • Yoga practitioner 🧘‍♂️
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#experience" class="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Experience
            </a>
            <a href="#contact" class="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </a>
          </div>
          
          <!-- Core Skills -->
          <div class="flex flex-wrap justify-center gap-2 mb-8">
            <span v-for="skill in coreCompetencies.slice(0, 8)" :key="skill" 
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
            <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Professional Journey</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              A decade of building impactful solutions across diverse industries and technologies
            </p>
          </div>
          
          <!-- Timeline -->
          <div class="relative">
            <!-- Timeline line -->
            <div class="absolute left-4 sm:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"></div>
            
            <!-- Experience Items -->
            <div v-for="(position, index) in positions" :key="position.title" 
                 class="relative mb-12 sm:mb-16">
              <!-- Timeline dot -->
              <div class="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full border-4 border-white shadow-lg -top-2"></div>
              
              <!-- Content -->
              <div class="ml-12 sm:ml-0 sm:w-5/12" :class="index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'">
                <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <!-- Header -->
                  <div class="flex items-start gap-4 mb-6">
                    <img :src="position.logo" :alt="`${position.company} Logo`" 
                         class="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shadow-md">
                    <div class="flex-1">
                      <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{{ position.title }}</h3>
                      <p class="text-lg text-blue-600 font-semibold mb-1">{{ position.company }}</p>
                      <p class="text-sm text-gray-500">{{ position.dates }}</p>
                    </div>
                  </div>
                  
                  <!-- Description -->
                  <div class="mb-6" v-html="position.description"></div>
                  
                  <!-- Skills -->
                  <div class="flex flex-wrap gap-2">
                    <span v-for="skill in position.skills" :key="skill" 
                          class="bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">
                      {{ skill }}
                    </span>
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
            <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Mentorship</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Sharing knowledge and helping others grow in their software engineering journey
            </p>
          </div>
          
          <!-- Mentorship Card -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="flex flex-col lg:flex-row items-center gap-8">
              <!-- ADPList Logo/Icon -->
              <div class="flex-shrink-0">
                <div class="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg class="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              
              <!-- Content -->
              <div class="flex-1 text-center lg:text-left">
                <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">ADPList Mentor</h3>
                <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                  I'm passionate about helping aspiring software engineers and developers navigate their career paths. 
                  Through ADPList, I provide guidance on technical skills, career development, and industry best practices.
                </p>
                
                <!-- Mentorship Topics -->
                <div class="mb-8">
                  <h4 class="text-lg font-semibold text-gray-800 mb-4">Areas of Expertise:</h4>
                  <div class="flex flex-wrap justify-center lg:justify-start gap-3">
                    <span class="bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                      Full-Stack Development
                    </span>
                    <span class="bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                      PHP & Laravel
                    </span>
                    <span class="bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                      Vue.js & React
                    </span>
                    <span class="bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                      AWS & DevOps
                    </span>
                    <span class="bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                      Career Growth
                    </span>
                    <span class="bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                      Technical Leadership
                    </span>
                  </div>
                </div>
                
                <!-- CTA Button -->
                <a href="https://adplist.org/mentors/mehrdad-hedayati" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <span>Book a Session</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Additional Info -->
          <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">Free</div>
              <p class="text-gray-600">All sessions are completely free</p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-emerald-600 mb-2">30-60 min</div>
              <p class="text-gray-600">Flexible session duration</p>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-slate-700 mb-2">Remote</div>
              <p class="text-gray-600">Video calls from anywhere</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-black">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to collaborate on your next project? I'd love to hear from you!
          </p>
          
          <!-- Social Links -->
          <div class="flex flex-wrap justify-center gap-6 mb-12">
            <a v-for="link in footerLinks" :key="link.name" :href="link.url" target="_blank" 
               class="group bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
              <img :src="link.logo" :alt="`${link.name} Logo`" 
                   class="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert group-hover:scale-110 transition-transform">
            </a>
          </div>
          
          <!-- Contact Info -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p class="text-lg text-gray-300 mb-4">Interested in:</p>
            <div class="flex flex-wrap justify-center gap-4 text-white">
              <span class="bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">Mentoring & Coaching</span>
              <span class="bg-emerald-600 px-4 py-2 rounded-full text-sm font-medium">Technical Discussions</span>
              <span class="bg-slate-700 px-4 py-2 rounded-full text-sm font-medium">Open Source Projects</span>
              <span class="bg-blue-700 px-4 py-2 rounded-full text-sm font-medium">Knowledge Sharing</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 py-8 border-t border-white/10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} Mehrdad Hedayati
          </p>
        </div>
      </div>
    </footer>
  </FontArgon>
</template>

<script>
import ixdfLogo from '@/assets/logos/ixdf.png'
import check24Logo from '@/assets/logos/check24.png'
import parslyLogo from '@/assets/logos/parsly.png'
import podroLogo from '@/assets/logos/podro.svg'
import rdsyscoLogo from '@/assets/logos/rdsysco.png'
import linkedinLogo from '@/assets/icons/linkedin.svg'
import githubLogo from '@/assets/icons/github.svg'
import emailLogo from '@/assets/icons/email.svg'
import telegramLogo from '@/assets/icons/telegram.svg'
import xLogo from '@/assets/icons/x.svg'
import rsfLogo from '@/assets/logos/roadsurfer.jpg'

export default {
  data() {
    return {
      coreCompetencies: [
        "Domain-Driven Design (DDD)",
        "Test-Driven Development (TDD)",
        "Agile Software Development",
        "PHP", "Laravel", "Symfony",
        "React", "Vue", "Javascript", "Typescript",
        "Amazon Web Services (AWS)",
        "DevOps", "Docker", "Kubernetes",
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
          title: 'Senior Software Engineer',
          company: 'Roadsurfer, Munich - Remote',
          dates: '02/2025 - Now',
          logo: rsfLogo,
          skills: [
            'PHP8',
            'Symfony',
            'Segment CDP',
            'Braze CEP',
            'Jenkins',
            'Docker',
            'ELK Stack (Kibana)',
            'Microservices',
            'RESTful API',
          ],
          description: `
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">•</span>
                <span>Implemented custom PHP SDK for Braze with type-safe event catalog, increasing data consistency and monitoring</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">•</span>
                <span>Introduced documentation best practices, enhancing inter-team communication</span>
              </li>
            </ul>
          `
        },
        {
          title: 'Full-stack Engineer',
          company: 'Check24 Vergleichsportal, Frankfurt am Main - Hybrid',
          dates: '08/2024 - 01/2025',
          logo: check24Logo,
          skills: [
            'PHP8',
            'Symfony',
            'Laminas',
            'Vue.js',
            'SCSS',
            'Jenkins',
            'Docker',
            'Puppet',
            'PHPCS',
            'PHPStan',
            'ELK Stack (Kibana)',
            'Microservices',
            'RESTful API',
          ],
          description: `
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>Enhanced automated testing practices and tools, boosting test coverage to over 80% for new components.</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>Awarded "MacGyver of the Sprint" for the most impactful contribution in the 3rd month.</span>
              </li>
            </ul>
          `
        },
        {
          title: 'Senior Software Engineer',
          company: 'Interaction Design Foundation, Dubai - Remote',
          dates: '12/2023 - 07/2024',
          logo: ixdfLogo,
          skills: [
            'PHP8',
            'Laravel',
            'Google Tag Manager (GTM)',
            'Google Analytics (GA4)',
            'Amazon S3',
            'CloudFront',
            'Athena',
            'Cloud Watch',
            'AWS WAF',
            'Media Streaming (HLS)',
            'Graphql',
          ],
          description: `
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>Led the initiative to identify inefficiencies, collaborating within a cross-functional team (growth, finance, development), and troubleshooting issues in GA4 and GTM, achieving a 70% marketing cost reduction, and a 14% improvement in ROAS.</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>Restructured the Analytics Module; adopted server-side tracking to eliminate third-party cookies; enabled advanced consent mode to comply with Data Privacy regulations, resulting in a 31% reduction in blocked analytics data.</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>Optimized media streaming and enforced AWS security, reducing costs by $12k/month.</span>
              </li>
            </ul>
          `
        },
        {
          title: 'Full-stack Developer',
          company: 'Parsly, Stockholm - Remote',
          dates: '04/2023 - 11/2023',
          logo: parslyLogo,
          skills: [
            'Java',
            'Kotlin',
            'Spring Boot',
            'Quarkus',
            'Spring Cloud',
            'Docker',
            'Kubernetes',
            'React',
            'Next',
            'Typescript',
            'Tailwind',
            'Sentry',
            'Apache Kafka',
            'Microservices Architecture',
          ],
          description: `
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>Revamped the admin dashboard, automating routine manual work and saving 20 hours of weekly operation time.</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>Introduced testing best practices and simplified test fixture creation, achieving a 9% improvement in test coverage.</span>
              </li>
            </ul>
          `
        },
        {
          title: 'Senior Software Developer',
          company: 'Interaction Design Foundation, Dubai - Remote',
          dates: '01/2021 - 03/2023',
          logo: ixdfLogo,
          skills: [
            'PHP8',
            'Laravel',
            'BDD',
            'Behat',
            'Redis',
            'Vue.js',
            'Tailwind',
            'CQRS',
            'Event Sourcing',
            'Rector',
            'GitHub Actions',
            'Google Cloud (GCP)',
            'CloudFront',
            'EC2',
            'S3',
            'NewRelic (APM)',
          ],
          description: `
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>Implemented a fault-tolerant notification system, Increasing email delivery by 20% while reducing failure by 40%.</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>Developed a regex-based solution to automate the correction of stored, broken HTML, saving 250+ hours of manual work.</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>Enhanced the LMS architecture, reducing bugs, increasing test coverage by 35%, and boosting productivity by 30%.</span>
              </li>
            </ul>
          `
        },
        {
          title: 'Software Development Technical Lead',
          company: 'Podro, Tehran - Hybrid',
          dates: '12/2019 - 12/2020',
          logo: podroLogo,
          skills: [
            'PHP7',
            'Laravel',
            'DDD',
            'Clean Architecture',
            'OOP',
            'Reactive Programming',
            'Event-Driven Architecture',
            'Docker',
            'RabbitMQ',
            'Microservices',
            'SOA',
            'ELK',
            'RESTful API',
            'gRPC',
          ],
          description: `
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>Optimized pricing API performance by increasing concurrency and reactive programming, reducing response time by 0.9 seconds.</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>Led the development of a BPMS SaaS with a custom Rule Engine, increasing revenue by 17% and securing round 2 investments.</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>Implemented custom RabbitMQ adapter for Laravel with RxPHP, ensuring Sequential Consistency and reducing bugs by 8%.</span>
              </li>
            </ul>
          `
        },
        {
          title: 'Software Development Technical Lead',
          company: 'RDSysco, Isfahan - On Site',
          dates: '10/2016 - 11/2019',
          logo: rdsyscoLogo,
          skills: [
            'PHP5',
            'Symfony',
            'Java',
            'Spring Boot',
            'DDD',
            'Clean Architecture',
            'RabbitMQ',
            'Reactive Microservices',
            'End-to-End Testing (E2E)',
            'Acceptance Testing',
            'Gold-Master Testing',
            'Regression Testing',
            'Refactoring',
          ],
          description: `
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>Migrated a legacy codebase, upgrading from PHP 5.1 to 5.5, increasing performance by almost 200%.</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>Managed 3 cross-functional teams in developing a new Minimum Viable Product (MVP) employing Domain-Driven Design, Test-Driven Development, and Reactive Microservices, directly impacting the client's 20 million CAD contract.</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>Introduced automated testing best practices, regression tests, and E2E tests, saving 80 hours of weekly bug fixing.</span>
              </li>
            </ul>
          `
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
