import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup} from "@angular/forms";
import {ReservationService} from "../../service/reservations/reservation/reservation.service";
import {Reservation} from "../../models/reservation";
import {Router, RouterModule, ActivatedRoute} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule, HomeComponent],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss'
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({})
  fb = inject(FormBuilder)
  activatedRoute = inject(ActivatedRoute)
  private reservationService: ReservationService = inject(ReservationService)

  constructor(private router: Router) {
  }

  id = this.activatedRoute.snapshot.paramMap.get('id')


  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      id: [null],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })


    if (this.id) {
      this.reservationService.getReservation(this.id).subscribe(reservation => {
        if (reservation)
          this.reservationForm.patchValue(reservation)
      }) // get only 1 reservation
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
      if (this.id) {
        // Update
        this.reservationService.updateReservation(this.id, reservation).subscribe(() => {
            console.log("update request processed")
        })
      } else {
        // New
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log("create request processed")
        })
      }
      this.router.navigate(['/list'])
    }
  }
}
