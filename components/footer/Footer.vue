<template>
  <footer class="bg-[#2d2f31] text-white py-8 mt-10">
    <div>
      <div
        class="flex flex-col md:flex-row md:justify-between items-center mx-12 pb-4 max-w-7xl"
      >
        <p class="text-lg font-bold">
          Top companies choose
          <a href="#" class="text-blue-400 hover:underline">Udemy Business</a>
          to build in-demand career skills.
        </p>
        <div class="flex space-x-4">
          <img
            src="/logos/nasdaq-dark-logo.svg"
            alt="Nasdaq"
            class="h-12 w-auto"
          />
          <img
            src="/logos/volkswagen-dark-logo.svg"
            alt="Volkswagen"
            class="h-12 w-auto"
          />
          <img src="/logos/box-dark-logo.svg" alt="Box" class="h-12 w-auto" />
          <img
            src="/logos/netapp-dark-logo.svg"
            alt="NetApp"
            class="h-12 w-auto"
          />
          <img
            src="/logos/eventbrite-dark-logo.svg"
            alt="Eventbrite"
            class="h-12 w-auto"
          />
        </div>
      </div>
      <div
        class="flex justify-between items-center border-b border-gray-700 pb-4"
      ></div>
      <section class="bg-[#2d2f31] text-white py-12">
        <div class="max-w-7xl mx-12 px-6">
          <h2 class="text-lg font-semibold mb-8">
            Explore top skills and certifications
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <!-- Certifications by Issuer -->
            <div>
              <h3 class="font-semibold text-lg mb-4">
                Certifications by Issuer
              </h3>
              <ul class="space-y-2 text-sm">
                <li>
                  <a href="#" class="hover:underline"
                    >Amazon Web Services (AWS) Certifications</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:underline"
                    >Six Sigma Certifications</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:underline"
                    >Microsoft Certifications</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:underline">Cisco Certifications</a>
                </li>
                <li>
                  <a href="#" class="hover:underline">Tableau Certifications</a>
                </li>
                <li>
                  <a href="#" class="hover:underline">See all Certifications</a>
                </li>
              </ul>
            </div>

            <!-- Web Development -->
            <div>
              <h3 class="font-semibold text-lg mb-4">Web Development</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#" class="hover:underline">Web Development</a></li>
                <li><a href="#" class="hover:underline">JavaScript</a></li>
                <li><a href="#" class="hover:underline">React JS</a></li>
                <li><a href="#" class="hover:underline">Angular</a></li>
                <li><a href="#" class="hover:underline">Java</a></li>
              </ul>
            </div>

            <!-- IT Certifications -->
            <div>
              <h3 class="font-semibold text-lg mb-4">IT Certifications</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#" class="hover:underline">Amazon AWS</a></li>
                <li>
                  <a href="#" class="hover:underline"
                    >AWS Certified Cloud Practitioner</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:underline"
                    >AZ-900: Microsoft Azure Fundamentals</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:underline"
                    >AWS Certified Solutions Architect - Associate</a
                  >
                </li>
                <li><a href="#" class="hover:underline">Kubernetes</a></li>
              </ul>
            </div>

            <!-- Leadership -->
            <div>
              <h3 class="font-semibold text-lg mb-4">Leadership</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#" class="hover:underline">Leadership</a></li>
                <li>
                  <a href="#" class="hover:underline">Management Skills</a>
                </li>
                <li>
                  <a href="#" class="hover:underline">Project Management</a>
                </li>
                <li>
                  <a href="#" class="hover:underline">Personal Productivity</a>
                </li>
                <li>
                  <a href="#" class="hover:underline">Emotional Intelligence</a>
                </li>
              </ul>
            </div>

            <!-- Certifications by Skill -->
            <div>
              <h3 class="font-semibold text-lg mb-4">
                Certifications by Skill
              </h3>
              <ul class="space-y-2 text-sm">
                <li>
                  <a href="#" class="hover:underline"
                    >Cybersecurity Certification</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:underline"
                    >Project Management Certification</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:underline">Cloud Certification</a>
                </li>
                <li>
                  <a href="#" class="hover:underline"
                    >Data Analytics Certification</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:underline"
                    >HR Management Certification</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:underline">See all Certifications</a>
                </li>
              </ul>
            </div>

            <!-- Data Science -->
            <div>
              <h3 class="font-semibold text-lg mb-4">Data Science</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#" class="hover:underline">Data Science</a></li>
                <li><a href="#" class="hover:underline">Python</a></li>
                <li>
                  <a href="#" class="hover:underline">Machine Learning</a>
                </li>
                <li><a href="#" class="hover:underline">ChatGPT</a></li>
                <li><a href="#" class="hover:underline">Deep Learning</a></li>
              </ul>
            </div>

            <!-- Communication -->
            <div>
              <h3 class="font-semibold text-lg mb-4">Communication</h3>
              <ul class="space-y-2 text-sm">
                <li>
                  <a href="#" class="hover:underline">Communication Skills</a>
                </li>
                <li>
                  <a href="#" class="hover:underline">Presentation Skills</a>
                </li>
                <li><a href="#" class="hover:underline">Public Speaking</a></li>
                <li><a href="#" class="hover:underline">Writing</a></li>
                <li><a href="#" class="hover:underline">PowerPoint</a></li>
              </ul>
            </div>

            <!-- Business Analytics & Intelligence -->
            <div>
              <h3 class="font-semibold text-lg mb-4">
                Business Analytics & Intelligence
              </h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#" class="hover:underline">Microsoft Excel</a></li>
                <li><a href="#" class="hover:underline">SQL</a></li>
                <li>
                  <a href="#" class="hover:underline">Microsoft Power BI</a>
                </li>
                <li><a href="#" class="hover:underline">Data Analysis</a></li>
                <li>
                  <a href="#" class="hover:underline">Business Analysis</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-black">
        <section class="text-white py-8 border-b-2 border-gray-200">
          <div class="max-w-7xl mx-12 px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <!-- About -->
              <div>
                <h3 class="font-semibold text-lg mb-4">About</h3>
                <ul class="space-y-2 text-sm">
                  <li><a href="#" class="hover:underline">About us</a></li>
                  <li><a href="#" class="hover:underline">Careers</a></li>
                  <li><a href="#" class="hover:underline">Contact us</a></li>
                  <li><a href="#" class="hover:underline">Blog</a></li>
                  <li><a href="#" class="hover:underline">Investors</a></li>
                </ul>
              </div>

              <!-- Discovery Udemy -->
              <div>
                <h3 class="font-semibold text-lg mb-4">Discovery Udemy</h3>
                <ul class="space-y-2 text-sm">
                  <li><a href="#" class="hover:underline">Get the app</a></li>
                  <li>
                    <a href="#" class="hover:underline">Teach on Udemy</a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">Plans and Pricing</a>
                  </li>
                  <li><a href="#" class="hover:underline">Affiliate</a></li>
                  <li>
                    <a href="#" class="hover:underline">Help and Support</a>
                  </li>
                </ul>
              </div>

              <!-- Udemy for Business -->
              <div>
                <h3 class="font-semibold text-lg mb-4">Udemy for Business</h3>
                <ul class="space-y-2 text-sm">
                  <li>
                    <a href="#" class="hover:underline">Udemy Business</a>
                  </li>
                </ul>
              </div>

              <!-- Legal & Accessibility -->
              <div>
                <h3 class="font-semibold text-lg mb-4">
                  Legal & Accessibility
                </h3>
                <ul class="space-y-2 text-sm">
                  <li>
                    <a href="#" class="hover:underline"
                      >Accessibility statement</a
                    >
                  </li>
                  <li>
                    <a href="#" class="hover:underline">Privacy policy</a>
                  </li>
                  <li><a href="#" class="hover:underline">Sitemap</a></li>
                  <li><a href="#" class="hover:underline">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div
          class="flex justify-between items-center pt-4 mx-12 bg-black max-w-7xl"
        >
          <img
            src="/logos/udemy-inverted-logo.svg"
            alt="Udemy"
            class="h-10 w-auto"
          />
          <p class="text-sm text-white">&copy; 2024 Udemy, Inc.</p>
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "FooterComponent",
  components: {
    Icon,
  },
};
</script>

<style scoped>
/* Additional styles if necessary */
</style>
