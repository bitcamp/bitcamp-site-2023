<template>
  <div class="container">
    <main class="row justify-content-center">
      <section class="col-lg-7">
        <section class="SupportSection">
          <a href="./" class="home-link">
            <img
              src="../assets/img/sponsors/Custom/go-back.svg"
              alt="Go Back"
            />
            <span>Home</span>
          </a>
          <h1>
            <strong class="SupportTitle"> help support </strong> Bitcamp 2023!
          </h1>
          <p>Hello Potential Sponsor!</p>
          <p>
            Bitcamp, hosted annually at the University of Maryland, is one of
            the largest collegiate hackathons on the East Coast, bringing
            together over 1,400 students. Student developers, designers, and
            thinkers of varying technical ability and experience will congregate
            to spend 36 hours cultivating websites, apps, and hardware projects
            that strive to better their communities.
          </p>
          <p>
            Bitcamp is a melting pot of creativity; a great place to influence a
            diverse group of the nation's brightest innovators who are
            passionate about solving the problems of tomorrow. Hackers and their
            teams develop a multi-disciplinary mindset. Not just focusing on the
            coding aspects of their projects, they are also challenged to learn
            new skills including project management and user-friendly design.
            Bitcamp presents an excellent opportunity for recruitment and tech
            mentorship.
          </p>
          <p>
            Last year was our first in-person event in three years and we
            celebrated our 8th anniversary as “Bytecamp”! We made some
            unforgettable memories with the more than 1,000 hackers that
            registered to attend the event and saw some incredible talent in the
            nearly 100 projects that were submitted. Check out the amazing array
            of hacks at:
            <a href="https://bitcamp2022.devpost.com/"
              >https://bitcamp2022.devpost.com/</a
            >!
          </p>
          <p>
            Additionally, Bitcamp is a 501(c)(3) non-profit organization. All
            donations made to Bitcamp will be fully tax-deductible.
          </p>
          <p>
            We invite you to review the various tiers of sponsorship below. More
            detailed information regarding each individual perk can be accessed
            on our website by visiting
            <a href="https://bit.camp/sponsor">bit.camp/sponsor</a>. If you're
            interested in becoming an official sponsor for Bitcamp 2023, we'd
            love to chat! You can reach us at
            <a href="mailto:sponsorship@bit.camp">sponsorship@bit.camp</a>. We
            hope to see you by the campfire!
          </p>
          <p>Best,</p>
          <p>The Bitcamp Team</p>
          <div class="tooltips left">Hello</div>
          <hr class="divider" />
          <h2>Sponsorship Prospectus</h2>
        </section>
        <section class="Rtable js-RtableTabs">
          <!-- <ProspectusHeader
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :prices="[
                '$1,000',
                '$4,000',
                '$7,000',
                '$10,000',
                '$15,000',
                '$25,000',
                '$6,000',
              ]"
            /> -->
          <div class="Rtable-grid">
            <div class="Rtable-cell Rtable-cell-blank"></div>
            <div class="Rtable-cell Rtable-cell--head Rtable-cell-Byte">
              Byte
            </div>
            <div class="Rtable-cell Rtable-cell--head Rtable-cell-Kilo">
              Kilo
            </div>
            <div class="Rtable-cell Rtable-cell--head Rtable-cell-Mega">
              Mega
            </div>
            <div class="Rtable-cell Rtable-cell--head Rtable-cell-Giga">
              Giga
            </div>
            <div class="Rtable-cell Rtable-cell--head Rtable-cell-Tera">
              Tera
            </div>
            <div class="Rtable-cell Rtable-cell--head Rtable-cell-Peta">
              Peta
            </div>
            <div class="Rtable-cell Rtable-cell--head Rtable-cell-Virtual">
              Virtual
            </div>

            <ProspectusRow
              :categoryName="'Contribution'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="[
                '$1,000',
                '$4,000',
                '$7,000',
                '$10,000',
                '$15,000',
                '$25,000',
                '$6,000',
              ]"
              :header="'first-row Rtable-category-cell-full'"
            />
            <ProspectusEmptyRow :categoryName="'General'" />
            <ProspectusRow
              :categoryName="'Mentors at Event'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="[
                'check-b',
                'check-b',
                'check-w',
                'check-w',
                'check-w',
                'check-w',
                '',
              ]"
              :description="'Mentors are a great way to represent your company or organization at Bitcamp and help our hackers with any questions they might have about their projects.'"
            />
            <ProspectusRow
              :categoryName="'Opening Session Talk'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="[
                '',
                '1 min',
                '2 min',
                '3 min',
                '5 min',
                '10 min',
                '2 min',
              ]"
              :description="'Sponsors with this perk will get speaking time at the opening ceremony to discuss their company, their prize category, and anything else that they would like! Please keep in mind the designated time allotment for your tier when planning your presentation.'"
            />
            <ProspectusRow
              :categoryName="'Provide a Prize'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="['', '', 'check-w', 'check-w', 'check-w', 'check-w', '']"
              :description="'This prize category can be something general, such as “Best Security Hack” or “Best Use of Machine Learning”, or something branded, such as “Best Use of [insert company]’s API”. Our hackers will have the option of submitting their hacks/projects to your prize category, and you will be able to judge projects, select winners, and distribute your own prizes accordingly during the closing ceremony. We encourage our sponsors to choose prizes that appeal to the hackers over service credits/something niche.'"
            />
            <ProspectusRow
              :categoryName="'Dedicated Prize Category Office Hours'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="['', '', 'check-w', 'check-w', 'check-w', 'check-w', '']"
              :description="'When sponsors choose to provide a prize, hackers may find it difficult to pick up all the skills necessary to create the best project to submit to the category. As such, we offer an opportunity for sponsors that provide a prize to hold specialized office hours targeted toward helping hackers overcome hurdles as they prepare their submissions to the prize category. This way, hackers can easily access any resources they need in one place as they complete their submission to a sponsor’s prize category.'"
            />
            <ProspectusRow
              :categoryName="'Panel Discussion'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="['', '', '', 'check-w', 'check-w', 'check-w', '']"
              :description="'A panel discussion is another great way for sponsors to interact with our hackers. This includes a moderated discussion on a topic and questions curated by our team (which will be provided to company representatives beforehand), as well as an open Q&A session at the end for hackers to ask our panelists. We recommend ideally 1 person to be on the panel from each eligible company but will allow max 2 people.'"
            />
            <ProspectusRow
              :categoryName="'Closing Ceremony Talk'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="['', '', '', '5 min', '10 min', '15 min', '']"
              :description="'This is a great opportunity for a company to give an inspiring and motivating talk to our hackers. This could be about an experience, something related to our hackathon’s theme, or anything realistically.'"
            />
            <ProspectusRow
              :categoryName="'Sponsored Side Event'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="['', '', '', '', '30 min', '60 min', '']"
              :description="'A tech talk/workshop is an excellent way for sponsors to interact with our hackers and can be on any topic of your choice. Past workshops have covered a range of topics from cybersecurity to web development to machine learning. These will be done in person with the option to make it as interactive as desired. If companies need help choosing a topic for their workshop or event, they can connect with our Workshops team once they have committed to a tier.'"
            />
            <ProspectusRow
              :categoryName="'Branded Mini Game'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="['', '', '', '', 'check-w', 'check-w', '']"
              :description="'This is a great way to engage with our hackers in a fun, informal way over activity of choice (example: mini capture the flag, cup stacking, etc). A mini-challenge usually involves an activity like a game or a short event with prizes. We will work with you to arrange the logistics, and will also be sure to advertise and announce this mini-challenge during the event itself.'"
            />
            <ProspectusRow
              :categoryName="'Provide an Additional Prize'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="['', '', '', '', '', 'check-w', '']"
              :description="'Providing prizes is a powerful perk that can help companies reach out to their target hacker population, be it those interested in a specific field or those that have a specific skillset. This year, our Peta-level sponsor can provide 2 prizes to ensure they get as much outreach as possible and are successful in identifying talent at the hackathon.'"
            />
            <ProspectusBottomRow
              :categoryName="'Interview Slots'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="['', '', '', '', '', 'check-w', '']"
              :description="'Our Peta-level sponsor will have a unique opportunity to interview select candidates for potential full-time opportunities. By doing so, not only will you be able to easily identify talent to join your company, but you will also have the opportunities to connect with candidates in a more personalized way. We will provide 2 hours and any resources necessary to make this possible and make recruiting at Bitcamp as efficient as possible!'"
            />
            <ProspectusEmptyRow :categoryName="'Recruiting'" />
            <ProspectusRow
              :categoryName="'Reserved Table'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="[
                'check-b',
                'check-b',
                'check-w',
                'check-w',
                'check-w',
                'check-w',
                'check-w',
              ]"
              :description="'Sponsors have their own in-person booth in our event location. The booth is your “home base” for the event, from which you can post or distribute marketing materials, interact with hackers, and make your presence felt at Bitcamp! '"
            />
            <ProspectusRow
              :categoryName="'Access to Hacker Contact Info'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="[
                '',
                'check-b',
                'check-w',
                'check-w',
                'check-w',
                'check-w',
                'check-w',
              ]"
              :description="'With this perk, sponsors will be provided with contact information that hackers provide to directly message with/reach out to after Bitcamp has occurred. This is information that we will provide to sponsors after the event.'"
            />
            <ProspectusRow
              :categoryName="'Access to Resumes'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="[
                '',
                '',
                'check-w',
                'check-w',
                'check-w',
                'check-w',
                'check-w',
              ]"
              :description="'With this perk, we provide a database of all of our registrants’ resumes to our sponsors following the event (before if we are able to do so logistically). This will [ideally be in a Google Drive format but can be changed due to certain company restrictions.'"
            />
            <ProspectusRow
              :categoryName="'Recruiters Present/Active Recruitment'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="[
                '',
                '',
                'check-w',
                'check-w',
                'check-w',
                'check-w',
                'check-w',
              ]"
              :description="'You are welcome to have recruiters and recruiting materials at your booth at Bitcamp, where you will be able to interact with all of our hackers. You may bring as many representatives as you’d like (we recommend 3-4). There will be a “Sponsorship Fair” during which hackers will be encouraged to visit your open booths.'"
            />
            <ProspectusRow
              :categoryName="'Recruitment Event Shoutout on Social Media'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="[
                '',
                '',
                '',
                '1 event',
                '2 events',
                '3 events',
                '2 events',
              ]"
              :description="'Any recruitment event or information session you hope to advertise from the moment you choose to sponsor Bitcamp to when the event takes place, we will advertise on our Bitcamp social media account. Based on the tier at which you sponsor, we will advertise up to 3 recruitment events (Peta) through LinkedIn and Email to all registered hackers!'"
            />

            <ProspectusRow
              :categoryName="'Bootcamp Sponsorship Fair'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="['', '', '', '', 'check-w', 'check-w', 'check-w']"
              :description="'We’ve started a new tradition of a hype event before Bitcamp takes place, where hackers can come together, meet each other, and get a glimpse of what Bitcamp is and for the first time ever, we will be including a sponsorship fair as part of the event! This is a unique opportunity for you to be one of the first sponsors to interact with prospective hackers even before the hackathon takes place and gives you a chance to have a personalized interaction with hackers and begin recruiting early!'"
            />

            <ProspectusBottomRow
              :categoryName="'Pre-Event Email to All Hackers'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="['', '', '', '', '', 'check-w', '']"
              :description="'Around 2-3 days before the event itself, we will allow sponsors with this perk to email all of our registrants up to that point to encourage participants to keep an eye out for your company’s booth and activities during the event. The message would be sent by the Bitcamp Team on behalf of your organization/company, but we will leave the content of the email up to you! '"
            />
            <ProspectusEmptyRow :categoryName="'Marketing'" />
            <ProspectusRow
              :categoryName="'Logo on Shirt and Website'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="[
                'check-b',
                'check-b',
                'check-w',
                'check-w',
                'check-w',
                'check-w',
                'check-w',
              ]"
              :description="'Sponsors will have their logos (ordered and scaled by sponsorship tier) on our website and T-shirt.'"
            />
            <ProspectusRow
              :categoryName="'Distribute Marketing Materials and Merch'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="[
                'check-b',
                'check-b',
                'check-w',
                'check-w',
                'check-w',
                'check-w',
                'check-w',
              ]"
              :description="'Sponsors are able to distribute marketing materials to our hackers in their virtual and in-person booths. This can include any type of virtual swag (ex: promo codes), informational materials (ex: pamphlets, flyers, or videos), or physical swag (ex: T-shirts, masks).'"
            />
            <ProspectusRow
              :categoryName="'Social Media Shoutout'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="[
                '',
                'check-b',
                'check-w',
                'check-w',
                'check-w',
                'check-w',
                '',
              ]"
              :description="'Bitcamp social media accounts will promote your company through a customized message of choice at some point leading up to the day of the event. We will post about your company on all forms of social media you select (Twitter, LinkedIn, Instagram, etc).'"
            />

            <ProspectusRow
              :categoryName="'Premium Table Location'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="['', '', 'check-w', 'check-w', 'check-w', 'check-w', '']"
              :description="'Be one of the first companies hackers see as they walk into Bitcamp! By getting an additional booth location away from easily crowded locations, you can increase visibility to hackers and your chances to interact with them.'"
            />

            <ProspectusBottomRow
              :categoryName="'&quot;Cohosted By&quot;'"
              :tierNames="[
                'Byte',
                'Kilo',
                'Mega',
                'Giga',
                'Tera',
                'Peta',
                'Virtual',
              ]"
              :args="['', '', '', '', '', 'check-w', '']"
              :description="'Peta-level sponsors will be given special recognition in our marketing materials as a co-host. '"
            />

            <div class="Rtable-cell Rtable-cell-blank"></div>
            <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Byte"></div>
            <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Kilo"></div>
            <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Mega"></div>
            <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Giga"></div>
            <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Tera"></div>
            <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Peta"></div>
            <div
              class="Rtable-cell Rtable-cell--foot Rtable-cell-Virtual"
            ></div>

            <div class="Rtable-cell Rtable-cell-blank"></div>
            <div class="Rtable-cell Rtable-cell-blank"></div>
            <div class="Rtable-cell Rtable-cell-blank"></div>
            <div class="Rtable-cell Rtable-cell-blank"></div>
            <div class="Rtable-cell Rtable-cell-blank"></div>
            <div class="Rtable-cell Rtable-cell-blank"></div>
            <div class="Rtable-cell Rtable-cell-blank"></div>
            <div class="Rtable-cell Rtable-cell-blank"></div>

            <ProspectusMisc
              :perk="'Additional Prize Category'"
              :price="'$1,000'"
              :type="'head'"
              :description="'If you’re already sponsoring a tier that allows you to provide a prize, then you have the opportunity to sponsor an additional prize through this perk. Sponsoring prizes is an excellent chance to interact with hackers and attract talent with the specific skillset or interests that you’re looking for and sponsoring an additional prize is a great way to expand your search.'"
            />
            <ProspectusMisc
              :perk="'Bitcamp Podcast'"
              :price="'$2,000'"
              :type="'bottom'"
              :description="'This add-on is open to all sponsors and is the perfect chance for your company to get exposure among past and prospective hackers. Hop on the Bitcamp Podcast, share what you love about your company, and get students interested!'"
            />
          </div>
          <hr class="divider" />
          <section class="ConnectSection">
            <h2>Connect</h2>
            <div>
              <img
                src="../assets/img/sponsors/Custom/globe.svg"
                alt="Bitcamp Homepage"
              />
              <a href="https://bit.camp">https://bit.camp</a>
            </div>
            <div>
              <img src="../assets/img/sponsors/Custom/email.svg" alt="Email" />
              <a class="SponsorEmail" href="mailto:sponsorship@bit.camp"
                >sponsorship@bit.camp</a
              >
            </div>
          </section>
        </section>
      </section>
    </main>
  </div>
