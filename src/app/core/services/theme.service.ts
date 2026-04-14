import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'vkb-portfolio-theme';
  isDarkMode = signal<boolean>(true);

  constructor() {
    // Load initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      this.isDarkMode.set(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.set(prefersDark);
    }

    // Effect to apply theme class and persist preference
    effect(() => {
      const isDark = this.isDarkMode();
      localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
      
      if (isDark) {
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
      }
    });
  }

  toggleTheme(): void {
    this.isDarkMode.update(v => !v);
  }
}
