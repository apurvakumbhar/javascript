import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesService } from './services/notes';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  note: string = '';
  notes: string[] = [];
  editIndex: number = -1;

  constructor(private notesService: NotesService) {
    this.notes = this.notesService.getNotes();
  }

  addNote() {
    if (this.note.trim() === '') return;

    if (this.editIndex === -1) {
      this.notes.push(this.note);
    } else {
      this.notes[this.editIndex] = this.note;
      this.editIndex = -1;
    }

    this.note = '';
    this.notesService.saveNotes(this.notes);
  }

  editNote(index: number) {
    this.note = this.notes[index];
    this.editIndex = index;
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.notesService.saveNotes(this.notes);
  }
}