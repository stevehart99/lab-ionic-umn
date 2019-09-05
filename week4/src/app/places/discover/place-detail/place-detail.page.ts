import { PlacesService } from './../../places.service';
import { Place } from './../../places.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  loadedPlaces: Place;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private placesService: PlacesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('placeId')) { return; }
        this.loadedPlaces = this.placesService.getPlaces(paramMap.get('placeId'));
      }
    )
  }
  goBack() {
    this.router.navigateByUrl('/places/tabs/discover');
  }
}
