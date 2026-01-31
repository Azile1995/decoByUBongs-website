import { Component } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
selector: 'app-services',
standalone: true,
imports: [NgFor],
templateUrl: './services.component.html',
styleUrls: ['./services.component.css']
})
export class ServicesComponent {
services = [
{
title: 'Birthday Celebrations',
description: 'Incredible birthday party planning services.'
},
{
title: 'Baby Showers',
description: 'Creative and memorable baby shower planning.'
},
{
title: 'Bridal Showers',
description: 'Elegant and personalized bridal shower planning.'
},
{
title: 'Lobola Negotiations',
description: 'Expert guidance for traditional Lobola negotiations.'
},
{
title: 'Umembezo Ceremony',
description: 'Traditional ceremonies and celebrations planning.'
},
{
title: 'Picnics',
description: 'Charming picnic setups for special moments.'
}

];
}