import { Component, OnInit } from '@angular/core';
import { DestinationsService } from "../../services/destinations.service";

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  constructor(private destinationService: DestinationsService) { }

  ngOnInit(): void {
    this.findEmail();
  }

  findEmail() {
    this.destinationService.findUser().subscribe(data => {
      console.log(data);
    })
  }

}
