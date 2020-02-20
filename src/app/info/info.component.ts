import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
    setTimeout(() => {
      this.snackbar.open('hi', 'hey', {duration: 3000})
      this.router.navigate(['/home']);

      }, 1000);
  }

}
