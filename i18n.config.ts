export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      welcome: "Welcome",
      dashboard: "Dashboard",
      addNew: "Add New",
      darkMode: "Dark mode",
      search: "Search",
      jobOpenings: "Job openings",
      totalCandidates: "Total candidates",
      resumesReceived: "Resumes received",
      sinceLastMonth: "Since last month"
    },
    hi: {
      welcome: "स्वागत",
      dashboard: "नियंत्रण-पट्ट",
      addNew: "नया जोड़ो",
      darkMode: "डार्क मोड",
      search: "खोज",
      jobOpenings: "नौकरी की रिक्तियां",
      totalCandidates: "कुल उम्मीदवार",
      resumesReceived: "बायोडाटा प्राप्त हुआ",
      sinceLastMonth: "पिछले महीने के बाद से"
    }
  }
}));
