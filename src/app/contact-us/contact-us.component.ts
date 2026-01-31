import { Component } from '@angular/core';


@Component({
selector: 'app-contact-us',
standalone: true,
templateUrl: './contact-us.component.html',
styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
phone = '+27 78 796 5529';
email = 'info@decobybongs.co.za';
address = 'Port Edward, South Africa';


// WhatsApp number must be digits only (no spaces or +)
whatsappNumber = '27787965529';


get whatsappLink(): string {
const message = encodeURIComponent("Hi, I'd like a quote");
return `https://wa.me/${this.whatsappNumber}?text=${message}`;
}
}


