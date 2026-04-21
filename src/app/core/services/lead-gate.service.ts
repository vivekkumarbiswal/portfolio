import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeadGateService {
  private readonly STORAGE_KEY = 'portfolio_contact_unlocked';

  // Use Angular Signals for reactivity
  private _isUnlocked = signal<boolean>(this.getInitialState());

  get isUnlocked() {
    return this._isUnlocked.asReadonly();
  }

  unlock() {
    localStorage.setItem(this.STORAGE_KEY, 'true');
    this._isUnlocked.set(true);
  }

  private getInitialState(): boolean {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(this.STORAGE_KEY) === 'true';
  }

  async submitLead(formData: any): Promise<{ success: boolean; message?: string }> {
    // IMPORTANT: Users must get their own key from https://web3forms.com/
    const WEB3FORMS_ACCESS_KEY = '584cc644-ab00-4d3b-b939-c34acd192a46';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...formData,
          subject: `New Lead from Portfolio: ${formData.name}`,
          from_name: 'Portfolio Lead Gate'
        })
      });

      const result = await response.json();
      if (result.success) {
        this.unlock();
        return { success: true };
      }
      return { success: false, message: result.message || 'Submission failed' };
    } catch (error) {
      console.error('Lead submission failed', error);
      return { success: false, message: 'Network error. Please check your connection.' };
    }
  }
}
