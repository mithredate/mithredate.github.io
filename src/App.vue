<template>
  <main class="page">
    <!-- Hero -->
    <header class="hero" aria-labelledby="hero-name">
      <img src="@/assets/profilepic.jpeg" :alt="content.hero.profileAlt"
           width="80" height="80" fetchpriority="high" class="portrait">

      <h1 id="hero-name" class="name">{{ content.hero.name }}</h1>

      <p class="roles">
        <span v-for="role in roleLines" :key="role" class="role-line">{{ role }}</span>
      </p>

      <p class="tagline">{{ content.hero.tagline }}</p>

      <p class="intro">{{ content.hero.quickIntro }}</p>

      <nav aria-label="Contact links">
        <ul class="links">
          <li v-for="link in contactLinks" :key="link.name">
            <a :href="link.url"
               :target="link.external ? '_blank' : null"
               :rel="link.external ? 'noopener noreferrer me' : null"
               :aria-label="link.external ? `${link.name} (opens in new tab)` : link.name">
              {{ link.label }}<span v-if="link.external" aria-hidden="true" class="ext">&nbsp;&#8599;</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Stack -->
    <section aria-labelledby="stack-heading">
      <h2 id="stack-heading" class="path"><span class="tilde">~/</span>stack</h2>
      <dl class="stack">
        <template v-for="group in stack" :key="group.label">
          <dt>{{ group.label }}</dt>
          <dd>{{ group.items.join(' · ') }}</dd>
        </template>
      </dl>
    </section>

    <!-- Experience -->
    <section id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" class="path"><span class="tilde">~/</span>experience</h2>
      <p class="section-note">{{ content.experience.subtitle }}</p>

      <ol class="timeline">
        <li v-for="position in positions" :key="position.title + position.dates" class="entry">
          <p class="dates" :class="{ current: position.current }">
            <time>{{ position.dates }}</time>
          </p>
          <div>
            <h3 class="entry-title">{{ position.title }}</h3>
            <p class="entry-company">{{ position.company }}</p>
          </div>
        </li>
      </ol>
    </section>

    <!-- Mentorship -->
    <section id="mentorship" aria-labelledby="mentorship-heading">
      <h2 id="mentorship-heading" class="path"><span class="tilde">~/</span>mentorship</h2>
      <div class="mentorship">
        <div>
          <p class="section-body">{{ content.mentorship.adpDescription }}</p>
          <a href="https://adplist.org/mentors/mehrdad-hedayati"
             target="_blank" rel="noopener noreferrer"
             class="cta"
             :aria-label="`${content.mentorship.ctaText} on ADPList (opens in new tab)`">
            {{ content.mentorship.ctaText.toLowerCase() }}<span aria-hidden="true">&nbsp;&#8599;</span>
          </a>
        </div>
        <img alt="ADPList mentorship impact stats"
             loading="lazy" decoding="async" class="adp-widget"
             src="https://adplist-users-production.s3.us-east-1.amazonaws.com/3b611639b01fa697d1a33947b79c1229/swags/5c06e00a-1ac5-5dcc-946d-a1e0bc7bd514.webp">
      </div>
    </section>

    <!-- Education -->
    <section id="education" aria-labelledby="education-heading">
      <h2 id="education-heading" class="path"><span class="tilde">~/</span>education</h2>
      <div class="entry">
        <p class="dates">Isfahan, Iran</p>
        <div>
          <h3 class="entry-title">B.Sc. Computer Software Engineering</h3>
          <p class="entry-company">University of Isfahan</p>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" class="path"><span class="tilde">~/</span>contact</h2>
      <p class="section-body">{{ content.contact.subtitle }}</p>
      <ul class="links">
        <li v-for="link in contactLinks" :key="link.name">
          <a :href="link.url"
             :target="link.external ? '_blank' : null"
             :rel="link.external ? 'noopener noreferrer me' : null"
             :aria-label="link.external ? `${link.name} (opens in new tab)` : link.name">
            {{ link.label }}<span v-if="link.external" aria-hidden="true" class="ext">&nbsp;&#8599;</span>
          </a>
        </li>
      </ul>
    </section>

    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} {{ content.footer.copyright }} &middot; Frankfurt, Germany</p>
    </footer>
  </main>
</template>

<script>
import contentData from '@/content.json'

