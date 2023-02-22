<template>
  <div id="faq" class="FAQ_Section">
    <h2 class="Header">FAQ</h2>
    <div class="Question_Wrapper">
      <div
        v-for="(questions, i) in [questions_left, questions_right]"
        :key="i"
        class="Question_Column"
      >
        <div v-for="(faq, i) in questions" :key="i" class="Question" :faq="faq">
          <button
            class="Question_Button"
            :class="{ opened: faq.question === currentOpenedQuestion }"
            @click="toggleButton(faq.question)"
          >
            {{ faq.question }}
          </button>
          <div
            :class="
              faq.question === currentOpenedQuestion
                ? 'Answer_Opened'
                : 'Answer'
            "
            v-html="faq.answer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface FAQ {
  question: string;
  answer: string;
}
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
    answer:
      'Unfortunately, we are currently not accepting minor applications — check back in late February for updates on minor applications!',
  },
  {
    question: "Can I attend if I don't want to participate in hacking?",
    answer:
      "Although Bitcamp is a hackathon, there is no requirement to hack if you don't want to. If hacking isn't your thing, you can still participate in our exciting workshops and fun mini-events.",
  },
  {
    question: 'How else can I get involved?',
    answer:
      "We'd love to get you on our volunteering or mentoring teams! If you'd like to help, keep an eye out later for a volunteer form. Also, be sure to follow us on Facebook and Twitter for updates!",
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
      'From Augmented Reality Human-Scale Pong to a research paper detailing vulnerabilities in Google\'s reCaptcha system, the projects at Bitcamp span across all categories and interests. You can check out all of the amazing submissions at the <a class="link" href="https://bitcamp2022.devpost.com/?ref_feature=challenge&ref_medium=discover"> Bitcamp 2022 Devpost!</a>', //ADD LINK
  },
  {
    question: 'What hardware is provided at Bitcamp?',
    answer:
      'Arduinos, sensors (ultrasonic, photoresistors, thermistors), inputs (buttons, switches), outputs (LEDs, piezo speakers, 7-segment displays, micro servo motors), passive components (resistors, capacitors, diodes), and wiring.',
  },
  {
    question: "What if I don't go to the University of Maryland?",
    answer:
      'We\'d love to have you attend! You can fill out the travel interest form located <a class="link" href="https://bit.camp/travel-interest">here!</a>',
  },
  {
    question: 'Do I need to wear a mask?',
    answer:
      'No, attendees are not required to wear a mask. However, feel free to wear a mask if you would like!',
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

<style scoped lang="scss">
.Header {
  font-family: Aleo;
  font-weight: bold;
  color: white;
  font-size: 3vw;
  padding-bottom: 2vw;
}

.FAQ_Section {
  position: relative;
  font-family: 'Avenir';
  font-style: normal;
  font-weight: 500;
  border-radius: 30px;
  padding: 4vw;
  overflow-y: visible;
  aspect-ratio: 10;
  background-size: cover !important;
  margin: 20px;
  box-shadow: 0, 0, 20px, 0 rgba(24, 22, 81, 0.2);
  z-index: 10;
  text-align: center;
  background-color: #151925;
  margin: 8vw;
}

.Question_Wrapper {
  display: flex;
  flex-wrap: wrap;
}

.Question_Column {
  flex: 1;
}

.Question {
  display: block;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 12px;
  font-family: 'Avenir';
  font-style: normal;
  font-weight: 500;
  color: white;
  width: 100%;
  background-color: transparent;
  border-bottom-style: solid rgba(151, 29, 29, 0.2);

  overflow: hidden;
}

.Question_Button {
  &::after {
    content: url(../assets/img/icons/plus.svg);
    min-width: 2rem;
    min-height: 2rem;
    max-width: 2rem;
    max-height: 2rem;
    transform: rotate(0deg);
    transition: all 0.4s ease-out;
  }

  &.opened {
    &::after {
      transform: rotate(90deg);
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
  padding: 8px 12px;
  border-radius: 0px;
  text-emphasis: bold;
  text-align: left;
  font-family: 'Avenir';
  font-style: normal;
  font-weight: 500;
  font-size: 1.8vw;
  line-height: 1.3;
  font-weight: bold;
  color: white;
  overflow: hidden;
  height: 6vw;
  width: 100%;
  padding: 3rem 12px 2.7rem;
}

.Answer {
  padding: 0px 12px;
  text-align: left;
  font-size: 1.4vw;
  justify-content: top;
  max-height: 0px;
  max-width: 90%;
  overflow: hidden;
  transition: max-height 0.6s ease-in-out;
}

.Answer_Opened {
  padding: 0px 12px;
  padding-top: 1rem;
  text-align: left;
  font-size: 1.4vw;
  justify-content: top;
  max-width: 90%;
  overflow-y: auto;
  transition: max-height 0.6s ease-in-out;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .Header {
    font-size: 6vw;
  }

  .Question_Column {
    min-width: 100%;
  }

  .Question,
  .Question_Button {
    font-size: 4vw;
  }

  .Question_Button {
    height: 18vw;
    padding: 2rem 12px 1.75rem;
  }

  .Answer,
  .Answer_Opened {
    height: 100%;
    font-size: 3.5vw;
  }

  .FAQ_Section {
    margin-bottom: 34vw;
  }
}

.other-questions {
  margin-top: 4vw;
}
</style>

<style lang="scss">
a.link {
  color: var(--color-bitcamp);
}
</style>