</template>


<script setup lang="ts">
useHead({
  title: 'Bitcamp | Sponsor Prospectus',
  meta: [
    {
      name: 'description',
      content: "",
    },
    {
      property: 'og:title',
      content: 'Bitcamp | Sponsor Prospectus',
    },
    {
      property: 'og:site_name',
      content: 'Bitcamp',
    },
    {
      property: 'og:url',
      content: 'https://bit.camp/sponsor',
    },
    {
      property: 'og:description',
      content:
      "",
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'twitter:card',
      content: 'summary',
    },
    {
      property: 'twitter:url',
      content: 'https://bit.camp/sponsor',
    },
    {
      property: 'twitter:title',
      content: 'Bitcamp | Sponsor Prospectus',
    },
    {
      property: 'twitter:description',
      content:
      "",
    },
    {
      name: 'msapplication-TileColor',
      content: '#ff6f3f',
    },
    {
      name: 'msapplication-config',
      content: '/bitcamp-brand/favicons/browserconfig.xml',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/bitcamp-brand/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/bitcamp-brand/favicons/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/bitcamp-brand/favicons/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: '/bitcamp-brand/favicons/safari-pinned-tab.svg',
      color: '#ff6f3f',
    },
    {
      rel: 'shortcut icon',
      href: '/bitcamp-brand/favicons/favicon.ico',
    },
  ],
});
</script>

