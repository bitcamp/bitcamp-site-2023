<template>
  <div class="FAQ_Section">
    <h2 class="Header">{{ heading }}</h2>
    <div class="Question_Wrapper">
      <div class="Question_Column">
        <div
          class="Question"
          v-for="(faq, i) in questions_left"
          :faq="faq"
          :key="i"
        >
          <button
            @click="toggleButton(faq.question)"
            class="Question_Button"
            :class="{ opened: faq.question === currentOpenedQuestion }"
          >
            {{ faq.question }}
          </button>
          <div
            :class="
              faq.question === currentOpenedQuestion
                ? 'Answer_Opened'
                : 'Answer'
            "
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
      <div class="Question_Column">
        <div
          class="Question"
          v-for="(faq, i) in questions_right"
          :faq="faq"
          :key="i"
        >
          <button
            @click="toggleButton(faq.question)"
            class="Question_Button"
            :class="{ opened: faq.question === currentOpenedQuestion }"
          >
            {{ faq.question }}
          </button>
          <div
            :class="
              faq.question === currentOpenedQuestion
                ? 'Answer_Opened'
                : 'Answer'
            "
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

interface FAQ {
  question: string;
  answer: string;
}

const heading = ref<string>('FAQ');
const questions = ref<FAQ[]>([
  {
    question: 'What is Bitcamp?',
    answer:
      "Bitcamp is a hackathon that values participant experience and mentorship over competitiveness and points. Come to have fun with your friends, learn something new, eat s'mores, and have a generally awesome time. We have all sorts of crazy activities planned for you...come find out the rest!",
  },
  {
    question: "What's a hackathon?",
    answer:
      "A hackathon is a creative marathon all about building something cool. Students are encouraged to come up with an idea, form teams, and then build out that idea (typically through programming!) into a product in 36 hours. We want you to take something you love (sports, art, camping, anything!) and combine it with technology to make something awesome. It's a great time to push the envelope and learn some new skills.",
  },
  {
    question: 'Do I have to be experienced to attend?',
    answer:
      'No prior experience is required to attend Bitcamp. Exciting workshops and helpful mentors will give you the resources to help you build your dream project. Just come with your head and a willingness to learn!',
  },
  {
    question: "Is it okay if I don't have an idea or team?",
    answer:
      'No idea? No team? No problem! There will be dedicated events during Bitcamp for idea creation and team formations.',
  },
  {
    question: "Can I attend if I'm a minor (under 18)?",
    answer: 'Yes! Minors can attend with a chaperone, and can apply here!', //ADD LINK
  },
  {
    question: "Can I attend if I don't want to participate in hacking?",
    answer:
      "Although Bitcamp is a hackathon, there is no requirement to hack if you don't want to. If hacking isn't your thing, you can still participate in our exciting workshops and fun mini-events.",
  },
  {
    question: 'How else can I get involved?',
    answer:
      "We'd love to get you on our volunteering or mentoring teams! If you'd like to help, please fill out our mentor form or our volunteer form. Also, be sure to follow us on Facebook and Twitter for updates!",
  },
  {
    question: 'Teams',
    answer:
      "Projects are submitted by teams to DevPost. You don't need to finalize your team until project submissions are due during the event. You may work individually or in a team of up to four campers. Don't have a team in mind? No problem! Bitcamp will kick off with an optional team formation event.",
  },
  {
    question: 'When do decisions for admittances go out?',
    answer: 'Admittance into Bitcamp will be going out on a rolling basis.',
  },
  {
    question: 'Who can apply to Bitcamp?',
    answer:
      'Any college student or high school student is more than welcome to apply to Bitcamp!',
  },
  {
    question: 'Is Bitcamp free to attend?',
    answer: 'Yes! There is no cost to attend Bitcamp.',
  },
  {
    question: 'Can people not registered for Bitcamp attend?',
    answer:
      'People not registered for Bitcamp will not be allowed entrance to the hackathon.',
  },
  {
    question: 'What have people made in the past at Bitcamp?',
    answer:
      "From Augmented Reality Human-Scale Pong to a research paper detailing vulnerabilities in Google's reCaptcha system, the projects at Bitcamp span across all categories and interests. You can check out all of the amazing submissions at the Bitcamp 2019 Devpost!", //ADD LINK
  },
  {
    question: 'What hardware is provided at Bitcamp?',
    answer:
      'Arduinos, sensors (ultrasonic, photoresistors, thermistors), inputs (buttons, switches), outputs (LEDs, piezo speakers, 7-segment displays, micro servo motors), passive components (resistors, capacitors, diodes), and wiring.',
  },
  {
    question: 'Do I need to wear a mask?',
    answer:
      'Yes, all attendees are required to wear a mask at all times except when eating and sleeping.',
  },
  {
    question: 'Other questions?',
    answer: 'Just email us at hello@bit.camp.', //Add Link
  },
]);

const questions_left = questions.value.slice(0, questions.value.length / 2);
const questions_right = questions.value.slice(
  questions.value.length / 2,
  questions.value.length
);

const currentOpenedQuestion = ref<string | null>(null);

function toggleButton(question: string) {
  if (currentOpenedQuestion.value === question) {
    currentOpenedQuestion.value = null;
  } else {
    currentOpenedQuestion.value = question;
  }
}
</script>

<style lang = 'scss'>
.FAQ_Section {
  border-radius: 30px;
  padding: 20px 30px;
  user-select: none;
  overflow-y: visible;
  aspect-ratio: 10;
  background-size: cover !important;
  margin: 20px;
  box-shadow: 0, 0, 20px, 0 rgba(24, 22, 81, 0.2);
  z-index: 10;
  text-align: center;
  background-color: rgb(133, 223, 241);
}

.Header {
  font-size: xx-large;
  padding: 2%;
  padding-bottom: 3%;
}

.Question_Wrapper {
  display: flex;
  flex-wrap: wrap;
}

.Question_Column {
  min-width: 20rem;
  flex: 1;
}

.Question {
  display: block;
  padding-bottom: 2px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 12px;
  margin: 0px;
  background-color: transparent;
  border-bottom-style: solid rgba(151, 29, 29, 0.2);
  overflow-y: auto;
}

.Question_Button {
  &::after {
    content: url(plus_sign.png);
    size: 20px;
    transform: rotate(0deg);
    transition: all 0.4s ease-out;
  }

  &.opened {
    &::after {
      content: url(plus_sign.png);
      transform: rotate(45deg);
      transition: all 0.4s ease-out;
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem 1rem;
  border-left: transparent;
  border-right: transparent;
  border-top: transparent;
  border-bottom: 2px solid white;
  background: transparent;
  width: 100%;
  padding: 8px 12px;
  border-radius: 0px;
  font-weight: bolder;
  text-emphasis: bold;
  text-align: left;
  font-size: large;
}

.Answer {
  padding: 0px 12px;
  padding-top: 1rem;
  text-align: left;
  font-size: medium;
  justify-content: top;
  max-height: 0px;
  max-width: 90%;
  overflow-y: hidden;
  transition: all 0.6s ease-in-out;
}

.Answer_Opened {
  padding: 0px 12px;
  padding-top: 1rem;
  text-align: left;
  font-size: medium;
  justify-content: top;
  max-width: 90%;
  overflow-y: auto;
  transition: all 0.6s ease-in-out;
}
</style>