import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  getNavHeight() {
    const navElement = document.getElementsByTagName('nav')[0]!;

    return navElement.offsetHeight;
  }

  public scrollToSection(sectionId: string): void {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const navHeight = this.getNavHeight();
      const yPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }
}
