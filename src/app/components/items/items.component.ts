import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  items = [
    {name: 'BRANDED SHOE', price: 300, img : 'Layer_7.jpg'  },
    {name: 'BRANDED SHOE', price: 300, img : 'Layer_8.jpg'  },
    {name: 'BRANDED SHOE', price: 300, img : 'Layer_9.jpg'  },
    {name: 'BRANDED SHOE', price: 300, img : 'Layer_10.jpg'  },
    {name: 'BRANDED SHOE', price: 300, img : 'Layer_11.jpg'  },
    {name: 'BRANDED SHOE', price: 300, img : 'Layer_12.jpg'  },
  ];
  hotItems = [
    {name: 'BRANDED SHOE',  img : 'Layer_3.jpg'  },
    {name: 'BRANDED TSHIRTS',  img : 'Layer_5.jpg'  },
    {name: 'BRANDED SHOE',  img : 'Layer_6.jpg'  },
  ];


  ngOnInit() {
  }

}
