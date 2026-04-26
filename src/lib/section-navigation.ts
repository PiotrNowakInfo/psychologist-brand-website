export const scrollToSection = (sectionId: string) => {
  if (typeof document === 'undefined') {
    return;
  }

  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
