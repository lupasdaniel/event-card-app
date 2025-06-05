import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'event-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
encodeURIComponent(arg0: string) {
throw new Error('Method not implemented.');
}
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() date = '';

  qrCodeData = '';

  showModal = false;
  name = '';
  email = '';

  ngOnInit(): void {
    // QR code will be generated after participation is saved.
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  saveParticipation(): void {
    if (this.name && this.email) {
      const participant = {
        name: this.name,
        email: this.email,
        event: this.title,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(`participant-${this.title}`, JSON.stringify(participant));
      // Generate QR code only after successful participation
      this.qrCodeData = encodeURIComponent(`Invitat: ${this.name} | Eveniment: ${this.title} | ${this.date}`);
    } else {
      alert('Completează toate câmpurile!');
    }
  }

  reminderEnabled = false;

  toggleReminder(): void {
    this.reminderEnabled = !this.reminderEnabled;
    if (this.reminderEnabled) {
      alert('Reminder activat! Vei fi notificat cu o zi înainte de eveniment (simulat).');
    } else {
      alert('Reminder dezactivat.');
    }
  }
downloadQrCode(): void {
  const img = document.getElementById('qr-img') as HTMLImageElement;
  if (!img) return;

  const link = document.createElement('a');
  link.href = img.src;
  link.download = `QR-${this.name}.png`;
  link.click();
}
}