<script lang="ts">
export default {
  name: 'SponsorPage',
  // methods: {
  //   greet() {
  //     // `this` inside methods points to the current active instance
  //     alert(`Hello!`);
  //     // `event` is the native DOM event
  //   },
  // },
};
</script>

<!-- <script type="module">
import $ from 'jquery';
(function ($) {
  'use strict';
  $.fn.responsiveTable = function () {
    var toggleColumns = function ($table) {
      var selectedCol;
      var colNames = [];

      // Find current tab
      $table.find('.Tab').each(function () {
        if ($(this).attr('aria-selected') === 'true') {
          selectedCol = $(this).text();
        }
        colNames.push($(this).text());
      });

      // Set the specified tab as active on the larger table and all table cells
      colNames.forEach((name) => {
        if (name === selectedCol) {
          $table.addClass(`${name}-active`);
          $table.find(`.Rtable-cell-${name}`).removeClass('hiddenSmall');
        } else {
          $table.removeClass(`${name}-active`);
          $table.find(`.Rtable-cell-${name}`).addClass('hiddenSmall');
        }
      });
    };

    $(this).each(function () {
      toggleColumns($(this));
    });

    $(this)
      .find('.Tab')
      .click(function () {
        $(this)
          .blur()
          .attr('aria-selected', 'true')
          .siblings()
          .attr('aria-selected', 'false');
        toggleColumns($(this).parents('.Rtable'));
      });
  };
})(jQuery);

