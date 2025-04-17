# Revamp-it Website Blueprint – Version 2 (English)

## Overall Vision

Our website will spotlight what we do best—by keeping things simple, engaging, and mission-driven:

- **Repair Hardware:** We extend the life of devices by fixing and modifying them.
- **Accept & Process Donations:** We welcome donated hardware for repair, resale, or donation to those in need.
- **Linux & Open Source Installations:** Older machines get a new lease on life with optimized Linux installations.
- **Sell Refurbished Devices:** Our webshop offers affordable, quality-refurbished hardware.
- **Secure Recycling:** When hardware can't be reused, we recycle it safely and securely.
- **Host Workshops:** We offer hands-on workshops on Linux, open source, Bitcoin, and AI to empower our community.

Our mission is clear: to empower communities and reduce e-waste through sustainable IT—all in a modern, easy-to-navigate experience.

## Site Architecture and Navigation

The main navigation bar will include:
1. **Home**
2. **About Us**
3. **Offerings** – This covers service details (IT repairs, Linux & open source support, workshops, consulting)
4. **Projects** – Highlighting our key initiatives (Kivitendo, Linuxola, etc.)
5. **Wiki** – Detailed guides, FAQs, technical documentation (for both users and developers)
6. **Volunteer & Donate** – Combined or separate page(s) dedicated to volunteer opportunities, donation options, and impact metrics
7. **Webshop** – A simple external link (with a "Shop" button in the header or footer) redirecting users to the current Joomla/Kivitendo webshop
8. **Terms & Conditions (AGB)**

## Page-by-Page Content and Structure

### 1. Home Page

**Purpose:**  
Immediate orientation and engagement. Convey our mission and drive users toward taking action.

**Content Sections:**
- **Hero Area:**  
  - Engaging full-width banner with high-quality imagery of recycled hardware or community events.
  - Strong headline: "Revamp-it: Sustainable IT for a Better Future."
  - Subheadline briefly explaining our mission.
  - Prominent CTAs: "Learn More", "Volunteer/Donate", and "Shop" (external link).

- **Quick Overview of Services:**  
  - Use icon-based cards summarizing key offerings: Hardware Recycling, Linux Support, Workshops, Consulting.
  - Each card links to the Offerings page for detailed information.

- **Impact & Testimonials:**  
  - Present data points and testimonials from partners/customers to build trust.
  
- **Latest News/Blog Snippet:**  
  - A preview of recent blog posts or announcements, with a "Read More" link.

### 2. About Us Page

**Purpose:**  
Build trust by sharing Revamp-it's story, mission, and the faces behind the organization.

**Content Sections:**
- **Our Story:**  
  - Narrative description of our founding, history, and evolution.
  
- **Mission & Values:**  
  - Clearly describe our commitment to sustainability, community service, and open source.
  - Bullet points of core values.

- **Team Profiles:**  
  - Photos and bios of key team members.

### 3. Offerings Page

**Purpose:**  
Provide detailed information about our services and encourage user engagement.

**Content Sections:**
- **Introduction:**  
  - A brief overview of our service philosophy.

- **Service Details:**  
  Each service is described in its own section or card:
  - **Hardware Recycling & Repairs**
  - **Linux & Open Source Support**
  - **Workshops & Courses**
  - **Consulting & Web Services**
  
- **Call-to-Action:**  
  - Encourage visitors to contact us for more details.

### 4. Projects Page

**Purpose:**  
Showcase current and past projects, emphasizing impact and innovation.

**Content Sections:**
- **Overview:**  
  - Short intro explaining how projects drive our mission.
  
- **Featured Projects:**  
  - **Kivitendo Modus CH**
  - **Linuxola**
  - **FreieComputer**
  - **Pilot Projects**

### 5. Wiki Page

**Purpose:**  
Serve as a repository of detailed documentation, troubleshooting guides, and technical resources.

**Content Sections:**
- **Content Organization:**  
  - Categorize content into sections like User Guides, Developer Docs, and FAQs.
  
- **Detailed Articles:**  
  - Each article should include a summary, detailed instructions, and media.

### 6. Volunteer & Donate Page

**Purpose:**  
Encourage community involvement by making it easy to donate or become a volunteer.

**Content Sections:**
- **Call-to-Action:**  
  - Prominent messaging: "Make a Difference Today."
  
- **Donation Options:**  
  - Information on how to donate.
  
- **Volunteer Opportunities:**  
  - Describe volunteer roles and how to apply.
  
- **Impact Stories:**  
  - Testimonials and case studies.

### 7. Webshop (External Link)

**Purpose:**  
Provide a simple link to the current Joomla/Kivitendo system.
  
**Implementation:**  
- In the main navigation and/or footer, include a button labeled "Shop" that points to the URL of the current webshop.
- Add a note explaining that the webshop is being revamped.

### 8. Terms & Conditions (AGB) Page

**Purpose:**  
Display all legal and transactional details.

**Content Sections:**
- **Full Legal Text:**  
  - Include detailed AGB text.
- **FAQs and Contact Info:**  
  - Provide instructions for obtaining additional support.

## Design & Technology Decisions

1. **Modern Frontend (Next.js/React/TypeScript):**  
   - Build all pages as React components with TypeScript.
   - Utilize Next.js for performance and SEO benefits.

2. **Tailwind CSS for Styling:**  
   - Use Tailwind for consistent, responsive design.
   - Custom theming to match Revamp-it's branding.

3. **Headless CMS for Content Management:**  
   - Integrate with a headless CMS for dynamic content.
   - Allow non-developers to update content easily.

4. **Modular Architecture:**  
   - Clearly separate API, components, pages, and styles.
   - Follow best practices for state management.

5. **Focus on UX/UI:**  
   - Implement accessibility best practices.
   - Ensure responsive layouts for all devices.

6. **Localization Support:**  
   - Set up Next.js i18n for multilingual support.
   - Structure content for easy translation.

## Next Steps

1. **Set Up Project Environment:**  
   - Initialize Next.js project with TypeScript.
   - Configure Tailwind CSS and other dependencies.

2. **Develop Core Components:**  
   - Create reusable UI components.
   - Implement responsive layouts.

3. **Content Migration:**  
   - Plan migration of existing content.
   - Set up content management system.

4. **Testing & Deployment:**  
   - Implement testing strategy.
   - Set up CI/CD pipeline.

---

*End of Blueprint* 