export default {
  data() {
    return {
      content: contentData,
      stack: [
        { label: 'languages', items: ['TypeScript', 'Go', 'PHP', 'Java', 'Kotlin'] },
        { label: 'ai', items: ['AI Agents', 'MCP', 'RAG', 'n8n'] },
        { label: 'infrastructure', items: ['Kubernetes', 'AWS', 'Docker', 'Terraform', 'Platform Engineering'] },
        { label: 'architecture', items: ['Microservices', 'Event-Driven Architecture', 'Domain-Driven Design', 'Test-Driven Development', 'CQRS', 'Event Sourcing'] },
        { label: 'frameworks', items: ['Symfony', 'Laravel', 'Vue.js', 'React', 'GraphQL', 'gRPC', 'Apache Kafka', 'RabbitMQ'] },
      ],
      contactLinks: [
        { name: 'LinkedIn', label: 'linkedin', url: 'https://www.linkedin.com/in/mhedayati', external: true },
        { name: 'GitHub', label: 'github', url: 'https://github.com/mithredate', external: true },
        { name: 'Email', label: 'email', url: 'mailto:mehrdad.hedayati@gmail.com', external: false },
        { name: 'Telegram', label: 'telegram', url: 'https://t.me/mithredate', external: true },
        { name: 'X', label: 'x', url: 'https://x.com/mithredate', external: true },
        { name: 'ADPList', label: 'adplist', url: 'https://adplist.org/mentors/mehrdad-hedayati', external: true },
      ],
      positions: [
        {
          title: 'Team Lead, Platform Engineering',
          company: 'Roadsurfer GmbH, Munich · Remote',
          dates: '08/2026 – now',
          current: true,
        },
        {
          title: 'Team Lead, AI & Automation',
          company: 'Roadsurfer GmbH, Munich · Remote',
          dates: '10/2025 – now',
          current: true,
        },
        {
          title: 'Senior Full-Stack Engineer, MarTech',
          company: 'Roadsurfer GmbH, Munich · Remote',
          dates: '02/2025 – 09/2025',
        },
        {
          title: 'Senior Software Engineer',
          company: 'Interaction Design Foundation (IxDF), Dubai · Remote',
          dates: '12/2023 – 01/2025',
        },
        {
          title: 'Full-Stack Developer',
          company: 'Parsly, Stockholm · Remote',
          dates: '04/2023 – 11/2023',
        },
        {
          title: 'Senior Software Developer',
          company: 'Interaction Design Foundation (IxDF), Dubai · Remote',
          dates: '01/2021 – 03/2023',
        },
        {
          title: 'Technical Lead & Founding Engineer',
          company: 'PodroCo, Tehran · Hybrid',
          dates: '12/2019 – 12/2020',
        },
        {
          title: 'Lead Software Developer',
          company: 'RDSysCo, Isfahan · On site',
          dates: '10/2016 – 11/2019',
        },
      ],
    };
  },
  computed: {
    roleLines() {
      return this.content.hero.title.split(' | ');
    },
  },
}
</script>

<style scoped>
.page {
  max-width: 42rem;
  margin: 0 auto;
  padding: 4.5rem 1.5rem 3rem;
  font-family: var(--font-sans);
  font-size: 1rem;
  line-height: 1.65;
  animation: settle 0.5s ease-out;
}

@keyframes settle {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: none; }
}

/* Hero */
.portrait {
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
  object-fit: cover;
  border: 1px solid var(--rule);
  margin-bottom: 1.5rem;
}

.name {
  font-family: var(--font-serif);
  font-weight: 900;
  font-size: 2.25rem;
  line-height: 1.15;
  letter-spacing: -0.01em;
  margin-bottom: 0.75rem;
}

.roles {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  color: var(--muted);
  margin-bottom: 1.75rem;
}

.role-line {
  display: block;
}

.tagline {
  font-family: var(--font-serif);
  font-size: 1.375rem;
  line-height: 1.45;
  max-width: 34rem;
  margin-bottom: 1.25rem;
}

.intro {
  font-size: 0.875rem;
  color: var(--faint);
  margin-bottom: 2rem;
}

/* Links */
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 1.4rem;
  list-style: none;
  padding: 0;
  font-family: var(--font-mono);
  font-size: 0.8125rem;
}

.links a {
  color: var(--accent);
  text-decoration: none;
}

.links a:hover {
  color: var(--accent-strong);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.ext {
  color: var(--faint);
  font-size: 0.7em;
}

/* Sections */
section {
  margin-top: 4.5rem;
}

.path {
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.02em;
  color: var(--ink);
  border-bottom: 1px solid var(--rule);
  padding-bottom: 0.6rem;
  margin-bottom: 1.5rem;
}

.tilde {
  color: var(--accent);
}

.section-note {
  font-size: 0.9375rem;
  color: var(--muted);
  margin-bottom: 1.75rem;
}

.section-body {
  max-width: 32rem;
  margin-bottom: 1rem;
}

/* Stack */
.stack {
  display: grid;
  grid-template-columns: 9rem 1fr;
  row-gap: 0.6rem;
  font-size: 0.875rem;
}

.stack dt {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  color: var(--faint);
}

.stack dd {
  color: var(--muted);
  margin: 0;
}

/* Experience */
.timeline {
  list-style: none;
  padding: 0;
}

.entry {
  display: grid;
  grid-template-columns: 9rem 1fr;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--rule);
}

.entry:last-child {
  border-bottom: none;
}

.dates {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  color: var(--faint);
  padding-top: 0.15rem;
}

.dates.current {
  color: var(--accent);
}

.entry-title {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 1.0625rem;
  line-height: 1.4;
}

.entry-company {
  font-size: 0.875rem;
  color: var(--muted);
  margin-top: 0.15rem;
}

/* Mentorship */
.mentorship {
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
}

.mentorship > div {
  flex: 1;
}

.cta {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  color: var(--accent);
  text-decoration: none;
}

.cta:hover {
  color: var(--accent-strong);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.adp-widget {
  width: 15rem;
  max-width: 40%;
  border-radius: 0.5rem;
  border: 1px solid var(--rule);
}

/* Footer */
.footer {
  margin-top: 4.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--rule);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--faint);
}

/* Mobile */
@media (max-width: 40rem) {
  .page {
    padding-top: 3rem;
  }

  .name {
    font-size: 1.875rem;
  }

  .tagline {
    font-size: 1.1875rem;
  }

  .stack,
  .entry {
    grid-template-columns: 1fr;
    row-gap: 0.15rem;
  }

  .stack dt {
    margin-top: 0.5rem;
  }

  .dates {
    margin-bottom: 0.25rem;
  }

  .mentorship {
    flex-direction: column;
  }

  .adp-widget {
    max-width: 100%;
    width: 18rem;
  }
}
</style>
