export interface UiDictionary {
  siteTitle: string
  siteSubtitle: string
  localeSwitcherLabel: string
  actions: {
    viewCase: string
    close: string
  }
  navigation: {
    hero: string
    about: string
    stack: string
    projects: string
    process: string
    growth: string
    contacts: string
  }
  badges: {
    translationInProgress: string
  }
  hero: {
    eyebrow: string
    availableNowTitle: string
    availableNowText: string
    selectedWorkTitle: string
    selectedWorkText: string
    nextLocaleTitle: string
    nextLocaleText: string
  }
  sections: {
    aboutLead: string
    stackLead: string
    projectsLead: string
    processLead: string
    growthLead: string
    softSkillsTitle: string
    softSkillsLead: string
    contactsLead: string
  }
}
