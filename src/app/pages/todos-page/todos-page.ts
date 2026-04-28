import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos-page',
  imports: [FormsModule],
  templateUrl: './todos-page.html',
  styleUrl: './todos-page.css',
})
export class TodosPage {
  newTodo = signal('');
  editText = signal('');
  editingId = signal<number | null>(null);

  todos = signal([
    { id: 1, text: 'Купить собаку' },
    { id: 2, text: 'Погладить собаку' },
  ]);

  addTodo() {
    if (!this.newTodo().trim()) return;
    this.todos.update(prev => [...prev, {
      id: prev.length + 1,
      text: this.newTodo().trim()
    }]);
    this.newTodo.set('');
  }

  delTodo(id: number) {
    this.todos.update(prev => prev.filter(todo => todo.id !== id));
    if (this.editingId() === id) {
      this.cancelEdit();
    }
  }

  toggleEdit(todo: any) {
    this.editingId.set(todo.id);
    this.editText.set(todo.text);
  }

  saveEdit(id: number) {
    if (!this.editText().trim()) return;
    this.todos.update(prev =>
      prev.map(t => t.id === id
        ? { ...t, text: this.editText().trim() }
        : t
      )
    );
    this.cancelEdit();
  }

  cancelEdit() {
    this.editingId.set(null);
    this.editText.set('');
  }
}
