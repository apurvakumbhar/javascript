import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private key = 'notes';

  getNotes(): string[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  saveNotes(notes: string[]) {
    localStorage.setItem(this.key, JSON.stringify(notes));
  }
}