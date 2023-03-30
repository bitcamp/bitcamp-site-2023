<template>
  <div class="app-container">
    <img class="cloud-1" src="~/assets/images/background/cloud1.png" />
    <img class="cloud-2" src="~/assets/images/background/cloud2.png" />
    <div id="privacy-policy">
      <h1 style="font-size: 40px;padding-bottom: 2vw">Privacy Policy</h1>
    
      <p>
        Bitcamp Inc. built the Bitcamp app as a Free app. This SERVICE is
        provided by Bitcamp Hacks Inc. at no cost and is intended for use as
        is.
      </p>
      <p>
        This page is used to inform website visitors regarding our policies
        with the collection, use, and disclosure of Personal Information if
        anyone decided to use our Service.
      </p>
      <p>
        If you choose to use our Service, then you agree to the collection and
        use of information in relation to this policy. The Personal
        Information that we collect is used for providing and improving the
        Service. We will not use or share your information with anyone except
        as described in this Privacy Policy.
      </p>
      <p>
        The terms used in this Privacy Policy have the same meanings as in our
        Terms and Conditions, which is accessible at Bitcamp unless otherwise
        defined in this Privacy Policy.
      </p>
      <h3>Information Collection and Use</h3>
      <p>
        For a better experience, while using our Service, we may require you
        to provide us with certain personally identifiable information,
        including but not limited to User email. The information that we
        request is will be retained by us and used as described in this
        privacy policy.
      </p>
      <p>
        The app does use third party services that may collect information
        used to identify you.
      </p>
      <div>
        <p>
          Link to privacy policy of third party service providers used by the
          app
        </p>
        <ul>
          <li>
            <a href="https://www.google.com/policies/privacy/" target="_blank">Google Play Services</a>
          </li>
          <!---->
          <!---->
          <!---->
          <!---->
          <!---->
        </ul>
      </div>
      <h3>Log Data</h3>
      <p>
        We want to inform you that whenever you use our Service, in a case of
        an error in the app we collect data and information (through third
        party products) on your phone called Log Data. This Log Data may
        include information such as your device Internet Protocol (“IP”)
        address, device name, operating system version, the configuration of
        the app when utilizing our Service, the time and date of your use of
        the Service, and other statistics.
      </p>
      <h3>Cookies</h3>
      <p>
        Cookies are files with small amount of data that is commonly used an
        anonymous unique identifier. These are sent to your browser from the
        website that you visit and are stored on your device internal memory.
      </p>
      <p>
        This Service does not use these “cookies” explicitly. However, the app
        may use third party code and libraries that use “cookies” to
        collection information and to improve their services. You have the
        option to either accept or refuse these cookies and know when a cookie
        is being sent to your device. If you choose to refuse our cookies, you
        may not be able to use some portions of this Service.
      </p>
      <h3>Service Providers</h3>
      <p>
        We may employ third-party companies and individuals due to the
        following reasons:
      </p>
      <ul>
        <li>To facilitate our Service;</li>
        <li>To provide the Service on our behalf;</li>
        <li>To perform Service-related services; or</li>
        <li>To assist us in analyzing how our Service is used.</li>
      </ul>
      <p>
        We want to inform users of this Service that these third parties have
        access to your Personal Information. The reason is to perform the
        tasks assigned to them on our behalf. However, they are obligated not
        to disclose or use the information for any other purpose.
      </p>
      <h3>Security</h3>
      <p>
        We value your trust in providing us your Personal Information, thus we
        are striving to use commercially acceptable means of protecting it.
        But remember that no method of transmission over the internet, or
        method of electronic storage is 100% secure and reliable, and we
        cannot guarantee its absolute security.
      </p>
      <h3>Links to Other Sites</h3>
      <p>
        This Service may contain links to other sites. If you click on a
        third-party link, you will be directed to that site. Note that these
        external sites are not operated by us. Therefore, we strongly advise
        you to review the Privacy Policy of these websites. We have no control
        over and assume no responsibility for the content, privacy policies,
        or practices of any third-party sites or services.
      </p>
      <h3>Children’s Privacy</h3>
      <p>
        These Services do not address anyone under the age of 13. We do not
        knowingly collect personally identifiable information from children
        under 13. In the case we discover that a child under 13 has provided
        us with personal information, we immediately delete this from our
        servers. If you are a parent or guardian and you are aware that your
        child has provided us with personal information, please contact us so
        that we will be able to do necessary actions.
      </p>
      <h3>Changes to This Privacy Policy</h3>
      <p>
        We may update our Privacy Policy from time to time. Thus, you are
        advised to review this page periodically for any changes. We will
        notify you of any changes by posting the new Privacy Policy on this
        page. These changes are effective immediately after they are posted on
        this page.
      </p>
      <h3>Contact Us</h3>
      <p>
        If you have any questions or suggestions about our Privacy Policy, do
        not hesitate to contact us.
      </p>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Bitcamp | Privacy Policy',
  meta: [
    {
      name: 'description',
      content:
        "Bitcamp is a place for exploration. You will have 36 hours to delve into your curiosities, learn something new, and make something awesome. With world-class mentors and hundreds of fellow campers, you're in for an amazing time. If you're ready for an adventure, see you by the fire!",
    },
    {
      property: 'og:title',
      content: 'Bitcamp 2023',
    },
    {
      property: 'og:site_name',
      content: 'Bitcamp 2023',
    },
    {
      property: 'og:url',
      content: 'https://bit.camp/',
    },
    {
      property: 'og:description',
      content:
        "Bitcamp is a place for exploration. You will have 36 hours to delve into your curiosities, learn something new, and make something awesome. With world-class mentors and hundreds of fellow campers, you're in for an amazing time. If you're ready for an adventure, see you by the fire!",
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
      content: 'https://bit.camp/',
    },
    {
      property: 'twitter:title',
      content: 'Bitcamp 2023',
    },
    {
      property: 'twitter:description',
      content:
        "Bitcamp is a place for exploration. You will have 36 hours to delve into your curiosities, learn something new, and make something awesome. With world-class mentors and hundreds of fellow campers, you're in for an amazing time. If you're ready for an adventure, see you by the fire!",
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
  name: 'PrivacyPage',
};
</script>

<style scoped lang="scss">
.app-container {
  position: relative;
  background-color: #345793;
  padding-top: 50px;
  z-index: 5;

  & > .section {
    margin-bottom: 5rem !important;
  }
}

p {
  margin: 15px 15px 0 0;
}

ul {
  list-style-position: inside;
  padding-left: 20px;
  margin: 15px 15px 0 0;
}

a {
  color: var(--color-bitcamp);
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  border-bottom: 2px solid var(--color-bitcamp);
}

h3 {
  margin-top: 30px;
  font-size: 24px;
}

img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.cloud-1 {
  position: absolute;
  left: 0;
  width: 100vw;
  margin-top: -12vw;
}

.cloud-2 {
  position: absolute;
  right: 0;
  width: 80vw;
  margin-top: 100vh;
}

#privacy-policy {
  box-sizing: border-box;
  align-items: center;

  padding: 4rem 4rem 8rem 8rem;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;

  width: 70%;

  border-radius: 15px;
  backdrop-filter: blur(35px);
  background-color: #18326080;
  z-index: 10;

  @media (min-width: 576px) and (max-width: 767.8px) {
    width: calc(50% - 30px);

    .text {
      margin: 0px;
    }
  }

  @media (min-width: 768px) and (max-width: 1199.98px) {
    width: 80%; 
    padding-left: 6rem;
    padding-right: 6rem;
  }

  @media (min-width: 576px) and (max-width: 767.8px) {
    width: 80%; 
    padding-left: 4rem;
    padding-right: 4rem;
  
  }

  @media (max-width: 576px) {
    width: 90%;
    padding-left: 2rem;
    padding-right: 2rem;
  }

}

</style>