$('.js-RtableTabs').responsiveTable();
</script> -->

<style>
:root {
  --border-radius: 15px;
  --color-primary: var(--color-bitcamp);
  --color-Byte: #e7d8cc;
  --color-Kilo: #ffaf00;
  --color-Mega: #ff6312;
  --color-Giga: #ff062b;
  --color-Tera: #7f6c5f;
  --color-Peta: #538da4;
  --color-Virtual: #009151;
  --color-category: var(--color-sky);
  --color-light-text: white;
  --color-dark-text: var(--color-midnight);
  --color-border: white;
  --color-focus: cornflowerblue;
  --color-highlight: #ffaf3f;
  --color-misc-category: #ededed;
  --icon-height: 18px;
}
</style>

<style scoped lang="scss">
@import 'bootstrap/dist/css/bootstrap.css';

.container {
  font-family: Avenir;
  color: black;
}

a {
  text-decoration: none !important;
  color: var(--color-primary) !important;
}

/* Overall Layout
================================== */
main {
  padding: 2rem 0;
  display: flex !important;
}

hr.divider {
  height: 7px;
  opacity: 1;
  color: var(--color-highlight);
  margin: 3rem 0 0.5rem;
}

.SupportTitle {
  color: var(--color-dark-text);
}

.SupportSection p {
  font-size: 1.15rem;
}

