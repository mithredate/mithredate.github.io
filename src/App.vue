<template>
  <PageComponent bgColor="bg-teal-700">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="order-2 md:order-1">
        <h1 class="text-white text-3xl mb-4">Mehrdad Hedayati</h1>
        <h2 class="text-white text-5xl mb-8">Senior Fullstack Developer </h2>
        <p class="text-gray-200 text-justify mb-8">
          Over 10 years of experience developing diverse projects and products,
          thriving in Agile environments, and collaborating with cross-functional
          teams to deliver clean, maintainable, high-quality, and well-tested code.

          Interested in Books, Anime, Sushi, and Yoga.

          Let's connect!
        </p>
        
        <ul class="flex flex-wrap mb-4">
            <li v-for="skill in coreCompetencies" :key="skill" class="bg-teal-900 text-white rounded-full px-3 py-1 text-sm mr-2 mb-2">{{ skill }}</li>
        </ul>
      </div>
      <div class="flex order-1 md:order-2">
        <img src="@/assets/profilepic.jpeg" alt="Profile Picture" class="rounded-full w-32 h-32 md:w-48 md:h-48">
      </div>
    </div>
  </PageComponent>
  <PageComponent bgColor="bg-gray-200">
    <div class="container max-w-screen-md text-gray-700 min-h-screen">
      <h2 class="text-gray-800 text-3xl mb-8">Employment History</h2>
      <ul>
        <li v-for="position in positions" :key="position.title" class="mb-12">
          <div class="flex items-center mb-4">
            <div class="p-4 mr-4">
              <img :src="position.logo" alt="Company Logo" class="w-20 h-20">
            </div>
            <div>
              <h3 class="text-2xl font-bold text-teal-900">{{ position.title }}</h3>
              <p class="text-xl italic text-teal-900">{{ position.company }}</p>
              <p class="text-sm italic">{{ position.dates}}</p>
            </div>
          </div>
          <p v-html="position.description" class="mb-4"></p>
          <div class="flex flex-wrap mb-4">
            <span v-for="skill in position.skills" :key="skill" class="bg-teal-700 text-white rounded-full px-3 py-1 text-sm mr-2 mb-2">{{ skill }}</span>
          </div>
        </li>
      </ul>
    </div>
  </PageComponent>
  <footer class="fixed bottom-0 left-0 w-full text-gray-900 bg-teal-700 bg-opacity-90 py-2 shadow-inner">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex-1 flex justify-center items-center">
        <a v-for="link in footerLinks" :key="link.name" :href="link.url" target="_blank" class="mr-4">
          <img :src="link.logo" :alt="link.name" class="w-6 h-6">
        </a>
      </div>
      <a 
        href="https://www.flaticon.com/free-icons/email" 
        title="Flaticon"
        class="text-gray-200 text-xs mr-2"
      >Icons by Uniconlabs - Flaticon</a>
    </div>
  </footer>
</template>

<script>
import PageComponent from './components/PageComponent.vue';
import ixdfLogo from '@/assets/logos/ixdf.png'
import check24Logo from '@/assets/logos/check24.png'
import parslyLogo from '@/assets/logos/parsly.png'
import podroLogo from '@/assets/logos/podro.svg'
import rdsyscoLogo from '@/assets/logos/rdsysco.png'
import linkedinLogo from '@/assets/logos/linkedin.png'
import githubLogo from '@/assets/logos/github.png'
import emailLogo from '@/assets/logos/email.png'
import telegramLogo from '@/assets/logos/telegram.png'
import xLogo from '@/assets/logos/x.png'

export default {
  components: {
    PageComponent
  },
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
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mhedayati', logo: linkedinLogo },
        { name: 'GitHub', url: 'https://github.com/mithredate', logo: githubLogo },
        { name: 'Email', url: 'mailto:mehrdad.hedayati@gmail.com', logo: emailLogo },
        { name: 'Telegram', url: 'https://t.me/mithredate', logo: telegramLogo },
        { name: 'X', url: 'https://x.com/mithredate', logo: xLogo },
      ],
      positions: [
        {
          title: 'Full-stack Engineer',
          company: 'Check24 Vergleichsportal, Frankfurt am Main - Hybrid',
          dates: '08/2024 - Now',
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
            <ul class="list-disc list-inside text-justify">
              <li>Enhanced automated testing practices and tools, boosting test coverage to over 80% for new components.</li>
              <li>Awarded “MacGyver of the Sprint” for the most impactful contribution in the 3rd month.</li>
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
            <ul class="list-disc list-inside text-justify">
              <li>Led the initiative to identify inefficiencies, collaborating within a cross-functional team (growth, finance, development), and troubleshooting issues in GA4 and GTM, achieving a 70% marketing cost reduction, and a 14% improvement in ROAS.</li>
              <li>Restructured the Analytics Module; adopted server-side tracking to eliminate third-party cookies; enabled advanced consent mode to comply with Data Privacy regulations, resulting in a 31% reduction in blocked analytics data.</li>
              <li>Optimized media streaming and enforced AWS security, reducing costs by $12k/month.</li>
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
            <ul class="list-disc list-inside text-justify">
              <li>Revamped the admin dashboard, automating routine manual work and saving 20 hours of weekly operation time.</li>
              <li>Introduced testing best practices and simplified test fixture creation, achieving a 9% improvement in test coverage.</li>
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
            <ul class="list-disc list-inside text-justify">
              <li>Implemented a fault-tolerant notification system, Increasing email delivery by 20% while reducing failure by 40%.</li>
              <li>Developed a regex-based solution to automate the correction of stored, broken HTML, saving 250+ hours of manual work.</li>
              <li>Enhanced the LMS architecture, reducing bugs, increasing test coverage by 35%, and boosting productivity by 30%.</li>
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
            <ul class="list-disc list-inside text-justify">
              <li>Optimized pricing API performance by increasing concurrency and reactive programming, reducing response time by 0.9 seconds.</li>
              <li>Led the development of a BPMS SaaS with a custom Rule Engine, increasing revenue by 17% and securing round 2 investments.</li>
              <li>Implemented custom RabbitMQ adapter for Laravel with RxPHP, ensuring Sequential Consistency and reducing bugs by 8%.</li>
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
            <ul class="list-disc list-inside text-justify">
              <li>Migrated a legacy codebase, upgrading from PHP 5.1 to 5.5, increasing performance by almost 200%.</li>
              <li>Managed 3 cross-functional teams in developing a new Minimum Viable Product (MVP) employing Domain-Driven Design, Test-Driven Development, and Reactive Microservices, directly impacting the client's 20 million CAD contract.</li>
              <li>Introduced automated testing best practices, regression tests, and E2E tests, saving 80 hours of weekly bug fixing.</li>
            </ul>
          `
        }
      ],
      footerClass: 'bg-teal-700'
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.footerClass = window.scrollY > 25 ? 'bg-teal-200' : 'bg-teal-700';
    }
  }
}
</script>