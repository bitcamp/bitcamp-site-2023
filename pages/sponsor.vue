<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
    crossorigin="anonymous"
  />
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
          <hr class="divider" />
          <h2>Sponsorship Prospectus</h2>
        </section>
        <section class="Rtable js-RtableTabs">
          <ProspectusHeader
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
          />
          <div class="Rtable-grid">
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
            />
            <ProspectusRow
              :categoryName="'Dedicated Prize Category Hours'"
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
            />

            <div class="Rtable-cell Rtable-cell--foot Rtable-cell-blank"></div>
            <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Byte"></div>
            <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Kilo"></div>
            <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Mega"></div>
            <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Giga"></div>
            <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Tera"></div>
            <div class="Rtable-cell Rtable-cell--foot Rtable-cell-Peta"></div>
            <div
              class="Rtable-cell Rtable-cell--foot Rtable-cell-Virtual"
            ></div>

            <div
              class="Rtable-cell Rtable-category-cell Rtable-cell--left mt-5"
            >
              Additional Prize Category
            </div>
            <div class="Rtable-cell Rtable-cell-Byte mt-5">$1,000</div>
            <div class="Rtable-cell Rtable-category-cell mt-5">
              Bitcamp Podcast
            </div>
            <div class="Rtable-cell Rtable-cell-Byte Rtable-cell--right mt-5">
              $2,000
            </div>
          </div>

          <section class="Rtable js-RtableTabs"></section>

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
.Rtable-grid {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 2fr (1fr);
  grid-template-columns: 2fr repeat(7, 1fr);
}

a {
  text-decoration: none !important;
  color: var(--color-primary) !important;
}

/* @media only screen and (max-width: 600px) {
  .Rtable {
    visibility: hidden;
  }
} */

.Tablist {
  display: none;
}

@media all and (max-width: 696px) {
  /*.Tablist {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    width: 100%;
    -webkit-box-pack: stretch;
    -ms-flex-pack: stretch;
    justify-content: stretch;
  } */
  .Rtable-grid {
    width: 696px;
    overflow-x: scroll;
  }
}

.Tab {
  font-family: Avenir;
  width: 25%;
  text-align: center;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  padding: 0.5em 0;
  border: 0;
  border-top: 2px solid transparent;
  font-weight: 800;
  color: var(--color-dark-text);
  text-decoration: none;
  cursor: pointer;
  outline: 0;
}

.Tab.Byte {
  background-color: var(--color-Byte);
}

.Tab.Kilo {
  background-color: var(--color-Kilo);
}

.Tab.Mega {
  background-color: var(--color-Mega);
  color: var(--color-light-text);
}

.Tab.Giga {
  background-color: var(--color-Giga);
  color: var(--color-light-text);
}

.Tab.Tera {
  background-color: var(--color-Tera);
  color: var(--color-light-text);
}

.Tab.Peta {
  background-color: var(--color-Peta);
  color: var(--color-light-text);
}

.Tab.Virtual {
  background-color: var(--color-Virtual);
  color: var(--color-light-text);
}

.Tab:active,
.Tab:hover,
.Tab:focus {
  border: 2px solid var(--color-focus);
  -webkit-box-shadow: 0px 0px 3px var(--color-focus);
  box-shadow: 0px 0px 3px var(--color-focus);
  -webkit-clip-path: inset(-3px -3px 0px -3px);
  clip-path: inset(-3px -3px 0px -3px);
  border-bottom: 0;
  outline: 0;
}

.Tab[aria-selected='true'] {
  cursor: default;
}

.Rtable-cell {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding: 0.5em 0.5em;
  overflow: hidden;
  border: solid 1px var(--color-border);
  font-family: Avenir;
  font-weight: 800;
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

/* Cell styles */
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

.Rtable-cell--right {
  font-family: Avenir;
  font-weight: 800;
  text-align: center;
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
}

.Rtable-cell--left {
  font-family: Avenir;
  font-weight: 800;
  text-align: center;
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
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

.Rtable-cell--foot {
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
}
</style>