h1,
h2 {
  font-family: Aleo;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  color: var(--color-primary);
}

h2 {
  text-transform: lowercase;
}

/* Home link
================================== */
.home-link {
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.home-link img {
  height: var(--icon-height);
  margin-right: 0.5em;
}

@media screen and (max-width: 992px) {
  .home-link {
    position: static;
    margin-bottom: 1em;
  }
}

:deep(*) {
  /* Tables
================================== */
  .Rtable {
    // width: calc(100% + 2rem);
    // min-width: 40rem;
    margin-left: -1rem;
    padding: 0 1rem;
  }
  .Rtable-grid {
    // display: -ms-grid;
    display: grid;
    // -ms-grid-columns: 2fr (1fr);
    overflow-x: auto;
    grid-template-columns: 2fr repeat(7, 1fr);
  }

  .Rtable-cell {
    // -webkit-box-flex: 1;
    // -ms-flex-positive: 1;
    // flex-grow: 1;
    padding: 0.5em 0.5em;
    // overflow: hidden;
    border: solid 1px var(--color-border);
    font-family: Avenir;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  /* Cell styles
================================== */
  .Rtable-cell {
    color: var(--color-dark-text);
    border-color: var(--color-light-text);
  }

  .Rtable-cell img {
    height: var(--icon-height);
  }

  .Rtable-cell p {
    margin: 0;
  }

  .Rtable-cell--head {
    font-family: Avenir;
    font-weight: 800;
    text-align: center;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .Rtable-cell-Byte {
    background-color: var(--color-Byte);
  }

  .Rtable-cell-Kilo {
    background-color: var(--color-Kilo);
  }

  .Rtable-cell-Mega {
    color: var(--color-light-text);
    background-color: var(--color-Mega);
  }

  .Rtable-cell-Giga {
    color: var(--color-light-text);
    background-color: var(--color-Giga);
  }

  .Rtable-cell-Tera {
    color: var(--color-light-text);
    background-color: var(--color-Tera);
  }

  .Rtable-cell-Peta {
    color: var(--color-light-text);
    background-color: var(--color-Peta);
  }

  .Rtable-cell-Virtual {
    color: var(--color-light-text);
    background-color: var(--color-Virtual);
  }

  .Rtable-cell-misc {
    background-color: var(--color-misc-category);
  }

  .Rtable-cell--foot {
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    min-height: 30px;
    border-bottom: 0;
  }

  .Rtable-cell--head {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    min-height: 30px;
    border-bottom: 0;
  }

  .Rtable-cell-blank {
    background-color: transparent;
  }

  .Rtable-category-cell {
    background-color: var(--color-category);
    font-weight: normal;
    text-align: left;
    -webkit-box-pack: left;
    -ms-flex-pack: left;
    justify-content: left;
  }

  .Rtable-category-cell-full {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    text-align: center;
    font-weight: bolder;
  }

  .Rtable-category-cell.title-row {
    font-weight: 800;
    margin-top: 30px;
    border-top-left-radius: var(--border-radius);
  }

  .Rtable-category-cell-bottom {
    border-bottom-left-radius: var(--border-radius);
  }

  .Rtable-category-cell.title-row,
  .Rtable-category-cell.first-row {
    /* Extra padding to account for missing question mark image */
    padding-left: 38px;
  }

  .Rtable-misc-category-cell-head {
    border-top-left-radius: var(--border-radius);
  }

  .Rtable-misc-category-cell-bottom {
    border-bottom-left-radius: var(--border-radius);
  }

  .Rtable-misc-cell-head {
    border-top-right-radius: var(--border-radius);
  }

  .Rtable-misc-cell-bottom {
    border-bottom-right-radius: var(--border-radius);
  }

  /* Question Popover
==================================== */
  .popover {
    margin-right: 2em !important;
    border: 2px solid var(--color-highlight);
    border-radius: var(--border-radius);
    font-family: Avenir;
    font-size: 14px;
    line-height: 19px;
  }

  .popover-header {
    padding-top: 1rem;
    background-color: transparent;
    border: 0;
    font-family: Avenir;
    font-size: 14px;
    font-weight: bold;
    padding-bottom: 0.5em;
  }

  .popover-body {
    padding-top: 0;
  }

  .popover .popover-arrow {
    display: none;
  }

  .question-btn {
    line-height: 0;
    font-size: 16px;
    border: none;
    cursor: pointer;
    padding: 0.25em;
    margin-right: 0.25em;
  }

  .question-btn img {
    height: var(--icon-height);
    /* Turn the yellow question mark black when the popover is inactive */
    -webkit-filter: brightness(0);
    filter: brightness(0);
  }

  .question-btn[aria-describedby^='popover'] {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .question-btn[aria-describedby^='popover'] img {
    /* Turn the yellow question mark black when the popover is inactive */
    -webkit-filter: none;
    filter: none;
  }

  @media all and (max-width: 768px) {
    .Mega-active .question-btn img,
    .Giga-active .question-btn img,
    .Tera-active .question-btn img {
      -webkit-filter: brightness(0) invert(1);
      filter: brightness(0) invert(1);
    }

    .question-btn[aria-describedby^='popover'] img {
      /* Magic filters to match the focus color from https://codepen.io/sosuke/pen/Pjoqqp */
      -webkit-filter: brightness(0) invert(73%) sepia(44%) saturate(5841%)
        hue-rotate(194deg) brightness(96%) contrast(93%);
      filter: brightness(0) invert(73%) sepia(44%) saturate(5841%)
        hue-rotate(194deg) brightness(96%) contrast(93%);
    }

    .popover {
      border-color: var(--color-focus);
    }
  }

  /* Responsive
==================================== */
  @media all and (max-width: 768px) {
    /* .Rtable-grid {
      -ms-grid-columns: 1.75fr 1fr;
      grid-template-columns: 1.75fr 1fr;
      -webkit-transition: background-color 250ms ease-in-out;
      -o-transition: background-color 250ms ease-in-out;
      transition: background-color 250ms ease-in-out;
      border-radius: 0 0 var(--border-radius) var(--border-radius);
    } */

    /* Cell Colors
  ==================================== */
    .Rtable.Byte-active .Rtable-grid {
      background-color: var(--color-Byte);
    }

    .Rtable.Kilo-active .Rtable-grid {
      background-color: var(--color-Kilo);
    }

    .Rtable.Mega-active .Rtable-grid {
      background-color: var(--color-Mega);
    }

    .Rtable.Giga-active .Rtable-grid {
      background-color: var(--color-Giga);
    }

    .Rtable.Tera-active .Rtable-grid {
      background-color: var(--color-Tera);
    }

    .Rtable.Mega-active .Rtable-cell,
    .Rtable.Giga-active .Rtable-cell,
    .Rtable.Tera-active .Rtable-cell {
      color: var(--color-light-text);
    }

    /* Cell Styles
  ==================================== */
    /* .Rtable-cell {
      background-color: transparent;
      border-left: 0;
      border-right: 0;
      border-width: 1.5px;
      border-radius: 0;
    } */

    .Rtable-cell.first-row {
      border-top: 0;
    }

    .Rtable-cell.last-row {
      border-bottom: 0;
    }

    .Rtable-category-cell {
      /* border-radius: 0; */
      border-right: 2px solid var(--color-border);
    }

    /* .Rtable-category-cell-full {
      border-radius: 0;
    } */

    /* Hidden Cells
  ==================================== */
    /* .Rtable-cell.title-row,
    .Rtable-cell--head,
    .Rtable-cell--foot,
    .hiddenSmall {
      display: none;
    } */
  }

  /* Tab Styling
====================================== */
  // .Tablist {
  //   display: none;
  // }

  // @media all and (max-width: 768px) {
  //   .Tablist {
  //     display: -webkit-box;
  //     display: -ms-flexbox;
  //     display: flex;
  //     -webkit-box-orient: horizontal;
  //     -webkit-box-direction: normal;
  //     -ms-flex-direction: row;
  //     flex-direction: row;
  //     width: 100%;
  //     -webkit-box-pack: stretch;
  //     -ms-flex-pack: stretch;
  //     justify-content: stretch;
  //   }
  // }

  // .Tab {
  //   font-family: Avenir;
  //   width: 25%;
  //   text-align: center;
  //   border-radius: var(--border-radius) var(--border-radius) 0 0;
  //   padding: 0.5em 0;
  //   border: 0;
  //   border-top: 2px solid transparent;
  //   font-weight: 800;
  //   color: var(--color-dark-text);
  //   text-decoration: none;
  //   cursor: pointer;
  //   outline: 0;
  // }

  // .Tab.Byte {
  //   background-color: var(--color-Byte);
  // }

  // .Tab.Kilo {
  //   background-color: var(--color-Kilo);
  // }

  // .Tab.Mega {
  //   background-color: var(--color-Mega);
  //   color: var(--color-light-text);
  // }

  // .Tab.Giga {
  //   background-color: var(--color-Giga);
  //   color: var(--color-light-text);
  // }

  // .Tab.Tera {
  //   background-color: var(--color-Tera);
  //   color: var(--color-light-text);
  // }

  // .Tab:active,
  // .Tab:hover,
  // .Tab:focus {
  //   border: 2px solid var(--color-focus);
  //   -webkit-box-shadow: 0px 0px 3px var(--color-focus);
  //   box-shadow: 0px 0px 3px var(--color-focus);
  //   -webkit-clip-path: inset(-3px -3px 0px -3px);
  //   clip-path: inset(-3px -3px 0px -3px);
  //   border-bottom: 0;
  //   outline: 0;
  // }

  // .Tab[aria-selected='true'] {
  //   cursor: default;
  // }

  /* Connect Section
=================================== */
  .ConnectSection a {
    text-decoration: none;
    color: var(--color-dark-text);
  }

  .ConnectSection a:hover {
    text-decoration: underline;
  }

  .ConnectSection img {
    margin-right: 0.75em;
    width: 1em;
    line-height: 0;
  }

  .tooltips {
    // background-color: #ffaffc;
    // border-radius: 10px;
    padding: 10px;
    position: relative;
    // margin: 15px;
    text-align: center;
    // padding: 0.25em;
    // margin-right: 0.25em;
  }

  .tooltips::after {
    background-color: #333;
    border-radius: 10px;
    color: #b254ff;
    display: none;
    padding: 10px 15px;
    position: absolute;
    text-align: center;
    z-index: 999;
  }

  .tooltips::before {
    background-color: #333;
    content: ' ';
    display: none;
    position: absolute;
    width: 15px;
    height: 15px;
    z-index: 999;
  }

  .tooltips:hover::after {
    display: block !important;
  }

  .tooltips:hover::before {
    display: block !important;
  }

  .tooltips.left::after {
    content: 'left';
    top: 0;
    left: 0;
    transform: translateX(calc(-100% - 10px));
  }

  .tooltips.left::before {
    top: 50%;
    left: 0;
    transform: translate(calc(-100% - 5px), -50%) rotate(45deg);
  }
}
</style>
